import React from 'react';
import { render, screen } from '@testing-library/react';
import { AIChatInput } from './AIChatInput';
import { Editor } from '@tiptap/react';
import { Box } from '@contentful/f36-core';

const mockEditor = {};

jest.mock('@tiptap/react', () => {
  const actual = jest.requireActual('@tiptap/react');
  return {
    ...actual,
    useEditor: jest.fn(() => mockEditor),
    EditorContent: () =>
      React.createElement('div', { 'data-testid': 'editor-content' }),
  };
});

describe('AIChatInput', () => {
  it('renders the component', () => {
    render(<AIChatInput onSubmit={() => {}} onStop={() => {}} />);
    expect(screen.getByTestId('cf-ui-ai-chat-input')).toBeTruthy();
  });

  it('renders the component with an additional class name', () => {
    const additionalClassName = 'my-extra-class';
    render(
      <AIChatInput
        onSubmit={() => {}}
        onStop={() => {}}
        className={additionalClassName}
      />,
    );

    expect(
      screen
        .getByTestId('cf-ui-ai-chat-input')
        .classList.contains(additionalClassName),
    ).toBeTruthy();
  });

  it('renders the component with custom testId', () => {
    render(
      <AIChatInput
        testId="custom-test-id"
        onSubmit={() => {}}
        onStop={() => {}}
      />,
    );

    expect(screen.getByTestId('custom-test-id')).toBeTruthy();
    expect(screen.getByTestId('custom-test-id-submit-button')).toBeTruthy();
    expect(screen.getByTestId('custom-test-id-input-tool-group')).toBeTruthy();
  });

  it('renders the submit button when not streaming and calls onSubmit when clicked', () => {
    const onSubmitMock = jest.fn();
    render(
      <AIChatInput
        isStreaming={false}
        onSubmit={onSubmitMock}
        onStop={() => {}}
      />,
    );

    const submitButton = screen.getByTestId(
      'cf-ui-ai-chat-input-submit-button',
    );
    expect(submitButton).toBeTruthy();

    submitButton.click();
    expect(onSubmitMock).toHaveBeenCalled();
  });

  it('renders the stop button when streaming and calls onStop when clicked', () => {
    const onStopMock = jest.fn();
    render(
      <AIChatInput
        isStreaming={true}
        onSubmit={() => {}}
        onStop={onStopMock}
      />,
    );

    const stopButton = screen.getByTestId('cf-ui-ai-chat-input-stop-button');
    expect(stopButton).toBeTruthy();

    stopButton.click();
    expect(onStopMock).toHaveBeenCalled();
  });

  it('renders additional input tools when provided', () => {
    render(
      <AIChatInput
        testId="custom-test-id"
        onSubmit={() => {}}
        onStop={() => {}}
        promptInputTools={
          <Box testId="custom-test-id-input-tool">Input Tool</Box>
        }
      />,
    );

    expect(screen.getByTestId('custom-test-id-input-tool')).toBeTruthy();
  });

  it('exposes editor instance via ref', () => {
    const editorRef: React.MutableRefObject<Editor | null> = { current: null };
    render(
      <AIChatInput
        testId="custom-test-id"
        onSubmit={() => {}}
        onStop={() => {}}
        editorRef={editorRef}
      />,
    );

    // Verify the ref points to the editor produced by useEditor — proves the
    // wiring in AIChatTextArea's useEffect, not just that the mock has methods.
    expect(editorRef.current).toBe(mockEditor);
  });
});
