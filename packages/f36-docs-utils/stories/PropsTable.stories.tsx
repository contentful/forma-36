import React from 'react';
import { PropsTable, PropsContextProvider } from '../src/PropsTable';

export default {
  title: '(used in F36 website)/PropsTable',
  component: PropsTable,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '900px' }}>
        <Story />
      </div>
    ),
  ],
};

import { propsMetadata } from './mockPropsMetadata';

export const Basic = () => {
  return (
    <PropsContextProvider value={{ ...propsMetadata }}>
      <PropsTable of="Autocomplete" />
    </PropsContextProvider>
  );
};

export const WithDataFromAccordion = () => {
  return (
    <PropsContextProvider value={{ ...propsMetadata }}>
      <PropsTable of="Accordion" />
    </PropsContextProvider>
  );
};

export const WithDataFromButton = () => {
  return (
    <PropsContextProvider value={{ ...propsMetadata }}>
      <PropsTable of="Button" />
    </PropsContextProvider>
  );
};
