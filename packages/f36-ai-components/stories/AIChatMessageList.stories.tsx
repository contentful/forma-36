import { Button } from '@contentful/f36-button';
import { Box } from '@contentful/f36-components';
import type { Meta, Story } from '@storybook/react';
import React, { useRef } from 'react';
import { AIChatMessage } from '../src';
import {
  AIChatMessageList,
  AIChatMessageListProps,
} from '../src/AIChatMessageList';
import { AIChatMessageListRef } from '../src/AIChatMessageList/AIChatMessageList';

export default {
  title: 'Components/AIChat/AIChatMessageList',
  component: AIChatMessageList,
  parameters: {
    propTypes: AIChatMessageList['__docgenInfo'],
  },
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
    style: { control: { disable: true } },
    children: { control: { disable: true } },
    numberOfChildren: { control: 'number', min: 0 },
    width: { control: 'number', min: 200, max: 800, step: 50 },
    height: { control: 'number', min: 300, max: 1000, step: 50 },
    scrollBehavior: { control: { disable: true } },
  },
} as Meta;

export const Default: Story<
  AIChatMessageListProps & {
    numberOfChildren: number;
    width: number;
    height: number;
  }
> = ({ numberOfChildren, width, height, ...componentProps }) => {
  return (
    <Box style={{ width: `${width}px`, height: `${height}px` }}>
      <AIChatMessageList {...componentProps}>
        {numberOfChildren > 0 &&
          [...Array(numberOfChildren)].map((_, i) => (
            <AIChatMessage
              key={i}
              authorRole={i % 2 === 0 ? 'user' : 'assistant'}
              content={`Message #${
                i + 1
              }: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}
            ></AIChatMessage>
          ))}
      </AIChatMessageList>
    </Box>
  );
};

Default.args = {
  numberOfChildren: 3,
  width: 350,
  height: 600,
};

export const WithCustomScroll: Story<
  AIChatMessageListProps & {
    numberOfChildren: number;
    width: number;
    height: number;
  }
> = ({ numberOfChildren, width, height, ...componentProps }) => {
  const containerRef = useRef<AIChatMessageListRef>(null);

  return (
    <>
      <Button onClick={() => containerRef.current?.scrollToBottom()}>
        Scroll to bottom
      </Button>
      <Box style={{ width: `${width}px`, height: `${height}px` }}>
        <AIChatMessageList
          {...componentProps}
          scrollBehavior={'none'}
          ref={containerRef}
        >
          {numberOfChildren > 0 &&
            [...Array(numberOfChildren)].map((_, i) => (
              <AIChatMessage
                key={i}
                authorRole={i % 2 === 0 ? 'user' : 'assistant'}
                content={`Message #${
                  i + 1
                }: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}
              ></AIChatMessage>
            ))}
        </AIChatMessageList>
      </Box>
    </>
  );
};

WithCustomScroll.args = {
  numberOfChildren: 10,
  width: 350,
  height: 600,
};
