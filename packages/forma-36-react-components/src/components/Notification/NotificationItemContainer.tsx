import React, { useCallback, useEffect, useRef, useState } from 'react';
import AnimateHeight from 'react-animate-height';
import NotificationItem, { NotificationItemProps } from './NotificationItem';

export interface NotificationItemContainerProps extends NotificationItemProps {
  duration?: number;
  isShown?: boolean;
}

export function NotificationItemContainer({
  duration,
  ...props
}: NotificationItemContainerProps): React.ReactElement {
  const timer = useRef<number | null>(null);
  const [isShown, setIsShown] = useState<boolean>(false);

  const stopTimer = useCallback(() => {
    if (duration === 0) return;

    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = null;
    }
  }, [duration]);

  const close = useCallback(() => {
    stopTimer();
    setIsShown(false);
  }, [stopTimer]);

  const startTimer = useCallback(() => {
    if (duration) {
      if (duration === 0) return;

      timer.current = setTimeout(() => {
        close();
      }, duration);
    }
  }, [duration, close]);

  useEffect(() => {
    startTimer();
    setIsShown(true);

    return () => {
      stopTimer();
    };
  }, [startTimer, stopTimer]);

  useEffect(() => {
    setIsShown(Boolean(props.isShown));
  }, [props.isShown]);

  const handleMouseEnter = useCallback(() => {
    stopTimer();
  }, [stopTimer]);

  const handleMouseLeave = useCallback(() => {
    startTimer();
  }, [startTimer]);

  return (
    <AnimateHeight
      duration={200}
      height={isShown ? 'auto' : 0}
      easing="ease-in-out"
      animateOpacity
      onAnimationEnd={() => {
        if (isShown === false) {
          if (props.onClose) {
            props.onClose();
          }
        }
      }}
    >
      <div
        style={{ pointerEvents: 'all' }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <NotificationItem {...props} onClose={close} />
      </div>
    </AnimateHeight>
  );
}

NotificationItemContainer.defaultProps = {
  isShown: false,
};

export default NotificationItemContainer;
