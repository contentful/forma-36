import React from 'react';
import { Stack, Text } from '@contentful/f36-components';

export default function TextFontSizeExample() {
  return (
    <Stack flexDirection="column">
      <Text fontSize="fontSize4Xl" lineHeight="lineHeight4Xl">
        (4xl) I love Forma 36 design system.
      </Text>
      <Text fontSize="fontSize3Xl" lineHeight="lineHeight3Xl">
        (3xl) I love Forma 36 design system.
      </Text>
      <Text fontSize="fontSize2Xl" lineHeight="lineHeight2Xl">
        (2xl) I love Forma 36 design system.
      </Text>
      <Text fontSize="fontSizeXl" lineHeight="lineHeightXl">
        (xl) I love Forma 36 design system.
      </Text>
      <Text fontSize="fontSizeL" lineHeight="lineHeightL">
        (l) I love Forma 36 design system.
      </Text>
      <Text fontSize="fontSizeM" lineHeight="lineHeightM">
        (m) I love Forma 36 design system.
      </Text>
      <Text fontSize="fontSizeS" lineHeight="lineHeightS">
        (s) I love Forma 36 design system.
      </Text>
    </Stack>
  );
}
