import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { css, cx } from '@emotion/css';
import tokens from '@contentful/f36-tokens';
import { Badge } from '@contentful/f36-badge';
import { Button, ToggleButton } from '@contentful/f36-button';
import { Flex, ScreenReaderOnly, Stack } from '@contentful/f36-core';
import { FormControl, Select, Switch, TextInput } from '@contentful/f36-forms';
import { Menu } from '@contentful/f36-menu';
import {
  ArrowCounterClockwiseIcon,
  CaretDownIcon,
  CheckIcon,
  VariableIcon,
  WarningIcon,
} from '@contentful/f36-icons';
import { Paragraph } from '@contentful/f36-typography';

import {
  InlineConfigurationPopover,
  useInlineConfigurationPopover,
  type InlineConfigurationPopoverProps,
} from '../src';

const meta = {
  title: 'Components/InlineConfigurationPopover',
  component: InlineConfigurationPopover,
  parameters: {
    propTypes: [
      InlineConfigurationPopover['__docgenInfo'],
      InlineConfigurationPopover.Trigger['__docgenInfo'],
      InlineConfigurationPopover.Anchor['__docgenInfo'],
      InlineConfigurationPopover.Content['__docgenInfo'],
      InlineConfigurationPopover.Header['__docgenInfo'],
      InlineConfigurationPopover.Body['__docgenInfo'],
      InlineConfigurationPopover.Footer['__docgenInfo'],
    ],
  },
  argTypes: {
    placement: {
      control: 'select',
      options: [
        'left-start',
        'left-end',
        'right-start',
        'right-end',
        'bottom-start',
        'top-start',
      ],
    },
  },
} satisfies Meta<typeof InlineConfigurationPopover>;

export default meta;

type Story = StoryObj<InlineConfigurationPopoverProps>;

export const Basic: Story = {
  args: {
    placement: 'bottom-start',
    isDraggable: false,
    closeOnBlur: true,
    closeOnEsc: true,
  },
  render: (args) => <BasicStory {...args} />,
};

function BasicStory(args: InlineConfigurationPopoverProps) {
  const [order, setOrder] = useState('newest');
  const [allowOverride, setAllowOverride] = useState(false);

  return (
    <InlineConfigurationPopover {...args}>
      <InlineConfigurationPopover.Trigger>
        <Button size="small" aria-label="Edit query Related posts">
          Edit
        </Button>
      </InlineConfigurationPopover.Trigger>
      <InlineConfigurationPopover.Content>
        <InlineConfigurationPopover.Header
          title="Related posts"
          caption="Query, optional"
        />
        <InlineConfigurationPopover.Body>
          <FormControl marginBottom="none">
            <FormControl.Label>Order</FormControl.Label>
            <Select
              size="small"
              value={order}
              onChange={(event) => setOrder(event.target.value)}
            >
              <Select.Option value="newest">Newest first</Select.Option>
              <Select.Option value="oldest">Oldest first</Select.Option>
            </Select>
          </FormControl>
          <Switch
            isChecked={allowOverride}
            onChange={(event) => setAllowOverride(event.target.checked)}
          >
            Let your app override these values
          </Switch>
        </InlineConfigurationPopover.Body>
      </InlineConfigurationPopover.Content>
    </InlineConfigurationPopover>
  );
}

/* -------------------------------------------------------------------------- */
/* Parameter list: the use case from the Experience Orchestration node panel  */
/* -------------------------------------------------------------------------- */

