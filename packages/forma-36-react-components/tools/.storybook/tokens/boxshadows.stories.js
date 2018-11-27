import React from 'react';
import { storiesOf } from '@storybook/react';
import { host } from 'storybook-host';
import { withInfo } from '@storybook/addon-info';
import { boxShadows, focusBoxShadows } from './tokens';

import DocPage from './../components/DocPage/DocPage';
import Heading from './../../../src/components/Typography/Heading';
import Subheading from './../../../src/components/Typography/Subheading';
import Table from './../../../src/components/Table/Table';
import TableHead from './../../../src/components/Table/TableHead';
import TableBody from './../../../src/components/Table/TableBody';
import TableCell from './../../../src/components/Table/TableCell';
import TableRow from './../../../src/components/Table/TableRow';
import Card from './../../../src/components/Card/Card';

storiesOf('Tokens|Box Shadows', module)
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
        <Heading style={{ marginBottom: '1rem' }}>Box Shadows</Heading>
        <Table style={{ width: '100%' }}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Token</TableCell>
              <TableCell>Value</TableCell>
              <TableCell>Example</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {boxShadows.map(boxShadows => {
              return (
                <TableRow key={boxShadows.cssVar}>
                  <TableCell style={{ verticalAlign: 'middle' }}>
                    {boxShadows.name}
                  </TableCell>
                  <TableCell style={{ verticalAlign: 'middle' }}>
                    <code>{boxShadows.cssVar}</code>
                  </TableCell>
                  <TableCell style={{ verticalAlign: 'middle' }}>
                    <code>{boxShadows.value}</code>
                  </TableCell>
                  <TableCell style={{ verticalAlign: 'middle' }}>
                    <Card style={{ boxShadow: boxShadows.value }}>
                      Box Shadow
                    </Card>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        <Subheading style={{ margin: '1rem 0' }}>Glows</Subheading>
        <Table style={{ width: '100%' }}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Token</TableCell>
              <TableCell>Value</TableCell>
              <TableCell>Example</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {focusBoxShadows.map(focusBoxShadows => {
              return (
                <TableRow key={focusBoxShadows.cssVar}>
                  <TableCell style={{ verticalAlign: 'middle' }}>
                    {focusBoxShadows.name}
                  </TableCell>
                  <TableCell style={{ verticalAlign: 'middle' }}>
                    <code>{focusBoxShadows.cssVar}</code>
                  </TableCell>
                  <TableCell style={{ verticalAlign: 'middle' }}>
                    <code>{focusBoxShadows.value}</code>
                  </TableCell>
                  <TableCell style={{ verticalAlign: 'middle' }}>
                    <Card
                      style={{
                        boxShadow: focusBoxShadows.value,
                        maxWidth: 120,
                        float: 'right',
                      }}
                    >
                      Focus Box Shadow
                    </Card>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </DocPage>
    )),
  );
