import React from 'react';
import { Accordion, Text } from '@contentful/f36-components';

export default function IconButtonExample() {
  return (
    <Accordion>
      <Accordion.Item title="What payment methods do you accept?">
        <Text>
          Customers on the Team tier can pay with a credit card (American
          Express, MasterCard or Visa). Enterprise customers have the choice of
          paying with a credit card or wire transfer.
        </Text>
      </Accordion.Item>
    </Accordion>
  );
}
