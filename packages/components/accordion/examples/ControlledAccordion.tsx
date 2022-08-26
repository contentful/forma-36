import React, { useState } from 'react';
import { Accordion, Text } from '@contentful/f36-components';

export default function AccordionExample() {
  const [accordionState, setAccordionState] = useState({
    1: true,
    2: false,
  });

  const handleExpand = (itemIndex) => () => {
    setAccordionState((state) => ({ ...state, [itemIndex]: true }));
  };

  const handleCollapse = (itemIndex) => () => {
    setAccordionState((state) => ({ ...state, [itemIndex]: false }));
  };

  return (
    <Accordion>
      <Accordion.Item
        title="What payment methods do you accept?"
        isExpanded={accordionState[1]}
        onExpand={handleExpand(1)}
        onCollapse={handleCollapse(1)}
      >
        <Text>
          Customers on the Team tier can pay with a credit card (American
          Express, MasterCard or Visa). Enterprise customers have the choice of
          paying with a credit card or wire transfer.
        </Text>
      </Accordion.Item>
      <Accordion.Item
        title="What spaces can I use Compose + Launch on?"
        isExpanded={accordionState[2]}
        onExpand={handleExpand(2)}
        onCollapse={handleCollapse(2)}
      >
        <Text>
          Once you have purchased Compose + Launch, they can be installed on all
          of your spaces, or only the ones you want to have them on. There is no
          extra cost to install Compose + Launch on multiple spaces.
        </Text>
      </Accordion.Item>
    </Accordion>
  );
}
