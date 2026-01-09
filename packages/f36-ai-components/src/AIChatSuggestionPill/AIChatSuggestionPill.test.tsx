import { DeviceMobileCameraIcon } from '@contentful/f36-icons';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { AIChatSuggestionPill } from './AIChatSuggestionPill';

describe('AIChatSuggestionPill', () => {
  it('renders the component', () => {
    render(
      <AIChatSuggestionPill
        icon={DeviceMobileCameraIcon}
        text="Search for something"
      />,
    );
    expect(screen.getByTestId('cf-ui-ai-chat-suggestion-pill')).toBeTruthy();
    expect(screen.getByText('Search for something')).toBeTruthy();
  });

  it('renders the component with an additional class name', () => {
    const additionalClassName = 'my-extra-class';
    render(
      <AIChatSuggestionPill
        icon={DeviceMobileCameraIcon}
        text="Search for something"
        className={additionalClassName}
      />,
    );
    const element = screen.getByTestId('cf-ui-ai-chat-suggestion-pill');
    expect(element.className).toContain(additionalClassName);
  });

  it('calls onClick when clicked', async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();
    render(
      <AIChatSuggestionPill
        icon={DeviceMobileCameraIcon}
        text="Search for something"
        onClick={handleClick}
      />,
    );
    const button = screen.getByTestId('cf-ui-ai-chat-suggestion-pill');
    await user.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('calls onClick when Enter key is pressed', async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();
    render(
      <AIChatSuggestionPill
        icon={DeviceMobileCameraIcon}
        text="Search for something"
        onClick={handleClick}
      />,
    );
    const button = screen.getByTestId('cf-ui-ai-chat-suggestion-pill');
    button.focus();
    await user.keyboard('{Enter}');
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('calls onClick when Space key is pressed', async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();
    render(
      <AIChatSuggestionPill
        icon={DeviceMobileCameraIcon}
        text="Search for something"
        onClick={handleClick}
      />,
    );
    const button = screen.getByTestId('cf-ui-ai-chat-suggestion-pill');
    button.focus();
    await user.keyboard(' ');
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders with active state', () => {
    render(
      <AIChatSuggestionPill
        icon={DeviceMobileCameraIcon}
        text="Search for something"
        isActive={true}
      />,
    );
    const button = screen.getByTestId('cf-ui-ai-chat-suggestion-pill');
    expect(button).toBeTruthy();
  });

  it('renders with custom testId', () => {
    render(
      <AIChatSuggestionPill
        icon={DeviceMobileCameraIcon}
        text="Search for something"
        testId="custom-test-id"
      />,
    );
    expect(screen.getByTestId('custom-test-id')).toBeTruthy();
  });
});
