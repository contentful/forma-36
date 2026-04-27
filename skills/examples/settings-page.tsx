// REQUIRED: CSS import — without this, all components render unstyled
import '@contentful/f36-components/dist/styles.css';
import {
  Layout,
  Header,
  Button,
  Stack,
  FormControl,
  TextInput,
  Switch,
  Select,
  Heading,
  Note,
  Box,
} from '@contentful/f36-components';
// Tokens: ALL colors/spacing/typography from this package — never hardcode hex or px
import tokens from '@contentful/f36-tokens';

function WebhookSettingsPage() {
  return (
    <Layout
      variant="narrow"
      header={
        <Layout.Header>
          <Header
            title="Webhook settings"
            actions={<Button variant="primary">Save changes</Button>}
          />
        </Layout.Header>
      }
    >
      <Layout.Body>
        <Stack flexDirection="column" spacing="spacingXl">
          <Box>
            <Heading marginBottom="spacingM">General</Heading>
            <Stack flexDirection="column" spacing="spacingM">
              <FormControl isRequired>
                <FormControl.Label>Webhook name</FormControl.Label>
                <TextInput defaultValue="Deploy to production" />
              </FormControl>

              <FormControl isRequired>
                <FormControl.Label>URL</FormControl.Label>
                <TextInput
                  type="url"
                  defaultValue="https://api.example.com/webhook"
                />
                <FormControl.HelpText>
                  The endpoint that receives the webhook payload.
                </FormControl.HelpText>
              </FormControl>

              <FormControl>
                <FormControl.Label>Content type</FormControl.Label>
                <Select defaultValue="json">
                  <Select.Option value="json">application/json</Select.Option>
                  <Select.Option value="form">
                    application/x-www-form-urlencoded
                  </Select.Option>
                </Select>
              </FormControl>
            </Stack>
          </Box>

          <Box>
            <Heading marginBottom="spacingM">Triggers</Heading>
            <Stack flexDirection="column" spacing="spacingM">
              <Switch defaultChecked>Trigger on publish</Switch>
              <Switch defaultChecked>Trigger on unpublish</Switch>
              <Switch>Trigger on delete</Switch>
            </Stack>
          </Box>

          <Box
            style={{
              borderTop: `1px solid ${tokens.gray200}`,
              paddingTop: tokens.spacingXl,
            }}
          >
            <Note
              variant="negative"
              title="Danger zone"
              marginBottom="spacingM"
            >
              Deleting this webhook is permanent and cannot be undone.
            </Note>
            <Button variant="negative">Delete webhook</Button>
          </Box>
        </Stack>
      </Layout.Body>
    </Layout>
  );
}

export { WebhookSettingsPage };
