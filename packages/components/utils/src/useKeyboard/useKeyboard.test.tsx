import React, { useRef } from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

import { useKeyboard } from './useKeyboard';

const handleEnter = vi.fn();
const handleArrowUp = vi.fn();

const Component = () => {
  useKeyboard({
    keys: {
      ArrowUp: handleArrowUp,
      Enter: handleEnter,
    },
  });

  return <button type="button">Button</button>;
};

const ComponentWithRef = () => {
  const divRef = useRef(null);

  useKeyboard({
    ref: divRef,
    keys: {
      ArrowUp: handleArrowUp,
      Enter: handleEnter,
    },
  });

  return (
    <button type="button" ref={divRef}>
      Button
    </button>
  );
};

describe('useKeyboard', () => {
  it('should attach handler to document by default', () => {
    const events = {};
    document.addEventListener = vi.fn((event, callback) => {
      events[event] = callback;
    });

    render(<Component />);

    expect(document.addEventListener).toHaveBeenCalledWith(
      'keydown',
      expect.any(Function),
    );
  });

  it('should trigger handlers correctly', () => {
    render(<ComponentWithRef />);

    fireEvent.keyDown(screen.getByRole('button'), {
      key: 'Enter',
    });
    expect(handleEnter).toHaveBeenCalled();

    fireEvent.keyDown(screen.getByRole('button'), {
      key: 'ArrowUp',
    });
    expect(handleArrowUp).toHaveBeenCalled();
  });
});
