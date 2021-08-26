const { justRenamePropsCodemod } = require('./common/just-rename-props');

module.exports = function (file, api) {
  const source = justRenamePropsCodemod({
    componentName: 'List',
    renameMap: {
      element: 'as',
    },
  })(file, api);

  return justRenamePropsCodemod({
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
