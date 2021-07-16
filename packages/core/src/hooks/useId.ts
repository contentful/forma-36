import { useMemo } from 'react';

/**
 * useId hook provides unique ids for react elements.
 *
 * @param id - an id, provided to a component's props. Can be undefined.
 * @param modifier - a descriptive string, to make ids more readable.
 * @returns a unique id
 */
export function useId(id?: string, modifier?: string): string {
  return useMemo(
    () => id || [modifier || 'id', Math.round(Math.random() * 10000)].join('_'),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );
}
