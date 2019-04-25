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
   * Props for imageProps block
   */
  imageProps?: ImageProps;
  /**
   * Heading text and semantic element type
   */
  headingProps: TextElementProps;
  /**
   * Description text and semantic element type
   */
  descriptionProps: TextElementProps;
} & typeof defaultProps;

interface TextElementProps {
  text: string;
  elementType?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
}

interface ImageProps {
  /**
   * Url of the illustration for empty state
   */
  url: string;
  /**
   * Width of the illustration for empty state, incl. unit
   * for example '200px'
   */
  width: string;
  /**
   * Height of the illustration for empty state, incl. unit
   * for example '200px'
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
      imageProps,
      headingProps,
      descriptionProps,
      ...otherProps
    } = this.props;
    const classNames = cn(styles.EmptyState, className);

    return (
      <div {...otherProps} className={classNames} data-test-id={testId}>
        <div className={styles['EmptyState_container']}>
          {imageProps && (
            <div
              style={{
                backgroundImage: `url(${imageProps.url})`,
                width: imageProps.width,
                height: imageProps.height,
              }}
              className={cn(
                imageProps.className,
                styles['EmptyState_element'],
                styles['EmptyState_illustration'],
              )}
              aria-label={imageProps.description}
              role="img"
            />
          )}
          <Heading
            element={headingProps.elementType ? headingProps.elementType : 'h1'}
            className={styles['EmptyState_element']}
          >
            {headingProps.text}
          </Heading>
          <Paragraph
            element={
              descriptionProps.elementType ? descriptionProps.elementType : 'p'
            }
            className={cn(
              styles['EmptyState_paragraph'],
              styles['EmptyState_element'],
            )}
          >
            {descriptionProps.text}
          </Paragraph>
          {children}
        </div>
      </div>
    );
  }
}

export default EmptyState;