const rowStyles = {
  panel: css({
    width: 380,
    marginLeft: 'auto',
    padding: tokens.spacingM,
    height: 420,
    overflowY: 'auto',
    borderLeft: `1px solid ${tokens.gray200}`,
    backgroundColor: tokens.gray100,
  }),
  row: css({
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingXs,
    padding: `${tokens.spacingXs} ${tokens.spacingXs} ${tokens.spacingXs} ${tokens.spacingS}`,
    backgroundColor: tokens.colorWhite,
    border: `1px dashed ${tokens.gray300}`,
    borderRadius: tokens.borderRadiusMedium,
    transition: `border-color ${tokens.transitionDurationShort}, background-color ${tokens.transitionDurationShort}`,
  }),
  rowSet: css({ borderStyle: 'solid' }),
  rowInPath: css({
    borderColor: tokens.purple400,
    backgroundColor: tokens.purple100,
  }),
  rowOpen: css({
    borderStyle: 'solid',
    borderColor: tokens.blue500,
    backgroundColor: tokens.blue100,
  }),
  main: css({
    flex: 1,
    minWidth: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacing2Xs,
  }),
  titleLine: css({
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingXs,
    minWidth: 0,
  }),
  caption: css({
    minWidth: 0,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    color: tokens.gray700,
    fontSize: tokens.fontSizeS,
  }),
  summary: css({
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacing2Xs,
    minWidth: 0,
    color: tokens.gray700,
    fontSize: tokens.fontSizeS,
    lineHeight: tokens.lineHeightS,
  }),
  summaryWarning: css({ color: tokens.orange700 }),
  // A disclosure styled like the prototype's transparent ToggleButton
  trigger: css({
    flexShrink: 0,
    background: 'none',
    borderColor: 'transparent',
    boxShadow: 'none',
    '&:hover': { background: tokens.gray100 },
    '&[data-state="on"], &[data-state="on"]:hover': {
      background: tokens.blue100,
      borderColor: 'transparent',
    },
  }),
  sourceButtons: css({
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingXs,
  }),
  or: css({ color: tokens.gray600, fontSize: tokens.fontSizeS }),
};

type Parameter = {
  key: string;
  name: string;
  caption: string;
  kind: 'entry' | 'number' | 'text';
  isRequired: boolean;
};

type Binding =
  { source: 'path'; field?: string } | { source: 'fixed'; value: string };

const PARAMETERS: Parameter[] = [
  {
    key: 'blogPost',
    name: 'Blog post',
    caption: 'Reference, required',
    kind: 'entry',
    isRequired: true,
  },
  {
    key: 'limit',
    name: 'Limit',
    caption: 'Number, optional',
    kind: 'number',
    isRequired: false,
  },
  {
    key: 'theme',
    name: 'Theme',
    caption: 'Text, optional',
    kind: 'text',
    isRequired: false,
  },
];

function summarize(binding: Binding | undefined) {
  if (!binding) return null;
  if (binding.source === 'path') {
    return binding.field
      ? { text: `In path, ${binding.field} field`, isWarning: false }
      : { text: 'In path, choose a field', isWarning: true };
  }
  return binding.value
    ? { text: binding.value, isWarning: false }
    : { text: 'Enter a value', isWarning: true };
}

function ParameterSettings({
  parameter,
  binding,
  onChange,
}: {
  parameter: Parameter;
  binding: Binding | undefined;
  onChange: (binding: Binding | undefined) => void;
}) {
  const { announce, close } = useInlineConfigurationPopover();

  if (parameter.kind === 'entry') {
    const isInPath = binding?.source === 'path';
    const isFixed = binding?.source === 'fixed';
    return (
      <>
        <div
          className={rowStyles.sourceButtons}
          role="group"
          aria-label="Value source"
        >
          <Button
            size="small"
            isActive={isInPath}
            aria-pressed={isInPath}
            endIcon={isInPath ? <CheckIcon size="tiny" /> : undefined}
            onClick={() => {
              if (isInPath) return;
              onChange({ source: 'path' });
              announce(`${parameter.name} added to path`);
            }}
          >
            Add to path
          </Button>
          <span className={rowStyles.or}>or</span>
          <Button
            size="small"
            isActive={isFixed}
            aria-pressed={isFixed}
            endIcon={isFixed ? <CheckIcon size="tiny" /> : undefined}
            onClick={() => {
              // In the product this opens the entry picker, a modal: close the
              // popover first, then announce the picked entry.
              close();
              onChange({ source: 'fixed', value: 'Belize coconut candle' });
              announce(`${parameter.name} set to Belize coconut candle`);
            }}
          >
            Select content manually
          </Button>
        </div>
        {isInPath && (
          <FormControl marginBottom="none">
            <FormControl.Label>Match field</FormControl.Label>
            <Select
              size="small"
              value={binding.field ?? ''}
              onChange={(event) =>
                onChange({ source: 'path', field: event.target.value })
              }
            >
              <Select.Option value="" isDisabled>
                Choose a field
              </Select.Option>
              <Select.Option value="Slug">Slug</Select.Option>
              <Select.Option value="Title">Title</Select.Option>
            </Select>
          </FormControl>
        )}
      </>
    );
  }

  return (
    <FormControl marginBottom="none">
      <FormControl.Label>
        {parameter.kind === 'number' ? 'Number of items' : 'Value'}
      </FormControl.Label>
      <TextInput
        size="small"
        type={parameter.kind === 'number' ? 'number' : 'text'}
        value={binding?.source === 'fixed' ? binding.value : ''}
        onChange={(event) =>
          onChange({ source: 'fixed', value: event.target.value })
        }
      />
    </FormControl>
  );
}

