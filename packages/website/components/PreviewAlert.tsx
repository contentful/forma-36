import React from 'react';
import { TextLink, Flex, Text } from '@contentful/f36-components';
import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

const styles = {
  root: css({
    justifyContent: 'center',
    backgroundColor: tokens.yellow100,
    padding: tokens.spacingXs,
  }),
};

export const PreviewAlert = () => {
  return (
    <Flex className={styles.root}>
      <Text>
        This page is a preview.{' '}
        <TextLink href="/api/exit-preview">Click here</TextLink> to exit preview
        mode.
      </Text>
    </Flex>
  );
};
