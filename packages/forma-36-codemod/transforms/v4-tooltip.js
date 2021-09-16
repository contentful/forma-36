const { modifyPropsCodemod } = require('./common/modify-props-codemod');
const { pipe } = require('./common/pipe');
const { getComponentLocalName } = require('../utils');
const { getFormaImport } = require('../utils/config');

module.exports = modifyPropsCodemod({
  componentName: 'Tooltip',
  renameMap: {
    place: 'placement',
    containerElement: 'as',
  },
});

module.exports = pipe([
  (file, api) => {
    const j = api.jscodeshift;

    let source = file.source;

    const componentName = getComponentLocalName(j, source, {
      componentName: 'Tooltip',
      importName: getFormaImport(),
    });

    if (!componentName) {
      return source;
    }
    // eslint-disable-next-line no-console
    console.warn(
      'If you are passing anything other than a string to the `content` prop of the `Tooltip`, please update it to a string.',
    );

    return source;
  },
  modifyPropsCodemod({
    componentName: 'Tooltip',
    renameMap: {
      place: 'placement',
      containerElement: 'as',
    },
  }),
]);
