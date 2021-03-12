import React from 'react';
import { render } from '@testing-library/react';

import { axe } from '../../../utils/axeHelper';
import { GridItem } from './GridItem';

it('renders the component', () => {
  const { container } = render(<GridItem>Grid Item</GridItem>);

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const { container } = render(
    <GridItem as="span" className="my-extra-class">
      Grid Item
    </GridItem>,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const { container } = render(<GridItem>Grid Item</GridItem>);
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});

describe('should have correct styles', () => {
  it('should result to gridColumn', () => {
    const { container } = render(<GridItem columnStart={3} columnEnd={6} />);
    expect(container.firstChild).toHaveStyle({
      gridArea: 'auto / 3 / auto / 6',
    });
  });

  it('columnStart should have the correct value', () => {
    const { container } = render(<GridItem columnStart={3} />);
    expect(container.firstChild).toHaveStyle({
      gridArea: 'auto / 3 / auto / auto',
    });
  });

  it('columnEnd should have the correct value', () => {
    const { container } = render(<GridItem columnEnd={4} />);
    expect(container.firstChild).toHaveStyle({
      gridArea: 'auto / auto / auto / 4',
    });
  });

  it('rowStart should have the correct value', () => {
    const { container } = render(<GridItem rowStart={3} />);
    expect(container.firstChild).toHaveStyle({
      gridArea: '3 / auto / auto / auto',
    });
  });

  it('rowEnd should have the correct value', () => {
    const { container } = render(<GridItem rowEnd={4} />);
    expect(container.firstChild).toHaveStyle({
      gridArea: 'auto / auto / 4 / auto',
    });
  });
});
