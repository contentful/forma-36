import React from 'react';
import { Box } from '@contentful/f36-core';
import type { CommonProps, Spacing } from '@contentful/f36-core';

export interface TypographyProps extends CommonProps {
  children?: React.ReactNode;
}

type TypographyConfiguration = {
  displayText?: Spacing;
  displayTextLarge?: Spacing;
  heading?: Spacing;
  paragraph?: Spacing;
  sectionHeading?: Spacing;
  subheading?: Spacing;
};

const defaultConfiguration: TypographyConfiguration = {
  displayText: 'spacingL',
  displayTextLarge: 'spacingXl',
  heading: 'spacingM',
  paragraph: 'spacingM',
  sectionHeading: 'spacingL',
  subheading: 'spacingM',
};

export const TypographyContext = React.createContext<TypographyConfiguration>(
  {},
);

export function Typography(props: TypographyProps) {
  return (
    <TypographyContext.Provider value={defaultConfiguration}>
      <Box testId="cf-ui-text-container" {...props} />
    </TypographyContext.Provider>
  );
}
