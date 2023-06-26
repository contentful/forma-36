import { useCallback, useEffect, useRef, useState } from 'react';

interface UseImageLoadedProps {
  onLoad?: () => unknown;
}

export function useImageLoaded({
  onLoad: onLoadProp,
}: UseImageLoadedProps = {}) {
  const [loaded, setLoaded] = useState(false);
  const ref = useRef<HTMLImageElement | undefined>();

  const onLoad = useCallback(() => {
    onLoadProp?.();
    setLoaded(true);
  }, [onLoadProp]);

  useEffect(() => {
    if (ref.current && ref.current.complete) {
      onLoad();
    }
  }, [onLoad]);

  return { ref, loaded, onLoad };
}
