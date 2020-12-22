import { useRef, useState } from 'react';

/**
 * An asyncronous state hook.
 *
 * Think of it as a slight modification of React's `useState` hook, where the
 * state returned is instead a `MutableRefObject` like you know it from the
 * `useRef` hook.
 *
 * @param value
 * @returns A tuple with the `MutableRefObject` and a function to set the state
 */
export function useAsyncState<ValueType>(
  value: ValueType,
): [React.MutableRefObject<ValueType>, (state: ValueType) => void] {
  const ref = useRef<ValueType>(value);
  const [, forceUpdate] = useState(false);

  const setState = (newState: ValueType) => {
    if (!Object.is(ref.current, newState)) {
      ref.current = newState;
      forceUpdate((state) => !state);
    }
  };

  return [ref, setState];
}
