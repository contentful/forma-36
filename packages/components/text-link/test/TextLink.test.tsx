import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ArrowDown } from '@contentful/f36-icons';
import tokens from '@contentful/f36-tokens';
import { axe } from '@/scripts/test/axeHelper';
import { TextLink } from '../src/TextLink';

describe('TextLink', function () {
  it('renders as a button', () => {
    const { getByRole } = render(<TextLink as="button">Text Link</TextLink>);

    expect(getByRole('button')).toBeTruthy();
  });

  it('renders as a link', () => {
    const { getByRole } = render(<TextLink href="#">Text Link</TextLink>);

    const anchor = getByRole('link');
    expect(anchor).toBeTruthy();
    expect(anchor.getAttribute('href')).toEqual('#');
  });

  it('renders as a "primary" link type', () => {
    const { container } = render(
      <TextLink variant="primary">Text Link</TextLink>,
    );

    expect(container.firstChild).toHaveStyle({
      color: tokens.blue600,
    });
  });

  it('renders as a "positive" link type', () => {
    const { container } = render(
      <TextLink variant="positive">Text Link</TextLink>,
    );

    expect(container.firstChild).toHaveStyle({
      color: tokens.green600,
    });
  });

  it('renders as a "negative" link type', () => {
    const { container } = render(
      <TextLink variant="negative">Text Link</TextLink>,
    );

    expect(container.firstChild).toHaveStyle({
      color: tokens.red600,
    });
  });

  it('renders as a "secondary" link type', () => {
    const { container } = render(
      <TextLink variant="secondary">Text Link</TextLink>,
    );

    expect(container.firstChild).toHaveStyle({
      color: tokens.gray600,
    });
  });

  it('renders as a "muted" link type', () => {
    const { container } = render(
      <TextLink variant="muted">Text Link</TextLink>,
    );

    expect(container.firstChild).toHaveStyle({
      color: tokens.gray400,
    });
  });

  it('renders as a "white" link type', () => {
    const { container } = render(
      <TextLink variant="white">Text Link</TextLink>,
    );

    expect(container.firstChild).toHaveStyle({
      color: tokens.colorWhite,
    });
  });

  it('calls an onClick function', () => {
    const onClickFunc = jest.fn();
    render(
      <TextLink onClick={onClickFunc} as="button">
        Text Link
      </TextLink>,
    );

    userEvent.click(screen.getByText('Text Link'));

    expect(onClickFunc).toHaveBeenCalled();
  });

  it('prevents onClick function from being called when disabled', () => {
    const onClickFunc = jest.fn();
    render(
      <TextLink isDisabled onClick={onClickFunc} as="button">
        Text Link
      </TextLink>,
    );

    userEvent.click(screen.getByText('Text Link'));
    expect(onClickFunc).not.toHaveBeenCalled();
  });

  it('allows passing additional props not consumed by component', () => {
    const { getByTestId } = render(
      <TextLink data-test-id="Testing Id">Text Link</TextLink>,
    );

    expect(getByTestId('Testing Id')).toBeTruthy();
  });

  it('allows passing additional class names to component', () => {
    const { container } = render(
      <TextLink className="testing">Text Link</TextLink>,
    );

    expect(container.firstChild).toHaveClass('testing');
  });

  it('allows passing a test id', () => {
    const { getByTestId } = render(
      <TextLink testId="test-id">Text Link</TextLink>,
    );

    expect(getByTestId('test-id')).toBeTruthy();
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
    const { container, getByTestId, getByText } = render(
      <TextLink icon={<ArrowDown data-test-id="icon" />}>Text Link</TextLink>,
    );

    expect(container.firstChild).toContainElement(getByTestId('icon'));
    expect(getByTestId('icon').parentElement.nextSibling).toEqual(
      getByText('Text Link'),
    );
  });

  it('renders with an icon aligned right to the text', () => {
    const { getByTestId, getByText } = render(
      <TextLink alignIcon="end" icon={<ArrowDown data-test-id="icon" />}>
        Text Link
      </TextLink>,
    );

    expect(getByTestId('icon').parentElement.previousSibling).toEqual(
      getByText('Text Link'),
    );
  });
});
