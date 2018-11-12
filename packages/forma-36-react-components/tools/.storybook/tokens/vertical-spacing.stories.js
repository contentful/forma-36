import React from 'react';
import { storiesOf } from '@storybook/react';
import { host } from 'storybook-host';
import { withInfo } from '@storybook/addon-info';
import { verticalSpacingUnits } from './tokens';

import DocPage from './../components/DocPage/DocPage';

storiesOf('Tokens|Vertical Spacing', module)
  .addDecorator(
    host({
      align: 'center top',
      cropMarks: false,
      width: 800,
    }),
  )
  .add(
    'default',
    withInfo()(() => (
      <DocPage>
        <h1>Vertical Spacing</h1>
        <table style={{ width: '100%' }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Token</th>
              <th>px</th>
              <th>rem</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            {verticalSpacingUnits.map(unit => {
              const sizeInRem = (1 * parseInt(unit.px, 10)) / 16;

              return (
                <tr key={unit.cssVar}>
                  <td>
                    <strong>{unit.name}</strong>
                  </td>
                  <td>
                    <code>{unit.cssVar}</code>
                  </td>
                  <td>
                    <code>{unit.px}</code>
                  </td>
                  <td>
                    <code>{`${sizeInRem}rem`}</code>
                  </td>
                  <td>
                    <div
                      style={{
                        width: `${sizeInRem}rem`,
                        height: `${sizeInRem}rem`,
                        background: '#3c80cf',
                      }}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </DocPage>
    )),
  );
