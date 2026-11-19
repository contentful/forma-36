const {
  attributesToObject,
  changeComponentName,
  changeIdentifier,
  createComponent,
  getComponentLocalName,
  getNonBlankChildren,
  getProperty,
  getRenderFunction,
  hasProperty,
  isFragment,
  objectToAttributes,
  renameProperties,
  warningMessage,
} = require('../../utils');
const { getImport } = require('../../utils/config');

// v7 Modal codemod, migrates to the `header` / `controls` slots:
// 1. title / subtitle / modalHeaderProps        -> header={<Modal.Header … />}
// 2. {() => <><Modal.Header/><Modal.Content/><Modal.Controls/></>}
//                                               -> header / controls slots, Content children as Modal children
// 3. Modal.Header onClose identical to Modal onClose -> removed (Header reads it from the Modal)
// Also renames ModalConfirm / ModalConfirmProps to ConfirmationModal / ConfirmationModalProps.
// Everything that is not provably safe is left untouched and reported as a warning.

const PARTS = ['Header', 'Content', 'Controls'];
const RENAMES = [
  ['ModalConfirm', 'ConfirmationModal'],
  ['ModalConfirmProps', 'ConfirmationModalProps'],
];

module.exports = function updateToV7Modal(file, api) {
  const j = api.jscodeshift;
  const importNames = [getImport('f36-components'), getImport('f36-modal')];
  const getLocalName = (source, componentName) =>
    importNames
      .map((importName) =>
        getComponentLocalName(j, source, { importName, componentName }),
      )
      .find(Boolean) ?? '';

  // 0. ModalConfirm / ModalConfirmProps -> ConfirmationModal / ConfirmationModalProps
  // changeComponentName renames the JSX tags first, keeping their whitespace,
  // then changeIdentifier renames the import and plain references (an alias keeps its local name).
  const source = RENAMES.reduce(
    (src, [from, to]) =>
      getLocalName(src, from)
        ? changeIdentifier(
            j,
            changeComponentName(j, src, {
              componentName: from,
              outputComponentName: to,
            }),
            { from, to },
          )
        : src,
    file.source,
  );

  const root = j(source);
  const localName = (componentName) => getLocalName(source, componentName);

  const warn = (message, node) =>
    warningMessage(`[Modal] ${message}`, { file, value: node });

  // named compound imports are not migrated, only reported
  PARTS.forEach((part) => {
    const name = localName(`Modal${part}`);
    if (!name) return;
    root
      .findJSXElements(name)
      .forEach((p) =>
        warn(`Use <Modal.${part}> instead of <${name}> to migrate.`, p.node),
      );
  });

  const modalName = localName('Modal');
  if (!modalName) return root.toSource();

  const isPart = (node, part) =>
    j.match(node, {
      type: 'JSXElement',
      openingElement: {
        name: {
          type: 'JSXMemberExpression',
          object: { name: modalName },
          property: { name: part },
        },
      },
    });

  const getAttr = (opening, propertyName) =>
    getProperty(opening.attributes, { propertyName });
  const hasAttr = (opening, propertyName) =>
    hasProperty(opening.attributes, { propertyName });
  const removeAttrs = (opening, names) => {
    opening.attributes = renameProperties(opening.attributes, {
      renameMap: Object.fromEntries(names.map((name) => [name, null])),
    });
  };
  const slot = (name, element) =>
    j.jsxAttribute(j.jsxIdentifier(name), j.jsxExpressionContainer(element));

  const TITLE_PROPS = ['title', 'subtitle', 'modalHeaderProps'];

  // 1. title / subtitle / modalHeaderProps -> header slot
  const migrateTitleProps = (element) => {
    const opening = element.openingElement;
    if (!TITLE_PROPS.some((name) => hasAttr(opening, name))) return;
    // with a render function the default header is not rendered, `title` is only read via the params
    if (getRenderFunction(element)) return;

    const title = getAttr(opening, 'title');
    if (hasAttr(opening, 'header')) {
      return warn('Has `header` and `title`; remove `title`.', opening);
    }
    if (!title) {
      return warn(
        '`subtitle`/`modalHeaderProps` without `title`; migrate manually.',
        opening,
      );
    }
    if (opening.attributes.some((a) => a.type === 'JSXSpreadAttribute')) {
      return warn(
        'Spread props may contain header props; migrate manually.',
        opening,
      );
    }

    const subtitle = getAttr(opening, 'subtitle');
    const headerProps = getAttr(opening, 'modalHeaderProps');
    const headerAttrs = [title, subtitle].filter(Boolean);
    if (headerProps?.value?.type === 'JSXExpressionContainer') {
      headerAttrs.push(...objectToAttributes(j, headerProps.value.expression));
    }

    removeAttrs(opening, TITLE_PROPS);
    opening.attributes.push(
      slot(
        'header',
        createComponent({
          componentName: `${modalName}.Header`,
          props: headerAttrs,
          isSelfClosing: true,
          j,
        }),
      ),
    );
  };

  // 2. pure render function -> header / controls slots
  const migrateRenderFunction = (element) => {
    const opening = element.openingElement;
    const fn = getRenderFunction(element);
    if (!fn) return;

    if (hasAttr(opening, 'header') || hasAttr(opening, 'controls')) {
      return warn('Render function next to slots; migrate manually.', opening);
    }
    if (fn.params.length > 0) {
      return warn(
        'Render function uses its params; replace them with the Modal props, then migrate.',
        fn,
      );
    }

    let body = fn.body;
    if (body.type === 'BlockStatement') {
      if (body.body.length !== 1 || body.body[0].type !== 'ReturnStatement') {
        return warn(
          'Render function has statements before `return`; migrate manually.',
          fn,
        );
      }
      body = body.body[0].argument;
    }
    if (!isFragment(j, body)) {
      return warn(
        'Render function does not return a fragment (e.g. a <form> wrapper); migrate manually.',
        fn,
      );
    }

    const parts = getNonBlankChildren(body);
    const kinds = parts.map((c) => PARTS.find((part) => isPart(c, part)));
    // only Header?, Content, Controls? in visual order
    if (!/^(Header,)?Content(,Controls)?$/.test(kinds.join())) {
      return warn(
        'Render function contains more than Modal.Header/Content/Controls; migrate manually.',
        fn,
      );
    }

    const byKind = Object.fromEntries(kinds.map((k, i) => [k, parts[i]]));
    const content = byKind.Content;
    const contentAttrs = content.openingElement.attributes;
    if (contentAttrs.length && hasAttr(opening, 'modalContentProps')) {
      return warn(
        'Modal.Content props and `modalContentProps` both set; migrate manually.',
        fn,
      );
    }

    if (byKind.Header) opening.attributes.push(slot('header', byKind.Header));
    if (byKind.Controls)
      opening.attributes.push(slot('controls', byKind.Controls));
    if (contentAttrs.length) {
      opening.attributes.push(
        slot('modalContentProps', attributesToObject(j, contentAttrs)),
      );
    }
    element.children = content.children;
  };

  // 3. drop Modal.Header onClose when it equals the Modal onClose
  const migrateHeaderOnClose = (path) => {
    const modalOnClose = getAttr(path.node.openingElement, 'onClose')?.value;
    j(path)
      .find(j.JSXElement)
      .filter((p) => isPart(p.node, 'Header'))
      // only headers of this modal, not of a nested one
      .filter(
        (p) =>
          j(p)
            .closest(j.JSXElement, {
              openingElement: {
                name: { type: 'JSXIdentifier', name: modalName },
              },
            })
            .paths()[0] === path,
      )
      .forEach((p) => {
        const header = p.node.openingElement;
        const onClose = getAttr(header, 'onClose');
        if (!onClose) return;
        if (
          modalOnClose?.type === 'JSXExpressionContainer' &&
          j.types.astNodesAreEquivalent(onClose.value, modalOnClose)
        ) {
          removeAttrs(header, ['onClose']);
        } else {
          warn(
            '`onClose` on Modal.Header differs from the Modal `onClose`; move the logic to the Modal.',
            header,
          );
        }
      });
  };

  root.findJSXElements(modalName).forEach((path) => {
    migrateRenderFunction(path.node);
    // after the render function: a migrated one no longer blocks title -> header
    migrateTitleProps(path.node);
    migrateHeaderOnClose(path);
  });

  return root.toSource();
};
