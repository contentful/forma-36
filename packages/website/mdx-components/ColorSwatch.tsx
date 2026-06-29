import React from 'react';
import { css } from '@emotion/css';

import tokens from '@contentful/f36-tokens';
import { Box, Card, CopyButton, Flex } from '@contentful/f36-components';

const styles = {
  swatch: css({
    height: '100px',
    borderRadius: `${tokens.borderRadiusMedium} ${tokens.borderRadiusMedium} 0 0`,
  }),
};

interface Props {
  name: string;
  hex: string;
  cssVar: string;
}

export function ColorSwatch({ name, hex, cssVar }: Props) {
  return (
    <Card padding="none">
      <Box
        className={styles.swatch}
        style={{ backgroundColor: tokens[name] }}
      />
      <Flex
        gap="spacingXs"
        flexDirection="column"
        alignItems="flex-end"
        padding="spacingM"
      >
        <Flex gap="spacingXs" alignItems="center">
          <Box style={{ wordBreak: 'break-all', textAlign: 'right' }}>
            {name}
          </Box>
          <CopyButton size="small" value={name} tooltipProps={{ id: name }} />
        </Flex>
        <Flex gap="spacingXs" alignItems="center">
          <Box style={{ wordBreak: 'break-all', textAlign: 'right' }}>
            {hex}
          </Box>
          <CopyButton size="small" value={hex} tooltipProps={{ id: name }} />
        </Flex>
        <Flex gap="spacingXs" alignItems="center">
          <Box style={{ wordBreak: 'break-all', textAlign: 'right' }}>
            {cssVar}
          </Box>
          <CopyButton size="small" value={cssVar} tooltipProps={{ id: name }} />
        </Flex>
      </Flex>
    </Card>
  );
}
