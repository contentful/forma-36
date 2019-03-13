import React from 'react';
import { storiesOf } from '@storybook/react';

import fontBaseTokens from '../../../../forma-36-tokens/src/tokens/typography/font-base';
import fontSizeTokens from '../../../../forma-36-tokens/src/tokens/typography/font-size';
import fontWeightTokens from '../../../../forma-36-tokens/src/tokens/typography/font-weight';
import lineHeightTokens from '../../../../forma-36-tokens/src/tokens/typography/line-height';
import fontStackTokens from '../../../../forma-36-tokens/src/tokens/typography/font-stack';
import letterSpacingTokens from '../../../../forma-36-tokens/src/tokens/typography/letter-spacing';

import DocPage from '../components/DocPage/DocPage';
import Heading from '../../../src/components/Typography/Heading';
import Subheading from '../../../src/components/Typography/Subheading';
import Table from '../../../src/components/Table/Table';
import TableHead from '../../../src/components/Table/TableHead';
import TableBody from '../../../src/components/Table/TableBody';
import TableCell from '../../../src/components/Table/TableCell';
import TableRow from '../../../src/components/Table/TableRow';

storiesOf('Tokens|Typography', module).add('default', () => (
  <DocPage>
    <Heading style={{ marginBottom: '1rem' }}>Typography</Heading>

    <Subheading style={{ margin: '1rem 0' }}>Font base</Subheading>
    <p>Our font base is used in combination with the REM font sizes below</p>
    <Table style={{ width: '100%' }}>
      <TableHead>
        <TableRow>
          <TableCell>Token</TableCell>
          <TableCell>CSS Variable</TableCell>
          <TableCell>Value</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {Object.keys(fontBaseTokens).map(token => {
          const value = fontBaseTokens[token];

          return (
            <TableRow key={token}>
              <TableCell style={{ verticalAlign: 'middle' }}>
                <span style={{ fontSize: value }}>{token}</span>
              </TableCell>
              <TableCell style={{ verticalAlign: 'middle' }}>
                <code>--{token}</code>
              </TableCell>
              <TableCell style={{ verticalAlign: 'middle' }}>
                <code>{value}</code>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>

    <Subheading style={{ margin: '1rem 0' }}>Font sizes</Subheading>
    <Table style={{ width: '100%' }}>
      <TableHead>
        <TableRow>
          <TableCell>Token</TableCell>
          <TableCell>CSS Variable</TableCell>
          <TableCell>Value (rem)</TableCell>
          <TableCell>Value (px)</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {Object.keys(fontSizeTokens).map(token => {
          const value = fontSizeTokens[token];
          const valuePx = 1 * parseFloat(value) * 16; // 16 = REM base

          return (
            <TableRow key={token}>
              <TableCell style={{ verticalAlign: 'middle' }}>
                <span style={{ fontSize: value }}>{token}</span>
              </TableCell>
              <TableCell style={{ verticalAlign: 'middle' }}>
                <code>--{token}</code>
              </TableCell>
              <TableCell style={{ verticalAlign: 'middle' }}>
                <code>{value}</code>
              </TableCell>
              <TableCell style={{ verticalAlign: 'middle' }}>
                <code>{valuePx}px</code>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>

    <Subheading style={{ margin: '1rem 0' }}>Font weights</Subheading>
    <Table style={{ width: '100%' }}>
      <TableHead>
        <TableRow>
          <TableCell>Token</TableCell>
          <TableCell>CSS Variable</TableCell>
          <TableCell>Value</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {Object.keys(fontWeightTokens).map(token => {
          const value = fontWeightTokens[token];

          return (
            <TableRow key={token}>
              <TableCell>
                <span style={{ fontWeight: value }}>{token}</span>
              </TableCell>
              <TableCell>
                <code>--{token}</code>
              </TableCell>
              <TableCell>
                <code>{value}</code>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>

    <Subheading style={{ margin: '1rem 0' }}>Line heights</Subheading>
    <Table style={{ width: '100%' }}>
      <TableHead>
        <TableRow>
          <TableCell>Token</TableCell>
          <TableCell>Example</TableCell>
          <TableCell>CSS Variable</TableCell>
          <TableCell>Value</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {Object.keys(lineHeightTokens).map(token => {
          const value = lineHeightTokens[token];

          return (
            <TableRow key={token}>
              <TableCell style={{ verticalAlign: 'middle' }}>{token}</TableCell>
              <TableCell style={{ verticalAlign: 'middle' }}>
                <div style={{ lineHeight: value }}>
                  Manage content better with infrastructure. It’s the cure for
                  the common CMS. Update once and publish everywhere, so teams
                  build digital products faster.
                </div>
              </TableCell>
              <TableCell style={{ verticalAlign: 'middle' }}>
                <code>--{token}</code>
              </TableCell>
              <TableCell style={{ verticalAlign: 'middle' }}>
                <code>{value}</code>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>

    <Subheading style={{ margin: '1rem 0' }}>Font stacks</Subheading>
    <Table style={{ width: '100%' }}>
      <TableHead>
        <TableRow>
          <TableCell>Token</TableCell>
          <TableCell>Example</TableCell>
          <TableCell>CSS Variable</TableCell>
          <TableCell>Value</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {Object.keys(fontStackTokens).map(token => {
          const value = fontStackTokens[token];

          return (
            <TableRow key={token}>
              <TableCell style={{ verticalAlign: 'middle' }}>{token}</TableCell>
              <TableCell style={{ verticalAlign: 'middle' }}>
                <div style={{ fontFamily: value }}>
                  Manage content better with infrastructure. It’s the cure for
                  the common CMS. Update once and publish everywhere, so teams
                  build digital products faster.
                </div>
              </TableCell>
              <TableCell style={{ verticalAlign: 'middle' }}>
                <code>--{token}</code>
              </TableCell>
              <TableCell style={{ verticalAlign: 'middle' }}>
                <code>{value}</code>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>

    <Subheading style={{ margin: '1rem 0' }}>Letter-spacing</Subheading>
    <Table style={{ width: '100%' }}>
      <TableHead>
        <TableRow>
          <TableCell>Token</TableCell>
          <TableCell>Example</TableCell>
          <TableCell>CSS Variable</TableCell>
          <TableCell>Value</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {Object.keys(letterSpacingTokens).map(token => {
          const value = letterSpacingTokens[token];

          return (
            <TableRow key={token}>
              <TableCell style={{ verticalAlign: 'middle' }}>{token}</TableCell>
              <TableCell style={{ verticalAlign: 'middle' }}>
                <div style={{ letterSpacing: value }}>Contentful</div>
              </TableCell>
              <TableCell style={{ verticalAlign: 'middle' }}>
                <code>--{token}</code>
              </TableCell>
              <TableCell style={{ verticalAlign: 'middle' }}>
                <code>{value}</code>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  </DocPage>
));
