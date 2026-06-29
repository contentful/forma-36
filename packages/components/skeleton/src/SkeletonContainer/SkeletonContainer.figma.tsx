import React from 'react';
import figma from '@figma/code-connect';
import { SkeletonContainer } from './SkeletonContainer';
import { SkeletonImage } from '../SkeletonImage/SkeletonImage';
import { SkeletonBodyText } from '../SkeletonBodyText/SkeletonBodyText';
import { SkeletonDisplayText } from '../SkeletonDisplayText/SkeletonDisplayText';

const FIGMA_URL =
  'https://www.figma.com/design/BDteZSphg3YPJTMlABQozc/Forma-36-Components?node-id=11349:96138';

figma.connect(SkeletonContainer, FIGMA_URL, {
  variant: { Type: 'Image' },
  example: () => (
    <SkeletonContainer svgWidth="100%" svgHeight="100px">
      <SkeletonImage width={70} height={70} />
    </SkeletonContainer>
  ),
});

figma.connect(SkeletonContainer, FIGMA_URL, {
  variant: { Type: 'Image round' },
  example: () => (
    <SkeletonContainer svgWidth="100%" svgHeight="100px">
      <SkeletonImage width={70} height={70} radiusX={35} radiusY={35} />
    </SkeletonContainer>
  ),
});

figma.connect(SkeletonContainer, FIGMA_URL, {
  variant: { Type: 'Body text / Basic' },
  example: () => (
    <SkeletonContainer svgWidth="100%" svgHeight="100px">
      <SkeletonBodyText numberOfLines={3} />
    </SkeletonContainer>
  ),
});

figma.connect(SkeletonContainer, FIGMA_URL, {
  variant: { Type: 'Display text' },
  example: () => (
    <SkeletonContainer svgWidth="100%" svgHeight="100px">
      <SkeletonDisplayText />
    </SkeletonContainer>
  ),
});
