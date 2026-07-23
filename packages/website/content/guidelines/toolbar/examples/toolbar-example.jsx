import { useState } from 'react';
import {
  ChatIcon,
  EyeIcon,
  TagIcon,
  PuzzlePieceIcon,
  StarIcon,
} from '@contentful/f36-icons';
import {
  Badge,
  Button,
  Checkbox,
  Flex,
  Stack,
  Text,
  TextInput,
} from '@contentful/f36-components';

import { Toolbar } from 'core/components/navigation/components/Toolbar';

// ---------------------------------------------------------------------------
// Mock layout — simulates the right-edge AppShell context the toolbar lives in
// ---------------------------------------------------------------------------

function MockLayout({ children }) {
  return (
    <div
      style={{
        display: 'flex',
        height: '600px',
        border: '1px solid #e5e5e5',
        borderRadius: '12px',
        overflow: 'hidden',
        background: '#f9f9f9',
      }}
    >
      <div
        style={{
          flex: 1,
          background: 'white',
          padding: '24px',
          borderRight: '1px solid #e5e5e5',
        }}
      >
        <Text fontColor="gray400" fontSize="fontSizeS">
          ← Editor canvas
        </Text>
      </div>
      <div style={{ height: '100%', display: 'flex' }}>{children}</div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Panel body components — one per toolbar item
// ---------------------------------------------------------------------------

function CommentsPanel() {
  const [draft, setDraft] = useState('');
  const [comments, setComments] = useState([
    { id: 1, text: 'Great hero layout!', author: 'Alice' },
    { id: 2, text: 'Can we swap the image?', author: 'Bob' },
  ]);

  const post = () => {
    if (!draft.trim()) return;
    setComments((prev) => [
      ...prev,
      { id: Date.now(), text: draft.trim(), author: 'You' },
    ]);
    setDraft('');
  };

  return (
    <Stack flexDirection="column" spacing="spacingS">
      <TextInput
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && post()}
        placeholder="Add a comment…"
      />
      <Button
        size="small"
        variant="primary"
        isDisabled={!draft.trim()}
        onClick={post}
      >
        Post
      </Button>
      <Stack flexDirection="column" spacing="spacingXs">
        {comments.map((c) => (
          <div
            key={c.id}
            style={{
              padding: '8px 10px',
              background: '#f4f4f4',
              borderRadius: '6px',
            }}
          >
            <Text fontSize="fontSizeS" fontWeight="fontWeightDemiBold">
              {c.author}
            </Text>
            <Text fontSize="fontSizeS">{c.text}</Text>
          </div>
        ))}
      </Stack>
    </Stack>
  );
}

function TaxonomyPanel() {
  const [selected, setSelected] = useState(['news', 'featured']);
  const tags = ['news', 'featured', 'technology', 'design', 'product'];

  const toggle = (tag) =>
    setSelected((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );

  return (
    <Stack flexDirection="column" spacing="spacingXs">
      {tags.map((tag) => (
        <Checkbox
          key={tag}
          id={tag}
          isChecked={selected.includes(tag)}
          onChange={() => toggle(tag)}
        >
          {tag}
        </Checkbox>
      ))}
    </Stack>
  );
}

function PreviewPanel() {
  return (
    <Stack flexDirection="column" spacing="spacingS">
      <Text fontSize="fontSizeS" fontColor="gray600">
        See how your content renders before publishing.
      </Text>
      <Button variant="secondary" size="small">
        Open live preview
      </Button>
    </Stack>
  );
}

function AppPanel({ name }) {
  return (
    <Stack flexDirection="column" spacing="spacingS">
      <Flex alignItems="center" gap="spacingXs">
        <PuzzlePieceIcon variant="secondary" />
        <Text fontWeight="fontWeightDemiBold">{name}</Text>
      </Flex>
      <Text fontSize="fontSizeS" fontColor="gray500">
        In production this panel renders a sandboxed app iframe.
      </Text>
      <Badge variant="secondary">App connected</Badge>
    </Stack>
  );
}

// ---------------------------------------------------------------------------
// Default example — static set of items
// ---------------------------------------------------------------------------

export function ToolbarDefaultExample() {
  const [commentCount] = useState(3);

  return (
    <MockLayout>
      <Toolbar aria-label="App tools">
        <Toolbar.Item
          id="comments"
          icon={<ChatIcon />}
          title="Comments"
          slotRight={
            <Badge variant="primary" size="small">
              {commentCount}
            </Badge>
          }
        >
          <CommentsPanel />
        </Toolbar.Item>

        <Toolbar.Item id="taxonomy" icon={<TagIcon />} title="Tags">
          <TaxonomyPanel />
        </Toolbar.Item>

        <Toolbar.Item id="preview" icon={<EyeIcon />} title="Preview">
          <PreviewPanel />
        </Toolbar.Item>

        <Toolbar.Item id="my-app" icon={<PuzzlePieceIcon />} title="My App">
          <AppPanel name="My App" />
        </Toolbar.Item>
      </Toolbar>
    </MockLayout>
  );
}

// ---------------------------------------------------------------------------
// slotLeft / slotRight example — custom panel header content
// ---------------------------------------------------------------------------

export function ToolbarSlotExample() {
  return (
    <MockLayout>
      <Toolbar aria-label="App tools">
        <Toolbar.Item
          id="starred"
          icon={<StarIcon />}
          title="Starred"
          isTitleHidden
          slotLeft={
            <Flex alignItems="center" gap="spacingXs">
              <StarIcon size="small" variant="secondary" />
              <Text fontWeight="fontWeightDemiBold" fontSize="fontSizeL">
                Starred items
              </Text>
            </Flex>
          }
          slotRight={<Badge variant="featured">New</Badge>}
        >
          <Stack flexDirection="column" spacing="spacingXs">
            {['Hero section', 'Call to action', 'Footer links'].map((item) => (
              <Flex
                key={item}
                alignItems="center"
                justifyContent="space-between"
                style={{ padding: '6px 0' }}
              >
                <Text fontSize="fontSizeS">{item}</Text>
                <StarIcon size="small" variant="primary" />
              </Flex>
            ))}
          </Stack>
        </Toolbar.Item>

        <Toolbar.Item id="comments" icon={<ChatIcon />} title="Comments">
          <CommentsPanel />
        </Toolbar.Item>
      </Toolbar>
    </MockLayout>
  );
}

// ---------------------------------------------------------------------------
// Dynamic items example — items are added/removed at runtime
// ---------------------------------------------------------------------------

const ALL_APPS = [
  { id: 'comments', label: 'Comments', icon: <ChatIcon /> },
  { id: 'taxonomy', label: 'Tags', icon: <TagIcon /> },
  { id: 'preview', label: 'Preview', icon: <EyeIcon /> },
  { id: 'my-app', label: 'My App', icon: <PuzzlePieceIcon /> },
];

export function ToolbarDynamicExample() {
  const [enabledIds, setEnabledIds] = useState(['comments', 'taxonomy']);

  const toggle = (id) =>
    setEnabledIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );

  const activeApps = ALL_APPS.filter((a) => enabledIds.includes(a.id));

  return (
    <Stack flexDirection="column" spacing="spacingM">
      <Flex gap="spacingXs" flexWrap="wrap">
        {ALL_APPS.map((app) => (
          <Checkbox
            key={app.id}
            id={`toggle-${app.id}`}
            isChecked={enabledIds.includes(app.id)}
            onChange={() => toggle(app.id)}
          >
            {app.label}
          </Checkbox>
        ))}
      </Flex>

      <MockLayout>
        <Toolbar aria-label="App tools">
          {activeApps.map((app) => (
            <Toolbar.Item
              key={app.id}
              id={app.id}
              icon={app.icon}
              title={app.label}
            >
              <AppPanel name={app.label} />
            </Toolbar.Item>
          ))}
        </Toolbar>
      </MockLayout>
    </Stack>
  );
}
