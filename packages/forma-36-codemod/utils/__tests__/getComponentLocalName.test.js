const { getComponentLocalName } = require('../getComponentLocalName');
const j = require('jscodeshift');

describe('utils/getComponentLocalName', () => {
  const importName = '@contentful/forma-36-react-components';

  it('should extract component name', () => {
    const componentName = 'TextLink';

    const testFn = (source) => {
      return getComponentLocalName(j, source, { importName, componentName });
    };

    expect(testFn('')).toEqual('');

    expect(
      testFn(`
      import {} from '${importName}';
    `),
    ).toEqual('');

    expect(
      testFn(`
      import { TextLink } from '${importName}';
    `),
    ).toEqual('TextLink');

    expect(
      testFn(`
      import { TextLink as RenamedTextLink } from '${importName}';
    `),
    ).toEqual('RenamedTextLink');
  });
});
