import { DownloadSimpleIcon, StarIcon, XIcon } from '@contentful/f36-icons';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import React from 'react';
import { AIChatLayout } from './AIChatLayout';

const defaultProps = {
  display: 'open' as const,
  header: {
    title: 'Test Agent',
    icon: <StarIcon />,
  },
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
    render(
      <AIChatLayout
        header={{
          title: 'Test Chat',
          icon: <StarIcon />,
        }}
      />,
    );

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
    render(<AIChatLayout header={{ title: 'Test' }} />);

    expect(
      screen.queryByTestId('cf-ui-ai-chat-layout-icon'),
    ).not.toBeInTheDocument();
    expect(screen.getByTestId('cf-ui-ai-chat-layout-title')).toBeTruthy();
  });

  it('renders the component without title when not provided', () => {
    render(<AIChatLayout header={{ icon: <StarIcon /> }} />);

    expect(
      screen.queryByTestId('cf-ui-ai-chat-layout-title'),
    ).not.toBeInTheDocument();
    expect(screen.getByTestId('cf-ui-ai-chat-layout-icon')).toBeTruthy();
  });

  it('renders children content when open', () => {
    render(<AIChatLayout display="open">Test content</AIChatLayout>);

    expect(
      screen.getByTestId('cf-ui-ai-chat-layout-content'),
    ).toHaveTextContent('Test content');
  });

  it('hides content when collapsed', () => {
    render(<AIChatLayout display="collapsed">Test content</AIChatLayout>);
    const content = screen.getByTestId('cf-ui-ai-chat-layout-content');

    // Content should be hidden via Collapse component but still in DOM
    expect(content).toHaveTextContent('Test content');

    // The collapse component should set aria-hidden="true" when collapsed
    const collapseContainer = content.closest('[data-test-id="cf-collapse"]');
    expect(collapseContainer).toHaveAttribute('aria-hidden', 'true');
  });

  it('does not render when closed', () => {
    render(<AIChatLayout display="closed">Test content</AIChatLayout>);

    expect(
      screen.queryByTestId('cf-ui-ai-chat-layout'),
    ).not.toBeInTheDocument();
  });

  it('handles different layout variants', () => {
    const { rerender } = render(
      <AIChatLayout display="open" variant="normal" />,
    );

    let root = screen.getByTestId('cf-ui-ai-chat-layout');
    expect(root).toBeTruthy();

    rerender(<AIChatLayout display="open" variant="expanded" />);

    root = screen.getByTestId('cf-ui-ai-chat-layout');
    expect(root).toBeTruthy();
  });

  it('renders the component with buttons', () => {
    const mockOnClick = jest.fn();
    const buttonsEnd = [
      {
        icon: <XIcon />,
        onClick: mockOnClick,
        display: true,
        ariaLabel: 'Close',
        testId: 'close-button',
      },
    ];

    render(<AIChatLayout header={{ buttonsEnd }} />);

    expect(screen.getByTestId('cf-ui-ai-chat-layout-buttons-end')).toBeTruthy();
    expect(screen.getByTestId('close-button')).toBeTruthy();
    expect(
      screen.getByTestId('close-button').getElementsByTagName('svg'),
    ).toHaveLength(1);
  });

  it('calls button onClick when clicked', async () => {
    const user = userEvent.setup();
    const mockOnClick = jest.fn();
    const buttonsEnd = [
      {
        icon: <XIcon />,
        onClick: mockOnClick,
        display: true,
        ariaLabel: 'Close',
        testId: 'close-button',
      },
    ];

    render(<AIChatLayout header={{ buttonsEnd }} />);

    const button = screen.getByTestId('close-button');
    await user.click(button);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('calls onCollapsedClick when header is clicked and layout is collapsed', async () => {
    const user = userEvent.setup();
    const mockOnOpen = jest.fn();

    render(<AIChatLayout display="collapsed" onCollapsedClick={mockOnOpen} />);

    const header = screen.getByTestId('cf-ui-ai-chat-layout-header');
    await user.click(header);

    expect(mockOnOpen).toHaveBeenCalledTimes(1);
  });

  it('does not call onCollapsedClick when header is clicked and layout is open', async () => {
    const user = userEvent.setup();
    const mockOnOpen = jest.fn();

    render(<AIChatLayout display="open" onCollapsedClick={mockOnOpen} />);

    const header = screen.getByTestId('cf-ui-ai-chat-layout-header');
    await user.click(header);

    expect(mockOnOpen).not.toHaveBeenCalled();
  });

  it('applies correct aria-label to buttons', () => {
    const buttonsEnd = [
      {
        icon: <XIcon />,
        onClick: jest.fn(),
        display: true,
        ariaLabel: 'Close chat',
        testId: 'close-button',
      },
    ];

    render(<AIChatLayout header={{ buttonsEnd }} />);

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
    const buttonsEnd = [
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
      <AIChatLayout
        {...defaultProps}
        header={{ ...defaultProps.header, buttonsEnd }}
      >
        <p>Accessible content with buttons</p>
      </AIChatLayout>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('has no a11y issues when collapsed', async () => {
    const { container } = render(
      <AIChatLayout {...defaultProps} display="collapsed">
        <p>Accessible content when collapsed</p>
      </AIChatLayout>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('has no a11y issues when closed', async () => {
    const { container } = render(
      <div>
        <AIChatLayout {...defaultProps} display="closed">
          <p>Accessible content when closed</p>
        </AIChatLayout>
      </div>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
