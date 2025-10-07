import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import tokens from '@contentful/f36-tokens';
import { Flex } from '@contentful/f36-core';
import { SectionHeading } from '@contentful/f36-typography';

import {
  Avatar,
  avatarColorMap,
  type AvatarProps,
  type ColorVariant,
} from '../src/Avatar';
import { CheckCircleIcon } from '@contentful/f36-icons';

export default {
  component: Avatar,
  title: 'Components/Avatar',
} as Meta;

export const Overview: StoryObj<AvatarProps> = (args) => {
  return (
    <>
      <SectionHeading as="h3" marginBottom="spacingS">
        Icon
      </SectionHeading>

      <Flex
        alignItems="center"
        flexDirection="row"
        gap="spacingS"
        marginBottom="spacingM"
      >
        <Avatar
          {...args}
          size="tiny"
          icon={<CheckCircleIcon color={tokens.colorPositive} />}
        />
        <Avatar
          {...args}
          size="small"
          icon={<CheckCircleIcon color={tokens.colorPrimary} />}
        />
        <Avatar
          {...args}
          size="medium"
          icon={<CheckCircleIcon color={tokens.colorPrimary} />}
        />
        <Avatar
          {...args}
          size="large"
          icon={<CheckCircleIcon color={tokens.colorPrimary} />}
        />
        <Avatar
          {...args}
          size="75px"
          icon={<CheckCircleIcon color={tokens.colorPrimary} />}
        />
        <Avatar
          {...args}
          size="75px"
          variant="app"
          icon={<CheckCircleIcon color={tokens.colorPrimary} />}
        />
        <Avatar
          {...args}
          size="large"
          variant="app"
          icon={<CheckCircleIcon color={tokens.colorPrimary} />}
        />
        <Avatar
          {...args}
          size="medium"
          variant="app"
          icon={<CheckCircleIcon color={tokens.colorPrimary} />}
        />
        <Avatar
          {...args}
          size="small"
          variant="app"
          icon={<CheckCircleIcon color={tokens.colorPrimary} />}
        />
        <Avatar
          {...args}
          size="tiny"
          variant="app"
          icon={<CheckCircleIcon color={tokens.colorPrimary} />}
        />
      </Flex>

      <SectionHeading as="h3" marginBottom="spacingS">
        Loading
      </SectionHeading>

      <Flex
        alignItems="center"
        flexDirection="row"
        gap="spacingS"
        marginBottom="spacingM"
      >
        <Avatar isLoading size="tiny" variant="user" />
        <Avatar isLoading size="small" variant="user" />
        <Avatar isLoading size="medium" variant="user" />
        <Avatar isLoading size="large" variant="user" />
        <Avatar isLoading size="75px" variant="user" />
        <Avatar isLoading size="75px" variant="app" />
        <Avatar isLoading size="large" variant="app" />
        <Avatar isLoading size="medium" variant="app" />
        <Avatar isLoading size="small" variant="app" />
        <Avatar isLoading size="tiny" variant="app" />
      </Flex>

      <SectionHeading as="h3" marginBottom="spacingS">
        With a broken source, the loading skeleton is also rendered
      </SectionHeading>

      <Flex
        alignItems="center"
        flexDirection="row"
        gap="spacingS"
        marginBottom="spacingM"
      >
        <Avatar src="#" size="tiny" variant="user" />
        <Avatar src="#" size="small" variant="user" />
        <Avatar src="#" size="medium" variant="user" />
        <Avatar src="#" size="large" variant="user" />
        <Avatar src="#" size="75px" variant="user" />
        <Avatar src="#" size="75px" variant="app" />
        <Avatar src="#" size="large" variant="app" />
        <Avatar src="#" size="medium" variant="app" />
        <Avatar src="#" size="small" variant="app" />
        <Avatar src="#" size="tiny" variant="app" />
      </Flex>

      <SectionHeading as="h3" marginBottom="spacingS">
        Indicator properties
      </SectionHeading>
      <Flex
        alignItems="center"
        flexDirection="row"
        gap="spacingS"
        marginBottom="spacingM"
      >
        <Avatar {...args} size="large" colorVariant="primary" />
        <Avatar {...args} variant="app" size="large" colorVariant="primary" />
        <Avatar {...args} size="large" colorVariant="purple" />
        <Avatar {...args} size="large" colorVariant="yellow" />
        <Avatar {...args} size="large" colorVariant="green" />
        <Avatar {...args} size="large" variant="app" colorVariant="gray" />
        <Avatar {...args} size="large" variant="app" colorVariant="muted" />
        <Avatar {...args} size="large" variant="app" colorVariant="pink" />
        <Avatar {...args} size="large" variant="app" colorVariant="lavender" />
        <Avatar {...args} size="large" variant="app" colorVariant="emerald" />
      </Flex>

      <SectionHeading as="h3" marginBottom="spacingS">
        Tooltip properties
      </SectionHeading>
      <Flex
        alignItems="center"
        flexDirection="row"
        gap="spacingS"
        marginBottom="spacingM"
      >
        <Avatar
          {...args}
          size="large"
          variant="user"
          colorVariant="gray"
          tooltipProps={{
            content: 'Contentful Avatar',
            placement: 'bottom',
          }}
        />
        <Avatar
          {...args}
          size="large"
          variant="user"
          colorVariant="gray"
          tooltipProps={{
            content: 'Contentful Avatar',
            placement: 'bottom',
            isVisible: true,
          }}
        />
      </Flex>
    </>
  );
};

