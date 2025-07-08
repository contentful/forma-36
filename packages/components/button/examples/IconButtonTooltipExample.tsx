import React from 'react';
import { IconButton, Flex, Stack } from '@contentful/f36-components';
import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import { TextBIcon, TextItalicIcon } from '@contentful/f36-icons';

export default function IconButtonTooltipExample() {
  const styles = {
    editorToolbarContainer: css({
      backgroundColor: tokens.gray200,
      borderRadius: tokens.borderRadiusMedium,
    }),
  };
  return (
    <Flex
      justifyContent="space-between"
      className={styles.editorToolbarContainer}
      padding="spacingXs"
    >
      <Stack spacing="spacingXs">
        <IconButton
          aria-label="Toggle bold"
          icon={<TextBIcon />}
          variant="transparent"
          size="small"
          withTooltip
          tooltipProps={{ content: 'Bold' }}
        />

        <IconButton
          aria-label="Toggle italic"
          icon={<TextItalicIcon />}
          variant="transparent"
          size="small"
          withTooltip
          tooltipProps={{ content: 'Italic' }}
        />
      </Stack>
    </Flex>
  );
}
