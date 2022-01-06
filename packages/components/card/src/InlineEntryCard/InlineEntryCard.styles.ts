import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import { getEntityStatusStyles } from '@contentful/f36-core';

import type { InlineEntryCardProps } from './InlineEntryCard';

export const getInlineEntryCardStyles = () => {
  return {
    actions: css({
      display: 'flex',
      padding: 0,
      marginLeft: tokens.spacingXs,
      minHeight: 'auto',
    }),
    root: ({ status }: { status: InlineEntryCardProps['status'] }) => {
      const statusColors = getEntityStatusStyles({ status });

      return css({
        borderBottomLeftRadius: 0,
        borderTopLeftRadius: 0,
        display: 'inline-flex',
        width: 'auto',
        verticalAlign: 'middle',
        paddingBottom: 0,
        paddingTop: 0,
        paddingLeft: tokens.spacingS,
        paddingRight: tokens.spacing2Xs,
        '[data-card-part="wrapper"]': {
          display: 'inline-flex',
          flexDirection: 'row-reverse',
        },
        '&::before': {
          backgroundColor: statusColors.color,
          bottom: 0,
          content: '""',
          display: 'block',
          left: 0,
          position: 'absolute',
          top: 0,
          width: tokens.spacing2Xs,
        },
      });
    },
    skeleton: css({
      display: 'inline-flex',
      border: `1px solid ${tokens.gray300}`,
      borderTopRightRadius: tokens.borderRadiusMedium,
      borderBottomRightRadius: tokens.borderRadiusMedium,
      padding: tokens.spacingXs,
    }),
  };
};
