/**
 * Standalone Form Page — narrow layout, grouped fields, inline validation.
 */
import {
  Layout,
  Header,
  Button,
  Stack,
  FormControl,
  TextInput,
  Textarea,
  Select,
  Checkbox,
  Heading,
  Note,
  Accordion,
  Notification,
} from '@contentful/f36-components';

function CreateContentTypePage() {
  function handleSave() {
    Notification.success('Content type created');
  }

  return (
    <Layout
      variant="narrow"
      header={
        <Layout.Header>
          <Header
            title="Create content type"
            breadcrumbs={[{ label: 'Content model', href: '/content-model' }]}
            withBackButton
            actions={
              <Stack spacing="spacingS">
                <Button variant="secondary">Never mind</Button>
                <Button variant="primary" onClick={handleSave}>
                  Create
                </Button>
              </Stack>
            }
          />
        </Layout.Header>
      }
    >
      <Layout.Body>
        <Stack flexDirection="column" spacing="spacingXl">
          {/* Basic info */}
          <Stack flexDirection="column" spacing="spacingM">
            <Heading>Basic information</Heading>

            <FormControl isRequired>
              <FormControl.Label>Name</FormControl.Label>
              <TextInput placeholder="e.g. Blog Post" />
              <FormControl.HelpText>
                The display name for this content type.
              </FormControl.HelpText>
            </FormControl>

            <FormControl isRequired>
              <FormControl.Label>API identifier</FormControl.Label>
              <TextInput placeholder="e.g. blogPost" />
              <FormControl.HelpText>
                Used in API responses and SDK queries. Cannot be changed later.
              </FormControl.HelpText>
            </FormControl>

            <FormControl>
              <FormControl.Label>Description</FormControl.Label>
              <Textarea rows={3} placeholder="Describe what this content type is for" />
            </FormControl>
          </Stack>

          {/* Display settings */}
          <Stack flexDirection="column" spacing="spacingM">
            <Heading>Display</Heading>

            <FormControl>
              <FormControl.Label>Entry title field</FormControl.Label>
              <Select defaultValue="title">
                <Select.Option value="title">Title</Select.Option>
                <Select.Option value="name">Name</Select.Option>
              </Select>
              <FormControl.HelpText>
                The field used as the entry title in lists and references.
              </FormControl.HelpText>
            </FormControl>
          </Stack>

          {/* Advanced — collapsed by default */}
          <Accordion>
            <Accordion.Item title="Advanced settings">
              <Stack flexDirection="column" spacing="spacingM">
                <Note variant="neutral">
                  These settings are optional and can be changed later.
                </Note>
                <Checkbox>Enable localization for all fields</Checkbox>
                <Checkbox>Enable real-time collaboration</Checkbox>
              </Stack>
            </Accordion.Item>
          </Accordion>
        </Stack>
      </Layout.Body>
    </Layout>
  );
}

export { CreateContentTypePage };
