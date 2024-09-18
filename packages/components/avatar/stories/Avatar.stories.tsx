import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { Flex } from '@contentful/f36-core';
import { SectionHeading } from '@contentful/f36-typography';

import {
  Avatar,
  avatarColorMap,
  type AvatarProps,
  type ColorVariant,
} from '../src/Avatar';
import { CheckCircleIcon } from '@contentful/f36-icons/src';

export default {
  component: Avatar,
  title: 'Components/Avatar',
} as Meta;

export const Overview: Story<AvatarProps> = (args) => {
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
          icon={<CheckCircleIcon variant="positive" />}
        />
        <Avatar
          {...args}
          size="small"
          icon={<CheckCircleIcon variant="positive" />}
        />
        <Avatar
          {...args}
          size="medium"
          icon={<CheckCircleIcon variant="positive" />}
        />
        <Avatar
          {...args}
          size="large"
          icon={<CheckCircleIcon variant="positive" />}
        />
        <Avatar
          {...args}
          size="75"
          icon={<CheckCircleIcon variant="positive" />}
        />
        <Avatar
          {...args}
          size="75"
          variant="app"
          icon={<CheckCircleIcon variant="positive" />}
        />
        <Avatar
          {...args}
          size="large"
          variant="app"
          icon={<CheckCircleIcon variant="positive" />}
        />
        <Avatar
          {...args}
          size="medium"
          variant="app"
          icon={<CheckCircleIcon variant="positive" />}
        />
        <Avatar
          {...args}
          size="small"
          variant="app"
          icon={<CheckCircleIcon variant="positive" />}
        />
        <Avatar
          {...args}
          size="tiny"
          variant="app"
          icon={<CheckCircleIcon variant="positive" />}
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
        <Avatar isLoading size="75" variant="user" />
        <Avatar isLoading size="75" variant="app" />
        <Avatar isLoading size="large" variant="app" />
        <Avatar isLoading size="medium" variant="app" />
        <Avatar isLoading size="small" variant="app" />
        <Avatar isLoading size="tiny" variant="app" />
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
  src: 'https://images.ctfassets.net/iq4lnigp6fgt/2EEEk92Kiz6KxREsjBLPAN/810d5a21650d91abad12e95da4cd3beb/2021-06_Everyone_is_Welcome_here_1_.png?fit=fill&f=top_left&w=100&h=100',
};

export const BorderColors: Story<AvatarProps> = (args) => {
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
  src: 'https://images.ctfassets.net/iq4lnigp6fgt/2EEEk92Kiz6KxREsjBLPAN/810d5a21650d91abad12e95da4cd3beb/2021-06_Everyone_is_Welcome_here_1_.png?fit=fill&f=top_left&w=100&h=100',
};
