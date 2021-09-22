import React from 'react';
import type { Meta } from '@storybook/react/types-6-0';
import { useKeyboard } from './useKeyboard';

export default {
  title: 'UseKeyboard',
} as Meta;

const keys = {
  ArrowUp: () => console.log('ArrowUp'),
  Enter: () => console.log('Enter'),
};

export const UseKeyboard = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const divRef = React.useRef(null);

  useKeyboard({
    ref: divRef,
    keys,
  });

  return (
    <>
      <button type="button" onClick={() => setIsOpen(true)}>
        Open
      </button>
      {isOpen && (
        <button type="button" ref={divRef}>
          ToFocus
        </button>
      )}
    </>
  );
};
