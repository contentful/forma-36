import React from 'react';
import { storiesOf } from '@storybook/react';
import cn from 'classnames';
import { host } from 'storybook-host';
import { withInfo } from '@storybook/addon-info';
import durationTokens from '@contentful/forma-36-tokens/dist/json/transitions/transition-durations';
import easingsTokens from '@contentful/forma-36-tokens/dist/json/transitions/transition-easings';
import styles from './transitions.css';

import DocPage from './../components/DocPage/DocPage';
import Heading from './../../../src/components/Typography/Heading';
import Subheading from './../../../src/components/Typography/Subheading';
import Table from './../../../src/components/Table/Table';
import TableHead from './../../../src/components/Table/TableHead';
import TableBody from './../../../src/components/Table/TableBody';
import TableCell from './../../../src/components/Table/TableCell';
import TableRow from './../../../src/components/Table/TableRow';

const Slider = props => (
  <div className={styles.slider} {...props}>
    {props.children}
  </div>
);

const SliderKnob = props => (
  <div className={styles.slider__knob} {...props}/>
);

storiesOf('Tokens|Transitions', module)
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
        <Heading style={{ marginBottom: '1rem' }}>Transitions</Heading>

        <Subheading style={{ marginBottom: '1rem' }}>Transition Durations</Subheading>
        <Table style={{ width: '100%' }}>
          <TableHead>
            <TableRow>
              <TableCell>Token</TableCell>
              <TableCell>CSS Variable</TableCell>
              <TableCell>Value</TableCell>
              <TableCell>Example</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(durationTokens).map(token => {
              const value = durationTokens[token];

              return (
                <TableRow key={token}>
                  <TableCell style={{ verticalAlign: 'middle' }}>
                    {token}
                  </TableCell>
                  <TableCell style={{ verticalAlign: 'middle' }}>
                    <code>--{token}</code>
                  </TableCell>
                  <TableCell style={{ verticalAlign: 'middle' }}>
                    <code>{value}</code>
                  </TableCell>
                  <TableCell style={{ verticalAlign: 'middle' }}>
                    <Slider>
                      <SliderKnob style={{transition: `ease ${value}`}} />
                    </Slider>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>

        <Subheading style={{ margin: '1rem 0' }}>Transition Easings</Subheading>
        <Table style={{ width: '100%' }}>
          <TableHead>
            <TableRow>
              <TableCell>Token</TableCell>
              <TableCell>CSS Variable</TableCell>
              <TableCell>Value</TableCell>
              <TableCell style={{width: '100px'}}>Example</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(easingsTokens).map(token => {
              const value = easingsTokens[token];

              return (
                <TableRow key={token}>
                  <TableCell style={{ verticalAlign: 'middle' }}>
                    {token}
                  </TableCell>
                  <TableCell style={{ verticalAlign: 'middle' }}>
                    <code>--{token}</code>
                  </TableCell>
                  <TableCell style={{ verticalAlign: 'middle' }}>
                    <code>{value}</code>
                  </TableCell>
                  <TableCell style={{ verticalAlign: 'middle', width: '100px' }}>
                    <Slider>
                      <SliderKnob style={{transition: `${value} 0.5s`}} />
                    </Slider>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </DocPage>
    )),
  );
