import { useState, useCallback } from 'react';

type UseControllableStateProps = {
  isOpen: boolean;
  defaultIsOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
};

/**
 * Hook that manages the controlled and un-controlled state
 */
export const useControllableState = ({
  isOpen,
  defaultIsOpen,
  onOpen,
  onClose,
}: UseControllableStateProps) => {
  const [isOpenState, setIsOpen] = useState(defaultIsOpen || false);

  const isControlled = isOpen !== undefined;
  const isOpenValue = isControlled ? isOpen : isOpenState;

  const handleClose = useCallback(() => {
    if (!isControlled) {
      setIsOpen(false);
    }
    onClose?.();
  }, [isControlled, onClose]);

  const handleOpen = useCallback(() => {
    if (!isControlled) {
      setIsOpen(true);
    }
    onOpen?.();
  }, [isControlled, onOpen]);

  return { isOpen: isOpenValue, isControlled, handleClose, handleOpen };
};
