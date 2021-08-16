const { getComponentLocalName } = require('../utils/getComponentLocalName');
const { renameProperties } = require('../utils/renameProperties');

module.exports = function (file, api) {
  const j = api.jscodeshift;

  const localName = getComponentLocalName(j, file.source, {
    componentName: 'TextLink',
    from: '@contentful/forma-36-react-components',
  });

  return renameProperties(j, file.source, {
    componentName: localName,
    renameMap: {
      linkType: 'variant',
      disabled: 'isDisabled',
    },
  });
};
