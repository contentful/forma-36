import React, { Component, MouseEventHandler } from 'react';
import cn from 'classnames';
import truncate from 'truncate';
import Card from '../Card';
import CardActions from '../CardActions';
import CardDragHandle, {
  CardDragHandlePropTypes,
} from '../CardDragHandle/CardDragHandle';
import Tag, { TagType } from '../../Tag/Tag';
import EntryCardSkeleton from './EntryCardSkeleton';

const styles = require('./EntryCard.css');

export type EntryCardStatus = 'archived' | 'changed' | 'draft' | 'published';

export type EntryCardPropTypes = {
  /**
   * The title of the entry
   */
  title?: string;
  /**
   * An ID used for testing purposes applied as a data attribute (data-test-id)
   */
  testId?: string;
  /**
   * The description of the entry
   */
  description?: string;
  /**
   * The content type of the entry
   */
  contentType?: string;
  /**
   * The publish status of the entry
   */
  status?: EntryCardStatus;
  /**
   * The thumbnail of the entry
   */
  thumbnailElement?: React.ReactNode;
  /**
   * Loading state for the EntryCard - when true will display loading feedback to the user
   */
  loading?: boolean;
  /**
   * The action to be performed on click of the EntryCard
   */
  onClick?: MouseEventHandler;
  /**
   * Class names to be appended to the className prop of the component
   */
  className?: string;
  /**
   * The DropdownList elements used to render an actions dropdown for the EntryCard
   */
  dropdownListElements?: React.ReactElement;
  /**
   * Renders a drag handle for the component for use in drag and drop contexts
   */
  withDragHandle?: boolean;
  /**
   * Applies styling for when the component is actively being dragged by the user
   */
  isDragActive?: boolean;
  /**
   * Props to pass down to the CardDragHandle component
   */
  cardDragHandleProps?: Partial<CardDragHandlePropTypes>;
} & typeof defaultProps;

const defaultProps = {
  title: 'Untitled',
  testId: 'cf-ui-entry-card',
};

export class EntryCard extends Component<EntryCardPropTypes> {
  static defaultProps = defaultProps;

  state = {
    isDropdownOpen: false,
  };

  renderTitle = (title: string) => {
    const truncatedTitle = truncate(title, 255, {});

    return (
      <h1
        title={title.length > 255 ? title : ''}
        className={styles.EntryCard__title}
        data-test-id="title"
      >
        {truncatedTitle}
      </h1>
    );
  };

  renderDescription = (description: string) => {
    const truncatedDescription = truncate(description, 95, {});

    return (
      <p className={styles.EntryCard__description}>{truncatedDescription}</p>
    );
  };

  renderThumbnail = (thumbnailElement: React.ReactNode) => (
    <figure className={styles.EntryCard__thumbnail}>{thumbnailElement}</figure>
  );

  renderStatus = (status: EntryCardStatus) => {
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
      withDragHandle,
      isDragActive,
      cardDragHandleProps,
      ...otherProps
    } = this.props;

    const classNames = cn(
      styles.EntryCard,
      { [styles['EntryCard--drag-active']]: isDragActive },
      className,
    );

    return (
      <Card
        className={classNames}
        onClick={!loading ? onClick : undefined}
        testId={testId}
        padding="none"
        {...otherProps}
      >
        {loading ? (
          <div className={styles.EntryCard__wrapper}>
            <EntryCardSkeleton />
          </div>
        ) : (
          <React.Fragment>
            {withDragHandle && (
              <CardDragHandle
                isDragActive={isDragActive}
                {...cardDragHandleProps}
              >
                Reorder entry
              </CardDragHandle>
            )}
            <article className={styles.EntryCard__wrapper}>
              <React.Fragment>
                <div className={styles.EntryCard__meta}>
                  <div
                    className={styles['EntryCard__content-type']}
                    data-test-id="content-type"
                  >
                    {contentType}
                  </div>
                  {status && this.renderStatus(status)}
                  {dropdownListElements && (
                    <CardActions
                      className={styles['EntryCard__actions']}
                      iconButtonProps={{
                        onClick: e => e.stopPropagation,
                      }}
                    >
                      {dropdownListElements}
                    </CardActions>
                  )}
                </div>
                <div className={styles.EntryCard__content}>
                  <div className={styles.EntryCard__body}>
                    {title && this.renderTitle(title)}
                    {description && this.renderDescription(description)}
                  </div>
                  {thumbnailElement && this.renderThumbnail(thumbnailElement)}
                </div>
              </React.Fragment>
            </article>
          </React.Fragment>
        )}
      </Card>
    );
  }
}

export default EntryCard;
