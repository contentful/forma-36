import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from '@/scripts/test/axeHelper';

import { Card } from './Card';

it('renders the component', () => {
  const { container } = render(<Card>Card</Card>);

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const { container } = render(<Card className="my-extra-class">Card</Card>);

  expect(container.firstChild).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const { container } = render(<Card>Card</Card>);
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});

it('renders as an article by default', () => {
  const { container } = render(<Card>Card</Card>);

  expect(container.firstChild.nodeName).toBe('ARTICLE');
});

it('can be rendered as a div', () => {
  const { container } = render(<Card as="div">Card</Card>);

  expect(container.firstChild.nodeName).toBe('DIV');
});

it('renders as a link if passed a href prop', () => {
  const { container } = render(<Card href="/">Card</Card>);
  console.log(container.firstChild.nodeName);
  expect(container.firstChild.nodeName).toBe('A');
});

it('renders as button if passed a onClick prop', () => {
  const onClickFunc = jest.fn();
  const { container } = render(<Card onClick={onClickFunc}>Card</Card>);

  expect(container.firstChild.nodeName).toBe('BUTTON');
});

it('calls an onClick function', () => {
  const onClickFunc = jest.fn();
  const { container } = render(<Card onClick={onClickFunc}>Card</Card>);
  const element = container.firstChild as Element;
  userEvent.click(element);

  expect(container.firstChild).toMatchSnapshot();
  expect(onClickFunc).toHaveBeenCalled();
});

it('can be selected', () => {
  const output = render(<Card isSelected>Card</Card>);

  expect(output).toMatchSnapshot();
});
