const { getComponentLocalName } = require('../utils/getComponentLocalName');
const { renameProperties } = require('../utils/renameProperties');

module.exports = function (file, api) {
  const j = api.jscodeshift;

  let source = file.source;

  const componentName = getComponentLocalName(j, source, {
    componentName: 'TextLink',
    importName: '@contentful/forma-36-react-components',
  });

  source = renameProperties(j, source, {
    componentName,
    renameMap: {
      linkType: 'variant',
      disabled: 'isDisabled',
    },
  });

  // todo: create a function that replaces icons with inlined icons

  // todo: add as="a" if href is defined

  // todo: rename iconPosition to alignIcon and update values / console.warn if update cannot be done

  // todo: move text to children if it's specified

  // todo: question: do we need to update imports somehow?

  return source;
};
