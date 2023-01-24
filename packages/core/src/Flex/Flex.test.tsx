import React from 'react';
import { render } from '@testing-library/react';
import { axe } from '@/scripts/test/axeHelper';
import tokens from '@contentful/f36-tokens';

import { Flex } from './Flex';

describe('Flex', () => {
  it('renders the component', () => {
    const { getByText } = render(<Flex>Flex</Flex>);

    expect(getByText('Flex')).toBeTruthy();
  });

  it('renders the component with an additional class name', () => {
    const { container } = render(<Flex className="my-extra-class">Flex</Flex>);

    expect(container.firstChild).toHaveClass('my-extra-class');
  });

  it('has no a11y issues', async () => {
    const { container } = render(<Flex>Flex</Flex>);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  describe('should have correct styles', () => {
    it('justifyContent should be center by default', () => {
      const { getByText } = render(<Flex justifyContent="center">Flex</Flex>);

      expect(getByText('Flex')).toHaveStyle({ justifyContent: 'center' });
    });

    it('alignItems should be center by default', () => {
      const { getByText } = render(<Flex alignItems="center">Flex</Flex>);

      expect(getByText('Flex')).toHaveStyle({ alignItems: 'center' });
    });

    it('should render correct margin value', () => {
      const { getByText } = render(<Flex marginRight="spacingXs">Flex</Flex>);

      expect(getByText('Flex')).toHaveStyle({
        marginRight: tokens.spacingXs,
      });
    });

    it('should render correct padding value', () => {
      const { getByText } = render(<Flex paddingRight="spacingXs">Flex</Flex>);

      expect(getByText('Flex')).toHaveStyle({
        paddingRight: tokens.spacingXs,
      });
    });
  });
});
