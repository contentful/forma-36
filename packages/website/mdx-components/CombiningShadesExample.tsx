import React from 'react';
import { Grid } from '@contentful/f36-components';

import { ColorBox } from './ColorBox';

export function CombiningShadesExample() {
  return (
    <Grid columns={6} rowGap="spacingM" marginBottom="spacingL">
      <ColorBox text="600 on 100" bgColor="blue100" textColor="blue600" />
      <ColorBox text="600 on 200" bgColor="blue200" textColor="blue600" />
      <ColorBox text="700 on 300" bgColor="blue300" textColor="blue700" />
      <ColorBox text="300 on 900" bgColor="blue900" textColor="blue300" />
      <ColorBox text="500 on white" bgColor="colorwhite" textColor="blue500" />
      <ColorBox text="500 on gray100" bgColor="gray100" textColor="blue500" />

      <ColorBox text="600 on 100" bgColor="green100" textColor="green600" />
      <ColorBox text="600 on 200" bgColor="green200" textColor="green600" />
      <ColorBox text="700 on 300" bgColor="green300" textColor="green700" />
      <ColorBox text="300 on 900" bgColor="green900" textColor="green300" />
      <ColorBox text="500 on white" bgColor="colorwhite" textColor="green500" />
      <ColorBox text="500 on gray100" bgColor="gray100" textColor="green500" />

      <ColorBox text="600 on 100" bgColor="red100" textColor="red600" />
      <ColorBox text="600 on 200" bgColor="red200" textColor="red600" />
      <ColorBox text="700 on 300" bgColor="red300" textColor="red700" />
      <ColorBox text="300 on 900" bgColor="red900" textColor="red300" />
      <ColorBox text="500 on white" bgColor="colorwhite" textColor="red500" />
      <ColorBox text="500 on gray100" bgColor="gray100" textColor="red500" />

      <ColorBox text="600 on 100" bgColor="purple100" textColor="purple600" />
      <ColorBox text="600 on 200" bgColor="purple200" textColor="purple600" />
      <ColorBox text="700 on 300" bgColor="purple300" textColor="purple700" />
      <ColorBox text="300 on 900" bgColor="purple900" textColor="purple300" />
      <ColorBox
        text="500 on white"
        bgColor="colorwhite"
        textColor="purple500"
      />
      <ColorBox text="500 on gray100" bgColor="gray100" textColor="purple500" />

      <ColorBox text="600 on 100" bgColor="orange100" textColor="orange600" />
      <ColorBox text="600 on 200" bgColor="orange200" textColor="orange600" />
      <ColorBox text="700 on 300" bgColor="orange300" textColor="orange700" />
      <ColorBox text="300 on 900" bgColor="orange900" textColor="orange300" />
      <ColorBox
        text="500 on white"
        bgColor="colorwhite"
        textColor="orange500"
      />
      <ColorBox text="500 on gray100" bgColor="gray100" textColor="orange500" />

      <ColorBox text="800 on 100" bgColor="yellow100" textColor="yellow800" />
      <ColorBox text="800 on 200" bgColor="yellow200" textColor="yellow800" />
      <ColorBox text="900 on 300" bgColor="yellow300" textColor="yellow900" />
      <ColorBox text="300 on 900" bgColor="yellow900" textColor="yellow300" />
      <ColorBox
        text="800 on white"
        bgColor="colorwhite"
        textColor="yellow800"
      />
      <ColorBox text="800 on gray100" bgColor="gray100" textColor="yellow800" />
    </Grid>
  );
}
