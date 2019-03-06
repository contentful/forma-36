import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';

import Illustration from './Illustration';
import { illustrationName } from './constants';

storiesOf('Components|Illustration', module)
  .add('default', () => (
    <Illustration
      illustration={select(
        'Illustration',
        Object.keys(illustrationName),
        Object.keys(illustrationName)[0],
      )}
      extraClassNames={text('Extra Class Names', '')}
    />
  ))
  .add('All Illustrations', () => (
    <div
      style={{
        columns: '3',
        width: '800px',
      }}
    >
      {Object.keys(illustrationName)
        .filter(illustration => !illustration.toLowerCase().includes('trimmed'))
        .map(illustration => (
          <div
            key={illustration}
            style={{ padding: '4px', fontSize: '14px', lineHeight: '21px' }}
          >
            <Illustration illustration={illustration} />
            <span style={{ display: 'inline-block', verticalAlign: 'middle' }}>
              {illustration}
            </span>
          </div>
        ))}
    </div>
  ));
