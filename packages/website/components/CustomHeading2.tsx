import React from 'react';
import Image from 'next/image';

import { TextLink, Stack, Heading } from '@contentful/f36-components';

import { useFrontMatterContext } from '../utils/frontMatterContext';
import { svgStyles } from '../utils/colorTokens';
import arrowSquareOut from '../resources/icons/arrow-square-out.svg';

const PROPS_TITLE = 'Props (API reference)';

interface CustomHeading2Props {
  children: string;
}

export const CustomHeading2 = (props: CustomHeading2Props) => {
  const { storybook } = useFrontMatterContext() ?? {};

  if (props.children.includes(PROPS_TITLE) && storybook) {
    return (
      <Stack
        justifyContent="space-between"
        marginTop="spacing2Xl"
        marginBottom="spacingM"
      >
        <Heading as="h2" marginTop="none" marginBottom="none" {...props} />

        <TextLink
          href={storybook}
          target="_blank"
          alignIcon="end"
          className={svgStyles.blue600}
          icon={<Image src={arrowSquareOut} width={18} height={18} />}
        >
          Open in Storybook
        </TextLink>
      </Stack>
    );
  }

  return <Heading as="h2" marginTop="spacing2Xl" {...props} />;
};
