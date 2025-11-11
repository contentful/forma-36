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

    render(<AIChatLayout header={{ buttonsRight: buttonsEnd }} />);

    expect(
      screen.getByTestId('cf-ui-ai-chat-layout-buttons-right'),
    ).toBeTruthy();
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

    render(<AIChatLayout header={{ buttonsRight: buttonsEnd }} />);

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

    render(<AIChatLayout header={{ buttonsRight: buttonsEnd }} />);

    const button = screen.getByTestId('close-button');
    expect(button).toHaveAttribute('aria-label', 'Close chat');
  });

  it('renders the component with left buttons', () => {
    const mockOnClick = jest.fn();
    const buttonsLeft = [
      {
        icon: <StarIcon />,
        onClick: mockOnClick,
        display: true,
        ariaLabel: 'Back',
        testId: 'back-button',
      },
    ];

    render(<AIChatLayout header={{ buttonsLeft }} />);

    expect(
      screen.getByTestId('cf-ui-ai-chat-layout-buttons-left'),
    ).toBeTruthy();
    expect(screen.getByTestId('back-button')).toBeTruthy();
    expect(
      screen.getByTestId('back-button').getElementsByTagName('svg'),
    ).toHaveLength(1);
  });

  it('renders the component with fixed buttons', () => {
    const mockOnClick = jest.fn();
    const fixedButtons = [
      {
        icon: <XIcon />,
        onClick: mockOnClick,
        display: true,
        ariaLabel: 'Close',
        testId: 'fixed-close-button',
      },
    ];

    render(<AIChatLayout header={{ fixedButtonsRight: fixedButtons }} />);

    expect(
      screen.getByTestId('cf-ui-ai-chat-layout-fixed-buttons'),
    ).toBeTruthy();
    expect(screen.getByTestId('fixed-close-button')).toBeTruthy();
  });

  it('calls left button onClick when clicked', async () => {
    const user = userEvent.setup();
    const mockOnClick = jest.fn();
    const buttonsLeft = [
      {
        icon: <StarIcon />,
        onClick: mockOnClick,
        display: true,
        ariaLabel: 'Back',
        testId: 'back-button',
      },
    ];

    render(<AIChatLayout header={{ buttonsLeft }} />);

    const button = screen.getByTestId('back-button');
    await user.click(button);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('calls fixed button onClick when clicked', async () => {
    const user = userEvent.setup();
    const mockOnClick = jest.fn();
    const fixedButtons = [
      {
        icon: <XIcon />,
        onClick: mockOnClick,
        display: true,
        ariaLabel: 'Close',
        testId: 'fixed-close-button',
      },
    ];

    render(<AIChatLayout header={{ fixedButtonsRight: fixedButtons }} />);

    const button = screen.getByTestId('fixed-close-button');
    await user.click(button);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('hides buttons when display is false', () => {
    const buttonsRight = [
      {
        icon: <XIcon />,
        onClick: jest.fn(),
        display: false,
        ariaLabel: 'Close',
        testId: 'hidden-button',
      },
    ];

    render(<AIChatLayout header={{ buttonsRight }} />);

    const button = screen.getByTestId('hidden-button');
    expect(button).toHaveAttribute('aria-hidden', 'true');
    expect(button).toHaveAttribute('tabIndex', '-1');
  });

  it('shows buttons when display is true', () => {
    const buttonsRight = [
      {
        icon: <XIcon />,
        onClick: jest.fn(),
        display: true,
        ariaLabel: 'Close',
        testId: 'visible-button',
      },
    ];

    render(<AIChatLayout header={{ buttonsRight }} />);

    const button = screen.getByTestId('visible-button');
    expect(button).toHaveAttribute('aria-hidden', 'false');
    expect(button).not.toHaveAttribute('tabIndex', '-1');
  });

  it('renders with both left and right buttons', () => {
    const buttonsLeft = [
      {
        icon: <StarIcon />,
        onClick: jest.fn(),
        display: true,
        ariaLabel: 'Back',
        testId: 'back-button',
      },
    ];
    const buttonsRight = [
      {
        icon: <XIcon />,
        onClick: jest.fn(),
        display: true,
        ariaLabel: 'Close',
        testId: 'close-button',
      },
    ];

    render(<AIChatLayout header={{ buttonsLeft, buttonsRight }} />);

    expect(
      screen.getByTestId('cf-ui-ai-chat-layout-buttons-left'),
    ).toBeTruthy();
    expect(
      screen.getByTestId('cf-ui-ai-chat-layout-buttons-right'),
    ).toBeTruthy();
    expect(screen.getByTestId('back-button')).toBeTruthy();
    expect(screen.getByTestId('close-button')).toBeTruthy();
  });

  it('renders with all button types', () => {
    const buttonsLeft = [
      {
        icon: <StarIcon />,
        onClick: jest.fn(),
        display: true,
        ariaLabel: 'Back',
        testId: 'back-button',
      },
    ];
    const buttonsRight = [
      {
        icon: <DownloadSimpleIcon />,
        onClick: jest.fn(),
        display: true,
        ariaLabel: 'Download',
        testId: 'download-button',
      },
    ];
    const fixedButtonsRight = [
      {
        icon: <XIcon />,
        onClick: jest.fn(),
        display: true,
        ariaLabel: 'Close',
        testId: 'fixed-close-button',
      },
    ];

    render(
      <AIChatLayout
        header={{ buttonsLeft, buttonsRight, fixedButtonsRight }}
      />,
    );

    expect(
      screen.getByTestId('cf-ui-ai-chat-layout-buttons-left'),
    ).toBeTruthy();
    expect(
      screen.getByTestId('cf-ui-ai-chat-layout-buttons-right'),
    ).toBeTruthy();
    expect(
      screen.getByTestId('cf-ui-ai-chat-layout-fixed-buttons'),
    ).toBeTruthy();
    expect(screen.getByTestId('back-button')).toBeTruthy();
    expect(screen.getByTestId('download-button')).toBeTruthy();
    expect(screen.getByTestId('fixed-close-button')).toBeTruthy();
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
        header={{ ...defaultProps.header, buttonsRight: buttonsEnd }}
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

  it('has no a11y issues with all button types', async () => {
    const buttonsLeft = [
      {
        icon: <StarIcon />,
        onClick: jest.fn(),
        display: true,
        ariaLabel: 'Back to previous',
      },
    ];
    const buttonsRight = [
      {
        icon: <DownloadSimpleIcon />,
        onClick: jest.fn(),
        display: true,
        ariaLabel: 'Download transcript',
      },
    ];
    const fixedButtonsRight = [
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
        header={{
          ...defaultProps.header,
          buttonsLeft,
          buttonsRight,
          fixedButtonsRight,
        }}
      >
        <p>Accessible content with all button types</p>
      </AIChatLayout>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('renders without header when no header props are provided', () => {
    render(<AIChatLayout />);

    expect(screen.getByTestId('cf-ui-ai-chat-layout')).toBeTruthy();
    expect(screen.getByTestId('cf-ui-ai-chat-layout-header')).toBeTruthy();
    // Should still render header container but without content
  });

  it('renders header with slide direction', () => {
    render(
      <AIChatLayout
        header={{
          title: 'Test Chat',
          slideDirection: 'left',
        }}
      />,
    );

    expect(screen.getByTestId('cf-ui-ai-chat-layout-title')).toHaveTextContent(
      'Test Chat',
    );
  });

  it('handles dynamic header changes', () => {
    const { rerender } = render(
      <AIChatLayout
        header={{
          title: 'Original Title',
          icon: <StarIcon />,
        }}
      />,
    );

    expect(
      screen.getAllByTestId('cf-ui-ai-chat-layout-title')[0],
    ).toHaveTextContent('Original Title');

    rerender(
      <AIChatLayout
        header={{
          title: 'Updated Title',
          icon: <XIcon />,
        }}
      />,
    );

    // After rerender, should find the updated title in the slider content
    const titleElements = screen.getAllByTestId('cf-ui-ai-chat-layout-title');
    const hasUpdatedTitle = titleElements.some(
      (element) => element.textContent === 'Updated Title',
    );
    expect(hasUpdatedTitle).toBe(true);
  });
});
