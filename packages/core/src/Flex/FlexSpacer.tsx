import * as React from 'react';

import { Box, BoxProps } from '../Box';

export function FlexSpacer<E extends React.ElementType = 'div'>(
  props: BoxProps<E>,
) {
  return (
    <Box
      css={{
        justifySelf: 'center',
        alignSelf: 'center',
        flex: '1',
      }}
      {...props}
    />
  );
}
