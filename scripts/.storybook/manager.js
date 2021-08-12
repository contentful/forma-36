import { addons } from '@storybook/addons';
import contentfulTheme from './contentful-theme';
import '!style-loader!css-loader!./osano.css';

addons.setConfig({
  theme: contentfulTheme,
});
