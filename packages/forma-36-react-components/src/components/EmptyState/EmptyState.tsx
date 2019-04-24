import React, { Component } from 'react';
import cn from 'classnames';
import Heading from '../Typography/Heading';
import Paragraph from '../Typography/Paragraph';

const styles = require('./EmptyState.css');

export type EmptyStateProps = {
  /**
   * Class names to be appended to the className prop of the component
   */
  className?: string;
  /**
   * Child nodes to be rendered in the component
   */
  children?: React.ReactNode;
  /**
   * An ID used for testing purposes applied as a data attribute (data-test-id)
   */
  testId?: string;
  /**
   * Props for image block
   */
  image?: ImageProps;
  /**
   * Heading text
   */
  heading: string;
  /**
   * Description text
   */
  description: string;
} & typeof defaultProps;

interface ImageProps {
  /**
   * Url of the illustration for empty state
   */
  url: string;
  /**
   * Width of the illustration for empty state
   */
  width: string;
  /**
   * Height of the illustration for empty state
   */
  height: string;
  /**
   * Image description
   */
  description: string;
  /**
   * Image class
   */
  className?: string;
}

const defaultProps = {
  testId: 'cf-ui-empty-state',
};

export class EmptyState extends Component<EmptyStateProps> {
  static defaultProps = defaultProps;

  render() {
    const {
      className,
      children,
      testId,
      image,
      heading,
      description,
      ...otherProps
    } = this.props;
    const classNames = cn(styles.EmptyState, className);

    return (
      <div {...otherProps} className={classNames} data-test-id={testId}>
        <div className={styles['EmptyState_container']}>
          {image && (
            <div
              style={{
                backgroundImage: `url(${image.url})`,
                width: image.width,
                height: image.height,
              }}
              className={cn(
                image.className,
                styles['EmptyState_element'],
                styles['EmptyState_illustration'],
              )}
              aria-label={image.description}
              role="img"
            />
          )}
          <Heading element={'h1'} className={styles['EmptyState_element']}>
            {heading}
          </Heading>
          <Paragraph
            element={'p'}
            className={cn(
              styles['EmptyState_paragraph'],
              styles['EmptyState_element'],
            )}
          >
            {description}
          </Paragraph>
          {children}
        </div>
      </div>
    );
  }
}

export default EmptyState;
