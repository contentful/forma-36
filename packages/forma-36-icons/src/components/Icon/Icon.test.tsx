import React from 'react';
import { render } from '@testing-library/react';

import axe from '../../../tools/axeHelper';
import Icon from './Icon';
import { iconName } from './constants';

it('renders the component', () => {
  const { container } = render(<Icon icon={'ArrowDown'} />);

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const { container } = render(
    <Icon icon={'ArrowDown'} className="my-extra-class" />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders a large icon', () => {
  const { container } = render(<Icon icon={'ArrowDown'} size="large" />);

  expect(container.firstChild).toMatchSnapshot();
});

it('renders as a "primary" icon', () => {
  const { container } = render(
    <Icon icon={'ArrowDown'} size="large" color="primary" />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders as a "positive" icon', () => {
  const { container } = render(
    <Icon icon={'ArrowDown'} size="large" color="positive" />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders as a "negative" icon', () => {
  const { container } = render(
    <Icon icon={'ArrowDown'} size="large" color="negative" />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders as a "warning" icon', () => {
  const { container } = render(
    <Icon
      icon={iconName[Object.keys(iconName)[0]]}
      size="large"
      color="warning"
    />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders as a "secondary" icon', () => {
  const { container } = render(
    <Icon icon={'ArrowDown'} size="large" color="secondary" />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders as a "muted" icon', () => {
  const { container } = render(
    <Icon icon={'ArrowDown'} size="large" color="muted" />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders as a "white" icon', () => {
  const { container } = render(
    <Icon icon={'ArrowDown'} size="large" color="white" />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

Object.keys(iconName).forEach((icon) => {
  it(`${icon} has no a11y issues`, async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { container } = render(<Icon icon={icon as any} />);

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
