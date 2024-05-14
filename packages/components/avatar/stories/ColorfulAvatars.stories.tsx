import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { Flex, Stack } from '@contentful/f36-core';
import { SectionHeading } from '@contentful/f36-typography';
import { css } from 'emotion';

import { Avatar, type AvatarProps } from '../src/Avatar';

import tokens from '@contentful/f36-tokens';

export default {
  component: Avatar,
  title: 'Components/Avatar/ColorfulAvatars',
} as Meta;

export const Overview: Story<AvatarProps> = () => {
  const colorMapLight = [
    'blue300',
    'gray300',
    'green300',
    'orange300',
    'purple300',
    'red300',
    'yellow300',
  ];

  const colorMapDark = [
    'blue500',
    'gray500',
    'green500',
    'orange500',
    'purple500',
    'red500',
    'yellow500',
  ];

  const initials = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];

  const getGradient = (start: string, end: string) => {
    const startColor = (start.charCodeAt(0) - 65) % 7;
    const endColor = (end.charCodeAt(0) - 65) % 7;

    return `linear-gradient(150deg, ${tokens[colorMapLight[startColor]]} 30%, ${
      tokens[colorMapDark[endColor]]
    } 100%)`;
  };

  return (
    <>
      <SectionHeading as="h3" marginBottom="spacingS">
        Avatar Colors
      </SectionHeading>

      <Flex
        alignItems="center"
        flexDirection="column"
        gap="spacingS"
        marginBottom="spacingM"
      >
        {initials.map((character1) => {
          return (
            <Stack key={`row-${character1}`}>
              {initials.map((character2) => (
                <Avatar
                  key={`avtar-${character1}${character2}`}
                  initials={`${character1}${character2}`}
                  fallBackClass={css({
                    background: getGradient(character1, character2),
                  })}
                />
              ))}
            </Stack>
          );
        })}
      </Flex>
    </>
  );
};
