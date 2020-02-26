import React, { Component } from 'react';
import cn from 'classnames';
import { CSSTransition } from 'react-transition-group';
import Card from '../Card';
import CardActions from './../CardActions';

import InlineEntryCardSkeleton from './InlineEntryCardSkeleton';
import styles from './InlineEntryCard.css';

export type InlineEntryCardPropTypes = {
  /**
   * Gives the component a selected state
   */
  isSelected?: boolean;
  /**
   * The DropdownList elements used to render an actions dropdown for the component
   */
  dropdownListElements?: React.ReactElement;
  /**
   * Loading state for the component - when true will display loading feedback to the user
   */
  isLoading?: boolean;
  /**
   * The publish status of the entry
   */
  status?: 'archived' | 'changed' | 'draft' | 'published';
  /**
   * Class names to be appended to the className prop of the component
   */
  className?: string;
  /**
   * An ID used for testing purposes applied as a data attribute (data-test-id)
   */
  testId?: string;
  href?: string;
  /**
   * Child nodes to be rendered in the component
   */
  children: React.ReactNode;
} & typeof defaultProps;

const defaultProps = {
  testId: 'cf-ui-inline-entry-card',
};

export class InlineEntryCard extends Component<InlineEntryCardPropTypes> {
  static defaultProps = defaultProps;

  render() {
    const {
      className,
      dropdownListElements,
      isSelected,
      children,
      testId,
      isLoading,
      status,
      href,
      ...otherProps
    } = this.props;

    const classNames = cn(styles.InlineEntryCard, className);

    const statusIndicatorClassNames = cn(
      styles['InlineEntryCard__status-indicator'],
      {
        [styles[`InlineEntryCard__status-indicator--${status}`]]:
          status && !isLoading,
      },
    );

    return (
      <Card
        selected={isSelected}
        className={classNames}
        href={href}
        {...otherProps}
        data-test-id={testId}
      >
        <CSSTransition
          timeout={100}
          in={isLoading}
          classNames={{
            enter: styles['InlineEntryCard__spinner--enter'],
            enterActive: styles['InlineEntryCard__spinner--enter-active'],
            exit: styles['InlineEntryCard__spinner--exit'],
            exitActive: styles['InlineEntryCard__spinner--exit-active'],
          }}
          mountOnEnter
          unmountOnExit
        >
          <div className={styles['InlineEntryCard__skeleton-wrapper']}>
            <InlineEntryCardSkeleton />
          </div>
        </CSSTransition>
        <div className={statusIndicatorClassNames} />
        <span className={styles['InlineEntryCard__text-wrapper']}>
          {isLoading ? 'Loading' : children}
        </span>
        {dropdownListElements && (
          <CardActions
            className={styles['InlineEntryCard__actions']}
            iconButtonProps={{
              onClick: e => e.stopPropagation,
            }}
          >
            {dropdownListElements}
          </CardActions>
        )}
      </Card>
    );
  }
}

export default InlineEntryCard;
