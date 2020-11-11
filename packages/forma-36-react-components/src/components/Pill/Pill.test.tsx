import React from 'react';
import { render } from '@testing-library/react';

import axe from '../../utils/axeHelper';
import Pill from './Pill';

it('renders the component', () => {
  const { container } = render(<Pill label="test" />);

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const { container } = render(
    <Pill className="my-extra-class" label="test" />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with a dragging handle', () => {
  const { container } = render(
    <Pill className="my-extra-class" label="test" onDrag={() => {}} />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with a close button', () => {
  const { container } = render(
    <Pill className="my-extra-class" label="test" onClose={() => {}} />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with a test id', () => {
  const { container } = render(
    <Pill className="my-extra-class" label="test" testId="test-id" />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const { container } = render(<Pill label="test" />);
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
