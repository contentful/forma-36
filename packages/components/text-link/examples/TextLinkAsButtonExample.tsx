import React from 'react';
import { Stack, TextLink } from '@contentful/f36-components';
import { PlusIcon } from '@contentful/f36-icons';

export default function TextLinkAsButtonExample() {
  return (
    <Stack flexDirection="column">
      <TextLink
        as="button"
        variant="primary"
        icon={<PlusIcon />}
        alignIcon="start"
        onClick={() => {
          alert('added');
        }}
      >
        Add field
      </TextLink>
      <TextLink
        as="button"
        variant="positive"
        onClick={() => {
          alert('published');
        }}
      >
        Publish the entry
      </TextLink>
      <TextLink
        as="button"
        variant="negative"
        onClick={() => {
          alert('deleted');
        }}
      >
        Delete the entry
      </TextLink>
      <TextLink
        as="button"
        variant="muted"
        onClick={() => {
          alert('done');
        }}
      >
        Undo your action
      </TextLink>
      <TextLink
        as="button"
        variant="secondary"
        onClick={() => {
          alert('cleared');
        }}
      >
        Clear
      </TextLink>
      <div style={{ background: 'black', padding: '10px' }}>
        <TextLink
          as="button"
          variant="white"
          onClick={() => {
            alert('cleared');
          }}
        >
          Clear
        </TextLink>
      </div>
      <TextLink
        as="button"
        variant="premium"
        onClick={() => {
          alert('accessing premium feature');
        }}
      >
        Upgrade
      </TextLink>
    </Stack>
  );
}
