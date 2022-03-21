import React from 'react';
import { Button, Collapse, Text } from '@contentful/f36-components';

export function CollapseExample() {
  const [isExpanded, setIsExpanded] = React.useState(true);
  return (
    <div>
      <Button onClick={() => setIsExpanded(!isExpanded)}>Toggle</Button>
      <Collapse isExpanded={isExpanded}>
        <Text>
          Customers on the Team tier can pay with a credit card (American
          Express, MasterCard or Visa). Enterprise customers have the choice of
          paying with a credit card or wire transfer.
        </Text>
      </Collapse>
    </div>
  );
}
