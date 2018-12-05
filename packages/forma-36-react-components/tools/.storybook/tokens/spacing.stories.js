import React from 'react';
import { storiesOf } from '@storybook/react';
import { host } from 'storybook-host';
import { withInfo } from '@storybook/addon-info';
import { spacingUnits } from './tokens';

import DocPage from '../components/DocPage/DocPage';
import Table from '../../../src/components/Table/Table';
import TableHead from '../../../src/components/Table/TableHead';
import TableBody from '../../../src/components/Table/TableBody';
import TableCell from '../../../src/components/Table/TableCell';
import TableRow from '../../../src/components/Table/TableRow';

storiesOf('Tokens|Spacing', module)
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
        <h1>Spacing</h1>
        <Table style={{ width: '100%' }}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Token</TableCell>
              <TableCell>px</TableCell>
              <TableCell>rem</TableCell>
              <TableCell>Example</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {spacingUnits.map(unit => {
              const sizeInRem = (1 * parseInt(unit.px, 10)) / 16;

              return (
                <TableRow key={unit.cssVar}>
                  <TableCell style={{ verticalAlign: 'middle' }}>
                    <strong>{unit.name}</strong>
                  </TableCell>
                  <TableCell style={{ verticalAlign: 'middle' }}>
                    <code>{unit.cssVar}</code>
                  </TableCell>
                  <TableCell style={{ verticalAlign: 'middle' }}>
                    <code>{unit.px}</code>
                  </TableCell>
                  <TableCell style={{ verticalAlign: 'middle' }}>
                    <code>{`${sizeInRem}rem`}</code>
                  </TableCell>
                  <TableCell style={{ verticalAlign: 'middle' }}>
                    <div
                      style={{
                        width: `${sizeInRem}rem`,
                        height: `${sizeInRem}rem`,
                        background: '#3c80cf',
                      }}
                    />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </DocPage>
    )),
  );
