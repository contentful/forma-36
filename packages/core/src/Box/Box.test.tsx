import React from 'react';
import { render } from '@testing-library/react';
import { axe } from '@/scripts/test/axeHelper';
import tokens from '@contentful/f36-tokens';

import { Box } from './Box';

describe('Box', () => {
  it('renders the component', () => {
    const { getByText } = render(<Box>Box</Box>);

    expect(getByText('Box')).toBeTruthy();
  });

  it('renders the component with an additional class name', () => {
    const { container } = render(<Box className="my-extra-class">Box</Box>);

    expect(container.firstChild).toHaveClass('my-extra-class');
  });

  it('has no a11y issues', async () => {
    const { container } = render(<Box>Box</Box>);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  describe('should have correct styles', () => {
    it('should render correct padding and margin values', () => {
      const { container } = render(
        <Box paddingRight="spacingXs" marginLeft="spacingXl">
          Box
        </Box>,
      );

      expect(container.firstChild).toHaveStyle({
        marginLeft: tokens.spacingXl,
        paddingRight: tokens.spacingXs,
      });
    });

    it('should render correct padding and margin values and apply polymorphic props', () => {
      const { getByRole } = render(
        <Box
          padding="spacingM"
          marginBottom="spacing3Xl"
          as="a"
          href="https://contentful.com"
        >
          Link to Contentful
        </Box>,
      );

      const box = getByRole('link');
      expect(box.nodeName).toMatch(/a/i);
      expect(box).toHaveAttribute('href', 'https://contentful.com');
      expect(box).toHaveStyle({
        padding: tokens.spacingM,
        marginBottom: tokens.spacing3Xl,
      });
    });
  });
});
