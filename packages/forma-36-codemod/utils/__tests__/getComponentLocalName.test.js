const { getComponentLocalName } = require('../getComponentLocalName');
const j = require('jscodeshift');

describe('utils/getComponentLocalName', () => {
  const importName = '@contentful/forma-36-react-components';

  it('should extract component name', () => {
    const componentName = 'TextLink';

    const testFn = (source) => {
      return getComponentLocalName(j, source, { importName, componentName });
    };

    expect(testFn('')).toBe('');

    expect(
      testFn(`
      import {} from '${importName}';
    `),
    ).toBe('');

    expect(
      testFn(`
      import { TextLink } from '${importName}';
    `),
    ).toBe('TextLink');

    expect(
      testFn(`
      import { TextLink as RenamedTextLink } from '${importName}';
    `),
    ).toBe('RenamedTextLink');
  });
});
