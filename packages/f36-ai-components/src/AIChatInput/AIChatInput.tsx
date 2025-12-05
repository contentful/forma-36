import { Box, Flex, type CommonProps } from '@contentful/f36-core';
import { InputGroup } from '@contentful/f36-forms/src/TextInput/input-group/InputGroup';
import { Editor, useEditor } from '@tiptap/react';
import React, { useRef } from 'react';
import { getStyles } from './AIChatInput.styles';
import { AiChatInputMentionConfig } from './AIChatInputMentionExtention';
import { AIChatSubmitButton } from './AIChatSubmitButton';
import { AIChatInputTextArea } from './AIChatTextArea';
import { cx } from 'emotion';

type UseEditorOptions = Parameters<typeof useEditor>[0];

function isInteractive(el: Element | null): boolean {
  if (!el) return false;
  // If the exact thing you clicked is interactive, or is inside one
  const interactive = el.closest(
    'input, textarea, select, button, a[href], [contenteditable], [tabindex]:not([tabindex="-1"])',
  );
  // Ignore disabled elements
  return !!interactive && !(interactive as HTMLInputElement).disabled;
}

export interface AIChatInputProps extends CommonProps {
  /** Initial content of the input field. See [here](https://tiptap.dev/docs/editor/api/editor#content) */
  initialContent?: UseEditorOptions['content'];
  /** Handler for input field updates */
  onUpdate?: UseEditorOptions['onUpdate'];
  /** Placeholder text for the input field */
  placeholder?: string;
  /** Indicates if the AI is currently streaming a response */
  isStreaming?: boolean;
  /** Handler for submit button click */
  onSubmit: (editor: Editor) => void;
  /** Handler for stop button click */
  onStop: () => void;
  /** Additional tools to be rendered alongside the submit/cancel button */
  promptInputTools?: React.ReactNode;
  /** Additional Tiptap editor extensions. See [here](https://tiptap.dev/docs/editor/core-concepts/extensions) */
  editorExtensions?: UseEditorOptions['extensions'];
  /** Ref to expose the TipTap editor instance to parent components */
  editorRef?: React.MutableRefObject<Editor>;
  /** Allows the client to customize the mention behavior using [tiptap mention](https://tiptap.dev/docs/editor/extensions/nodes/mention) */
  mentionConfig?: AiChatInputMentionConfig;
}

function _AIChatInput(props: AIChatInputProps, ref: React.Ref<HTMLDivElement>) {
  const {
    testId = 'cf-ui-ai-chat-input',
    className,
    style,
    placeholder,
    onStop,
    isStreaming,
    promptInputTools,
    initialContent,
    onUpdate,
    editorExtensions,
    mentionConfig,
  } = props;
  const styles = getStyles();
  const onSubmit: AIChatInputProps['onSubmit'] = (...args) => {
    // Block submits while streaming
    if (isStreaming) return;
    props.onSubmit?.(...args);
  };
  const internalEditorRef = useRef<Editor>(null);
  const editorRef = props.editorRef || internalEditorRef;

  const handleContainerClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (!isInteractive(e.target as Element)) {
      // If anywhere on the container is selected, other than interactive elements,
      //  then focus the editor
      editorRef.current?.chain().focus();
    }
  };

  return (
    <Box
      testId={testId}
      className={cx(className, styles.root)}
      style={style}
      ref={ref}
    >
      <Box
        className={styles.aiChatInputContainer}
        onClick={handleContainerClick}
      >
        <AIChatInputTextArea
          placeholder={placeholder}
          initialContent={initialContent}
          onUpdate={onUpdate}
          onSubmit={onSubmit}
          editorExtensions={editorExtensions}
          mentionConfig={mentionConfig}
          editorRef={editorRef}
        />
        <Flex
          justifyContent="space-between"
          alignItems="end"
          className={styles.inputActionsContainer}
        >
          <InputGroup
            spacing="spacing2Xs"
            testId={`${testId}-input-tool-group`}
          >
            {promptInputTools}
          </InputGroup>
          <Flex alignItems="bottom" className={styles.inputActions}>
            <AIChatSubmitButton
              testId={testId}
              isStreaming={isStreaming}
              onSubmit={onSubmit}
              onStop={onStop}
              editorRef={editorRef}
            />
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}

/**
 * Component allows user to construct and submit prompts to an AI model.
 */
export const AIChatInput = React.forwardRef(_AIChatInput);
