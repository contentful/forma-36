import React, { useRef, useEffect } from 'react';
import { getStyles } from './AIChatInput.styles';
import { EditorContent, useEditor } from '@tiptap/react';
import Document from '@tiptap/extension-document';
import History from '@tiptap/extension-history';
import Paragraph from '@tiptap/extension-paragraph';
import Placeholder from '@tiptap/extension-placeholder';
import Text from '@tiptap/extension-text';
import { AIChatInputProps } from './AIChatInput';
import { createAiChatMentionExtension } from './AIChatInputMentionExtention';

type AIChatInputTextAreaProps = Pick<
  AIChatInputProps,
  | 'placeholder'
  | 'initialContent'
  | 'onUpdate'
  | 'mentionConfig'
  | 'editorExtensions'
> &
  Required<Pick<AIChatInputProps, 'onSubmit' | 'editorRef'>>;

export const AIChatInputTextArea: React.FC<AIChatInputTextAreaProps> = ({
  placeholder,
  initialContent,
  onUpdate,
  onSubmit,
  mentionConfig,
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
      mentionConfig ? createAiChatMentionExtension(mentionConfig) : undefined,
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
