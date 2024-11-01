import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { EntityStatusBadge } from './EntityStatusBadge';

describe('EntityStatusBadge', function () {
  it('renders the component', () => {
    render(<EntityStatusBadge entityStatus={'archived'} />);

    expect(screen.getByTestId('cf-ui-badge')).toBeTruthy();
  });

  it('has no a11y issues', async () => {
    const { container } = render(
      <>
        <EntityStatusBadge entityStatus={'archived'} />
        <EntityStatusBadge entityStatus={'draft'} />
        <EntityStatusBadge entityStatus={'new'} />
        <EntityStatusBadge entityStatus={'deleted'} />
        <EntityStatusBadge entityStatus={'changed'} />
        <EntityStatusBadge entityStatus={'published'} />
      </>,
    );
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
