import React from 'react';
import { Accordion, Text } from '@contentful/f36-components';

export default function AccordionExample() {
  return (
    <Accordion>
      <Accordion.Item title="What payment methods do you accept?">
        <Text>
          Customers on the Team tier can pay with a credit card (American
          Express, MasterCard or Visa). Enterprise customers have the choice of
          paying with a credit card or wire transfer.
        </Text>
      </Accordion.Item>
      <Accordion.Item title="What spaces can I use Compose + Launch on?">
        <Text>
          Once you have purchased Compose + Launch, they can be installed on all
          of your spaces, or only the ones you want to have them on. There is no
          extra cost to install Compose + Launch on multiple spaces.
        </Text>
      </Accordion.Item>
    </Accordion>
  );
}
