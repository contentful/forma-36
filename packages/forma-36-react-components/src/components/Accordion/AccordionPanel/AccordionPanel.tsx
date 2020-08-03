import React, { FC, useLayoutEffect, useRef } from 'react';
import cn from 'classnames';
import tokens from '@contentful/forma-36-tokens';

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
  const panelEl = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const { current } = panelEl;

    if (current) {
      const finalHeight = `calc((${current.scrollHeight / 16} * 1rem) + ${
        tokens.spacingM
      })`;

      if (isExpanded) {
        requestAnimationFrame(function() {
          current.style.height = '0px';

          requestAnimationFrame(function() {
            current.style.height = finalHeight;
          });
        });
      } else {
        requestAnimationFrame(function() {
          current.style.height = '0px';
        });
      }
    }
  }, [isExpanded]);

  return (
    <div
      id={`accordion-panel--${ariaId}`}
      role="region"
      aria-labelledby={`accordion--${ariaId}`}
      className={cn(styles.AccordionPanel, {
        [styles['AccordionPanel--expanded']]: isExpanded,
      })}
      ref={panelEl}
    >
      {children}
    </div>
  );
};
AccordionPanel.defaultProps = {
  isExpanded: false,
};

export default AccordionPanel;
