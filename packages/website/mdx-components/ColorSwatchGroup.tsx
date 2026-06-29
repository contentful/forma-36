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
    | 'yellow'
    | 'datavizCategorical'
    | 'datavizCategoricalMuted'
    | 'datavizSequentialBlue'
    | 'datavizSequentialPurple'
    | 'datavizSequentialTeal'
    | 'datavizSequentialPink'
    | 'datavizSemantic';
}

const sequentialGroups = [
  'datavizSequentialBlue',
  'datavizSequentialPurple',
  'datavizSequentialTeal',
  'datavizSequentialPink',
];

export function ColorSwatchGroup({ colorGroup }: Props) {
  const colors = tokens[colorGroup];
  const columnCount = sequentialGroups.includes(colorGroup) ? 5 : 4;

  return (
    <Grid columns={columnCount} rowGap="spacingM" marginBottom="spacingL">
      {Object.keys(colors).map((color, idx) => {
        const value = colors[color];

        const tokenName = color.replace(/-([a-z0-9])/g, (_, c) =>
          c.toUpperCase(),
        );

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
