import { useState, useCallback } from 'react';

interface UseArrowKeyNavigationProps {
  itemsContainerRef: React.MutableRefObject<HTMLElement>;
  itemsSelector: string;
  keyType?: 'vertical' | 'horizontal';
  initialFocusedIndex?: number;
}

const ARROW_KEY_TYPES = {
  vertical: {
    prev: 'ArrowUp',
    next: 'ArrowDown',
  },
  horizontal: {
    prev: 'ArrowLeft',
    next: 'ArrowRight',
  },
};

export const useArrowKeyNavigation = ({
  itemsContainerRef,
  itemsSelector,
  keyType = 'vertical',
}: UseArrowKeyNavigationProps) => {
  const [focusedIndex, setFocusedIndex] = useState<number>(0);

  const handleArrowsKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      const container = itemsContainerRef.current;
      if (!container) return;

      const items = container.querySelectorAll(itemsSelector);
      if (items.length === 0) return;

      const lastItemIndex = items.length - 1;

      const focusFirstItem = () => setFocusedIndex(0);
      const focusLastItem = () => setFocusedIndex(lastItemIndex);
      const focusNextItem = () => {
        if (focusedIndex === lastItemIndex) {
          focusFirstItem();
        } else {
          setFocusedIndex(focusedIndex + 1);
        }
      };
      const focusPrevItem = () => {
        if (focusedIndex === 0) {
          focusLastItem();
        } else {
          setFocusedIndex(focusedIndex - 1);
        }
      };

      const keyToFnMap = {
        [ARROW_KEY_TYPES[keyType].next]: focusNextItem,
        [ARROW_KEY_TYPES[keyType].prev]: focusPrevItem,
      };

      const fn = keyToFnMap[event.key];
      if (fn) {
        event.preventDefault();
        fn();
      }
    },
    [focusedIndex, itemsSelector, itemsContainerRef, keyType],
  );

  return { focusedIndex, handleArrowsKeyDown, setFocusedIndex };
};
