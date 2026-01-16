import {
  Button,
  IconButton,
  type TextLinkProps,
} from '@contentful/f36-components';
import { action } from '@storybook/addon-actions';
import React, { useState } from 'react';
import { AIChatMessage, AIChatMessageProps } from '../src/AIChatMessage';
import {
  ArrowSquareOutIcon,
  CheckCircleIcon,
  CopySimpleIcon,
  PlusIcon,
  ThumbsDownIcon,
  ThumbsUpIcon,
  TranslateIcon,
} from '@contentful/f36-icons';

const CopyButton: React.FC = () => {
  const title = 'Copy message';
  return (
    <IconButton
      variant="transparent"
      size="small"
      icon={<CopySimpleIcon />}
      aria-label={title}
      title={title}
      onClick={() => action(title)()}
    />
  );
};
const LikeMessageButton: React.FC = () => {
  const title = 'Like message';
  return (
    <IconButton
      variant="transparent"
      size="small"
      icon={<ThumbsUpIcon />}
      aria-label={title}
      title={title}
      onClick={() => action(title)()}
    />
  );
};

const DislikeMessageButton: React.FC = () => {
  const title = 'Dislike message';
  return (
    <IconButton
      variant="transparent"
      size="small"
      icon={<ThumbsDownIcon />}
      aria-label={title}
      title={title}
      onClick={() => action(title)()}
    />
  );
};

const AddButton: React.FC = () => {
  const [isAdded, setIsAdded] = useState(false);

  return (
    <Button
      startIcon={isAdded ? <CheckCircleIcon /> : <PlusIcon />}
      onClick={() => setIsAdded(!isAdded)}
      variant={isAdded ? 'positive' : 'primary'}
    >
      {isAdded ? 'Done' : 'Add'}
    </Button>
  );
};

const AssistantMessageActions: React.FC = () => (
  <>
    <CopyButton />
    <LikeMessageButton />
    <DislikeMessageButton />
  </>
);

const Template: React.FC<AIChatMessageProps> = (args) => {
  const messageActions =
    args.authorRole === 'assistant' ? (
      <AssistantMessageActions />
    ) : (
      <CopyButton />
    );
  return <AIChatMessage messageActionButtons={messageActions} {...args} />;
};

export default {
  component: AIChatMessage,
  title: 'Components/AIChat/AIChatMessage',
  render: Template,
  parameters: { propTypes: [AIChatMessage['__docgenInfo']] },
};

const markdown = `
# 🦋 Butterfly and 🐶 Dog Entries
- [Butterflies](#-butterfly-highlights)
- [Dogs](#-dog-highlights)
- [Comparison Table](#-comparison-table)
- [Related Links](#-related-links)

## 📊 Comparison Table

| Feature       | Butterfly 🦋      | Dog 🐶             |
|----------------|-------------------|--------------------|
| Legs           | 6                 | 4                  |
| Warm-blooded   | No                | Yes                |
| Habitat        | Air/Gardens       | Land/Homes         |
| Diet           | Nectar            | Omnivore           |
`;

const advancedMarkdown = `
- [regular link](#)
- <a href="#" target="_blank" rel="noopener noreferrer">new tab link</a>
- <a data-navigatePath="app.page">client side naviagation link</a>

__Or fully custom component:__
<div data-component="add-button" />
`;

const allMarkdownElements = `
# Heading Level 1

## Heading Level 2

### Heading Level 3

This is a paragraph with **bold text** and *italic text*.

Here's some ~~strikethrough text~~ and <ins>underlined text</ins>.

This is \`inline code\` within a sentence.

\`\`\`
function codeBlock() {
  return "This is a code block";
}
\`\`\`

> This is a blockquote. It has a left border and padding.

> > This is a nested blockquote

Here's a [link to example](https://example.com).

### Unordered List
- First item
- Second item
- Third item

### Ordered List
1. First ordered item
2. Second ordered item
3. Third ordered item

### Table

| Feature       | Description       | Status             |
|---------------|-------------------|--------------------|
| Bold          | **bold text**     | Supported          |
| Italic        | *italic text*     | Supported          |
| Code          | \`inline code\`   | Supported          |

This is the last paragraph in the document.
`;

export const UserMessage = {
  args: {
    authorRole: 'user',
    content: 'Find all entries about butterflies and dogs',
  },
};

export const AssistantMessage = {
  args: {
    authorRole: 'assistant',
    content: 'Here are the entries about butterflies and dogs you requested.',
  },
};

export const AssistantMarkdownMessage = {
  args: {
    authorRole: 'assistant',
    content: markdown,
  },
};

export const AllMarkdownElements = {
  args: {
    authorRole: 'assistant',
    content: allMarkdownElements,
  },
};

export const CustomisedMarkdownElements = {
  args: {
    authorRole: 'assistant',
    content: advancedMarkdown,
    contentComponentsOverrides: {
      a: (props) => {
        const overrides: TextLinkProps = {};
        const isNewTab = props.target === '_blank';
        if (isNewTab) {
          overrides.icon = <ArrowSquareOutIcon />;
          overrides.alignIcon = 'end';
        }
        if (props['data-navigatepath']) {
          overrides.onClick = (e) => {
            e.preventDefault();
            action(`Navigate to ${props['data-navigatepath']}`)();
            alert(`Client-side navigation to ${props['data-navigatepath']}`);
          };
        }

        return overrides;
      },
      div: (props) => {
        if (props['data-component'] === 'add-button') {
          return {
            children: <AddButton />,
          };
        }
      },
    },
  },
};

export const AssistantMessageWithAdditionalContent = {
  args: {
    authorRole: 'assistant',
    content:
      '## Entries\n- [Butterflies](#-butterfly-highlights)\n- [Dogs](#-dog-highlights)',
    additionalContent: (
      <Button
        isFullWidth
        startIcon={<TranslateIcon />}
        variant="secondary"
        size="small"
        style={{ marginTop: '8px' }}
      >
        Translate
      </Button>
    ),
  },
};
