import React from 'react';
import { storiesOf } from '@storybook/react';
import { host } from 'storybook-host';
import { withInfo } from '@storybook/addon-info';
import { fontSizes, fontWeights, lineHeights } from './tokens';

import DocPage from './../components/DocPage/DocPage';
import Heading from './../../../src/components/Typography/Heading';
import SubHeading from './../../../src/components/Typography/SubHeading';
import Table from './../../../src/components/Table/Table';
import TableHead from './../../../src/components/Table/TableHead';
import TableBody from './../../../src/components/Table/TableBody';
import TableCell from './../../../src/components/Table/TableCell';
import TableRow from './../../../src/components/Table/TableRow';

storiesOf('Tokens|Typography', module)
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
        <Heading style={{ marginBottom: '1rem' }}>Typography</Heading>
        <SubHeading style={{ margin: '1rem 0' }}>Font sizes</SubHeading>
        <Table style={{ width: '100%' }}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Token</TableCell>
              <TableCell>px</TableCell>
              <TableCell>rem</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {fontSizes.map(fontSize => {
              return (
                <TableRow key={fontSize.cssVar}>
                  <TableCell style={{ verticalAlign: 'middle' }}>
                    <span style={{ fontSize: fontSize.rem }}>
                      {fontSize.name}
                    </span>
                  </TableCell>
                  <TableCell style={{ verticalAlign: 'middle' }}>
                    <code>{fontSize.cssVar}</code>
                  </TableCell>
                  <TableCell style={{ verticalAlign: 'middle' }}>
                    <code>{fontSize.px}</code>
                  </TableCell>
                  <TableCell style={{ verticalAlign: 'middle' }}>
                    <code>{fontSize.rem}</code>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>

        <SubHeading style={{ margin: '1rem 0' }}>Font weights</SubHeading>
        <Table style={{ width: '100%' }}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Token</TableCell>
              <TableCell>Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {fontWeights.map(fontWeight => {
              return (
                <TableRow key={fontWeight.cssVar}>
                  <TableCell>
                    <span style={{ fontWeight: fontWeight.value }}>
                      {fontWeight.name}
                    </span>
                  </TableCell>
                  <TableCell>
                    <code>{fontWeight.cssVar}</code>
                  </TableCell>
                  <TableCell>
                    <code>{fontWeight.value}</code>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>

        <SubHeading style={{ margin: '1rem 0' }}>Line heights</SubHeading>
        <Table style={{ width: '100%' }}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Example</TableCell>
              <TableCell>Token</TableCell>
              <TableCell>Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {lineHeights.map(lineHeight => {
              return (
                <TableRow key={lineHeight.cssVar}>
                  <TableCell style={{ verticalAlign: 'middle' }}>
                    <div style={{ fontWeight: lineHeight.value }}>
                      {lineHeight.name}
                    </div>
                  </TableCell>
                  <TableCell style={{ verticalAlign: 'middle' }}>
                    <div style={{ lineHeight: lineHeight.value }}>
                      Manage content better with infrastructure. It’s the cure
                      for the common CMS. Update once and publish everywhere, so
                      teams build digital products faster.
                    </div>
                  </TableCell>
                  <TableCell style={{ verticalAlign: 'middle' }}>
                    <code>{lineHeight.cssVar}</code>
                  </TableCell>
                  <TableCell style={{ verticalAlign: 'middle' }}>
                    <code>{lineHeight.value}</code>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </DocPage>
    )),
  );
