import React from 'react';
import figma from '@figma/code-connect';
import { Header } from './Header';
import { Button } from '@contentful/f36-button';
import { TextInput } from '@contentful/f36-forms';

const FIGMA_URL =
  'https://www.figma.com/design/BDteZSphg3YPJTMlABQozc/Forma-36-Components?node-id=13601:122226';

figma.connect(Header, FIGMA_URL, {
  props: {
    breadcrumbs: figma.enum('Title variant', {
      Breadcrumb: [{ content: 'Parent', url: '/parent' }],
      Title: undefined,
    }),
    actions: figma.boolean('Actions', {
      true: <Button>Action</Button>,
      false: undefined,
    }),
    filters: figma.boolean('With filters', {
      true: <TextInput placeholder="Search" />,
      false: undefined,
    }),
  },
  example: ({ breadcrumbs, actions, filters }) => (
    <Header
      title="Page title"
      breadcrumbs={breadcrumbs}
      actions={actions}
      filters={filters}
    />
  ),
});
