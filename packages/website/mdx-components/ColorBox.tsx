import React from 'react';
import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import { Card, Flex, Text, type TextProps } from '@contentful/f36-components';

const styles = {
  swatch: css({
    height: '100px',
  }),
};

interface Props {
  text: string;
  bgColor: string;
  textColor?: TextProps['fontColor'];
}

export function ColorBox({ text, bgColor, textColor = 'colorWhite' }: Props) {
  return (
    <Card
      className={styles.swatch}
      style={{ backgroundColor: tokens[bgColor] }}
    >
      <Flex
        justifyContent="center"
        alignItems="center"
        style={{ height: '100%' }}
      >
        <Text fontColor={textColor} fontWeight="fontWeightDemiBold">
          {text}
        </Text>
      </Flex>
    </Card>
  );
}
