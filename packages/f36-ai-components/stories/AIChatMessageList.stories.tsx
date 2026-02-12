import { Button } from '@contentful/f36-button';
import { Box } from '@contentful/f36-components';
import type { Meta, StoryFn } from '@storybook/react-vite';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
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

export const Default: StoryFn<
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

export const WithCustomScroll: StoryFn<
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

export const WithStreamingChunks: StoryFn<
  AIChatMessageListProps & {
    numberOfChildren: number;
    width: number;
    height: number;
  }
> = ({ width, height }) => {
  const [messages, setMessages] = useState([
    { role: 'user', content: 'Hello, can you help me with something?' },
    {
      role: 'assistant',
      content:
        "Of course! I'd be happy to help you. What do you need assistance with?",
    },
    { role: 'user', content: 'I need to understand how streaming works.' },
    {
      role: 'assistant',
      content:
        "Streaming is a great way to display content as it's being generated.",
    },
    { role: 'user', content: 'Can you show me an example?' },
    {
      role: 'assistant',
      content: 'Sure! Let me demonstrate how text can be added in chunks.',
    },
    { role: 'user', content: 'That would be helpful.' },
    { role: 'assistant', content: "Here's how it works in practice." },
    { role: 'user', content: 'Please start the demonstration.' },
    { role: 'assistant', content: '' },
  ]);

  const [chunkIndex, setChunkIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const textChunks = useMemo(
    () => [
      'This is ',
      'a demonstration ',
      'of streaming ',
      'text chunks. ',
      'Each chunk ',
      'will append ',
      'more text ',
      'to this ',
      'message. ',
    ],
    [],
  );

  const handleAddChunk = useCallback(() => {
    setChunkIndex((prevIndex) => {
      setMessages((prevMessages) => {
        const newMessages = [...prevMessages];
        const lastMessage = newMessages[newMessages.length - 1];
        lastMessage.content += textChunks[prevIndex % textChunks.length];
        return newMessages;
      });
      return prevIndex + 1;
    });
  }, [textChunks]);

  const handleReset = useCallback(() => {
    setChunkIndex(0);
    setMessages((prevMessages) => {
      const newMessages = [...prevMessages];
      newMessages[newMessages.length - 1].content = '';
      return newMessages;
    });
  }, []);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      handleAddChunk();
    }, 100);

    return () => clearInterval(interval);
  }, [isPlaying, handleAddChunk]);

  return (
    <>
      <Box style={{ display: 'flex', gap: '8px' }}>
        <Button onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? 'Pause' : 'Play'}
        </Button>
        <Button onClick={handleAddChunk} isDisabled={isPlaying}>
          Step
        </Button>
        <Button onClick={handleReset} isDisabled={isPlaying}>
          Reset
        </Button>
        <span style={{ alignSelf: 'center', marginLeft: '8px' }}>
          Chunks: {chunkIndex}
        </span>
      </Box>
      <Box
        style={{
          width: `${width}px`,
          height: `${height}px`,
          marginTop: '16px',
        }}
      >
        <AIChatMessageList>
          {messages.map((msg, i) => (
            <AIChatMessage
              key={i}
              authorRole={msg.role as 'user' | 'assistant'}
              content={msg.content}
            />
          ))}
        </AIChatMessageList>
      </Box>
    </>
  );
};

WithStreamingChunks.args = {
  width: 350,
  height: 600,
};
WithStreamingChunks.argTypes = {
  numberOfChildren: { control: { disable: true } },
};
