import React, { FC } from 'react';
import cn from 'classnames';

import styles from './AccordionPanel.css';

interface AccordionPanelProps {
  children?: React.ReactNode;
  ariaId?: number;
  isOpen: boolean;
}

const defaultProps: AccordionPanelProps = {
  isOpen: false,
};

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
AccordionPanel.defaultProps = defaultProps;

export default AccordionPanel;
