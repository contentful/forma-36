import React from 'react';
import { render } from '@testing-library/react';

import { axe } from '../../utils/axeHelper';
import { Tag } from './Tag';

it('renders the component', () => {
  const { container } = render(<Tag>Tag</Tag>);

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const { container } = render(<Tag className="my-extra-class">Tag</Tag>);

  expect(container.firstChild).toMatchSnapshot();
});

it('renders a "primary" Tag', () => {
  const { container } = render(<Tag tagType="primary">Tag</Tag>);

  expect(container.firstChild).toMatchSnapshot();
});

it('renders a "positive" Tag', () => {
  const { container } = render(<Tag tagType="positive">Tag</Tag>);

  expect(container.firstChild).toMatchSnapshot();
});

it('renders a "negative" Tag', () => {
  const { container } = render(<Tag tagType="negative">Tag</Tag>);

  expect(container.firstChild).toMatchSnapshot();
});

it('renders a "warning" Tag', () => {
  const { container } = render(<Tag tagType="warning">Tag</Tag>);

  expect(container.firstChild).toMatchSnapshot();
});

it('renders a "secondary" Tag', () => {
  const { container } = render(<Tag tagType="secondary">Tag</Tag>);

  expect(container.firstChild).toMatchSnapshot();
});

it('renders a "muted" Tag', () => {
  const { container } = render(<Tag tagType="muted">Tag</Tag>);

  expect(container.firstChild).toMatchSnapshot();
});

it('renders a "published" Tag', () => {
  const { container } = render(
    <Tag entityStatusType="published">Published</Tag>,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders a "draft" Tag', () => {
  const { container } = render(<Tag entityStatusType="draft">Draft</Tag>);

  expect(container.firstChild).toMatchSnapshot();
});

it('renders a "archived" Tag', () => {
  const { container } = render(<Tag entityStatusType="archived">Archived</Tag>);

  expect(container.firstChild).toMatchSnapshot();
});

it('renders a "changed" Tag', () => {
  const { container } = render(<Tag entityStatusType="changed">Changed</Tag>);

  expect(container.firstChild).toMatchSnapshot();
});

it('renders a "deleted" Tag', () => {
  const { container } = render(<Tag entityStatusType="deleted">Deleted</Tag>);

  expect(container.firstChild).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const { container } = render(<Tag>Tag</Tag>);
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
