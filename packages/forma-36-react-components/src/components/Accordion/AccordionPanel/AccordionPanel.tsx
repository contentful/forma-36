import React, {
  forwardRef,
  MutableRefObject,
  useLayoutEffect,
  useRef,
} from 'react';
import cn from 'classnames';
import tokens from '@contentful/forma-36-tokens';

import styles from './AccordionPanel.css';

function isMutableRefObject<T>(
  object: MutableRefObject<T> | ((instance: HTMLElement) => void),
): object is MutableRefObject<T> {
  return (object as MutableRefObject<T>).current !== undefined;
}

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

export const AccordionPanel = forwardRef<HTMLDivElement, AccordionPanelProps>(
  function AccordionPanel(
    { children, isExpanded = false, ariaId },
    forwardedRef,
  ) {
    const ref = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
      const { current } = ref;

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
        className={cn(styles.AccordionPanel, {
          [styles['AccordionPanel--expanded']]: isExpanded,
        })}
        ref={(node) => {
          ref.current = node;
          if (isMutableRefObject(forwardedRef)) {
            forwardedRef.current = node;
          } else {
            forwardedRef(node);
          }
        }}
      >
        {children}
      </div>
    );
  },
);

export default AccordionPanel;
