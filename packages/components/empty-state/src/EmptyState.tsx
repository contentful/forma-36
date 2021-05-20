import { cx } from 'emotion';
import React from 'react';
import { styles } from './EmptyState.styles';
import { Primitive } from '@contentful/f36-core';
import type { HeadingElement } from '@contentful/f36-typography';
import { Heading, Paragraph, Typography } from '@contentful/f36-typography';

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
  headingProps?: TextElementProps;
  /**
   * Description text and semantic element type
   */
  descriptionProps?: TextElementProps;
}

interface TextElementProps {
  text: React.ReactNode;
  elementType?: HeadingElement;
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

const _EmptyState = (props: EmptyStateProps, ref) => {
  const {
    className,
    children,
    testId = 'cf-ui-empty-state',
    customImageElement,
    imageProps,
    headingProps,
    descriptionProps,
    ...otherProps
  } = props;

  return (
    <Primitive
      ref={ref}
      as="article"
      {...otherProps}
      className={cx(styles.emptyState, className)}
      testId={testId}
    >
      <div className={styles.container}>
        <div className={cx([styles.illustrationContainer, styles.element])}>
          {customImageElement
            ? customImageElement
            : imageProps && (
                <img
                  src={imageProps.url}
                  alt={imageProps.description}
                  className={styles.illustration}
                  style={{
                    height: imageProps.height,
                    width: imageProps.width,
                  }}
                />
              )}
        </div>
        <Typography>
          <Heading
            as={headingProps.elementType ? headingProps.elementType : 'h1'}
            className={styles.element}
          >
            {headingProps.text}
          </Heading>
          <Paragraph
            as={
              descriptionProps.elementType ? descriptionProps.elementType : 'p'
            }
            className={styles.element}
          >
            {descriptionProps.text}
          </Paragraph>
        </Typography>
        {children}
      </div>
    </Primitive>
  );
};

/**
 * @description: EmptyState is a component that helps communicate a interim state in the interface where there is nothing to display.
 */
export const EmptyState = React.forwardRef(_EmptyState);
