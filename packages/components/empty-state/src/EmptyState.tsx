import { cx } from 'emotion';
import React, { forwardRef } from 'react';
import { getStyles } from './EmptyState.styles';
import { Box } from '@contentful/f36-core';
import type {
  CommonProps,
  PolymorphicComponentProps,
} from '@contentful/f36-core';
import type { HeadingElement } from '@contentful/f36-typography';
import { Heading, Paragraph } from '@contentful/f36-typography';

export interface EmptyStateInternalProps extends CommonProps {
  /**
   * Child nodes to be rendered in the component
   */
  children?: React.ReactNode;
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

export type EmptyStateProps = PolymorphicComponentProps<
  'article',
  EmptyStateInternalProps
>;

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

/**
 * @description: EmptyState is a component that helps communicate a interim state in the interface where there is nothing to display.
 */

export const EmptyState = forwardRef<HTMLElement, EmptyStateProps>(
  (props, ref) => {
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

    const styles = getStyles();

    return (
      <Box
        ref={ref}
        as="article"
        testId={testId}
        className={cx(styles.emptyState, className)}
        {...otherProps}
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

          <Heading
            as={headingProps.elementType ? headingProps.elementType : 'h1'}
            className={styles.element}
          >
            {headingProps.text}
          </Heading>
          <Paragraph className={styles.element}>
            {descriptionProps.text}
          </Paragraph>
          {children}
        </div>
      </Box>
    );
  },
);

EmptyState.displayName = 'EmptyState';
