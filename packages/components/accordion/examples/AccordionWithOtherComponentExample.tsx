import React from 'react';
import {
  Accordion,
  Text,
  SectionHeading,
  Stack,
  Button,
  List,
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
      <Accordion.Item
        title={
          <SectionHeading marginBottom="none">
            What can I do in Compose + Launch?
          </SectionHeading>
        }
      >
        <Text marginBottom="spacingS">
          Compose lets editors easily create and manage web content in the
          context of “pages.”
        </Text>
        <List>
          <List.Item>
            Easy page creation. With a clearer view of the content you’re
            creating
          </List.Item>
          <List.Item>
            Integrated SEO settings. Manage SEO titles and description, or hide
            content from search engines
          </List.Item>
          <List.Item>
            Work with structured content. Use existing content models to build
            new page
          </List.Item>
          <List.Item>
            Page localization. Easier to manage pages across multiple markets
            and teams
          </List.Item>
          <List.Item>
            Page localization. Easier to manage pages across multiple markets
            and teams
          </List.Item>
        </List>

        <Text marginBottom="spacingS">
          Launch gives planners visibility and confidence in the orchestration
          of their content releases.
        </Text>
        <List>
          <List.Item>
            Build releases. Published and scheduled groups of content at the
            same time
          </List.Item>
          <List.Item>
            Release calendar. Gives users a clear view of all upcoming published
            and unpublished events
          </List.Item>
          <List.Item>
            Flexible scheduling. Move scheduled releases forward or back in
            seconds
          </List.Item>
          <List.Item>
            Workflow states. Flag content to team members who need to see it
            before publication
          </List.Item>
        </List>
      </Accordion.Item>
    </Accordion>
  );
}
