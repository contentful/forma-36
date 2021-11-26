import React from 'react';
import { Props, PropsProvider } from '../src/Props';

export default {
  title: '(used in F36 website)/Props',
  component: Props,
};

import { propsMetadata } from './mockPropsMetadata';

export const Basic = () => {
  return (
    <PropsProvider metadata={propsMetadata}>
      <Props of="Accordion" />
    </PropsProvider>
  );
};

export const WithDataFromButton = () => {
  return (
    <PropsProvider metadata={propsMetadata}>
      <Props of="Button" />
    </PropsProvider>
  );
};
