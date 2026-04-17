/**
 * Detail / Edit Page — single entity view with right sidebar.
 */
import {
  Layout,
  Header,
  Button,
  Stack,
  FormControl,
  TextInput,
  Textarea,
  EntityStatusBadge,
  Note,
  Paragraph,
  SectionHeading,
  Box,
} from '@contentful/f36-components';

function EntryDetailPage() {
  return (
    <Layout
      variant="wide"
      header={
        <Layout.Header>
          <Header
            title="Homepage banner"
            breadcrumbs={[{ label: 'Content', href: '/content' }]}
            withBackButton
            dividerLine
            actions={
              <Stack spacing="spacingS">
                <Button variant="secondary">Save</Button>
                <Button variant="positive">Publish</Button>
              </Stack>
            }
          />
        </Layout.Header>
      }
      rightSidebar={
        <Layout.Sidebar>
          <Stack flexDirection="column" spacing="spacingM" padding="spacingM">
            <SectionHeading>Status</SectionHeading>
            <EntityStatusBadge entityStatus="draft" />

            <SectionHeading marginTop="spacingL">Metadata</SectionHeading>
            <Paragraph>Created: Jan 15, 2025</Paragraph>
            <Paragraph>Updated: 2 hours ago</Paragraph>
          </Stack>
        </Layout.Sidebar>
      }
    >
      <Layout.Body>
        <Note variant="warning" marginBottom="spacingL">
          You have unsaved changes that will be lost if you navigate away.
        </Note>

        <Stack flexDirection="column" spacing="spacingM">
          <FormControl isRequired>
            <FormControl.Label>Title</FormControl.Label>
            <TextInput defaultValue="Homepage banner" />
          </FormControl>

          <FormControl>
            <FormControl.Label>Description</FormControl.Label>
            <Textarea rows={4} defaultValue="Main promotional banner for the homepage." />
            <FormControl.HelpText>
              A short description displayed below the banner title.
            </FormControl.HelpText>
          </FormControl>

          <FormControl isRequired isInvalid>
            <FormControl.Label>Slug</FormControl.Label>
            <TextInput defaultValue="" />
            <FormControl.ValidationMessage>
              This field is required. Add a value before publishing.
            </FormControl.ValidationMessage>
          </FormControl>
        </Stack>
      </Layout.Body>
    </Layout>
  );
}

export { EntryDetailPage };
