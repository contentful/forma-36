const { modifyPropsCodemod } = require('./common/modify-props-codemod');
const { pipe } = require('./common/pipe');

module.exports = pipe([
  modifyPropsCodemod({
    componentName: 'Heading',
    renameMap: {
      element: 'as',
    },
  }),
  modifyPropsCodemod({
    componentName: 'DisplayText',
    renameMap: {
      element: 'as',
    },
  }),
  modifyPropsCodemod({
    componentName: 'Paragraph',
    renameMap: {
      element: 'as',
    },
  }),
  modifyPropsCodemod({
    componentName: 'Subheading',
    renameMap: {
      element: 'as',
    },
  }),
  modifyPropsCodemod({
    componentName: 'SectionHeading',
    renameMap: {
      element: 'as',
    },
  }),
]);
