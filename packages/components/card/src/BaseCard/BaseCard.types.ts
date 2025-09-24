import type { MouseEventHandler, ReactElement, ReactNode } from 'react';
import type { ButtonProps } from '@contentful/f36-button';
import type { CommonProps, MarginProps } from '@contentful/f36-core';

export type CardElement = 'a' | 'article' | 'button' | 'div' | 'fieldset';

export type BaseCardDragHandleProps = {
  /**
   * Render the component with a drag handle
   */
  withDragHandle?: boolean;
  /**
   * Applies dragging styles to the card and drag handle
   */
  isDragging?: boolean;
  /**
   * Custom drag handle renderer. Useful, when integrating cards with drag-n-drop libraries
   */
  dragHandleRender?: (props: {
    isDragging?: boolean;
    drag: React.ReactElement;
  }) => React.ReactElement;
};

export type BaseCardInternalProps = CommonProps &
  MarginProps &
  BaseCardDragHandleProps & {
    /**
     * An array of Menu elements used to render an actions menu
     */
    actions?: React.ReactNodeArray;
    /**
     * Handle tag for Card component
     */
    as?: CardElement;
    /**
     * If the card is selectable and has no title, it will need a aria-label to help screen readers identify it
     */
    ariaLabel?: string;
    /**
     * Badge component to show in Card header
     */
    badge?: ReactNode;
    /**
     * An element to render as the action button
     */
    customActionButton?: ReactNode;
    /**
     * Passing href into the Card. You need to also add property as="a" to make it rendered as <a />
     */
    href?: string;
    /**
     * Child nodes to be rendered in the component
     */
    children?: ReactNode;
    /**
     * Custom header element to render
     */
    header?: ReactElement;
    /**
     * Icon to show in the Card header
     */
    icon?: React.ReactElement | null;
    /**
     * Props to pass to the action menu button
     */
    actionsButtonProps?: Partial<ButtonProps<'button'>>;
    /**
     * Click event handler
     */
    onClick?: MouseEventHandler<HTMLElement>;
    /**
     * Applies hover styles to the card
     */
    isHovered?: boolean;
    /**
     * Applies selected styles to the element
     */
    isSelected?: boolean;
    /**
     * The title of the entry. It will also be used as aria-label
     */
    title?: string;
    /**
     * Type of the entity represented by the card. Shown in the header of the card
     */
    type?: string;
    /**
     * Loading state for the component - when true will display loading feedback to the user
     */
    isLoading?: boolean;
  };
