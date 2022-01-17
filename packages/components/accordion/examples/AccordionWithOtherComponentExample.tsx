import React from 'react';
import {
  Accordion,
  Text,
  SectionHeading,
  Stack,
  Button,
} from '@contentful/f36-components';

export default function IconButtonExample() {
  return (
    <Accordion>
      <Accordion.Item
        title={
          <SectionHeading marginBottom="none">
            What payment methods do you accept?
          </SectionHeading>
        }
      >
        <Stack flexDirection="column">
          <Text marginBottom="spacingS">
            Customers on the Team tier can pay with a credit card (American
            Express, MasterCard or Visa). Enterprise customers have the choice
            of paying with a credit card or wire transfer.
          </Text>
          <Button onClick={() => console.log('clicked!')}>
            Accordion’s button
          </Button>
        </Stack>
      </Accordion.Item>
    </Accordion>
  );
}
