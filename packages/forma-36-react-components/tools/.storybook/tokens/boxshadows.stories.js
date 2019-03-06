import React from 'react';
import { storiesOf } from '@storybook/react';
import boxShadowTokens from '@contentful/forma-36-tokens/dist/json/box-shadows/box-shadows';
import glowTokens from '@contentful/forma-36-tokens/dist/json/box-shadows/glows';

import DocPage from './../components/DocPage/DocPage';
import Heading from './../../../src/components/Typography/Heading';
import Subheading from './../../../src/components/Typography/Subheading';
import Table from './../../../src/components/Table/Table';
import TableHead from './../../../src/components/Table/TableHead';
import TableBody from './../../../src/components/Table/TableBody';
import TableCell from './../../../src/components/Table/TableCell';
import TableRow from './../../../src/components/Table/TableRow';
import Card from './../../../src/components/Card/Card';

storiesOf('Tokens|Box Shadows', module).add('default', () => (
  <DocPage>
    <Heading style={{ marginBottom: '1rem' }}>Box Shadows</Heading>
    <p>
      We use two different styles of box shadows at Contentful. Box shadows to
      communicate depth, and glows to communicate semantics.
    </p>

    <Subheading style={{ marginBottom: '1rem' }}>Box Shadows</Subheading>
    <p>Box shadows are used to give depth to the user interface.</p>
    <Table style={{ width: '100%' }}>
      <TableHead>
        <TableRow>
          <TableCell>Token</TableCell>
          <TableCell>Value</TableCell>
          <TableCell>Example</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {Object.keys(boxShadowTokens).map(token => {
          const value = boxShadowTokens[token];

          return (
            <TableRow key={token}>
              <TableCell style={{ verticalAlign: 'middle' }}>{token}</TableCell>
              <TableCell style={{ verticalAlign: 'middle' }}>
                <code>{value}</code>
              </TableCell>
              <TableCell style={{ verticalAlign: 'middle' }}>
                <Card style={{ boxShadow: value }}>Box Shadow</Card>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>

    <Subheading style={{ margin: '1rem 0' }}>Glows</Subheading>
    <p>
      Glows are used to indicate semantic focus states, for example in the
      Button component.
    </p>
    <Table style={{ width: '100%' }}>
      <TableHead>
        <TableRow>
          <TableCell>Token</TableCell>
          <TableCell>Value</TableCell>
          <TableCell>Example</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {Object.keys(glowTokens).map(token => {
          const value = glowTokens[token];

          return (
            <TableRow key={token}>
              <TableCell style={{ verticalAlign: 'middle' }}>{token}</TableCell>
              <TableCell style={{ verticalAlign: 'middle' }}>
                <code>{value}</code>
              </TableCell>
              <TableCell style={{ verticalAlign: 'middle' }}>
                <Card style={{ boxShadow: value }}>Box Shadow</Card>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  </DocPage>
));
