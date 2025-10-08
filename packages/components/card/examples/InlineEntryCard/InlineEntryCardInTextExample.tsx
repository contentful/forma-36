import React from 'react';
import { Text, InlineEntryCard, MenuItem } from '@contentful/f36-components';

export default function InlineEntryCardInTextExample() {
  return (
    <Text>
      Macbeth (/məkˈbɛθ/, full title The Tragedie of Macbeth) is a tragedy by{' '}
      <InlineEntryCard
        actions={[
          <MenuItem key="copy">Copy</MenuItem>,
          <MenuItem key="delete">Delete</MenuItem>,
        ]}
        status="published"
        title="Author: William Shakespeare"
      >
        William Shakespeare
      </InlineEntryCard>
      . It is thought to have been first performed in 1606.[a] It dramatises the
      damaging physical and psychological effects of political ambition on those
      who seek power. Of all the plays that Shakespeare wrote during the reign
      of James I, Macbeth most clearly reflects his relationship with King
      James, patron of Shakespeare’s acting company.[1] It was first published
      in the Folio of 1623, possibly from a prompt book, and is Shakespeare’s
      shortest tragedy
    </Text>
  );
}
