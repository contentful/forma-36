import React, { useRef, useEffect } from 'react';
import { getStyles } from './AIChatInput.styles';
import { InputGroup } from '@contentful/f36-forms/src/TextInput/input-group/InputGroup';
import { IconButton } from '@contentful/f36-button';
import { ArrowUpIcon } from '@contentful/f36-icons';
import { Card } from '@contentful/f36-card';
import { Box, Flex, type CommonProps } from '@contentful/f36-core';
import { Editor, EditorContent, useEditor } from '@tiptap/react';
import Document from '@tiptap/extension-document';
import History from '@tiptap/extension-history';
import Paragraph from '@tiptap/extension-paragraph';
import Placeholder from '@tiptap/extension-placeholder';
import Text from '@tiptap/extension-text';

type UseEditorOptions = Parameters<typeof useEditor>[0];

export interface AIChatInputProps extends CommonProps {
  /** Initial content of the input field. See [here](https://tiptap.dev/docs/editor/api/editor#content) */
  initialContent?: UseEditorOptions['content'];
  /** Handler for input field updates */
  onUpdate?: UseEditorOptions['onUpdate'];
  /** Placeholder text for the input field */
  placeholder?: string;
  /** Indicates if the AI is currently streaming a response */
  isSteaming?: boolean;
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
    isSteaming,
    promptInputTools,
    initialContent,
    onUpdate,
    editorExtensions,
  } = props;
  const styles = getStyles();
  const onSubmit: AIChatInputProps['onSubmit'] = (...args) => {
    // Block submits while streaming
    if (isSteaming) return;
    props.onSubmit?.(...args);
  };
  const internalEditorRef = useRef<Editor>(null);
  const editorRef = props.editorRef || internalEditorRef;

  return (
    <Box testId={testId} className={className} style={style} ref={ref}>
      <Card className={styles.aiChatInputCard}>
        <AIChatInputTextArea
          placeholder={placeholder}
          initialContent={initialContent}
          onUpdate={onUpdate}
          onSubmit={onSubmit}
          editorExtensions={editorExtensions}
          editorRef={editorRef}
        />
        <Flex justifyContent="space-between" alignItems="end">
          <InputGroup spacing="spacingS" testId={`${testId}-input-tool-group`}>
            {promptInputTools}
          </InputGroup>
          <Flex alignItems="bottom" className={styles.inputActions}>
            <AIChatSubmitButton
              testId={testId}
              isSteaming={isSteaming}
              onSubmit={onSubmit}
              onStop={onStop}
              editorRef={editorRef}
            />
          </Flex>
        </Flex>
      </Card>
    </Box>
  );
}

type AIChatInputTextAreaProps = Pick<
  AIChatInputProps,
  'placeholder' | 'initialContent' | 'onUpdate' | 'editorExtensions'
> &
  Required<Pick<AIChatInputProps, 'onSubmit' | 'editorRef'>>;

const AIChatInputTextArea: React.FC<AIChatInputTextAreaProps> = ({
  placeholder,
  initialContent,
  onUpdate,
  onSubmit,
  editorExtensions,
  editorRef,
}) => {
  const styles = getStyles();
  const editorContentRef = useRef<HTMLDivElement>(null);

  // Adjust the height of the editor content based on content. Should cap at 5 lines.
  const adjustEditorContentHeight = () => {
    const editorContent = editorContentRef.current;
    if (!editorContent) return;

    // Reset height to auto to correctly calculate scrollHeight
    editorContent.style.height = 'auto';

    // Calculate the line height (approximately 1.5em or 24px)
    const lineHeight = 24;
    const maxRows = 5;
    const maxHeight = lineHeight * maxRows;

    // Set height based on content, but cap at maxHeight
    const newHeight = Math.min(editorContent.scrollHeight, maxHeight);
    editorContent.style.height = `${newHeight}px`;

    // Enable/disable scrolling based on content
    editorContent.style.overflowY =
      editorContent.scrollHeight > maxHeight ? 'auto' : 'hidden';
  };

  const editor = useEditor({
    content: initialContent,
    extensions: [
      ...(editorExtensions || []),
      Document,
      Paragraph,
      Text,
      History,
      Placeholder.configure({ placeholder }),
    ],
    onUpdate: (...args) => {
      adjustEditorContentHeight();
      onUpdate?.(...args);
    },
    editorProps: {
      attributes: { class: styles.editor },
      handleKeyDown(view, event) {
        // Only insert new paragraph on Shift+Enter
        if (event.key === 'Enter' && event.shiftKey) {
          view.dispatch(view.state.tr.split(view.state.selection.from, 1));
          event.preventDefault();
          return true;
        }

        // On Enter, submit the content
        if (event.key === 'Enter') {
          event.preventDefault();
          onSubmit(editor);
          return true;
        }

        return false;
      },
    },
  });

  useEffect(() => {
    if (editorRef && editor) {
      // Expose the editor instance to parent components via editorRef
      editorRef.current = editor;
    }
  }, [editor, editorRef]);

  useEffect(() => {
    // Set initial height
    adjustEditorContentHeight();
  }, []);

  return <EditorContent editor={editor} ref={editorContentRef} />;
};

type AIChatSubmitButtonProps = Pick<
  AIChatInputProps,
  'isSteaming' | 'onSubmit' | 'onStop'
> &
  Required<Pick<AIChatInputProps, 'testId' | 'onSubmit' | 'editorRef'>>;

const AIChatSubmitButton: React.FC<AIChatSubmitButtonProps> = ({
  testId,
  isSteaming,
  onSubmit,
  onStop,
  editorRef,
}) => {
  const styles = getStyles();
  const stopIcon = <Box className={styles.stopIcon} />;
  const submitButton = (
    <IconButton
      testId={`${testId}-submit-button`}
      onClick={() => onSubmit(editorRef.current)}
      variant="primary"
      aria-label="send prompt"
      size="small"
      icon={<ArrowUpIcon />}
    />
  );
  const stopButton = (
    <IconButton
      testId={`${testId}-stop-button`}
      onClick={onStop}
      variant="secondary"
      aria-label="stop generating"
      size="small"
      icon={stopIcon}
    />
  );

  return !isSteaming ? submitButton : stopButton;
};

/**
 * Component allows user to construct and submit prompts to an AI model.
 */
export const AIChatInput = React.forwardRef(_AIChatInput);
