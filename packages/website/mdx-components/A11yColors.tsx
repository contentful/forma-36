import React from 'react';
import { Grid } from '@contentful/f36-components';

import { tokens } from '../utils/colorTokens';
import { ColorBox } from './ColorBox';

export function A11yColors() {
  const listOfColors: string[] = Object.values(tokens).reduce((acc, colors) => {
    const tokenNames = Object.keys(colors)
      .filter((color) => !color.includes('color'))
      .map((color) => color.replace('-', ''));

    return [...acc, ...tokenNames];
  }, []);

  return (
    <Grid columns={9} rowGap="spacingM" marginBottom="spacingL">
      {listOfColors.map((color, idx) => {
        const rgx = new RegExp(/100|200|300|400|yellow500|yellow600|yellow700/);
        const textColor = rgx.test(color) ? 'gray800' : 'colorWhite';

        return (
          <ColorBox
            key={idx}
            text={color}
            bgColor={color}
            textColor={textColor}
          />
        );
      })}
    </Grid>
  );
}
