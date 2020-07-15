import React, { FC } from 'react';
import cn from 'classnames';

import styles from './AccordionPanel.css';

interface AccordionPanelProps {
  children: React.ReactNode;
  isOpen: boolean;
  ariaId: number | null;
}

export const AccordionPanel: FC<AccordionPanelProps> = ({
  children,
  isOpen,
  ariaId,
}: AccordionPanelProps) => {
  return (
    <div
      id={`accordion-panel--${ariaId}`}
      role="region"
      aria-labelledby={`accordion--${ariaId}`}
      className={cn(styles.AccordionPanel, {
        [styles['AccordionPanel--expanded']]: isOpen,
      })}
    >
      {children}
    </div>
  );
};
AccordionPanel.defaultProps = {
  isOpen: false,
};

export default AccordionPanel;
