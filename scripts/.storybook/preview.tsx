import React from 'react';
import type { Preview } from '@storybook/react-vite';
import { themes } from 'storybook/theming';
import { GlobalStyles } from '@contentful/f36-core';

const preview: Preview = {
  decorators: [
    (Story) => {
      return (
        <>
          <GlobalStyles />
          <Story />
        </>
      );
    },
  ],
  parameters: {
    layout: 'centered',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: themes.normal,
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },
};

export default preview;
