import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';

import Illustration, { IllustrationType } from './Illustration';
import { illustrationName } from './constants';

storiesOf('Components/Illustration', module)
  .addParameters({
    propTypes: Illustration['__docgenInfo'],
    component: Illustration,
  })
  .add('default', () => (
    <Illustration
      illustration={select(
        'illustration',
        Object.keys(illustrationName),
        Object.keys(illustrationName)[0],
      )}
      className={text('className', '')}
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
            <Illustration illustration={illustration as IllustrationType} />
            <span style={{ display: 'inline-block', verticalAlign: 'middle' }}>
              {illustration}
            </span>
          </div>
        ))}
    </div>
  ));
