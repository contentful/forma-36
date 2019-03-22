import React, { Component, MouseEventHandler } from 'react';
import cn from 'classnames';
import truncate from 'truncate';
import Card from '../Card';
import CardActions from '../CardActions';
import Tag, { TagType } from '../../Tag/Tag';
import ReferenceCardSkeleton from './ReferenceCardSkeleton';

const styles = require('./ReferenceCard.css');

export type ReferenceCardStatus =
  | 'archived'
  | 'changed'
  | 'draft'
  | 'published';

export type ReferenceCardPropTypes = {
  /**
   * The title of the referenced entity
   */
  title?: string;
  /**
   * An ID used for testing purposes applied as a data attribute (data-test-id)
   */
  testId?: string;
  /**
   * The description of the referenced entity
   */
  description?: string;
  /**
   * The content type of the referenced entity
   */
  contentType?: string;
  /**
   * The publish status of the referenced entity
   */
  status: ReferenceCardStatus;
  /**
   * The thumbnail of the referenced entity
   */
  thumbnailElement?: React.ReactNode;
  /**
   * Loading state for the ReferenceCard - when true will display loading feedback to the user
   */
  loading?: boolean;
  /**
   * The action to be performed on click of the ReferenceCard
   */
  onClick?: MouseEventHandler;
  /**
   * Class names to be appended to the className prop of the component
   */
  className?: string;
  /**
   * The DropdownList elements used to render an actions dropdown for the ReferenceCard
   */
  dropdownListElements?: React.ReactElement;
} & typeof defaultProps;

const defaultProps = {
  title: 'Untitled',
  testId: 'cf-ui-reference-card',
};

export class ReferenceCard extends Component<ReferenceCardPropTypes> {
  static defaultProps = defaultProps;

  state = {
    isDropdownOpen: false,
  };

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
      dropdownListElements,
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
                {dropdownListElements && (
                  <CardActions className={styles['ReferenceCard__actions']}>
                    {dropdownListElements}
                  </CardActions>
                )}
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
