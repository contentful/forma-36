import React from 'react';
import {
  NavList,
  DragHandle,
  Menu,
  IconButton,
} from '@contentful/f36-components';
import {
  DotsThreeIcon,
  TrashSimpleIcon,
  ArrowUpIcon,
  ArrowDownIcon,
} from '@contentful/f36-icons';
import * as dndKitReact from '@dnd-kit/react';
import * as dndKitHelpers from '@dnd-kit/helpers';
import * as dndKitReactSortable from '@dnd-kit/react/sortable';

export default function ListReorderExample() {
  const [folders, setFolders] = React.useState([
    { id: 'test', name: 'Fruits' },
    { id: 'bas', name: 'Vegetables' },
    { id: 'folder', name: 'Nuts' },
    { id: 'max', name: 'Seeds' },
  ]);

  const SortableItem = ({ folder, index }) => {
    const [element, setElement] = React.useState<Element | null>(null);
    const handleRef = React.useRef<HTMLButtonElement | null>(null);
    const { isDragging } = dndKitReactSortable.useSortable({
      id: folder.id,
      index,
      element,
      handle: handleRef,
    });
    return (
      <NavList.Item
        ref={setElement}
        as="li"
        key={`folder-item-${folder.id}-${index}`}
        id={folder.id}
        data-shadow={isDragging || undefined}
      >
        <DragHandle
          as="button"
          ref={handleRef}
          label={`Reorder ${folder.name}`}
          variant="transparent"
        />
        {folder.name}
        <Menu>
          <Menu.Trigger>
            <IconButton
              variant="transparent"
              size="small"
              icon={<DotsThreeIcon />}
              aria-label={`Fruits folder actions`}
            />
          </Menu.Trigger>
          <Menu.List>
            <Menu.Item onClick={() => console.log('execute Delete action')}>
              <TrashSimpleIcon size="tiny" />
              Delete
            </Menu.Item>
            <Menu.Divider />
            <Menu.SectionTitle>Reorder</Menu.SectionTitle>
            <Menu.Item onClick={() => console.log('execute move up action')}>
              <ArrowUpIcon size="tiny" />
              Move up
            </Menu.Item>
            <Menu.Item onClick={() => console.log('execute Delete action')}>
              <ArrowDownIcon size="tiny" />
              Move down
            </Menu.Item>
          </Menu.List>
        </Menu>
      </NavList.Item>
    );
  };

  return (
    <dndKitReact.DragDropProvider
      onDragEnd={(event) => {
        setFolders((items) => dndKitHelpers.move(items, event));
      }}
    >
      <div>
        <NavList>
          <ul>
            {folders.map((folder, index) => (
              <SortableItem folder={folder} index={index} />
            ))}
          </ul>
        </NavList>
      </div>
    </dndKitReact.DragDropProvider>
  );
}
