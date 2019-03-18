import React, { Component, MouseEventHandler } from 'react';
import cn from 'classnames';
import truncate from 'truncate';
import Card from '../Card';
import Tag, { TagType } from '../../Tag/Tag';
import ReferenceCardSkeleton from './ReferenceCardSkeleton';
const styles = require('./ReferenceCard.css');

export type ReferenceCardStatus =
  | 'archived'
  | 'changed'
  | 'draft'
  | 'published';

export type ReferenceCardPropTypes = {
  title?: string;
  description?: string;
  contentType?: string;
  status: ReferenceCardStatus;
  thumbnailElement?: React.ReactNode;
  loading?: boolean;
  onClick?: MouseEventHandler;
  className?: string;
  actionElements?: React.ReactNode;
  testId?: string;
} & typeof defaultProps;

const defaultProps = {
  title: 'Untitled',
  testId: 'cf-ui-reference-card',
};

export class ReferenceCard extends Component<ReferenceCardPropTypes> {
  static defaultProps = defaultProps;

  renderTitle = (title: string) => {
    const truncatedTitle = truncate(title, 255, {});

    return (
      <h1
        title={title.length > 255 ? title : ''}
        className={styles.ReferenceCard__title}
        data-test-id="title"
      >
        {truncatedTitle}
      </h1>
    );
  };

  renderDescription = (description: string) => {
    const truncatedDescription = truncate(description, 95, {});

    return (
      <p className={styles.ReferenceCard__description}>
        {truncatedDescription}
      </p>
    );
  };

  renderThumbnail = (thumbnailElement: React.ReactNode) => (
    <figure className={styles.ReferenceCard__thumbnail}>
      {thumbnailElement}
    </figure>
  );

  renderActionElements = (actionElements: React.ReactNode) => (
    <div className={styles.ReferenceCard__actions}>{actionElements}</div>
  );

  renderStatus = (status: ReferenceCardStatus) => {
    let label: string;
    let type: TagType;

    switch (status) {
      case 'archived':
        label = 'archived';
        type = 'negative';
        break;

      case 'changed':
        label = 'changed';
        type = 'primary';
        break;

      case 'published':
        label = 'published';
        type = 'positive';
        break;

      default:
        label = 'draft';
        type = 'warning';
    }

    return <Tag tagType={type}>{label}</Tag>;
  };

  render() {
    const {
      className,
      title,
      onClick,
      testId,
      description,
      contentType,
      status,
      thumbnailElement,
      loading,
      actionElements,
      ...otherProps
    } = this.props;

    const classNames = cn(styles.ReferenceCard, className);

    return (
      <Card
        className={classNames}
        onClick={!loading ? onClick : undefined}
        testId={testId}
        {...otherProps}
      >
        {loading ? (
          <ReferenceCardSkeleton />
        ) : (
          <article className={styles.ReferenceCard__wrapper}>
            <React.Fragment>
              <div className={styles.ReferenceCard__meta}>
                <div
                  className={styles['ReferenceCard__content-type']}
                  data-test-id="content-type"
                >
                  {contentType}
                </div>
                {status && this.renderStatus(status)}
                {actionElements && this.renderActionElements(actionElements)}
              </div>
              <div className={styles.ReferenceCard__content}>
                <div className={styles.ReferenceCard__body}>
                  {title && this.renderTitle(title)}
                  {description && this.renderDescription(description)}
                </div>
                {thumbnailElement && this.renderThumbnail(thumbnailElement)}
              </div>
            </React.Fragment>
          </article>
        )}
      </Card>
    );
  }
}

export default ReferenceCard;
