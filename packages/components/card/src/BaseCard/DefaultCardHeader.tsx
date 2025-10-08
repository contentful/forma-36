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
      columnGap: tokens.spacingXs,
      rowGap: tokens.spacing2Xs,
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
      paddingBottom: tokens.spacing2Xs,
      paddingRight: tokens.spacingXs,
      paddingTop: tokens.spacing2Xs,
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
    | 'type'
    | 'icon'
    | 'badge'
    | 'actions'
    | 'actionsButtonProps'
    | 'customActionButton'
  >,
) => {
  const { icon, type, actions, actionsButtonProps, badge, customActionButton } =
    props;
  const styles = getHeaderStyles();

  const renderActionButton = () => {
    if (customActionButton) {
      return (
        <Flex
          // don't propagate click event, so onClick handler on the card is not triggered
          onClick={stopEvents}
          alignItems="center"
        >
          {customActionButton}
        </Flex>
      );
    }
    if (actions && actions.length > 0) {
      return (
        <Flex
          // don't propagate click event, so onClick handler on the card is not triggered
          onClick={stopEvents}
          alignItems="center"
        >
          <CardActions buttonProps={actionsButtonProps}>{actions}</CardActions>
        </Flex>
      );
    }

    return null;
  };

  return (
    <Flex
      flexWrap="wrap"
      className={cx(
        styles.header,
        (actions || customActionButton) && styles.headerWithActions,
      )}
    >
      <Flex flexGrow={1}>
        {type && (
          <Text fontColor="gray600" isWordBreak>
            {type}
          </Text>
        )}
      </Flex>
      {icon && <Flex alignItems="center">{icon}</Flex>}
      {badge && <Flex alignItems="center">{badge}</Flex>}
      {renderActionButton()}
    </Flex>
  );
};

DefaultCardHeader.displayName = 'DefaultCardHeader';
