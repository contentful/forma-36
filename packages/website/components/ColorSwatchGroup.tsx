import React from 'react';
import { Grid } from '@contentful/f36-components';

import blackColors from '@contentful/f36-tokens/src/tokens/colors/colors-black';
import blueColors from '@contentful/f36-tokens/src/tokens/colors/scale-blue';
import grayColors from '@contentful/f36-tokens/src/tokens/colors/scale-gray';
import greenColors from '@contentful/f36-tokens/src/tokens/colors/scale-green';
import orangeColors from '@contentful/f36-tokens/src/tokens/colors/scale-orange';
import purpleColors from '@contentful/f36-tokens/src/tokens/colors/scale-purple';
import redColors from '@contentful/f36-tokens/src/tokens/colors/scale-red';
import semanticColors from '@contentful/f36-tokens/src/tokens/colors/colors-semantic';
import whiteColors from '@contentful/f36-tokens/src/tokens/colors/colors-white';
import yellowColors from '@contentful/f36-tokens/src/tokens/colors/scale-yellow';

import { ColorSwatch } from './ColorSwatch';

const tokens = {
  black: blackColors,
  blue: blueColors,
  gray: grayColors,
  green: greenColors,
  orange: orangeColors,
  purple: purpleColors,
  red: redColors,
  semantic: semanticColors,
  white: whiteColors,
  yellow: yellowColors,
};

interface Props {
  colorGroup:
    | 'black'
    | 'blue'
    | 'gray'
    | 'green'
    | 'orange'
    | 'purple'
    | 'red'
    | 'semantic'
    | 'white'
    | 'yellow';
}

export function ColorSwatchGroup({ colorGroup }: Props) {
  const colors = tokens[colorGroup];

  return (
    <Grid columns={5} rowGap="spacingM" marginBottom="spacingL">
      {Object.keys(colors).map((color, idx) => {
        const value = colors[color];

        const tokenName = color
          .replace(/-\d?[a-z]{1}/, (match) => match.toUpperCase())
          .replace('-', '');

        return (
          <ColorSwatch
            key={idx}
            name={tokenName}
            hex={value}
            cssVar={`--${color}`}
          />
        );
      })}
    </Grid>
  );
}
