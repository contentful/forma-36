// REQUIRED: CSS import — without this, all components render unstyled
import '@contentful/f36-components/dist/styles.css';
import {
  Flex,
  Heading,
  Paragraph,
  Button,
  Stack,
} from '@contentful/f36-components';
import { WarningOctagonIcon } from '@contentful/f36-icons';
import tokens from '@contentful/f36-tokens';

function PageError({ section = 'content types' }: { section?: string }) {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      padding="spacing2Xl"
      css={{ minHeight: '400px' }}
    >
      <WarningOctagonIcon
        size="medium"
        css={{
          width: '48px',
          height: '48px',
          color: tokens.red600,
          marginBottom: tokens.spacingM,
        }}
      />
      <Heading marginBottom="spacingXs">Couldn't load {section}</Heading>
      <Paragraph marginBottom="spacingL">
        Something went wrong while loading this page. Check your connection and
        try again.
      </Paragraph>
      <Stack spacing="spacingS">
        <Button variant="primary" onClick={() => window.location.reload()}>
          Try again
        </Button>
        <Button variant="secondary" onClick={() => window.history.back()}>
          Go back
        </Button>
      </Stack>
    </Flex>
  );
}

export { PageError };
