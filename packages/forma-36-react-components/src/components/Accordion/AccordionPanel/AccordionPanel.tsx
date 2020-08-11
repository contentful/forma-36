import React, { FC } from 'react';
import cn from 'classnames';

import styles from './AccordionPanel.css';

interface AccordionPanelProps {
  /**
   * Child nodes to be rendered in the component
   */
  children?: React.ReactNode;
  /**
   * A boolean that tells if the accordion should be expanded or collapsed
   */
  isExpanded: boolean;
  /**
   * An unique id that is necessary for the aria roles and properties
   */
  ariaId: number;
}

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
AccordionPanel.defaultProps = {
  isExpanded: false,
};

export default AccordionPanel;
