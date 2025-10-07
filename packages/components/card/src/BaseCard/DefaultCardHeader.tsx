import React from 'react';
import { Flex } from '@contentful/f36-core';
import { Text } from '@contentful/f36-typography';
import { CardActions } from './CardActions';
import { cx } from '@emotion/css';
import { getHeaderStyles } from './DefaultCardHeader.styles';
import { BaseCardInternalProps } from './BaseCard.types';

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
