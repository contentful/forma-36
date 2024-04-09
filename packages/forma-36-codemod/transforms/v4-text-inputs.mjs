import { modifyPropsCodemod } from './common/modify-props-codemod.mjs';
import { pipe } from './common/pipe.mjs';
import {
  renameProperties,
  hasProperty,
  getComponentLocalName,
  createComponent,
  getProperty,
  addImport,
  deleteProperty,
} from '../utils/index.mjs';
import { getFormaImport } from '../utils/config.mjs';

const checkControlledOrUncontrolled = (attributes) => {
  const hasOnChange = hasProperty(attributes, { propertyName: 'onChange' });
  const hasValue = hasProperty(attributes, { propertyName: 'value' });
  if (!hasOnChange && !hasValue) {
    return attributes;
  }

  if (hasValue && !hasOnChange) {
    return renameProperties(attributes, {
      renameMap: {
        value: 'defaultValue',
      },
    });
  }

  return attributes;
};

function copyButtonCodemod(file, api) {
  const j = api.jscodeshift;

  let source = file.source;
  const componentName = getComponentLocalName(j, source, {
    componentName: 'TextInput',
    importName: getFormaImport(),
  });

  if (!componentName) {
    return source;
  }

  let needToimportCopyButton = false;

  source = j(source)
    .findJSXElements(componentName)
    .forEach((element) => {
      source = j(element)
        .find(j.JSXOpeningElement)
        .forEach((p) => {
          const { attributes, name, selfClosing } = p.value;
          let modifiedAttributes = attributes;
          if (hasProperty(attributes, { propertyName: 'withCopyButton' })) {
            needToimportCopyButton = true;
            modifiedAttributes = deleteProperty(modifiedAttributes, {
              propertyName: 'withCopyButton',
              file,
            });
            j(p).replaceWith(
              j.jsxOpeningElement(name, modifiedAttributes, selfClosing),
            );

            const value = getProperty(modifiedAttributes, {
              propertyName: 'value',
            });
            const copyButtonProps = value ? [value] : [];

            const copyButton = createComponent({
              componentName: 'CopyButton',
              isSelfClosing: true,
              props: copyButtonProps,
              j,
            });
            const group = createComponent({
              componentName: 'TextInput.Group',
              children: [
                j.jsxText('\n'),
                element.value,
                j.jsxText('\n'),
                copyButton,
                j.jsxText('\n'),
              ],
              j,
            });

            j(element).replaceWith(group);
          }
        })
        .toSource();
    })
    .toSource();

  if (needToimportCopyButton) {
    source = addImport(j, source, [
      j.template.statement([
        'import { CopyButton } from "@contentful/f36-components"',
      ]),
    ]).source;
  }

  return source;
}

export default pipe([
  copyButtonCodemod,
  modifyPropsCodemod({
    componentName: 'TextInput',
    renameMap: {
      error: 'isInvalid',
      inputRef: 'ref',
      disabled: 'isDisabled',
      required: 'isRequired',
      labelText: 'aria-label',
      readOnly: 'isReadOnly',
      width: null,
    },
    afterRename: checkControlledOrUncontrolled,
  }),
  modifyPropsCodemod({
    componentName: 'Textarea',
    renameMap: {
      error: 'isInvalid',
      inputRef: 'ref',
      disabled: 'isDisabled',
      required: 'isRequired',
      labelText: 'aria-label',
      readOnly: 'isReadOnly',
      width: null,
    },
    afterRename: checkControlledOrUncontrolled,
  }),
]);
