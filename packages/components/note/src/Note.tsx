import { cx } from 'emotion';
import React from 'react';
import { Primitive } from '@contentful/f36-core';
import type { CommonProps, ComponentVariant } from '@contentful/f36-core';
import { styles } from './Note.styles';
import { Button } from '@contentful/f36-button';
import { Heading, Text } from '@contentful/f36-typography';
import {
  CheckCircle,
  Close,
  ErrorCircle,
  InfoCircle,
  Warning,
} from '@contentful/f36-icons';

const icons = {
  primary: InfoCircle,
  positive: CheckCircle,
  negative: ErrorCircle,
  warning: Warning,
};

export type NoteVariant = Exclude<ComponentVariant, 'secondary'>;
export interface NoteProps extends CommonProps {
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
}

const _Note = (props: NoteProps, ref) => {
  const {
    children,
    className,
    hasCloseButton,
    variant = 'primary',
    onClose,
    style,
    testId = 'cf-ui-note',
    title,
    ...otherProps
  } = props;

  const Icon = icons[variant!]; // eslint-disable-line @typescript-eslint/no-non-null-assertion
  if (!Icon) {
    throw new Error(`Intent ${variant} is not supported in Note component.`);
  }

  return (
    <Primitive
      as="article"
      style={style}
      className={cx(styles.note({ variant, hasCloseButton }), className)}
      testId={testId}
      ref={ref}
      {...otherProps}
    >
      <div className={styles.icon}>
        <Icon variant={variant} size={title ? 'medium' : 'small'} />
      </div>
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
          variant="secondary"
          icon={Close}
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
    </Primitive>
  );
};

/**
 * @description: Note provides context and information about a situation or action.
 */
export const Note = React.forwardRef(_Note);
