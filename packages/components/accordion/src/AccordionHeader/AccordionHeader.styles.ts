import { css, cx } from '@emotion/css';
import tokens from '@contentful/f36-tokens';

type StyleProps = {
  align: 'start' | 'end';
  isExpanded: boolean;
};

const getHeaderStyles = ({ align }: StyleProps) =>
  cx(
    css({
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      border: '0',
      margin: 0, // remove the default button margin in Safari.
      padding: tokens.spacingM,
      backgroundColor: 'transparent',
      fontFamily: tokens.fontStackPrimary,
      fontSize: tokens.fontSizeL,
      fontWeight: tokens.fontWeightDemiBold,
      lineHeight: tokens.lineHeightL,
      color: tokens.gray800,
      width: '100%',
      minWidth: '9px',
      cursor: 'pointer',
      transition: `background-color ${tokens.transitionDurationDefault} ${tokens.transitionEasingDefault},
        box-shadow ${tokens.transitionDurationShort} ${tokens.transitionEasingDefault}`,
      '&:focus': {
        backgroundColor: tokens.gray100,
        borderRadius: tokens.borderRadiusMedium,
        boxShadow: tokens.glowPrimary,
        outline: 'none',
      },
      '&:focus:not(:focus-visible)': {
        backgroundColor: 'transparent',
        borderRadius: 'unset',
        boxShadow: 'unset',
      },
      '&:focus-visible': {
        backgroundColor: tokens.gray100,
        borderRadius: tokens.borderRadiusMedium,
        boxShadow: tokens.glowPrimary,
      },
      '&:hover, &:focus:hover, &:focus-visible:hover': {
        backgroundColor: tokens.gray100,
      },
    }),
    align === 'end' &&
      css({
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
      }),
  );

const getIconStyles = ({ align, isExpanded }: StyleProps) =>
  cx(
    css({
      transform: 'rotate(0deg)',
      transition: `transform ${tokens.transitionDurationDefault} ${tokens.transitionEasingDefault}`,
    }),
    align === 'end' && css({ marginLeft: tokens.spacingM }),
    align === 'start' && css({ marginRight: tokens.spacingM }),
    isExpanded &&
      css({
        transform: 'rotate(180deg)',
      }),
  );

export const getAccordionHeaderStyles = (props: StyleProps) => ({
  accordionHeader: getHeaderStyles(props),
  accordionHeaderIcon: getIconStyles(props),
});
