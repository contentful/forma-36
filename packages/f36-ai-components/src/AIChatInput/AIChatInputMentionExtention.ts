import Mention from '@tiptap/extension-mention';

import { AIChatMentionList } from './AIChatMentionList';
import { ReactRenderer } from '@tiptap/react';

type SuggestionOptions = Parameters<typeof Mention.configure>[0]['suggestion'];

export type AiChatInputMentionConfig = Pick<
  SuggestionOptions,
  'char' | 'items'
>;

export function createAiChatMentionExtension({
  char,
  items,
}: AiChatInputMentionConfig): ReturnType<typeof Mention.configure> {
  return Mention.configure({
    deleteTriggerWithBackspace: true,
    // Remove the @ symbol from the inserted mention
    renderHTML: ({ options, node }) => [
      'span',
      options.HTMLAttributes,
      `${node.attrs.label ?? node.attrs.id}`,
    ],
    renderText: ({ node }) => `${node.attrs.label ?? node.attrs.id}`,
    HTMLAttributes: { class: 'mention' },
    suggestion: {
      char,
      items,
      render: renderer(),
    },
  });
}

const renderer = (): SuggestionOptions['render'] => {
  return () => {
    let component: ReactRenderer | null;

    const handleKeyExit = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        // If Escape key is pressed, close the suggestion
        handleExit();
      }
    };
    const handleClickOutside = (event: MouseEvent): void => {
      if (component && !component.element.contains(event.target as Node)) {
        // If click is outside the menu, close the suggestion
        handleExit();
      }
    };
    const handleExit = () => {
      component?.destroy();
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keyup', handleKeyExit);
    };

    return {
      onStart: (props) => {
        if (!props.clientRect) return;
        // Create menu
        component = new ReactRenderer(AIChatMentionList, {
          props,
          editor: props.editor,
        });

        // Add component to document
        document.body.appendChild(component.element);

        // Add exist event listeners
        document.addEventListener('click', handleClickOutside);
        document.addEventListener('keyup', handleKeyExit);

        // Add exit event listeners
        props.editor.chain().focus().run();
      },

      onUpdate: (props) => component?.updateProps(props),
      onExit: handleExit,
    };
  };
};
