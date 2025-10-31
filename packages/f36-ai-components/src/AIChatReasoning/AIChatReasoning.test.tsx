import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import React from 'react';
import { AIChatReasoning } from './AIChatReasoning';

describe('AIChatReasoning', () => {
  it('renders the component', () => {
    render(<AIChatReasoning />);

    expect(screen.getByTestId('cf-ui-ai-chat-reasoning')).toBeTruthy();
  });

  it('renders the component with an additional class name', () => {
    const additionalClassName = 'my-extra-class';
    render(<AIChatReasoning className={additionalClassName} />);

    expect(
      screen
        .getByTestId('cf-ui-ai-chat-reasoning')
        .classList.contains(additionalClassName),
    ).toBeTruthy();
  });

  it('renders the component with custom testId', () => {
    render(<AIChatReasoning testId="custom-test-id" />);

    expect(screen.getByTestId('custom-test-id')).toBeTruthy();
    expect(screen.getByTestId('custom-test-id-header')).toBeTruthy();
    expect(screen.getByTestId('custom-test-id-content')).toBeTruthy();
    expect(screen.getByTestId('custom-test-id-icon')).toBeTruthy();
    expect(screen.getByTestId('custom-test-id-label')).toBeTruthy();
    expect(screen.getByTestId('custom-test-id-chevron')).toBeTruthy();
  });

  it('renders the component with default "Processing..." label', () => {
    render(<AIChatReasoning />);

    expect(
      screen.getByTestId('cf-ui-ai-chat-reasoning-label'),
    ).toHaveTextContent('Processing...');
  });

  it('renders the component with custom label', () => {
    render(<AIChatReasoning label="Analyzing data..." />);

    expect(
      screen.getByTestId('cf-ui-ai-chat-reasoning-label'),
    ).toHaveTextContent('Analyzing data...');
  });

  it('renders with sparkle icon', () => {
    render(<AIChatReasoning />);

    const iconContainer = screen.getByTestId('cf-ui-ai-chat-reasoning-icon');
    expect(iconContainer).toBeTruthy();
    expect(iconContainer.querySelector('svg')).toBeTruthy();
  });

  it('renders with chevron icon', () => {
    render(<AIChatReasoning />);

    const chevronContainer = screen.getByTestId(
      'cf-ui-ai-chat-reasoning-chevron',
    );
    expect(chevronContainer).toBeTruthy();
    expect(chevronContainer.querySelector('svg')).toBeTruthy();
  });

  it('starts collapsed by default', () => {
    render(<AIChatReasoning>Content here</AIChatReasoning>);

    const header = screen.getByTestId('cf-ui-ai-chat-reasoning-header');
    expect(header).toHaveAttribute('aria-expanded', 'false');
  });

  it('can be initially expanded with defaultExpanded prop', () => {
    render(
      <AIChatReasoning defaultExpanded>
        <div>Content here</div>
      </AIChatReasoning>,
    );

    const header = screen.getByTestId('cf-ui-ai-chat-reasoning-header');
    expect(header).toHaveAttribute('aria-expanded', 'true');
  });

  it('toggles expanded state when header is clicked', async () => {
    const user = userEvent.setup();
    render(
      <AIChatReasoning>
        <div>Content here</div>
      </AIChatReasoning>,
    );

    const header = screen.getByTestId('cf-ui-ai-chat-reasoning-header');

    // Initially collapsed
    expect(header).toHaveAttribute('aria-expanded', 'false');

    // Click to expand
    await user.click(header);
    expect(header).toHaveAttribute('aria-expanded', 'true');

    // Click to collapse
    await user.click(header);
    expect(header).toHaveAttribute('aria-expanded', 'false');
  });

  it('calls onToggle callback when expanded state changes', async () => {
    const user = userEvent.setup();
    const onToggle = jest.fn();

    render(
      <AIChatReasoning onToggle={onToggle}>
        <div>Content here</div>
      </AIChatReasoning>,
    );

    const header = screen.getByTestId('cf-ui-ai-chat-reasoning-header');

    // Click to expand
    await user.click(header);
    expect(onToggle).toHaveBeenCalledWith(true);

    // Click to collapse
    await user.click(header);
    expect(onToggle).toHaveBeenCalledWith(false);
  });

  it('works in controlled mode with isExpanded prop', async () => {
    const user = userEvent.setup();
    const onToggle = jest.fn();
    const { rerender } = render(
      <AIChatReasoning isExpanded={false} onToggle={onToggle}>
        <div>Content here</div>
      </AIChatReasoning>,
    );

    const header = screen.getByTestId('cf-ui-ai-chat-reasoning-header');

    // Initially collapsed (controlled)
    expect(header).toHaveAttribute('aria-expanded', 'false');

    // Click should call onToggle but not change state until parent updates prop
    await user.click(header);
    expect(onToggle).toHaveBeenCalledWith(true);
    expect(header).toHaveAttribute('aria-expanded', 'false'); // Still false because isExpanded prop controls it

    // Parent updates prop to expanded
    rerender(
      <AIChatReasoning isExpanded={true} onToggle={onToggle}>
        <div>Content here</div>
      </AIChatReasoning>,
    );
    expect(header).toHaveAttribute('aria-expanded', 'true');
  });

  it('renders children content when expanded', () => {
    render(
      <AIChatReasoning defaultExpanded>
        <div data-testid="test-content">This is the content</div>
      </AIChatReasoning>,
    );

    expect(screen.getByTestId('test-content')).toHaveTextContent(
      'This is the content',
    );
  });

  it('has proper accessibility attributes', () => {
    render(
      <AIChatReasoning>
        <div>Content here</div>
      </AIChatReasoning>,
    );

    const header = screen.getByTestId('cf-ui-ai-chat-reasoning-header');
    const content = screen.getByTestId('cf-ui-ai-chat-reasoning-content');

    expect(header).toHaveAttribute('aria-expanded');
    expect(header).toHaveAttribute('aria-controls');
    expect(header).toHaveAttribute('type', 'button');
    expect(content).toHaveAttribute('id');

    // Check that aria-controls matches content id
    const ariaControls = header.getAttribute('aria-controls');
    const contentId = content.getAttribute('id');
    expect(ariaControls).toBe(contentId);
  });

  it('can be navigated with keyboard', async () => {
    const user = userEvent.setup();
    render(
      <AIChatReasoning>
        <div>Content here</div>
      </AIChatReasoning>,
    );

    const header = screen.getByTestId('cf-ui-ai-chat-reasoning-header');

    // Focus the header
    header.focus();
    expect(document.activeElement).toBe(header);

    // Press Enter to toggle
    await user.keyboard('{Enter}');
    expect(header).toHaveAttribute('aria-expanded', 'true');

    // Press Space to toggle
    await user.keyboard(' ');
    expect(header).toHaveAttribute('aria-expanded', 'false');
  });

  it('should not have basic accessibility issues', async () => {
    const { container } = render(
      <AIChatReasoning>
        <div>Content here</div>
      </AIChatReasoning>,
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should not have accessibility issues when expanded', async () => {
    const { container } = render(
      <AIChatReasoning defaultExpanded>
        <div>Content here</div>
      </AIChatReasoning>,
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('forwards ref to the root element', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<AIChatReasoning ref={ref} />);

    expect(ref.current).toBe(screen.getByTestId('cf-ui-ai-chat-reasoning'));
  });

  it('passes through other HTML attributes', () => {
    render(<AIChatReasoning data-custom="test-value" />);

    expect(screen.getByTestId('cf-ui-ai-chat-reasoning')).toHaveAttribute(
      'data-custom',
      'test-value',
    );
  });
});