Overview.args = {
  initials: 'BB',
  src: 'https://images.ctfassets.net/iq4lnigp6fgt/72KhxI84kw1SE9gP8gDp7R/c5fa24bdc295a318018aea0ca46e2de8/forma-36-storybook-asset.png?fit=fill&f=top_left&w=100&h=100',
};

export const BorderColors: StoryObj<AvatarProps> = (args) => {
  const { src, ...argsNoSrc } = args;
  return (
    <>
      {Object.keys(avatarColorMap).map((color: ColorVariant) => (
        <>
          <SectionHeading as="h3" marginBottom="spacingS">
            {color}
          </SectionHeading>
          <Flex
            alignItems="center"
            flexDirection="row"
            gap="spacingS"
            marginBottom="spacingM"
          >
            {/* prettier-ignore */}
            <Avatar {...argsNoSrc} colorVariant={color} size="tiny" variant="user" />
            {/* prettier-ignore */}
            <Avatar {...argsNoSrc} colorVariant={color} size="small" variant="user" />
            {/* prettier-ignore */}
            <Avatar {...argsNoSrc} colorVariant={color} size="medium" variant="user" />
            {/* prettier-ignore */}
            <Avatar {...argsNoSrc} colorVariant={color} size="large" variant="app" />
            {/* prettier-ignore */}
            <Avatar {...argsNoSrc} colorVariant={color} size="large" variant="user" />
            {/* prettier-ignore */}
            <Avatar {...argsNoSrc} colorVariant={color} size="medium" variant="app" />
            {/* prettier-ignore */}
            <Avatar {...argsNoSrc} colorVariant={color} size="small" variant="app" />
            {/* prettier-ignore */}
            <Avatar {...argsNoSrc} colorVariant={color} size="tiny" variant="app" />
            {/* prettier-ignore */}
            <Avatar {...args} colorVariant={color} size="tiny" />
            {/* prettier-ignore */}
            <Avatar {...args} colorVariant={color} size="small" />
            {/* prettier-ignore */}
            <Avatar {...args} colorVariant={color} size="medium" />
            {/* prettier-ignore */}
            <Avatar {...args} colorVariant={color} size="large" />
            {/* prettier-ignore */}
            <Avatar {...args} colorVariant={color} size="large" variant="app" />
            {/* prettier-ignore */}
            <Avatar {...args} colorVariant={color} size="medium" variant="app" />
            {/* prettier-ignore */}
            <Avatar {...args} colorVariant={color} size="small" variant="app" />
            {/* prettier-ignore */}
            <Avatar {...args} colorVariant={color} size="tiny" variant="app" />
          </Flex>
        </>
      ))}
    </>
  );
};

BorderColors.args = {
  initials: 'BB',
  src: 'https://images.ctfassets.net/iq4lnigp6fgt/72KhxI84kw1SE9gP8gDp7R/c5fa24bdc295a318018aea0ca46e2de8/forma-36-storybook-asset.png?fit=fill&f=top_left&w=100&h=100',
};
