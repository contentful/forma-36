import React from 'react';
import { render } from '@testing-library/react';

import { axe } from '../../../../scripts/test/axeHelper';
import { Box } from './Box';

it('renders the component', () => {
  const { container } = render(<Box>Box</Box>);

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const { container } = render(<Box className="my-extra-class">Box</Box>);

  expect(container.firstChild).toMatchSnapshot();
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

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correct padding and margin values and apply polymorphic props', () => {
    const { container } = render(
      <Box
        padding="spacingM"
        marginBottom="spacing3Xl"
        as="a"
        href="https://contentful.com"
      >
        Link to Contentful
      </Box>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
