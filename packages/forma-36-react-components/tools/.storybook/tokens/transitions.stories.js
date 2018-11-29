import React from 'react';
import { storiesOf } from '@storybook/react';
import cn from 'classnames';
import { host } from 'storybook-host';
import { withInfo } from '@storybook/addon-info';
import { transitions, easings, animations } from './tokens';
import styles from './transitions.css';

import DocPage from './../components/DocPage/DocPage';
import Heading from './../../../src/components/Typography/Heading';
import Subheading from './../../../src/components/Typography/Subheading';
import Table from './../../../src/components/Table/Table';
import TableHead from './../../../src/components/Table/TableHead';
import TableBody from './../../../src/components/Table/TableBody';
import TableCell from './../../../src/components/Table/TableCell';
import TableRow from './../../../src/components/Table/TableRow';

const Slider = ({ transitionClassName }) => (
  <div className={cn(styles.slider, transitionClassName)}>
    <div className={styles.box} />
  </div>
);

const AnimatedBox = ({ animationClassName }) => (
  <div className={cn(styles.box, animationClassName)} />
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
            {transitions.map(transition => {
              return (
                <TableRow key={transition.cssVar}>
                  <TableCell style={{ verticalAlign: 'middle' }}>
                    {transition.name}
                  </TableCell>
                  <TableCell style={{ verticalAlign: 'middle' }}>
                    <code>{transition.cssVar}</code>
                  </TableCell>
                  <TableCell style={{ verticalAlign: 'middle' }}>
                    <code>{transition.value}</code>
                  </TableCell>
                  <TableCell style={{ verticalAlign: 'middle' }}>
                    <Slider
                      transitionClassName={styles[`slide${transition.cssVar}`]}
                    />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        <Subheading style={{ margin: '1rem 0' }}>Easings</Subheading>
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
            {easings.map(easing => {
              return (
                <TableRow key={easing.cssVar}>
                  <TableCell style={{ verticalAlign: 'middle' }}>
                    {easing.name}
                  </TableCell>
                  <TableCell style={{ verticalAlign: 'middle' }}>
                    <code>{easing.cssVar}</code>
                  </TableCell>
                  <TableCell style={{ verticalAlign: 'middle', width: 260 }}>
                    <code>{easing.value}</code>
                  </TableCell>
                  <TableCell style={{ verticalAlign: 'middle' }}>
                    <Slider
                      transitionClassName={styles[`slide${easing.cssVar}`]}
                    />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        <Subheading style={{ margin: '1rem 0' }}>Animations</Subheading>
        <Table style={{ width: '100%' }}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Animation Name</TableCell>
              <TableCell>Example</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {animations.map(animation => {
              return (
                <TableRow key={animation.cssVar}>
                  <TableCell style={{ verticalAlign: 'middle' }}>
                    {animation.name}
                  </TableCell>
                  <TableCell style={{ verticalAlign: 'middle' }}>
                    <code>{animation.animationName}</code>
                  </TableCell>
                  <TableCell style={{ verticalAlign: 'middle' }}>
                    <AnimatedBox
                      animationClassName={
                        styles[`animation-${animation.animationName}`]
                      }
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
