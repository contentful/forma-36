import tokens from '@contentful/f36-tokens';
import { css } from 'emotion';

interface GetStylesParams {
  isUserMessage: boolean;
}

export function getStyles({ isUserMessage }: GetStylesParams) {
  const userMessageStyle = {
    borderRadius: '14px 14px 4px 14px;',
    padding: '12px 16px',
    backgroundColor: tokens.gray200,
    maxWidth: '93%',
    margin: `${tokens.spacingXs} 1px ${tokens.spacingXs} ${tokens.spacingXs}`,
  };

  const assistantMessageStyle = {
    width: tokens.contentWidthFull,
    padding: `${tokens.spacingXs} 11px ${tokens.spacingXs} 11px`,
  };

  return {
    messageContainer: css({
      display: 'flex',
      flexDirection: 'column',
      alignItems: isUserMessage ? 'flex-end' : 'flex-start',
      width: '100%',
    }),
    message: css({
      display: 'inline-flex',
      flexDirection: 'column',
      flex: '0 1 auto',
      flexWrap: 'wrap',
      overflowWrap: 'anywhere',
      wordBreak: 'break-word',
      ...(isUserMessage ? userMessageStyle : assistantMessageStyle),
    }),
    inlineCode: css({
      fontFamily: tokens.fontStackMonospace,
      fontSize: tokens.fontSizeM,
      fontWeight: tokens.fontWeightNormal,
      lineHeight: tokens.lineHeightCondensed,
      marginBottom: tokens.spacingS,
    }),
    codeBlock: css({
      display: 'block',
      padding: tokens.spacingXs,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: tokens.borderRadiusSmall,
      backgroundColor: tokens.gray200,
      fontFamily: tokens.fontStackMonospace,
      fontSize: tokens.fontSizeM,
      fontWeight: tokens.fontWeightNormal,
      lineHeight: tokens.lineHeightCondensed,
      overflowX: 'auto',
      whiteSpace: 'pre-wrap',
      wordBreak: 'break-word',
      marginBottom: tokens.spacingS,
    }),
    blockquote: css({
      borderLeft: `4px solid ${tokens.gray300}`,
      padding: `${tokens.spacingS} ${tokens.spacingM}`,
      marginBottom: tokens.spacingS,
      '> p': {
        padding: 0,
        margin: 0,
      },
    }),
    list: css({
      paddingLeft: tokens.spacingM,
      marginBottom: tokens.spacingS,
    }),
    paragraph: css({
      ':last-child': {
        marginBottom: 0,
      },
      marginBottom: tokens.spacingS,
    }),
    table: css({
      marginBottom: tokens.spacingS,
    }),
  };
}