function ResetButton({
  parameter,
  onReset,
}: {
  parameter: Parameter;
  onReset: () => void;
}) {
  const { announce, close } = useInlineConfigurationPopover();
  return (
    <Button
      size="small"
      variant="transparent"
      startIcon={<ArrowCounterClockwiseIcon />}
      aria-label={`Reset ${parameter.name} to default`}
      onClick={() => {
        onReset();
        close();
        announce(`${parameter.name} reset to default`);
      }}
    >
      Reset
    </Button>
  );
}

function ParameterRow({
  parameter,
  binding,
  isOpen,
  isDraggable,
  onOpen,
  onClose,
  onChange,
}: {
  parameter: Parameter;
  binding: Binding | undefined;
  isOpen: boolean;
  isDraggable: boolean;
  onOpen: () => void;
  onClose: () => void;
  onChange: (binding: Binding | undefined) => void;
}) {
  const summary = summarize(binding);
  const isSet = binding !== undefined;
  const isInPath = binding?.source === 'path';
  const action = isSet
    ? 'Edit'
    : parameter.kind === 'entry'
      ? 'Set'
      : 'Override';
  const summaryId = `parameter-summary-${parameter.key}`;

  return (
    <InlineConfigurationPopover
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
      placement="left-start"
      offset={32}
      isDraggable={isDraggable}
    >
      <InlineConfigurationPopover.Anchor>
        <div
          className={cx(
            rowStyles.row,
            isSet && rowStyles.rowSet,
            isInPath && rowStyles.rowInPath,
            isOpen && rowStyles.rowOpen,
          )}
          data-test-id={`parameter-binding-${parameter.key}`}
        >
          <div className={rowStyles.main}>
            <div className={rowStyles.titleLine}>
              <Badge
                variant="featured"
                size="small"
                textTransform="none"
                startIcon={<VariableIcon size="tiny" />}
              >
                {parameter.name}
              </Badge>
              <span className={rowStyles.caption}>{parameter.caption}</span>
            </div>
            {summary && (
              <span
                id={summaryId}
                className={cx(
                  rowStyles.summary,
                  summary.isWarning && rowStyles.summaryWarning,
                )}
              >
                {summary.isWarning && (
                  <>
                    <WarningIcon size="tiny" aria-hidden />
                    <ScreenReaderOnly as="span">Incomplete: </ScreenReaderOnly>
                  </>
                )}
                {summary.text}
              </span>
            )}
          </div>
          <InlineConfigurationPopover.Trigger>
            <ToggleButton
              size="small"
              className={rowStyles.trigger}
              isActive={isOpen}
              onToggle={() => {}}
              aria-label={`${action} parameter ${parameter.name}`}
              aria-describedby={summary ? summaryId : undefined}
            >
              {action}
            </ToggleButton>
          </InlineConfigurationPopover.Trigger>
        </div>
      </InlineConfigurationPopover.Anchor>

      <InlineConfigurationPopover.Content>
        <InlineConfigurationPopover.Header
          title={parameter.name}
          caption={parameter.caption}
        >
          <Badge
            variant="featured"
            size="small"
            textTransform="none"
            startIcon={<VariableIcon size="tiny" />}
          >
            {parameter.name}
          </Badge>
        </InlineConfigurationPopover.Header>
        <InlineConfigurationPopover.Body>
          <ParameterSettings
            parameter={parameter}
            binding={binding}
            onChange={onChange}
          />
        </InlineConfigurationPopover.Body>
        {isSet && (
          <InlineConfigurationPopover.Footer>
            <ResetButton
              parameter={parameter}
              onReset={() => onChange(undefined)}
            />
          </InlineConfigurationPopover.Footer>
        )}
      </InlineConfigurationPopover.Content>
    </InlineConfigurationPopover>
  );
}

