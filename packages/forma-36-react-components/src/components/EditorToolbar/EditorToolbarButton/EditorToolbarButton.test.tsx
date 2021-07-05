import React from 'react';
import { render } from '@testing-library/react';
import { HeadingOne } from '@contentful/f36-icons';
import { axe } from '@/scripts/test/axeHelper';

import { EditorToolbarButton } from './EditorToolbarButton';

it('renders the component', () => {
  const { container } = render(
    <EditorToolbarButton icon={HeadingOne} label="H1" />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const { container } = render(
    <EditorToolbarButton
      icon={HeadingOne}
      label="H1"
      className="my-extra-class"
    />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with a tooltip', () => {
  const { container } = render(
    <EditorToolbarButton icon={HeadingOne} label="H1" tooltip="H1" />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component as active', () => {
  const { container } = render(
    <EditorToolbarButton icon={HeadingOne} label="H1" tooltip="H1" isActive />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component as disabled', () => {
  const { container } = render(
    <EditorToolbarButton icon={HeadingOne} label="H1" tooltip="H1" disabled />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders with a dropdown indicator', () => {
  const { container } = render(
    <EditorToolbarButton
      icon={HeadingOne}
      label="H1"
      tooltip="H1"
      withDropdown
    />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const { container } = render(
    <EditorToolbarButton icon={HeadingOne} label="H1" />,
  );
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
