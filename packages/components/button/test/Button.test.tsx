import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { PreviewIcon } from '@contentful/f36-icons';
import { axe } from '@/scripts/test/axeHelper';
import { Button } from '../src/Button';

describe('Button', function () {
  it('renders the component', () => {
    render(<Button>Button</Button>);

    expect(screen.getByRole('button')).toBeTruthy();
  });

  it('renders the component as an a tag', () => {
    const { container } = render(
      <Button as="a" href="https://contentful.com">
        Button
      </Button>,
    );

    expect(container.firstChild).toHaveAttribute('href');
  });

  it('renders the component with icon', () => {
    render(<Button icon={<PreviewIcon />}>Button</Button>);

    const button = screen.getByRole('button');
    expect(button.getElementsByTagName('svg')).toHaveLength(1);
  });

  it('should not dispatch onClick if disabled', () => {
    const mockOnClick = jest.fn();

    render(
      <Button onClick={mockOnClick} icon={<PreviewIcon />} isDisabled>
        Toggle
      </Button>,
    );

    const button = screen.getByRole('button');
    userEvent.click(button);
    expect(mockOnClick).not.toHaveBeenCalled();
  });

  it('has no a11y issues', async () => {
    const { container } = render(
      <>
        <Button variant="primary">Button</Button>
        <Button variant="secondary">Button</Button>
        <Button variant="positive">Button</Button>
        <Button variant="negative">Button</Button>
        <Button variant="transparent">Button</Button>
      </>,
    );
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
