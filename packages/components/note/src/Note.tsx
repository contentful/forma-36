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
  CheckCircleIcon,
  CloseIcon,
  ErrorCircleIcon,
  InfoCircleIcon,
  WarningIcon,
} from '@contentful/f36-icons';
import { Icon } from '@contentful/f36-icon';

import { getStyles } from './Note.styles';

const icons = {
  primary: InfoCircleIcon,
  positive: CheckCircleIcon,
  negative: ErrorCircleIcon,
  warning: WarningIcon,
};

export type NoteVariant = 'negative' | 'positive' | 'primary' | 'warning';

export type NoteInternalProps = CommonProps & {
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
   * Defines if the close button should be rendered
   * @default false
   */
  withCloseButton?: boolean;
  /**
   * Callback for handling closing
   */
  onClose?: Function;
};
export type NoteProps = PolymorphicComponentProps<'article', NoteInternalProps>;

/**
 * @description: Note provides context and information about a situation or action.
 */
export const Note = React.forwardRef<HTMLElement, NoteProps>((props, ref) => {
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

  const styles = getStyles();

  return (
    <Box
      {...otherProps}
      as="article"
      className={cx(styles.note({ variant, withCloseButton }), className)}
      testId={testId}
      ref={ref}
    >
      <Flex marginRight="spacingS">
        <Icon
          as={icons[variant]}
          variant={variant}
          size={title ? 'medium' : 'small'}
        />
      </Flex>
      <div className={styles.info({ withCloseButton })}>
        {title && (
          <Heading as="h2" className={styles.title}>
            {title}
          </Heading>
        )}
        <Text as="p" className={styles.content}>
          {children}
        </Text>
      </div>
      {withCloseButton && (
        <Button
          variant="transparent"
          icon={<CloseIcon />}
          onClick={onClose}
          testId={`${testId}-close`}
          label="Dismiss"
          className={styles.close}
        />
      )}
    </Box>
  );
});

Note.displayName = 'Note';
