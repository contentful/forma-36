import React from 'react';
import { render, screen } from '@testing-library/react';
import { EyeIcon } from '@contentful/f36-icons';
import { axe } from 'jest-axe';
import { Badge } from './Badge';

describe('Badge', function () {
  it('renders the component', () => {
    render(<Badge>Badge</Badge>);

    expect(screen.getByTestId('cf-ui-badge')).toBeTruthy();
  });

  it('renders the component with a start icon', () => {
    render(<Badge startIcon={<EyeIcon />}>Badge</Badge>);

    const badge = screen.getByTestId('cf-ui-badge');
    expect(badge.getElementsByTagName('svg')).toHaveLength(1);
  });

  it('renders the component with an end icon', () => {
    render(<Badge endIcon={<EyeIcon />}>Badge</Badge>);

    const badge = screen.getByTestId('cf-ui-badge');
    expect(badge.getElementsByTagName('svg')).toHaveLength(1);
  });

  it('has no a11y issues', async () => {
    const { container } = render(
      <>
        <Badge variant="primary">Badge</Badge>
        <Badge variant="primary-filled">Badge</Badge>
        <Badge variant="secondary">Badge</Badge>
        <Badge variant="positive">Badge</Badge>
        <Badge variant="negative">Badge</Badge>
        <Badge variant="featured">Badge</Badge>
        <Badge variant="warning">Badge</Badge>
      </>,
    );
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
