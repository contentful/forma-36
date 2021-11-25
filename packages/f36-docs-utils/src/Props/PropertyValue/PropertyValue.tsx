import React from 'react';
import { Box, Text } from '@contentful/f36-components';

interface PropertyValueProps {
  value: string;
}

export function PropertyValue({ value }: PropertyValueProps) {
  return (
    <Box
      style={{
        display: 'inline-block',
        justifySelf: 'flex-start',
        backgroundColor: 'cyan',
        borderRadius: '4px',
      }}
      paddingLeft="spacingXs"
      paddingRight="spacingXs"
      marginRight="spacingXs"
      marginBottom="spacingXs"
    >
      <Text fontStack="fontStackMonospace">{value}</Text>
    </Box>
  );
}
