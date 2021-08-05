import { cx } from 'emotion';
import React from 'react';
import { Box, Flex } from '@contentful/f36-core';
import type {
  CommonProps,
  PolymorphicComponentProps,
} from '@contentful/f36-core';
import { Button } from '@contentful/f36-button';
import { Heading, Text } from '@contentful/f36-typography';
import {
  CheckCircle,
  Close,
  ErrorCircle,
  InfoCircle,
  Warning,
} from '@contentful/f36-icons';

import { getStyles } from './Note.styles';

const icons = {
  primary: InfoCircle,
  positive: CheckCircle,
  negative: ErrorCircle,
  warning: Warning,
};

export type NoteVariant = 'negative' | 'positive' | 'primary' | 'warning';

export type NoteOwnProps = CommonProps & {
  /**
   * Determines style variation of Note component
   */
  variant?: NoteVariant;
  /**
   * Sets title in the Note
   */
  title?: string;
  /**
   * Children of Note
   */
  children?: React.ReactNode;
  /**
   * Flag for showing close button
   */
  hasCloseButton?: boolean;
  /**
   * Callback for handling closing
   */
  onClose?: Function;
};

export type NoteProps = PolymorphicComponentProps<'article', NoteOwnProps>;

/**
 * @description: Note provides context and information about a situation or action.
 */
export const Note = React.forwardRef<HTMLElement, NoteProps>((props, ref) => {
  const {
    children,
    className,
    hasCloseButton,
    variant = 'primary',
    onClose,
    testId = 'cf-ui-note',
    title,
    ...otherProps
  } = props;

  const styles = getStyles();

  const Icon = icons[variant!]; // eslint-disable-line @typescript-eslint/no-non-null-assertion
  if (!Icon) {
    throw new Error(`Intent ${variant} is not supported in Note component.`);
  }

  return (
    <Box
      as="article"
      className={cx(styles.note({ variant, hasCloseButton }), className)}
      testId={testId}
      {...otherProps}
      ref={ref}
    >
      <Flex marginRight="spacingS">
        <Icon variant={variant} size={title ? 'medium' : 'small'} />
      </Flex>
      <div className={styles.info({ hasCloseButton })}>
        {title && (
          <Heading as="h2" className={styles.title}>
            {title}
          </Heading>
        )}
        <Text className={styles.content}>{children}</Text>
      </div>
      {hasCloseButton && (
        <Button
          variant="transparent"
          icon={<Close />}
          onClick={() => {
            if (onClose) {
              onClose();
            }
          }}
          testId={`${testId}-close`}
          label="Dismiss"
          className={styles.close}
        />
      )}
    </Box>
  );
});

Note.displayName = 'Note';
