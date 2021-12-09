import React from 'react';

type ReactRef<T> = React.Ref<T> | React.MutableRefObject<T>;

export function mergeRefs<T>(
  ...refs: Array<ReactRef<T> | undefined>
): React.RefCallback<T> {
  return (value) => {
    refs.forEach((ref) => {
      if (typeof ref === 'function') {
        ref(value);
      } else if (ref != null) {
        (ref as React.MutableRefObject<T | null>).current = value;
      }
    });
  };
}
