import React, { useEffect, useRef } from 'react';

export function useForwardedRef<T>(
  ref: React.Ref<T> | React.MutableRefObject<T>,
): React.MutableRefObject<T> {
  const innerRef = useRef(null);

  useEffect(() => {
    if (!ref) return;
    if (typeof ref === 'function') {
      ref(innerRef.current);
    } else {
      (ref as React.MutableRefObject<T>).current = innerRef.current;
    }
  });
  return innerRef;
}
