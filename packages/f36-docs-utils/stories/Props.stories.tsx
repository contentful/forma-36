import React from 'react';
import { Props, PropsContextProvider } from '../src/Props';

export default {
  title: '(used in F36 website)/Props',
  component: Props,
};

import { propsMetadata } from './mockPropsMetadata';

export const Basic = () => {
  return (
    <PropsContextProvider value={{ ...propsMetadata }}>
      <Props of="Autocomplete" />
    </PropsContextProvider>
  );
};

export const WithDataFromAccordion = () => {
  return (
    <PropsContextProvider value={{ ...propsMetadata }}>
      <Props of="Accordion" />
    </PropsContextProvider>
  );
};

export const WithDataFromButton = () => {
  return (
    <PropsContextProvider value={{ ...propsMetadata }}>
      <Props of="Button" />
    </PropsContextProvider>
  );
};
