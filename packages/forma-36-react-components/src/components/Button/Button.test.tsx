import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ChevronUp } from '@contentful/f36-icons';
import { axe } from '@/scripts/test/axeHelper';

import { Button } from './Button';

it('renders the component', () => {
  const { container } = render(<Button>Embed entry</Button>);

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const { container } = render(
    <Button className="my-extra-class">Embed entry</Button>,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component disabled', () => {
  const { container } = render(<Button disabled>Embed entry</Button>);

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component in loading state', () => {
  const { container } = render(<Button loading>Embed entry</Button>);

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component as primary', () => {
  const { container } = render(
    <Button buttonType="primary">Embed entry</Button>,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component as naked', () => {
  const { container } = render(<Button buttonType="naked">Embed entry</Button>);

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with dropdown indicator', () => {
  const { container } = render(<Button indicateDropdown>Embed Entry</Button>);

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with icon', () => {
  const { container } = render(<Button icon={ChevronUp}>Embed entry</Button>);

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component full width', () => {
  const { container } = render(<Button isFullWidth>Embed entry</Button>);

  expect(container.firstChild).toMatchSnapshot();
});

it('should not dispatch onClick if loading', () => {
  const mockOnClick = jest.fn();
  render(
    <Button loading onClick={mockOnClick}>
      Embed entry
    </Button>,
  );

  userEvent.click(screen.getByText('Embed entry'));
  expect(mockOnClick).not.toHaveBeenCalled();
});

it('should not dispatch onClick if disabled', () => {
  const mockOnClick = jest.fn();
  render(
    <Button disabled onClick={mockOnClick}>
      Embed entry
    </Button>,
  );

  userEvent.click(screen.getByText('Embed entry'));
  expect(mockOnClick).not.toHaveBeenCalled();
});

it('has no a11y issues', async () => {
  const { container } = render(<Button>Embed entry</Button>);
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});

it('renders the button as link', () => {
  const { container } = render(<Button href="/">Button link</Button>);

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the button as an external link', () => {
  const { container } = render(
    <Button href="/" target="_blank" rel="noreferrer noopener">
      Button link
    </Button>,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the button as active', () => {
  const { container } = render(<Button isActive>Active button</Button>);

  expect(container.firstChild).toMatchSnapshot();
});
