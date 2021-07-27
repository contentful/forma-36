import React, { FC, useLayoutEffect, useRef } from 'react';
import { cx } from 'emotion';
import tokens from '@contentful/f36-tokens';

import { styles } from './AccordionPanel.styles';

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
  ariaId: string;
}

export const AccordionPanel: FC<AccordionPanelProps> = ({
  children,
  isExpanded = false,
  ariaId,
}: AccordionPanelProps) => {
  const panelEl = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const { current } = panelEl;

    if (current) {
      // height + padding-top + padding-bottom of the accordion’s panel final state
      // we need this math because the height will depend on the accordion’s content
      const panelHeight = `${current.scrollHeight / 16}rem`; // converting height pixels into rem
      const finalHeight = `calc(${panelHeight} + ${tokens.spacingXs} + ${tokens.spacingM})`;

      if (isExpanded) {
        requestAnimationFrame(function () {
          current.style.height = '0px';

          requestAnimationFrame(function () {
            current.style.height = finalHeight;
          });
        });
      } else {
        requestAnimationFrame(function () {
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
      aria-hidden={!isExpanded}
      className={cx(styles.accordionPanel, {
        [styles.accordionPanelExtended]: isExpanded,
      })}
      ref={panelEl}
    >
      {children}
    </div>
  );
};
