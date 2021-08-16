const { getComponentLocalName } = require('../utils/getComponentLocalName');

module.exports = function (file, api) {
  const j = api.jscodeshift;

  const localName = getComponentLocalName(j, file.source, {
    componentName: 'TextLink',
    from: '@contentful/forma-36-react-components',
  });

  console.log(localName);

  return j(file.source).toSource();
};
