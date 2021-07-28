import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ArrowDown } from '@contentful/f36-icons';
import { axe } from '@/scripts/test/axeHelper';
import { TextLink } from '../src/TextLink';

describe('TextLink', function () {
  it('renders as a button', () => {
    const { container } = render(<TextLink>Text Link</TextLink>);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders as a link', () => {
    const { container } = render(<TextLink href="#">Text Link</TextLink>);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders as a "primary" link type', () => {
    const { container } = render(
      <TextLink variant="primary">Text Link</TextLink>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders as a "positive" link type', () => {
    const { container } = render(
      <TextLink variant="positive">Text Link</TextLink>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders as a "negative" link type', () => {
    const { container } = render(
      <TextLink variant="negative">Text Link</TextLink>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders as a "secondary" link type', () => {
    const { container } = render(
      <TextLink variant="secondary">Text Link</TextLink>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders as a "muted" link type', () => {
    const { container } = render(
      <TextLink variant="muted">Text Link</TextLink>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders as a "white" link type', () => {
    const { container } = render(
      <TextLink variant="white">Text Link</TextLink>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('calls an onClick function', () => {
    const onClickFunc = jest.fn();
    const { container } = render(
      <TextLink onClick={onClickFunc}>Text Link</TextLink>,
    );

    userEvent.click(screen.getByText('Text Link'));

    expect(onClickFunc).toHaveBeenCalled();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('prevents onClick function from being called when disabled', () => {
    const onClickFunc = jest.fn();
    const { container } = render(
      <TextLink isDisabled onClick={onClickFunc}>
        Text Link
      </TextLink>,
    );

    userEvent.click(screen.getByText('Text Link'));

    expect(container.firstChild).toMatchSnapshot();
    expect(onClickFunc).not.toHaveBeenCalled();
  });

  it('allows passing additional props not consumed by component', () => {
    const { container } = render(
      <TextLink data-test-id="Testing Id">Text Link</TextLink>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('allows passing additional class names to component', () => {
    const { container } = render(
      <TextLink className="testing">Text Link</TextLink>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('allows passing a test id', () => {
    const { container } = render(
      <TextLink testId="test-id">Text Link</TextLink>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('has no a11y issues', async () => {
    const { container } = render(<TextLink>Text Link</TextLink>);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it('has no a11y issues when rendered as a link', async () => {
    const { container } = render(<TextLink href="#">Text Link</TextLink>);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it('renders with an icon', () => {
    const { container } = render(
      <TextLink icon={ArrowDown}>Text Link</TextLink>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders with an icon aligned right to the text', () => {
    const { container } = render(
      <TextLink alignIcon="end" icon={ArrowDown}>
        Text Link
      </TextLink>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
