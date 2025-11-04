import { Menu } from '@contentful/f36-components';
import { SuggestionProps } from '@tiptap/suggestion';
import React, { useRef, useEffect } from 'react';

const NO_CATEGORY_ID = '__NA__';

export interface SuggestionItem {
  id: string;
  category?: string;
}

export const AIChatMentionList: React.FC<SuggestionProps<SuggestionItem>> = ({
  clientRect,
  items,
  editor,
  command,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || !clientRect) return;

    // position the menu under the '@' symbol
    const { top, left } = clientRect();
    ref.current.style.position = 'absolute';
    ref.current.style.top = `${top + 25}px`;
    ref.current.style.left = `${left}px`;
  }, []);

  const groups = items.reduce<Record<string, SuggestionItem[]>>((acc, item) => {
    const category = item.category || NO_CATEGORY_ID;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {});

  return (
    <Menu isOpen usePortal={false}>
      <Menu.List ref={ref} onKeyDown={() => editor.commands.focus()}>
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
  );
};
