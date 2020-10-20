import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';

import ProductIcon from './ProductIcon';
import { productIconName } from './constants';

storiesOf('(alpha)/ProductIcon', module)
  .addParameters({
    propTypes: ProductIcon['__docgenInfo'],
    component: ProductIcon,
  })
  .add('ProductIcon (default)', () => (
    <ProductIcon
      icon={select(
        'icon',
        Object.keys(productIconName),
        Object.keys(productIconName)[0],
      )}
      size={select(
        'size',
        {
          Small: 'small',
          'Medium (default)': 'medium',
          Large: 'large',
          Xlarge: 'xlarge',
        },
        'medium',
      )}
      color={select(
        'color',
        {
          'Positive(default)': 'positive',
          White: 'white',
        },
        'primary',
      )}
      tag={select(
        'tagType',
        {
          'div(default)': 'div',
          span: 'span',
        },
        'div',
      )}
      className={text('className', '')}
    />
  ));
