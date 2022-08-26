import { cx } from 'emotion';
import React from 'react';
import { Flex, Grid } from '@contentful/f36-core';
import type {
  CommonProps,
  PropsWithHTMLElement,
  ExpandProps,
} from '@contentful/f36-core';
import { Button } from '@contentful/f36-button';
import { Heading, Paragraph, Text } from '@contentful/f36-typography';
import {
  CheckCircleIcon,
  CloseIcon,
  ErrorCircleIcon,
  InfoCircleIcon,
  WarningIcon,
} from '@contentful/f36-icons';
import { Icon } from '@contentful/f36-icon';

import { getNoteStyles } from './Note.styles';

const icons = {
  primary: InfoCircleIcon,
  positive: CheckCircleIcon,
  negative: ErrorCircleIcon,
  warning: WarningIcon,
  neutral: InfoCircleIcon,
};

export type NoteVariant =
  | 'negative'
  | 'positive'
  | 'primary'
  | 'warning'
  | 'neutral';

export type NoteInternalProps = CommonProps & {
  /**
   * Determines style variation of Note component
   */
  variant?: NoteVariant;
  /**
   * Sets title in the Note
   */
  title?: React.ReactNode;
  /**
   * Children of Note
   */
  children?: React.ReactNode | string;
  /**
   * Defines if the close button should be rendered
   * @default false
   */
  withCloseButton?: boolean;
  /**
   * Callback for handling closing
   */
  onClose?: React.MouseEventHandler<HTMLButtonElement>;
};
export type NoteProps = PropsWithHTMLElement<NoteInternalProps, 'article'>;

/**
 * @description: Note provides context and information about a situation or action.
 */
export const Note = React.forwardRef<HTMLElement, ExpandProps<NoteProps>>(
  (props, ref) => {
    const {
      children,
      className,
      withCloseButton = false,
      variant = 'primary',
      onClose,
      testId = 'cf-ui-note',
      title,
      ...otherProps
    } = props;

    const styles = getNoteStyles();

    return (
      <Grid
        {...otherProps}
        columns={withCloseButton ? 'auto 1fr 24px' : 'auto 1fr'} // 24px is the width of the close button
        as="article"
        className={cx(styles.container({ variant }), className)}
        testId={testId}
        ref={ref}
        padding="spacingM"
      >
        <Icon
          as={icons[variant]}
          variant={variant === 'neutral' ? 'muted' : variant}
          size={title ? 'medium' : 'small'}
        />
        <Flex flexDirection="column">
          {title && (
            <Heading
              as="h2"
              className={styles.title}
              marginBottom={!children ? 'none' : 'spacingS'}
            >
              {title}
            </Heading>
          )}
          {children && (
            <Text
              as="div"
              lineHeight="lineHeightM"
              className={styles.description}
            >
              {typeof children === 'string' ? (
                <Paragraph marginBottom="none">{children}</Paragraph>
              ) : (
                children
              )}
            </Text>
          )}
        </Flex>
        {withCloseButton && (
          <Button
            variant="transparent"
            startIcon={<CloseIcon className={styles.closeIcon} />}
            onClick={onClose}
            testId={`${testId}-close`}
            aria-label="Dismiss"
            className={styles.close}
          />
        )}
      </Grid>
    );
  },
);

Note.displayName = 'Note';
