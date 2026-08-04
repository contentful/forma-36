import { describe, expect, it } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import tokens from '@contentful/f36-tokens';
import { expectNoA11yViolations } from '@/scripts/test/expectNoA11yViolations';

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

  it('renders with custom test Id', () => {
    render(<Flex testId="custom-flex-id">Flex</Flex>);
    expect(screen.getByTestId('custom-flex-id')).toBeTruthy();
  });

  it('has no a11y issues', async () => {
    const { container } = render(<Flex>Flex</Flex>);
    await expectNoA11yViolations(container);
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
