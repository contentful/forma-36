import { Menu } from '@contentful/f36-components';
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
  const rect = clientRect();

  const groups = items.reduce<Record<string, SuggestionItem[]>>((acc, item) => {
    const category = item.category || NO_CATEGORY_ID;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {});

  return items.length === 0 ? null : (
    <Menu isOpen usePortal={false} isAutoalignmentEnabled={true}>
      {/* Invisible trigger element positioned at cursor location */}
      <Menu.Trigger>
        <span
          style={{
            position: 'fixed',
            top: rect.top,
            left: rect.left,
            width: rect.width,
            height: rect.height,
            pointerEvents: 'none',
          }}
        />
      </Menu.Trigger>
      <Menu.List onKeyDown={() => editor.commands.focus()}>
        {Object.entries(groups).map(([category, groupItems]) => (
          <React.Fragment key={category}>
            {category !== NO_CATEGORY_ID && (
              <Menu.SectionTitle>{category}</Menu.SectionTitle>
            )}
            {groupItems.map((item, index) => (
              <Menu.Item key={index} onClick={() => command({ id: item.id })}>
                {item.id}
              </Menu.Item>
            ))}
          </React.Fragment>
        ))}
      </Menu.List>
    </Menu>
  );
};
