import React, { useContext } from 'react';
import { Box, Text } from '@contentful/f36-components';
import { Forma36Context } from '@contentful/f36-core';

import { getPropertyValueStyles } from './PropertyValue.styles';

interface PropertyValueProps {
  value: string;
}

export function PropertyValue({ value }: PropertyValueProps) {
  const { isDarkMode } = useContext(Forma36Context);
  const styles = getPropertyValueStyles({ isDarkMode });

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
