import React from 'react';
import tokens from '@contentful/f36-tokens';
import { Button, type ButtonProps } from '@contentful/f36-button';
import { css, cx } from '@emotion/css';

const styles = {
  skipButton: css({
    position: 'absolute',
    top: tokens.spacingM,
    opacity: 0,
    width: '0px',
    height: '0px',
    minHeight: 0,
    overflow: 'hidden',
    padding: 0,
    transition: `width ${tokens.transitionDurationDefault} ${tokens.transitionEasingDefault}`,
    zIndex: tokens.zIndexWorkbenchHeader,
    '&:focus': {
      opacity: 1,
      width: 'auto',
      height: 'auto',
      padding: `${tokens.spacingXs} ${tokens.spacingM}`,
      minHeight: `40px`,
    },
  }),
};

interface SkipButtonProps extends ButtonProps<'a'> {
  title: string;
  href: string;
}

export const SkipButton = (props: SkipButtonProps) => {
  const {
    testId = 'cf-ui-skipToMainButton',
    className,
    href,
    title,
    ...otherProps
  } = props;
  const componentClassNames = cx(styles.skipButton, className);

  return (
    <Button
      testId={testId}
      className={componentClassNames}
      variant="secondary"
      href={href}
      {...otherProps}
    >
      {title}
    </Button>
  );
};
