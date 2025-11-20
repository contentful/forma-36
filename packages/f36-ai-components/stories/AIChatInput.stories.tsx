import { action } from '@storybook/addon-actions';
import type { Story } from '@storybook/react';
import React from 'react';

import { Button, IconButton } from '@contentful/f36-button';
import { Flex } from '@contentful/f36-core';
import { CaretDownIcon, PlusIcon } from '@contentful/f36-icons';
import { Menu } from '@contentful/f36-menu';
import { Tooltip } from '@contentful/f36-tooltip';
import { Editor } from '@tiptap/react';
import { range } from 'lodash';
import {
  AIChatInput,
  type AIChatInputProps,
} from '../src/AIChatInput/AIChatInput';
import { AiChatInputMentionConfig } from '../src/AIChatInput/AIChatInputMentionExtention';
import { SuggestionItem } from '../src/AIChatInput/AIChatMentionList';

const DEFAULT_ARGS: Partial<AIChatInputProps> = {
  style: { width: '400px' },
  placeholder: 'Type your message...',
};

const EXAMPLE_CONTENT_TYPES = [
  'Landing Page',
  'Blog Post',
  'Hero Banner',
  'Feature Highlight',
  'Call to Action (CTA)',
  'SEO Metadata',
  'Navigation Menu Item',
  'Footer Link Group',
  'Press Release',
  'News Article',
  'Event',
  'Webinar',
  'Podcast Episode',
  'Video Gallery Item',
  'Business Update',
  'Business Announcement',
];

const Template: React.FC<
  Omit<AIChatInputProps, 'setValue' | 'onSubmit' | 'onStop'>
> = (args) => {
  const [isStreaming, setIsStreaming] = React.useState(
    args.isStreaming || false,
  );
  React.useEffect(() => {
    setIsStreaming(args.isStreaming || false);
  }, [args.isStreaming]);

  return (
    <AIChatInput
      {...args}
      isStreaming={isStreaming}
      onUpdate={(content) => {
        action('onUpdate')(content);
      }}
      onSubmit={(editor) => {
        action('onSubmit')(editor);
        setIsStreaming(true);
      }}
      onStop={() => {
        action('onStop')();
        setIsStreaming(false);
      }}
    />
  );
};

export default {
  title: 'Components/AIChat/AIChatInput',
  component: AIChatInput,
  args: DEFAULT_ARGS,
  render: Template,
  parameters: { propTypes: [AIChatInput['__docgenInfo']] },
};

export const Default = {};

export const InputGrowsWithMultipleLines: Story<AIChatInputProps> = (args) => (
  <Flex gap="spacingM">
    <Template
      {...args}
      initialContent={range(1, 4)
        .map((n) => `<p>${n}</p>`)
        .join('')}
    />
    <Template
      {...args}
      initialContent={range(1, 9)
        .map((n) => `<p>${n}</p>`)
        .join('')}
    />
  </Flex>
);

/** Example of additional prompt input tools for file upload & model selection */
const InputTools: React.FC = () => {
  const models = ['GPT', 'Claude', 'Gemini'];
  const [selectedModel, setSelectedModel] = React.useState(models[0]);
  return (
    <>
      <Tooltip content="Add media to your prompt" placement="bottom">
        <IconButton
          aria-label="Add media"
          variant="secondary"
          size="small"
          icon={<PlusIcon />}
        />
      </Tooltip>
      <Menu>
        <Menu.Trigger>
          <Button variant="secondary" size="small" endIcon={<CaretDownIcon />}>
            {selectedModel}
          </Button>
        </Menu.Trigger>
        <Menu.List>
          {models.map((model) => (
            <Menu.Item
              key={model}
              isActive={model === selectedModel}
              onClick={() => setSelectedModel(model)}
            >
              {model}
            </Menu.Item>
          ))}
        </Menu.List>
      </Menu>
    </>
  );
};

export const WithInputTools = {
  args: { promptInputTools: <InputTools /> },
};

/** With a customized editor to provide @ mentioning ability */
export const WithMentionSupport: Story<AIChatInputProps> = (args) => {
  const mentionConfig: AiChatInputMentionConfig = {
    items: async ({ query }): Promise<SuggestionItem[]> => {
      const items: SuggestionItem[] = EXAMPLE_CONTENT_TYPES.map((label) => ({
        id: label,
        category: 'Content Types',
      }));
      return items
        .filter((item) => item.id.toLowerCase().startsWith(query.toLowerCase()))
        .slice(0, 5);
    },
  };
  const editorRef = React.useRef<Editor>(null);

  return (
    <Template
      {...args}
      editorRef={editorRef}
      promptInputTools={
        <Tooltip
          content="Use this button or the '@' key to specify a content type"
          placement="top"
        >
          {/* Adds the '@' character to allow the user to start the mention */}
          <IconButton
            variant="secondary"
            aria-label="Add variable"
            size="small"
            icon={<>@</>}
            onClick={(e) => {
              if (!editorRef.current) return;
              const editor = editorRef.current;

              // keep focus in the editor (no blur)
              e.preventDefault();
              e.stopPropagation();

              // insert '@' and keep the caret after it
              const { from } = editor.state.selection;
              editor
                .chain()
                .focus()
                .insertContent('@')
                .setTextSelection(from + 1)
                .run();
            }}
          />
        </Tooltip>
      }
      mentionConfig={mentionConfig}
    />
  );
};
