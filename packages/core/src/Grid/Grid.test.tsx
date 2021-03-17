import React from 'react';
import { render, screen } from '@testing-library/react';

import { axe } from '../../../../scripts/test/axeHelper';
import { Grid } from './Grid';

it('renders the component', () => {
  const { container } = render(<Grid>Grid</Grid>);

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const { container } = render(<Grid className="my-extra-class">Grid</Grid>);

  expect(container.firstChild).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const { container } = render(<Grid>Grid</Grid>);
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});

describe('should have correct styles', () => {
  it('rowGap should be 0 by default', () => {
    render(<Grid>Grid</Grid>);
    const element = screen.getByText('Grid');

    expect(element).toMatchSnapshot();
    expect(screen.getByText('Grid')).toHaveStyle({ rowGap: 0 });
  });

  it('columnGap should be 1rem by default', () => {
    render(<Grid>Grid</Grid>);
    const element = screen.getByText('Grid');

    expect(screen.getByText('Grid')).toHaveStyle({ columnGap: '1rem' });
    expect(element).toMatchSnapshot();
  });

  it('should has correct numbers of columns', () => {
    render(<Grid columns={12}>Grid</Grid>);
    const element = screen.getByText('Grid');

    expect(element).toMatchSnapshot();
  });

  it('should has correct numbers of rows', () => {
    render(<Grid rows={12}>Grid</Grid>);
    const element = screen.getByText('Grid');

    expect(element).toMatchSnapshot();
  });
});
