import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import truncate from 'truncate';
import Card from '../Card';
import Tag from '../../Tag';
import ReferenceCardSkeleton from './ReferenceCardSkeleton';
const styles = require('./ReferenceCard.css');

interface ReferenceCardPropTypes {
  extraClassNames?: string;
  title?: string;
  testId?: string;
  description?: string;
  contentType?: string;
  status: 'archived' | 'changed' | 'draft' | 'published';
  thumbnailElement: React.ReactNode;
  loading: boolean;
  onClick?: (
    e: React.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>,
  ) => void;
  actionElements: React.ReactNode;
}

export class ReferenceCard extends React.Component<ReferenceCardPropTypes> {
  static defaultProps = {
    title: 'Untitled',
    description: undefined,
    testId: 'cf-ui-reference-card',
    contentType: undefined,
    status: undefined,
    thumbnailElement: undefined,
    loading: undefined,
    onClick: undefined,
    actionElements: undefined,
    extraClassNames: undefined,
  };

  renderTitle = title => {
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

  renderDescription = description => {
    const truncatedDescription = truncate(description, 95, {});

    return (
      <p className={styles.ReferenceCard__description}>
        {truncatedDescription}
      </p>
    );
  };

  renderThumbnail = thumbnailElement => (
    <figure className={styles.ReferenceCard__thumbnail}>
      {thumbnailElement}
    </figure>
  );

  renderActionElements = actionElements => (
    <div className={styles.ReferenceCard__actions}>{actionElements}</div>
  );

  renderStatus = status => {
    let label;
    let type;

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
      extraClassNames,
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

    const classNames = cn(styles.ReferenceCard, extraClassNames);

    return (
      <Card
        extraClassNames={classNames}
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
