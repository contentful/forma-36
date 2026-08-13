import { describe, expect, it } from 'vitest';
import React from 'react';
import { render } from '@testing-library/react';
import { expectNoA11yViolations } from '@/scripts/test/expectNoA11yViolations';

import { Grid } from './Grid';

describe('Grid', () => {
  it('renders the component', () => {
    const { getByText } = render(<Grid>Grid</Grid>);

    expect(getByText('Grid')).toBeTruthy();
  });

  it('renders the component with an additional class name', () => {
    const { container } = render(<Grid className="my-extra-class">Grid</Grid>);

    expect(container.firstChild).toHaveClass('my-extra-class');
  });

  it('has no a11y issues', async () => {
    const { container } = render(<Grid>Grid</Grid>);
    await expectNoA11yViolations(container);
  });

  describe('should have correct styles', () => {
    it('rowGap should be 0 by default', () => {
      const { getByText } = render(<Grid>Grid</Grid>);

      expect(getByText('Grid')).toHaveStyle({ rowGap: 0 });
    });

    it('columnGap should be 1rem by default', () => {
      const { getByText } = render(<Grid>Grid</Grid>);

      expect(getByText('Grid')).toHaveStyle({ columnGap: '1rem' });
    });

    it('should have correct numbers of columns', () => {
      const { getByText } = render(<Grid columns={12}>Grid</Grid>);

      expect(getByText('Grid')).toHaveStyle({
        gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
      });
    });

    it('should have correct numbers of rows', () => {
      const { getByText } = render(<Grid rows={12}>Grid</Grid>);
      expect(getByText('Grid')).toHaveStyle({
        gridTemplateRows: 'repeat(12, minmax(0, 1fr))',
      });
    });
  });
});
