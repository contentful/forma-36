import React, { useState } from 'react';
import type { Meta } from '@storybook/react-vite';
import { Button } from '@contentful/f36-button';
import { Paragraph } from '@contentful/f36-typography';
import { Box } from '@contentful/f36-core';
import { Popover } from '../src/.';

const meta = {
  component: Popover,
  title: 'Components/Popover',
} satisfies Meta;

export default meta;

export const Basic = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section style={{ width: '650px' }}>
      <h3>The basic popover</h3>
      <Popover
        renderOnlyWhenOpen={false}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <Popover.Trigger>
          <Button onClick={() => setIsOpen(!isOpen)}>Toggle</Button>
        </Popover.Trigger>
        <Popover.Content>
          <Box padding="spacingM">
            <Paragraph>This is the content.</Paragraph>
            <Button>Some action</Button>
          </Box>
        </Popover.Content>
      </Popover>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet.
      </p>
    </section>
  );
};

export const InteractionOverview = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [is2Open, setIs2Open] = useState(false);
  return (
    <section style={{ display: 'flex', gap: '15px', flexDirection: 'column' }}>
      <h3>Will not close when pressing escape</h3>
      <Popover
        closeOnEsc={false}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <Popover.Trigger>
          <Button onClick={() => setIsOpen(!isOpen)}>Toggle</Button>
        </Popover.Trigger>
        <Popover.Content>
          <Box padding="spacingM">
            <Paragraph>This is the content.</Paragraph>
            <Button>Some action</Button>
          </Box>
        </Popover.Content>
      </Popover>
      <h3>Will not close on outside interaction</h3>
      <Popover
        closeOnBlur={false}
        isOpen={is2Open}
        onClose={() => setIs2Open(false)}
      >
        <Popover.Trigger>
          <Button onClick={() => setIs2Open(!is2Open)}>Toggle</Button>
        </Popover.Trigger>
        <Popover.Content>
          <Box padding="spacingM">
            <Paragraph>This is the content.</Paragraph>
            <Button>Some action</Button>
          </Box>
        </Popover.Content>
      </Popover>
      <p style={{ width: '650px' }}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet.
      </p>
    </section>
  );
};

export const WithFullWidth = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section>
      <h3>Sets the width of the popover to the width of the trigger</h3>
      <Popover isFullWidth isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Popover.Trigger>
          <Button onClick={() => setIsOpen(!isOpen)}>
            Toggle button with long content
          </Button>
        </Popover.Trigger>
        <Popover.Content>
          <Box padding="spacingM">
            <Paragraph>This is the content.</Paragraph>
            <Button>Some action</Button>
          </Box>
        </Popover.Content>
      </Popover>
      <p style={{ width: '650px' }}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet.
      </p>
    </section>
  );
};

export const WithAutoAligment = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section>
      <h3>Auto aligns based on available space</h3>
      <div
        style={{
          width: '100vw',
          height: '80vh',
          backgroundColor: 'lavender',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          margin: '-1rem',
        }}
      >
        <Popover
          isAutoalignmentEnabled
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <Popover.Trigger>
            <Button onClick={() => setIsOpen(!isOpen)}>Toggle</Button>
          </Popover.Trigger>
          <Popover.Content>
            <Box padding="spacingM">
              <Paragraph>This is the content.</Paragraph>
              <Button>Some action</Button>
            </Box>
          </Popover.Content>
        </Popover>
      </div>
    </section>
  );
};
