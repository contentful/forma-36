import React from 'react';
import { Grid } from '@contentful/f36-components';

import { tokens } from '../utils/colorTokens';
import { ColorSwatch } from './ColorSwatch';

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
    <Grid columns={4} rowGap="spacingM" marginBottom="spacingL">
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
