import React from 'react';
import { Box, Text } from '@contentful/f36-components';

import { getPropertyValueStyles } from './PropertyValue.styles';

interface PropertyValueProps {
  value: string;
}

export function PropertyValue({ value }: PropertyValueProps) {
  const styles = getPropertyValueStyles();

  return (
    <Box
      className={styles.tag}
      paddingLeft="spacingXs"
      paddingRight="spacingXs"
      marginRight="spacingXs"
      marginBottom="spacingXs"
    >
      <Text fontStack="fontStackMonospace">{value}</Text>
    </Box>
  );
}
