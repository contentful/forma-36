import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';
import contentfulTheme from './contentful-theme';

addons.setConfig({
  contentfulTheme,
});
