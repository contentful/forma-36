import { addons } from 'storybook/manager-api';
import contentful from './contentful-theme';

addons.setConfig({
  theme: contentful,
});
