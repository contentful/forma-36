const { modifyPropsCodemod } = require('./common/modify-props-codemod');
const {
  addProperty,
  removeComponentImport,
  getComponentLocalName,
} = require('../utils');
const { getFormaImport } = require('../utils/config');
const { pipe } = require('./common/pipe');

const applyMarginIfNotWrapped = (attributes, { element, j }) => {
  let parent = element.parentPath;
  let isWrappedInTypography = false;
  while (parent) {
    if (
      parent.value?.type === 'JSXElement' &&
      parent.value?.openingElement?.name?.name === 'Typography'
    ) {
      isWrappedInTypography = true;
    }
    parent = parent.parentPath;
  }
  if (isWrappedInTypography) {
    return attributes;
  }
  return addProperty(attributes, {
    j,
    propertyName: 'marginBottom',
    propertyValue: j.literal('none'),
  });
};

module.exports = pipe([
  modifyPropsCodemod({
    componentName: 'Heading',
    renameMap: {
      element: 'as',
    },
    afterRename: applyMarginIfNotWrapped,
  }),
  modifyPropsCodemod({
    componentName: 'DisplayText',
    renameMap: {
      element: 'as',
    },
    afterRename: applyMarginIfNotWrapped,
  }),
  modifyPropsCodemod({
    componentName: 'Paragraph',
    renameMap: {
      element: 'as',
    },
    afterRename: applyMarginIfNotWrapped,
  }),
  modifyPropsCodemod({
    componentName: 'Subheading',
    renameMap: {
      element: 'as',
    },
    afterRename: applyMarginIfNotWrapped,
  }),
  modifyPropsCodemod({
    componentName: 'SectionHeading',
    renameMap: {
      element: 'as',
    },
    afterRename: applyMarginIfNotWrapped,
  }),
  (file, api) => {
    const j = api.jscodeshift;

    let source = file.source;

    const from = getFormaImport();

    const componentName = getComponentLocalName(j, source, {
      componentName: 'Typography',
      importName: from,
    });

    if (!componentName) {
      return source;
    }

    source = removeComponentImport(j, source, {
      componentName,
      importName: from,
    });

    source = j(source)
      .find(j.JSXIdentifier, { name: componentName })
      .forEach((element) => {
        j(element).replaceWith(j.jsxIdentifier('React.Fragment'));
      })
      .toSource();

    return source;
  },
]);
