import React from 'react';
import cn from 'classnames';
import { Heading } from '@contentful/f36-typography';
import { Paragraph } from '../Typography/';
import styles from './EmptyState.css';

export interface EmptyStateProps {
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
   * As alternative,
   */
  customImageElement?: JSX.Element;
  /**
   * Heading text and semantic element type
   */
  headingProps: TextElementProps;
  /**
   * Description text and semantic element type
   */
  descriptionProps: TextElementProps;
}

interface TextElementProps {
  text: React.ReactNode;
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

export function EmptyState({
  className,
  children,
  testId = 'cf-ui-empty-state',
  customImageElement,
  imageProps,
  headingProps,
  descriptionProps,
  ...otherProps
}: EmptyStateProps): React.ReactElement {
  const classNames = cn(styles.EmptyState, className);

  return (
    <div {...otherProps} className={classNames} data-test-id={testId}>
      <div className={styles['EmptyState_container']}>
        <div className={styles['EmptyState_element']}>
          {customImageElement
            ? customImageElement
            : imageProps && (
                <img
                  src={imageProps.url}
                  alt={imageProps.description}
                  className={cn(
                    imageProps.className,
                    styles['EmptyState_illustration'],
                  )}
                  style={{
                    height: imageProps.height,
                    width: imageProps.width,
                  }}
                />
              )}
        </div>
        <Heading
          as={headingProps.elementType ? headingProps.elementType : 'h1'}
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
