import React, { FC } from 'react';
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
  const panelEl = React.useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = React.useState(false);

  React.useEffect(() => {
    setAnimate(true);
  }, []);

  React.useLayoutEffect(() => {
    const { current } = panelEl;

    if (animate && current) {
      if (isExpanded) {
        current.animate(
          [
            { height: '0px', paddingBottom: '0px' },
            {
              height: `${current.scrollHeight}px`,
              paddingBottom: tokens.spacingM,
            },
          ],
          {
            duration: 300,
            easing: tokens.transitionEasingDefault,
          },
        );
      } else {
        current.animate(
          [
            {
              height: `${current.scrollHeight}px`,
              paddingBottom: tokens.spacingM,
            },
            { height: '0px', paddingBottom: '0px' },
          ],
          {
            duration: 300,
            easing: tokens.transitionEasingDefault,
          },
        );
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
