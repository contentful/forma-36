import React from 'react';
import { render, screen } from '@testing-library/react';
import { PreviewIcon } from '@contentful/f36-icons';
import { axe } from '@/scripts/test/axeHelper';
import { EntityStatusBadge } from './EntityStatusBadge';

describe('EntityStatusBadge', function () {
  it('renders the component', () => {
    render(<EntityStatusBadge entityStatus={'archived'} />);

    expect(screen.getByTestId('cf-ui-badge')).toBeTruthy();
  });

  it('renders the component with a start icon', () => {
    render(
      <EntityStatusBadge
        entityStatus={'archived'}
        startIcon={<PreviewIcon />}
      />,
    );

    const entityStatusBadge = screen.getByTestId('cf-ui-badge');
    expect(entityStatusBadge.getElementsByTagName('svg')).toHaveLength(1);
  });

  it('renders the component with an end icon', () => {
    render(
      <EntityStatusBadge entityStatus={'archived'} endIcon={<PreviewIcon />} />,
    );

    const entityStatusBadge = screen.getByTestId('cf-ui-badge');
    expect(entityStatusBadge.getElementsByTagName('svg')).toHaveLength(1);
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
