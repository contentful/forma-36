import React, { FC, useLayoutEffect, useRef } from 'react';
import cn from 'classnames';
import tokens from '@contentful/forma-36-tokens';

import styles from './AccordionPanel.css';

export interface AccordionPanelProps {
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
  isExpanded = false,
  ariaId,
}: AccordionPanelProps) => {
  const panelEl = useRef<HTMLDivElement>(null);

  const getPanelContentHeight = () => {
    const { current } = panelEl;

    if (!current) {
      // to keep the function return type as string only and
      // not overcomplicate things with non-nullable checks
      return '0px';
    }

    return `${current.scrollHeight / parseInt(tokens.fontBaseDefault, 10)}rem`; // converting height pixels into rem
  };

  useLayoutEffect(() => {
    const { current } = panelEl;

    const handleTransitionEnd = () => {
      if (current) {
        current.style.height = 'auto';
      }
    };

    if (current) {
      if (isExpanded) {
        current.addEventListener('transitionend', handleTransitionEnd);

        requestAnimationFrame(function () {
          current.style.height = '0px';

          requestAnimationFrame(function () {
            current.style.height = getPanelContentHeight();
          });
        });
      } else {
        requestAnimationFrame(function () {
          current.style.height = getPanelContentHeight();

          requestAnimationFrame(function () {
            current.style.height = '0px';
          });
        });
      }
    }

    return () => {
      if (current) {
        current.removeEventListener('transitionend', handleTransitionEnd);
      }
    };
  }, [isExpanded]);

  return (
    <div
      id={`accordion-panel--${ariaId}`}
      role="region"
      aria-labelledby={`accordion--${ariaId}`}
      aria-hidden={!isExpanded}
      className={cn(styles.AccordionPanel, {
        [styles['AccordionPanel--expanded']]: isExpanded,
      })}
      ref={panelEl}
    >
      <div className={cn(styles['AccordionPanel__content'])}>{children}</div>
    </div>
  );
};
