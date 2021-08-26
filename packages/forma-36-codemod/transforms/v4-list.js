const { justRenamePropsCodemod } = require('./common/just-rename-props');

module.exports = justRenamePropsCodemod({
  componentName: 'Pill',
  renameMap: {},
});

module.exports = function (file, api) {
  const source = justRenamePropsCodemod({
    componentName: 'List',
    renameMap: {
      element: 'as',
    },
  })(file, api);

  file.source = source;

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
