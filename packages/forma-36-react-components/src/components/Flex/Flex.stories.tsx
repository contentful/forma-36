import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, number, select } from '@storybook/addon-knobs';
import tokens from '@contentful/forma-36-tokens';
import Flex from './Flex';
import notes from './README.md';

const flexKnobsId = 'Flex Props';
const spacingValues = [
  'none',
  'spacing2Xs',
  'spacingXs',
  'spacingS',
  'spacingM',
  'spacingL',
  'spacingXl',
  'spacing2Xl',
  'spacing3Xl',
  'spacing4Xl',
];
const flexDirectionValues = {
  'column': 'column',
  'column-reverse': 'column-reverse',
  'row': 'row',
  'row-reverse': 'row-reverse',
};

const flexJustifyValues = {
  'center': 'center',
  'start':'start',
  'end':'end',
  'flex-start':'flex-start',
  'flex-end':'flex-end',
  'space-between':'space-between',
  'space-around':'space-around',
  'space-evenly':'space-evenly',
  'stretch':'stretch',
}

const flexAlignValues = {
  'center': 'center',
  'start':'start',
  'end':'end',
  'flex-start':'flex-start',
  'flex-end':'flex-end',
  'stretch':'stretch',
}

const flexWrapValues = {
  "nowrap": 'nowrap', 
  "wrap": 'wrap',
  "wrap-reverse": 'wrap-reverse'
};

const styles = {
  demoBox: {
    backgroundColor: tokens.colorContrastLight,
    width: '150px',
    height: '80px',
    color: tokens.colorWhite
  },
};

const DemoBox = ({
  times,
}: {
  times?: number,
}) => {
  if (times) {
    let result = [];
    for (let i = 0; i < times; i++) {
    result.push(
      <Flex 
        style={styles.demoBox}
        justifyContent="center"
        alignItems="center"
        padding="spacingM"
        margin="spacingXs"
      >
          Example element {i}
      </Flex>
    );
    }
    return <>{result}</>;
  }
  return <Flex style={styles.demoBox}>Example element</Flex>;
};

storiesOf('(alpha)|Flex', module)
  .addParameters({
    propTypes: Flex['__docgenInfo'],
  })
  .add(
    'default',
    () => {
      const knobs = {
        exampleBoxes: number('Example Items', 4),
        flexDirection: select('Flex direction', flexDirectionValues, 'row'),
        justifyContent: select('Justify content', flexJustifyValues, 'center'),
        alignItems: select('Align items', flexAlignValues, 'center'),
        flexWrap: select('Flex wrap', flexWrapValues, 'center'),
      };

      return (
        <Flex
          margin="spacing4Xl"
          flexDirection={knobs.flexDirection}
          justifyContent={knobs.justifyContent}
          alignItems={knobs.alignItems}
          flexWrap={knobs.flexWrap}
          fullWidth={boolean('Full width', false)}
          fullHeight={boolean('Full height', false)}
          inlineFlex={boolean('Inline flex', false)}
          noShrink={boolean('No shrink', false)}
          htmlTag="article"
        >
          <DemoBox times={knobs.exampleBoxes} />
        </Flex>
      );
    },
    { notes },
  )
  .add(
    'Flex marings',
    () => {
      const knobs = {
        exampleBoxes: number('Example Items', 4),
        margin: select('Margin', spacingValues, 'spacingXs', flexKnobsId),
        marginTop: select('Margin top', spacingValues, 'none', flexKnobsId),
        marginRight: select('Margin right', spacingValues, 'none', flexKnobsId),
        marginBottom: select('Margin bottom', spacingValues, 'none', flexKnobsId),
        marginLeft: select('Margin left', spacingValues, 'none', flexKnobsId),
      };

      return (
        <Flex
          htmlTag="div"
        >
          <Flex
            margin={knobs.margin !== 'none' ? knobs.margin : null}
            marginTop={knobs.marginTop !== 'none' ? knobs.marginTop : null}
            marginRight={knobs.marginRight !== 'none' ? knobs.marginRight : null}
            marginBottom={knobs.marginBottom !== 'none' ? knobs.marginBottom : null}
            marginLeft={knobs.marginLeft !== 'none' ? knobs.marginLeft : null}
            style={styles.demoBox}
            justifyContent="center"
            alignItems="center"
          >Example element 1</Flex>
          <Flex
            margin={knobs.margin !== 'none' ? knobs.margin : null}
            marginTop={knobs.marginTop !== 'none' ? knobs.marginTop : null}
            marginRight={knobs.marginRight !== 'none' ? knobs.marginRight : null}
            marginBottom={knobs.marginBottom !== 'none' ? knobs.marginBottom : null}
            marginLeft={knobs.marginLeft !== 'none' ? knobs.marginLeft : null}
            style={styles.demoBox}
            justifyContent="center"
            alignItems="center"
          >Example element 2</Flex>
        </Flex>
      );
    },
    { notes },
  )
  .add(
    'Flex paddings',
    () => {
      const knobs = {
        exampleBoxes: number('Example Items', 4),
        padding: select('padding', spacingValues, 'spacingXs', flexKnobsId),
        paddingTop: select('padding top', spacingValues, 'none', flexKnobsId),
        paddingRight: select('padding right', spacingValues, 'none', flexKnobsId),
        paddingBottom: select('padding bottom', spacingValues, 'none', flexKnobsId),
        paddingLeft: select('padding left', spacingValues, 'none', flexKnobsId),
      };

      return (
        <Flex
          htmlTag="div"
        >
          <Flex
            padding={knobs.padding !== 'none' ? knobs.padding : null}
            paddingTop={knobs.paddingTop !== 'none' ? knobs.paddingTop : null}
            paddingRight={knobs.paddingRight !== 'none' ? knobs.paddingRight : null}
            paddingBottom={knobs.paddingBottom !== 'none' ? knobs.paddingBottom : null}
            paddingLeft={knobs.paddingLeft !== 'none' ? knobs.paddingLeft : null}
            style={styles.demoBox}
            justifyContent="center"
            alignItems="center"
            marginRight="spacingXs"
          >Example element 1</Flex>
          <Flex
            padding={knobs.padding !== 'none' ? knobs.padding : null}
            paddingTop={knobs.paddingTop !== 'none' ? knobs.paddingTop : null}
            paddingRight={knobs.paddingRight !== 'none' ? knobs.paddingRight : null}
            paddingBottom={knobs.paddingBottom !== 'none' ? knobs.paddingBottom : null}
            paddingLeft={knobs.paddingLeft !== 'none' ? knobs.paddingLeft : null}
            style={styles.demoBox}
            justifyContent="center"
            alignItems="center"
          >Example element 2</Flex>
        </Flex>
      );
    },
    { notes },
  );
