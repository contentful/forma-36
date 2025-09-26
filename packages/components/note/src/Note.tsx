import { cx } from 'emotion';
import React from 'react';
import {
  Flex,
  Grid,
  type CommonProps,
  type PropsWithHTMLElement,
  type ExpandProps,
} from '@contentful/f36-core';
import { Button } from '@contentful/f36-button';
import { Heading, Paragraph, Text } from '@contentful/f36-typography';
import {
  CheckCircleIcon,
  XIcon,
  WarningOctagonIcon,
  InfoIcon,
  WarningIcon,
  DiamondIcon,
} from '@contentful/f36-icons';
import { Icon } from '@contentful/f36-icon';

import { getNoteStyles } from './Note.styles';
import tokens from '@contentful/f36-tokens';
import { getIconColorToken, iconColorByVariant } from '@contentful/f36-utils';

const icons = {
  primary: InfoIcon,
  positive: CheckCircleIcon,
  negative: WarningOctagonIcon,
  warning: WarningIcon,
  neutral: InfoIcon,
  premium: DiamondIcon,
};

export type NoteVariant =
  | 'negative'
  | 'positive'
  | 'primary'
  | 'warning'
  | 'neutral'
  | 'premium';

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
   * Aria label for the close button
   * @default 'Dismiss'
   */
  closeButtonAriaLabel?: string;
  /**
   * Callback for handling closing
   */
  onClose?: React.MouseEventHandler<HTMLButtonElement>;
  /**
   * Expects any of the icon components to override the default Note variant icon
   */
  icon?: React.ReactElement;
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
      onClose,
      closeButtonAriaLabel = 'Dismiss',
      variant = 'primary',
      testId = 'cf-ui-note',
      title,
      icon,
      ...otherProps
    } = props;

    const styles = getNoteStyles();

    const iconSize = title ? 'medium' : 'small';

    const iconContent = (icon: React.ReactElement) =>
      React.cloneElement(icon, {
        size: iconSize,
        color: tokens[getIconColorToken(variant, iconColorByVariant)],
      });

    return (
      <Grid
        {...otherProps}
        columns={withCloseButton ? 'auto 1fr 24px' : 'auto 1fr'} // 24px is the width of the close button
        as="article"
        className={cx(styles.container({ variant, title }), className)}
        testId={testId}
        ref={ref}
        padding="spacingM"
      >
        {icon ? (
          iconContent(icon)
        ) : (
          <Icon
            as={icons[variant]}
            color={tokens[getIconColorToken(variant, iconColorByVariant)]}
            size={iconSize}
          />
        )}
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
            startIcon={<XIcon className={styles.closeIcon} />}
            onClick={onClose}
            testId={`${testId}-close`}
            aria-label={closeButtonAriaLabel}
            className={styles.close}
          />
        )}
      </Grid>
    );
  },
);

Note.displayName = 'Note';
