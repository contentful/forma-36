import React from 'react';
import { storiesOf } from '@storybook/react';

import tokens from '@contentful/forma-36-tokens/dist/json/spacing';
import DocPage from '../components/DocPage/DocPage';
import Table from '../../../src/components/Table/Table';
import TableHead from '../../../src/components/Table/TableHead';
import TableBody from '../../../src/components/Table/TableBody';
import TableCell from '../../../src/components/Table/TableCell';
import TableRow from '../../../src/components/Table/TableRow';

storiesOf('Tokens|Spacing', module).add('default', () => (
  <DocPage>
    <h1>Spacing</h1>
    <Table style={{ width: '100%' }}>
      <TableHead>
        <TableRow>
          <TableCell>Token</TableCell>
          <TableCell>Value (px)</TableCell>
          <TableCell>Value (rem)</TableCell>
          <TableCell>Example</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {Object.keys(tokens).map(token => {
          const value = tokens[token];
          const valuePx = 1 * parseFloat(value) * 16; // 16 = REM Base

          return (
            <TableRow key={token}>
              <TableCell style={{ verticalAlign: 'middle' }}>
                <strong>{token}</strong>
              </TableCell>
              <TableCell style={{ verticalAlign: 'middle' }}>
                <code>{valuePx}px</code>
              </TableCell>
              <TableCell style={{ verticalAlign: 'middle' }}>
                <code>{value}</code>
              </TableCell>
              <TableCell style={{ verticalAlign: 'middle' }}>
                <div
                  style={{
                    width: value,
                    height: value,
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
));
