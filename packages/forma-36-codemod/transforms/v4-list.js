const { renamePropsCodemod } = require('./common/rename-props-codemod');

module.exports = function (file, api) {
  const source = renamePropsCodemod({
    componentName: 'List',
    renameMap: {
      element: 'as',
    },
  })(file, api);

  return renamePropsCodemod({
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
