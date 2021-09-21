import React, { useRef } from 'react';
import { render, fireEvent, getByText } from '@testing-library/react';

import { useKeyboard } from './useKeyboard';

const handleEnter = jest.fn();
const handleArrowUp = jest.fn();

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
    document.addEventListener = jest.fn((event, callback) => {
      events[event] = callback;
    });

    render(<Component />);

    expect(document.addEventListener).toHaveBeenCalledWith(
      'keydown',
      expect.any(Function),
    );
  });

  it('should trigger handlers correctly', () => {
    const { container } = render(<ComponentWithRef />);

    fireEvent.keyDown(getByText(container as HTMLElement, 'Button'), {
      key: 'Enter',
    });
    expect(handleEnter).toHaveBeenCalled();

    fireEvent.keyDown(getByText(container as HTMLElement, 'Button'), {
      key: 'ArrowUp',
    });
    expect(handleArrowUp).toHaveBeenCalled();
  });
});
