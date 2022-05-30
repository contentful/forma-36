import React from 'react';
import { Flex } from '@contentful/f36-core';
import { Text } from '@contentful/f36-typography';
import { CardActions } from './CardActions';
import tokens from '@contentful/f36-tokens';

import { cx, css } from 'emotion';

import { BaseCardInternalProps } from './BaseCard.types';

const getHeaderStyles = () => {
  return {
    header: css({
      alignItems: 'center',
      borderBottomColor: tokens.gray200,
      borderBottomStyle: 'solid',
      borderBottomWidth: 1,
      borderTopLeftRadius: tokens.borderRadiusMedium,
      borderTopRightRadius: tokens.borderRadiusMedium,
      boxSizing: 'border-box',
      color: tokens.gray600,
      fontSize: tokens.fontSizeM,
      fontWeight: tokens.fontWeightNormal,
      gridColumn: 'content',
      gridRow: 'header',
      lineHeight: tokens.lineHeightM,
      paddingBottom: tokens.spacingXs,
      paddingLeft: tokens.spacingM,
      paddingRight: tokens.spacingXs,
      paddingTop: tokens.spacingXs,
      minHeight: '37px',
    }),
    headerWithActions: css({
      paddingBottom: 0,
      paddingRight: tokens.spacingXs,
      paddingTop: 0,
    }),
  };
};

export const stopEvents = (e: React.MouseEvent<HTMLElement>) => {
  e.preventDefault();
  e.stopPropagation();
};

export const DefaultCardHeader = (
  props: Pick<
    BaseCardInternalProps,
    'type' | 'icon' | 'badge' | 'actions' | 'actionsButtonProps'
  >,
) => {
  const { icon, type, actions, actionsButtonProps, badge } = props;
  const styles = getHeaderStyles();
  return (
    <Flex className={cx(styles.header, actions && styles.headerWithActions)}>
      <Flex flexGrow={1}>
        {type && (
          <Text fontColor="gray600" isWordBreak>
            {type}
          </Text>
        )}
      </Flex>
      {icon && (
        <Flex alignItems="center" marginLeft="spacingXs">
          {icon}
        </Flex>
      )}
      {badge && (
        <Flex alignItems="center" marginLeft="spacingXs">
          {badge}
        </Flex>
      )}
      {actions && actions.length > 0 && (
        <Flex
          // don't propagate click event, so onClick handler on the card is not triggered
          onClick={stopEvents}
          alignItems="center"
        >
          <CardActions buttonProps={actionsButtonProps}>{actions}</CardActions>
        </Flex>
      )}
    </Flex>
  );
};

DefaultCardHeader.displayName = 'DefaultCardHeader';
