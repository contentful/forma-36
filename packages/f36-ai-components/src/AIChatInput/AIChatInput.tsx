import React, { useRef } from 'react';
import { getStyles } from './AIChatInput.styles';
import { InputGroup } from '@contentful/f36-forms/src/TextInput/input-group/InputGroup';
import { Box, Flex, type CommonProps } from '@contentful/f36-core';
import { Editor, useEditor } from '@tiptap/react';
import { AIChatSubmitButton } from './AIChatSubmitButton';
import { AIChatInputTextArea } from './AIChatTextArea';

type UseEditorOptions = Parameters<typeof useEditor>[0];

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
  } = props;
  const styles = getStyles();
  const onSubmit: AIChatInputProps['onSubmit'] = (...args) => {
    // Block submits while streaming
    if (isStreaming) return;
    props.onSubmit?.(...args);
  };
  const internalEditorRef = useRef<Editor>(null);
  const editorRef = props.editorRef || internalEditorRef;

  return (
    <Box testId={testId} className={className} style={style} ref={ref}>
      <Box className={styles.aiChatInputContainer}>
        <AIChatInputTextArea
          placeholder={placeholder}
          initialContent={initialContent}
          onUpdate={onUpdate}
          onSubmit={onSubmit}
          editorExtensions={editorExtensions}
          editorRef={editorRef}
        />
        <Flex
          justifyContent="space-between"
          alignItems="end"
          className={styles.inputActionsContainer}
        >
          <InputGroup spacing="spacingS" testId={`${testId}-input-tool-group`}>
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
