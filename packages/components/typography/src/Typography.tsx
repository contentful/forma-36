import React, { createContext } from 'react';
import { Box } from '@contentful/f36-core';
import type { CommonProps, Spacing } from '@contentful/f36-core';

export interface TypographyProps extends CommonProps {
  children?: React.ReactNode;
}

type TypographyConfiguration = {
  displayText?: Spacing;
  displayTextLarge?: Spacing;
  heading?: Spacing;
  sectionHeading?: Spacing;
  subheading?: Spacing;
  text?: Spacing;
};

const defaultConfiguration: TypographyConfiguration = {
  displayText: 'spacingL',
  displayTextLarge: 'spacingXl',
  heading: 'spacingM',
  sectionHeading: 'spacingL',
  subheading: 'spacingM',
  text: 'spacingM',
};

export const TypographyContext = createContext<TypographyConfiguration>({});

export function Typography(props: TypographyProps) {
  return (
    <TypographyContext.Provider value={defaultConfiguration}>
      <Box testId="cf-ui-text-container" {...props} />
    </TypographyContext.Provider>
  );
}
