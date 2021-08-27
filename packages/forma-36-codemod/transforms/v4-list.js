const { modifyPropsCodemod } = require('./common/modify-props-codemod');

module.exports = function (file, api) {
  const source = modifyPropsCodemod({
    componentName: 'List',
    renameMap: {
      element: 'as',
    },
  })(file, api);

  return modifyPropsCodemod({
    componentName: 'ListItem',
    renameMap: {},
  })(
    {
      ...file,
      source,
    },
    api,
  );
};
