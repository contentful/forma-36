import { DownloadSimpleIcon, StarIcon, XIcon } from '@contentful/f36-icons';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import React from 'react';
import { AIChatLayout } from './AIChatLayout';

const defaultProps = {
  isOpen: true,
  title: 'Test Agent',
  icon: <StarIcon />,
};

describe('AIChatLayout', () => {
  it('renders the component', () => {
    render(<AIChatLayout />);

    expect(screen.getByTestId('cf-ui-ai-chat-layout')).toBeTruthy();
  });

  it('renders the component with an additional class name', () => {
    const additionalClassName = 'my-extra-class';
    render(<AIChatLayout className={additionalClassName} />);

    expect(
      screen
        .getByTestId('cf-ui-ai-chat-layout')
        .classList.contains(additionalClassName),
    ).toBeTruthy();
  });

  it('renders the component with custom testId', () => {
    render(<AIChatLayout testId="custom-test-id" />);

    expect(screen.getByTestId('custom-test-id')).toBeTruthy();
    expect(screen.getByTestId('custom-test-id-header')).toBeTruthy();
    expect(screen.getByTestId('custom-test-id-content')).toBeTruthy();
  });

  it('renders the component with title and icon', () => {
    render(<AIChatLayout title="Test Chat" icon={<StarIcon />} />);

    expect(screen.getByTestId('cf-ui-ai-chat-layout-title')).toHaveTextContent(
      'Test Chat',
    );
    expect(screen.getByTestId('cf-ui-ai-chat-layout-icon')).toBeTruthy();
    expect(
      screen
        .getByTestId('cf-ui-ai-chat-layout-icon')
        .getElementsByTagName('svg'),
    ).toHaveLength(1);
  });

  it('renders the component without icon when not provided', () => {
    render(<AIChatLayout title="Test" />);

    expect(
      screen.queryByTestId('cf-ui-ai-chat-layout-icon'),
    ).not.toBeInTheDocument();
    expect(screen.getByTestId('cf-ui-ai-chat-layout-title')).toBeTruthy();
  });

  it('renders the component without title when not provided', () => {
    render(<AIChatLayout icon={<StarIcon />} />);

    expect(
      screen.queryByTestId('cf-ui-ai-chat-layout-title'),
    ).not.toBeInTheDocument();
    expect(screen.getByTestId('cf-ui-ai-chat-layout-icon')).toBeTruthy();
  });

  it('renders children content when open', () => {
    render(<AIChatLayout isOpen={true}>Test content</AIChatLayout>);

    expect(
      screen.getByTestId('cf-ui-ai-chat-layout-content'),
    ).toHaveTextContent('Test content');
  });

  it('hides content when closed', () => {
    render(<AIChatLayout isOpen={false}>Test content</AIChatLayout>);
    const content = screen.getByTestId('cf-ui-ai-chat-layout-content');

    // Content should be hidden via Collapse component but still in DOM
    expect(content).toHaveTextContent('Test content');

    // The collapse component should set aria-hidden="true" when closed
    const collapseContainer = content.closest('[data-test-id="cf-collapse"]');
    expect(collapseContainer).toHaveAttribute('aria-hidden', 'true');
  });

  it('handles different layout types', () => {
    const { rerender } = render(<AIChatLayout isOpen={true} type="normal" />);

    let root = screen.getByTestId('cf-ui-ai-chat-layout');
    expect(root).toBeTruthy();

    rerender(<AIChatLayout isOpen={true} type="expanded" />);

    root = screen.getByTestId('cf-ui-ai-chat-layout');
    expect(root).toBeTruthy();
  });

  it('renders the component with buttons', () => {
    const mockOnClick = jest.fn();
    const buttons = [
      {
        icon: <XIcon />,
        onClick: mockOnClick,
        display: true,
        ariaLabel: 'Close',
        testId: 'close-button',
      },
    ];

    render(<AIChatLayout buttons={buttons} />);

    expect(screen.getByTestId('cf-ui-ai-chat-layout-buttons')).toBeTruthy();
    expect(screen.getByTestId('close-button')).toBeTruthy();
    expect(
      screen.getByTestId('close-button').getElementsByTagName('svg'),
    ).toHaveLength(1);
  });

  it('calls button onClick when clicked', async () => {
    const user = userEvent.setup();
    const mockOnClick = jest.fn();
    const buttons = [
      {
        icon: <XIcon />,
        onClick: mockOnClick,
        display: true,
        ariaLabel: 'Close',
        testId: 'close-button',
      },
    ];

    render(<AIChatLayout buttons={buttons} />);

    const button = screen.getByTestId('close-button');
    await user.click(button);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('calls onOpen when header is clicked and layout is closed', async () => {
    const user = userEvent.setup();
    const mockOnOpen = jest.fn();

    render(<AIChatLayout isOpen={false} onOpen={mockOnOpen} />);

    const header = screen.getByTestId('cf-ui-ai-chat-layout-header');
    await user.click(header);

    expect(mockOnOpen).toHaveBeenCalledTimes(1);
  });

  it('does not call onOpen when header is clicked and layout is open', async () => {
    const user = userEvent.setup();
    const mockOnOpen = jest.fn();

    render(<AIChatLayout isOpen={true} onOpen={mockOnOpen} />);

    const header = screen.getByTestId('cf-ui-ai-chat-layout-header');
    await user.click(header);

    expect(mockOnOpen).not.toHaveBeenCalled();
  });

  it('applies correct aria-label to buttons', () => {
    const buttons = [
      {
        icon: <XIcon />,
        onClick: jest.fn(),
        display: true,
        ariaLabel: 'Close chat',
        testId: 'close-button',
      },
    ];

    render(<AIChatLayout buttons={buttons} />);

    const button = screen.getByTestId('close-button');
    expect(button).toHaveAttribute('aria-label', 'Close chat');
  });

  it('has no a11y issues', async () => {
    const { container } = render(
      <AIChatLayout {...defaultProps}>
        <p>Accessible content</p>
      </AIChatLayout>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('has no a11y issues with buttons', async () => {
    const buttons = [
      {
        icon: <DownloadSimpleIcon />,
        onClick: jest.fn(),
        display: true,
        ariaLabel: 'Download transcript',
      },
      {
        icon: <XIcon />,
        onClick: jest.fn(),
        display: true,
        ariaLabel: 'Close chat',
      },
    ];

    const { container } = render(
      <AIChatLayout {...defaultProps} buttons={buttons}>
        <p>Accessible content with buttons</p>
      </AIChatLayout>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('has no a11y issues when closed', async () => {
    const { container } = render(
      <AIChatLayout {...defaultProps} isOpen={false}>
        <p>Accessible content when closed</p>
      </AIChatLayout>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
