import React, { HTMLAttributes, useMemo } from 'react';
import { type CommonProps, type ExpandProps, Flex } from '@contentful/f36-core';
import { getUsageCardStyles } from './UsageCard.styles';
import { Card } from '@contentful/f36-card';
import {
  UsageCardContextProvider,
  UsageCardContextType,
} from './UsageCardContext';

export type UsageCardProps = CommonProps &
  HTMLAttributes<HTMLDivElement> & {
    children?: React.ReactNode;
    header?: React.ReactNode;
    description?: React.ReactNode;
    /**
     * The type of the card.
     * @default 'usage'
     */
    variant?: 'usage' | 'info';
  };

function _UsageCard(
  props: ExpandProps<UsageCardProps>,
  ref: React.Ref<HTMLDivElement>,
) {
  const {
    children,
    header,
    description,
    variant = 'usage',
    testId = 'cf-ui-usage-card',
    ...otherProps
  } = props;
  const styles = getUsageCardStyles(variant);

  const contextValue: UsageCardContextType = useMemo(
    () => ({
      variant,
    }),
    [variant],
  );

  return (
    <UsageCardContextProvider value={contextValue}>
      <Card
        {...otherProps}
        className={styles.usageCard}
        ref={ref}
        data-test-id={testId}
      >
        <Flex flexDirection="column">
          {header}
          {children}
          {description}
        </Flex>
      </Card>
    </UsageCardContextProvider>
  );
}

export const UsageCard = React.forwardRef(_UsageCard);
