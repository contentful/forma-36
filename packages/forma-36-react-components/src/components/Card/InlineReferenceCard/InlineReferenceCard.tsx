import React, { Component } from 'react';
import cn from 'classnames';
import { CSSTransition } from 'react-transition-group';
import Card from '../Card';
import CardActions from './../CardActions';

import InlineReferenceCardSkeleton from './InlineReferenceCardSkeleton';
const styles = require('./InlineReferenceCard.css');

export type InlineReferenceCardPropTypes = {
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
   * The publish status of the referenced entity
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
  /**
   * Child nodes to be rendered in the component
   */
  children: React.ReactNode;
} & typeof defaultProps;

const defaultProps = {
  testId: 'cf-ui-inline-reference-card',
};

export class InlineReferenceCard extends Component<
  InlineReferenceCardPropTypes
> {
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
      ...otherProps
    } = this.props;

    const classNames = cn(styles.InlineReferenceCard, className);

    const statusIndicatorClassNames = cn(
      styles['InlineReferenceCard__status-indicator'],
      {
        [styles[`InlineReferenceCard__status-indicator--${status}`]]:
          status && !isLoading,
      },
    );

    return (
      <Card
        selected={isSelected}
        className={classNames}
        {...otherProps}
        data-test-id={testId}
      >
        <CSSTransition
          timeout={100}
          in={isLoading}
          classNames={{
            enter: styles['InlineReferenceCard__spinner--enter'],
            enterActive: styles['InlineReferenceCard__spinner--enter-active'],
            exit: styles['InlineReferenceCard__spinner--exit'],
            exitActive: styles['InlineReferenceCard__spinner--exit-active'],
          }}
          mountOnEnter
          unmountOnExit
        >
          <div className={styles['InlineReferenceCard__skeleton-wrapper']}>
            <InlineReferenceCardSkeleton />
          </div>
        </CSSTransition>
        <div className={statusIndicatorClassNames} />
        <span className={styles['InlineReferenceCard__text-wrapper']}>
          {isLoading ? 'Loading' : children}
        </span>
        {dropdownListElements && (
          <CardActions className={styles['InlineReferenceCard__actions']}>
            {dropdownListElements}
          </CardActions>
        )}
      </Card>
    );
  }
}

export default InlineReferenceCard;
