import React, { FC } from 'react';
import cn from 'classnames';

import styles from './AccordionPanel.css';

interface AccordionPanelProps {
  children?: React.ReactNode;
  ariaId?: number;
  isExpanded: boolean;
}

const defaultProps: AccordionPanelProps = {
  isExpanded: false,
};

export const AccordionPanel: FC<AccordionPanelProps> = ({
  children,
  isExpanded,
  ariaId,
}: AccordionPanelProps) => {
  return (
    <div
      id={`accordion-panel--${ariaId}`}
      role="region"
      aria-labelledby={`accordion--${ariaId}`}
      className={cn(styles.AccordionPanel, {
        [styles['AccordionPanel--expanded']]: isExpanded,
      })}
    >
      {children}
    </div>
  );
};
AccordionPanel.defaultProps = defaultProps;

export default AccordionPanel;
