const { modifyPropsCodemod } = require('./common/modify-props-codemod');
const { addProperty } = require('../utils/addProperty');
const { pipe } = require('./common/pipe');
const _ = require('lodash');

const applyMarginIfNotWrapped = (attributes, { element, j }) => {
  let parent = element.parentPath;
  let isWrappedInTypography = false;
  while (parent) {
    if (
      _.get(parent, 'value.type') === 'JSXElement' &&
      _.get(parent, 'value.openingElement.name.name') === 'Typography'
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

    // replace Typography with React.Fragment

    // remove Typography import

    let source = file.source;

    return source;
  },
]);
