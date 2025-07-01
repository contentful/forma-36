import React from 'react';
import { CommonProps, ExpandProps, Flex } from '@contentful/f36-core';
import { getUsageCardStyles } from './UsageCard.styles';
import { Card } from '@contentful/f36-card';

export type UsageCardProps = CommonProps & {
  children?: React.ReactNode;
  // compounds
  header?: React.ReactNode;
  description?: React.ReactNode;
};

function _UsageCard(
  props: ExpandProps<UsageCardProps>,
  ref: React.Ref<HTMLDivElement>,
) {
  const {
    children,
    header,
    description,
    testId = 'cf-ui-usage-card',
    ...otherProps
  } = props;
  const styles = getUsageCardStyles();

  return (
    <Card
      {...otherProps}
      className={styles.usageCard}
      ref={ref}
      data-test-id={testId}
    >
      <Flex flexDirection="column">
        {header}
        {/* usage component */}
        {description}
      </Flex>
    </Card>
  );
}

/**
 * TODO: Add description of component here.
 * Compounds:
 * - UsageCard.Heading
 * - UsageCount
 * - UsageCard.Description
 * - UsageCard.Link
 * - UsageCard.LinkText
 * How to handle InfoCard?
 * - This will be handled in user_interface before. There will card type selection logic.
 * - Maybe it makes sense to have InfoCard type as a prop? All other types of cards differ by usage typpe.
 */
export const UsageCard = React.forwardRef(_UsageCard);
