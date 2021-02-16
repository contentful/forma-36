import React from 'react';
import cn from 'classnames';

import Icon from '../../Icon';
import styles from './CardDragHandle.css';

export interface CardDragHandleProps {
  /**
   * Label rendered as child in CardDragHandle - not visible on screen as
   * purpose is for screen readers only
   */
  children: React.ReactNode;
  /**
   * Class names to be appended to the className prop of the component
   */
  className?: string;
  /**
   * An ID used for testing purposes applied as a data attribute (data-test-id)
   */
  testId?: string;
  /**
   * Applies styling for when the component is actively being dragged by the user
   */
  isDragActive?: boolean;
}

export function CardDragHandle({
  className,
  testId = 'cf-ui-card-drag-handle',
  children,
  isDragActive = false,
  ...otherProps
}: CardDragHandleProps): React.ReactElement {
  const classNames = cn(
    styles.CardDragHandle,
    { [styles['CardDragHandle--drag-active']]: isDragActive },
    className,
  );

  return (
    <div className={classNames} data-test-id={testId} {...otherProps}>
      <Icon icon="Drag" color="muted" />
      <span className={styles['CardDragHandle__sr-label']}>{children}</span>
    </div>
  );
}

export default CardDragHandle;
