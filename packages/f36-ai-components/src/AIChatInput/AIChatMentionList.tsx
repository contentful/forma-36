import { Box, Menu } from '@contentful/f36-components';
import { Editor } from '@tiptap/react';
import React from 'react';

const NO_CATEGORY_ID = '__NA__';

export interface SuggestionItem {
  id: string;
  category?: string;
}

interface AIChatMentionListProps {
  clientRect: (() => DOMRect | null) | null;
  items: SuggestionItem[];
  editor: Editor;
  command: (props: SuggestionItem) => void;
}

export const AIChatMentionList: React.FC<AIChatMentionListProps> = ({
  clientRect,
  items,
  editor,
  command,
}) => {
  const textAreaBottom =
    editor.view.dom.parentElement.getBoundingClientRect().bottom + 10;
  const mentionPosition = clientRect().top + 25;
  const top = Math.min(mentionPosition, textAreaBottom);
  const left = clientRect().left;

  const groups = items.reduce<Record<string, SuggestionItem[]>>((acc, item) => {
    const category = item.category || NO_CATEGORY_ID;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {});

  return items.length === 0 ? null : (
    <Box style={{ position: 'absolute', top, left }}>
      <Menu isOpen usePortal={false}>
        <Menu.List onKeyDown={() => editor.commands.focus()}>
          {Object.entries(groups).map(([category, groupItems]) => (
            <>
              {category !== NO_CATEGORY_ID && (
                <Menu.SectionTitle key={category}>{category}</Menu.SectionTitle>
              )}
              {groupItems.map((item, index) => (
                <Menu.Item key={index} onClick={() => command({ id: item.id })}>
                  {item.id}
                </Menu.Item>
              ))}
            </>
          ))}
        </Menu.List>
      </Menu>
    </Box>
  );
};
