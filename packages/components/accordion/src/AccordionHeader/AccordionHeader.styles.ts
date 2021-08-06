import { css, cx } from 'emotion';
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
      padding: tokens.spacingM,
      backgroundColor: 'transparent',
      fontFamily: tokens.fontStackPrimary,
      fontSize: tokens.fontSizeL,
      fontWeight: tokens.fontWeightDemiBold,
      lineHeight: tokens.lineHeightDefault,
      color: tokens.gray800,
      width: '100%',
      minWidth: '9px',
      cursor: 'pointer',
      transition: `background-color ${tokens.transitionDurationDefault} ${tokens.transitionEasingDefault}`,
      '&:hover': {
        backgroundColor: tokens.gray100,
      },
      '&:focus': {
        outline: 'none',
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
