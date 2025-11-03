import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import React from 'react';
import { AIChatReasoning } from './AIChatReasoning';

describe('AIChatReasoning', () => {
  it('renders the component', () => {
    render(<AIChatReasoning />);

    expect(screen.getByTestId('cf-ui-ai-chat-reasoning')).toBeInTheDocument();

    expect(
      screen.getByTestId('cf-ui-ai-chat-reasoning-label'),
    ).toHaveTextContent('Processing');

    const header = screen.getByTestId('cf-ui-ai-chat-reasoning-header');
    expect(header).toHaveAttribute('aria-expanded', 'false');
  });

  it('renders the component with custom label', () => {
    render(<AIChatReasoning label="Analyzing data..." />);

    expect(
      screen.getByTestId('cf-ui-ai-chat-reasoning-label'),
    ).toHaveTextContent('Analyzing data');
  });

  it('can be initially expanded with isExpanded prop', () => {
    render(
      <AIChatReasoning isExpanded={true}>
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

  it('renders children content when expanded', async () => {
    const user = userEvent.setup();
    render(
      <AIChatReasoning>
        <div data-test-id="test-content">This is the content</div>
      </AIChatReasoning>,
    );

    // Content is in DOM but should be hidden initially since component starts collapsed
    const collapseContainer = screen.getByTestId('cf-collapse');
    expect(collapseContainer).toHaveAttribute('aria-hidden', 'true');

    // Click to expand
    const header = screen.getByTestId('cf-ui-ai-chat-reasoning-header');
    await user.click(header);

    // Now content should be visible
    expect(screen.getByTestId('test-content')).toHaveTextContent(
      'This is the content',
    );
    // And collapse container should no longer be hidden
    expect(collapseContainer).toHaveAttribute('aria-hidden', 'false');
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
      <AIChatReasoning isExpanded={true}>
        <div>Content here</div>
      </AIChatReasoning>,
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
