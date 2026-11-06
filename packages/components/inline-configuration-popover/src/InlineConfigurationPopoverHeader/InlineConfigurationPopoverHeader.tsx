import React from 'react';
import { cx } from '@emotion/css';
import {
  useId,
  type CommonProps,
  type ExpandProps,
  type PropsWithHTMLElement,
} from '@contentful/f36-core';
import { IconButton } from '@contentful/f36-button';
import { DragHandle } from '@contentful/f36-drag-handle';
import { XIcon } from '@contentful/f36-icons';
import { useInlineConfigurationPopoverContext } from '../InlineConfigurationPopoverContext';
import { useInlineConfigurationPopoverDragHandle } from '../InlineConfigurationPopoverContent/InlineConfigurationPopoverContent';
import { getStyles } from './InlineConfigurationPopoverHeader.styles';

interface InlineConfigurationPopoverHeaderInternalProps extends CommonProps {
  /**
   * Plain-text name of the item being configured, e.g. "Blog post". The
   * dialog is named "<title> settings", and the close button and drag handle
   * are named after it.
   */
  title: string;
  /**
   * Short description shown after the title, e.g. "Reference, required".
   * Screen readers read it as the dialog's description when it opens.
   */
  caption?: React.ReactNode;
  /**
   * Content before the title, e.g. an icon
   */
  startSlot?: React.ReactNode;
  /**
   * Replaces the visible title, e.g. with a `Badge`. Its text becomes the
   * dialog's name, so keep it the same as `title`.
   */
  children?: React.ReactNode;
  /**
   * Accessible name of the close button
   *
   * @default "Close <title> settings"
   */
  closeButtonLabel?: string;
  /**
   * Accessible name of the drag handle, when `isDraggable` is set
   *
   * @default "Move <title> settings"
   */
  dragHandleLabel?: string;
}

export type InlineConfigurationPopoverHeaderProps = PropsWithHTMLElement<
  InlineConfigurationPopoverHeaderInternalProps,
  'div'
>;

const INTERACTIVE_SELECTOR =
  'button, a[href], input, select, textarea, [role="button"], [role="link"]';

function getDialogName(title: string) {
  return /\bsettings$/i.test(title.trim()) ? title.trim() : `${title} settings`;
}

/**
 * Header of the popover: the drag handle (when draggable), the item's title
 * (a level 2 heading) and caption, and a close button. It names and
 * describes the dialog.
 */
export const InlineConfigurationPopoverHeader = React.forwardRef<
  HTMLDivElement,
  ExpandProps<InlineConfigurationPopoverHeaderProps>
>(function InlineConfigurationPopoverHeader(props, forwardedRef) {
  const {
    title,
    caption,
    startSlot,
    children,
    closeButtonLabel,
    dragHandleLabel,
    className,
    testId = 'cf-ui-inline-configuration-popover-header',
    onPointerDown,
    ...otherProps
  } = props;
  const { setIsOpen, setLabelId, setDescriptionId } =
    useInlineConfigurationPopoverContext('InlineConfigurationPopover.Header');
  const dragHandle = useInlineConfigurationPopoverDragHandle();
  const styles = getStyles();

  const titleId = useId(undefined, 'inline-configuration-popover-title');
  const suffixId = useId(
    undefined,
    'inline-configuration-popover-title-suffix',
  );
  const captionId = useId(undefined, 'inline-configuration-popover-caption');
  const hasCaption = caption !== undefined && caption !== null;
  const dialogName = getDialogName(title);
  const needsSuffix = dialogName !== title.trim();

  // The dialog is named "<title> settings". The suffix is a separate,
  // hidden element: aria-labelledby joins the ids with a space, which is more
  // reliable across browsers than a visually hidden " settings" inside the
  // title.
  const labelIds = needsSuffix ? `${titleId} ${suffixId}` : titleId;

  React.useEffect(() => {
    setLabelId(labelIds);
    return () => setLabelId(undefined);
  }, [setLabelId, labelIds]);

  React.useEffect(() => {
    setDescriptionId(hasCaption ? captionId : undefined);
    return () => setDescriptionId(undefined);
  }, [setDescriptionId, captionId, hasCaption]);

  // Drag from anywhere in the header except its controls. The drag handle
  // itself is a control, but it's the one that should start a drag.
  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    onPointerDown?.(event);
    if (event.defaultPrevented || !dragHandle?.listeners?.onPointerDown) {
      return;
    }
    const target = event.target as Element;
    const control = target.closest(INTERACTIVE_SELECTOR);
    const handle = dragHandle.activatorNode.current;
    if (control && control !== handle && !handle?.contains(control)) {
      return;
    }
    dragHandle.listeners.onPointerDown(event);
  };

  // Space or Enter picks the popover up; the key must not reach anything
  // else (dnd-kit calls preventDefault() on keys it handles).
  const handleDragHandleKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
  ) => {
    dragHandle?.listeners?.onKeyDown?.(event);
    if (event.defaultPrevented) {
      event.stopPropagation();
    }
  };

  return (
    <div
      {...otherProps}
      ref={forwardedRef}
      className={cx(
        styles.root,
        dragHandle ? styles.draggable : styles.notDraggable,
        dragHandle?.isDragging && styles.dragging,
        className,
      )}
      data-test-id={testId}
      onPointerDown={handlePointerDown}
    >
      {dragHandle && (
        <DragHandle
          {...dragHandle.attributes}
          as="button"
          variant="transparent"
          label={dragHandleLabel ?? `Move ${dialogName}`}
          isActive={dragHandle.isDragging}
          className={styles.dragHandle}
          ref={dragHandle.setActivatorNodeRef}
          onKeyDown={handleDragHandleKeyDown}
          testId="cf-ui-inline-configuration-popover-drag-handle"
        />
      )}
      {startSlot}
      <h2
        id={titleId}
        className={cx(
          styles.title,
          !hasCaption && styles.titleWithoutCaption,
          React.isValidElement(children) && styles.titleCustom,
        )}
      >
        {children ?? title}
      </h2>
      {needsSuffix && (
        <span id={suffixId} hidden>
          settings
        </span>
      )}
      {hasCaption && (
        <span id={captionId} className={styles.caption}>
          {caption}
        </span>
      )}
      <IconButton
        variant="transparent"
        size="small"
        icon={<XIcon size="small" />}
        aria-label={closeButtonLabel ?? `Close ${dialogName}`}
        onClick={() => setIsOpen(false, 'close-button')}
        className={styles.closeButton}
        testId="cf-ui-inline-configuration-popover-close"
      />
    </div>
  );
});

InlineConfigurationPopoverHeader.displayName =
  'InlineConfigurationPopoverHeader';