function ParameterList({ isDraggable }: { isDraggable: boolean }) {
  const [openKey, setOpenKey] = useState<string | null>(null);
  const [bindings, setBindings] = useState<Record<string, Binding | undefined>>(
    {},
  );

  return (
    <Flex>
      <Paragraph>
        The list sits in a side panel on the right. Each popover opens to the
        left of its row, level with it, and stays attached while the panel
        scrolls. Only one is open at a time; changes apply immediately.
      </Paragraph>
      <div className={rowStyles.panel}>
        <Stack flexDirection="column" alignItems="stretch" spacing="spacingXs">
          {[
            ...PARAMETERS,
            ...PARAMETERS.map((p) => ({
              ...p,
              key: `${p.key}-2`,
              name: `${p.name} 2`,
            })),
          ].map((parameter) => (
            <ParameterRow
              key={parameter.key}
              parameter={parameter}
              binding={bindings[parameter.key]}
              isOpen={openKey === parameter.key}
              isDraggable={isDraggable}
              onOpen={() => setOpenKey(parameter.key)}
              onClose={() =>
                setOpenKey((current) =>
                  current === parameter.key ? null : current,
                )
              }
              onChange={(binding) =>
                setBindings((current) => ({
                  ...current,
                  [parameter.key]: binding,
                }))
              }
            />
          ))}
          <div style={{ height: 400 }} />
        </Stack>
      </div>
    </Flex>
  );
}

export const ParameterListWithAnchor: Story = {
  render: () => <ParameterList isDraggable={false} />,
};

export const Draggable: Story = {
  render: () => <ParameterList isDraggable />,
};

export const WithNestedMenuAndSelect: Story = {
  render: () => <NestedStory />,
};

function NestedStory() {
  const [contentType, setContentType] = useState('blogPost');
  const [field, setField] = useState('Slug');

  return (
    <InlineConfigurationPopover placement="bottom-start">
      <InlineConfigurationPopover.Trigger>
        <Button size="small" aria-label="Edit parameter Blog post">
          Edit
        </Button>
      </InlineConfigurationPopover.Trigger>
      <InlineConfigurationPopover.Content>
        <InlineConfigurationPopover.Header
          title="Blog post"
          caption="Reference, required"
        />
        <InlineConfigurationPopover.Body>
          <FormControl marginBottom="none">
            <FormControl.Label>Content type</FormControl.Label>
            <Select
              size="small"
              value={contentType}
              onChange={(event) => setContentType(event.target.value)}
            >
              <Select.Option value="blogPost">Blog post</Select.Option>
              <Select.Option value="product">Product</Select.Option>
            </Select>
          </FormControl>
          <Menu>
            <Menu.Trigger>
              <Button size="small" endIcon={<CaretDownIcon />}>
                Match field: {field}
              </Button>
            </Menu.Trigger>
            <Menu.List>
              {['Slug', 'Title', 'Entry ID'].map((name) => (
                <Menu.Item key={name} onClick={() => setField(name)}>
                  {name}
                </Menu.Item>
              ))}
            </Menu.List>
          </Menu>
          <Paragraph marginBottom="none">
            Clicks in the menu don&apos;t close the popover. Escape in the menu
            closes only the menu.
          </Paragraph>
        </InlineConfigurationPopover.Body>
      </InlineConfigurationPopover.Content>
    </InlineConfigurationPopover>
  );
}
