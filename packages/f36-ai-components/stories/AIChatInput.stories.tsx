import type { Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';

import {
  AIChatInput,
  type AIChatInputProps,
} from '../src/AIChatInput/AIChatInput';
import { PlusIcon, CaretDownIcon } from '@contentful/f36-icons';
import { Button, IconButton } from '@contentful/f36-button';
import { Tooltip } from '@contentful/f36-tooltip';
import { Flex } from '@contentful/f36-core';
import { range } from 'lodash';
import Mention from '@tiptap/extension-mention';
import { List } from '@contentful/f36-list';
import { Editor } from '@tiptap/react';
import { Menu } from '@contentful/f36-menu';

const DEFAULT_ARGS: Partial<AIChatInputProps> = {
  style: { width: '400px' },
  placeholder: 'Type your message...',
};

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
  title: 'Components/AIChatInput',
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
          variant="transparent"
          size="small"
          icon={<PlusIcon />}
        />
      </Tooltip>
      <Menu>
        <Menu.Trigger>
          <Button
            variant="transparent"
            size="small"
            endIcon={<CaretDownIcon />}
          >
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
export const WithCustomizedEditorStory: Story<AIChatInputProps> = (args) => {
  const contentTypes = [
    'Article',
    'Blog post',
    'Product description',
    'Marketing copy',
    'Social media post',
    'Press release',
  ];
  const [items, setItems] = React.useState<string[]>(contentTypes);

  // The user can use '@' to filter items from the contentTypesy
  const mentionExtension = Mention.configure({
    HTMLAttributes: { class: 'mention' },
    suggestion: {
      items: ({ query }) => {
        const items = contentTypes
          .filter((item) => item.toLowerCase().startsWith(query.toLowerCase()))
          .slice(0, 5);
        setItems(items);
        return items;
      },
    },
  });
  const editorRef = React.useRef<Editor>(null);

  return (
    <>
      <Template
        {...args}
        editorRef={editorRef}
        promptInputTools={
          <Tooltip
            content="Use this button or the '@' key specify a content type"
            placement="top"
          >
            {/* Adds the '@' character to allow the user to start the mention */}
            <IconButton
              variant="transparent"
              aria-label="Add variable"
              size="small"
              icon={<>@</>}
              onClick={() => {
                if (!editorRef.current) return;
                const editor = editorRef.current;
                editor.chain().focus().insertContent('@').run();
              }}
            />
          </Tooltip>
        }
        editorExtensions={[mentionExtension]}
      />

      <br />
      <b>Content type suggestions</b>
      {items.length > 0 ? (
        <List>
          {items.map((item) => (
            <List.Item key={item}>{item}</List.Item>
          ))}
        </List>
      ) : (
        <pre>No suggestions</pre>
      )}
    </>
  );
};
