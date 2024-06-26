import React, { useLayoutEffect, useRef } from 'react';
import {
  Box,
  type CommonProps,
  type PropsWithHTMLElement,
} from '@contentful/f36-core';

import { getCollapseStyles } from './Collapse.styles';

interface CollapseInternalProps extends CommonProps {
  /**
   * Child nodes to be rendered in the component
   */
  children?: React.ReactNode;
  /**
   * A boolean that tells if the accordion should be expanded or collapsed
   */
  isExpanded: boolean;
  /**
   * string for additional classNames
   */
  className?: string;
}

export type CollapseProps = PropsWithHTMLElement<CollapseInternalProps, 'div'>;

export const Collapse = ({
  children,
  className,
  isExpanded = false,
  testId = 'cf-collapse',
  ...otherProps
}: CollapseProps) => {
  const panelEl = useRef<HTMLDivElement>(null);
  const styles = getCollapseStyles({ className });
  const isMounted = useRef(false);

  const getPanelContentHeight = () => {
    const { current } = panelEl;

    if (!current) {
      // to keep the function return type as string only and
      // not overcomplicate things with non-nullable checks
      return '0px';
    }

    return `${current.scrollHeight}px`;
  };

  useLayoutEffect(() => {
    const { current } = panelEl;

    const handleTransitionEnd = () => {
      if (current) {
        if (isExpanded) {
          current.style.setProperty('height', 'auto');
        } else {
          current.style.removeProperty('pointer-events');
          current.style.setProperty('display', 'none');
        }
      }
    };

    if (current) {
      // Don't animate on first render
      if (isMounted.current) {
        current.style.removeProperty('transition');
      } else {
        current.style.setProperty('transition', 'height 0s, padding 0s');
        if (!isExpanded) {
          current.style.setProperty('height', '0px');
        } else {
          current.style.setProperty('display', 'block');
          current.style.setProperty('height', 'auto');
        }
        isMounted.current = true;
      }

      current.addEventListener('transitionend', handleTransitionEnd);
      requestAnimationFrame(function () {
        if (!isExpanded) {
          // Don't allow interaction while collapsing
          current.style.setProperty('pointer-events', 'none');
        } else {
          // Overwrite none display to see expanding transition
          current.style.setProperty('display', 'block');
          current.style.removeProperty('pointer-events');
        }
        // Calculate panel height after removing none display
        const fromHeight = isExpanded ? '0px' : getPanelContentHeight();
        const toHeight = isExpanded ? getPanelContentHeight() : '0px';
        current.style.setProperty('height', fromHeight);

        requestAnimationFrame(function () {
          current.style.setProperty('height', toHeight);
        });
      });
    }

    return () => {
      if (current) {
        current.removeEventListener('transitionend', handleTransitionEnd);
      }
    };
  }, [isExpanded]);

  return (
    <Box
      {...otherProps}
      testId={testId}
      role="region"
      aria-hidden={!isExpanded}
      className={styles.collapseWrapper}
      ref={panelEl}
    >
      {children}
    </Box>
  );
};
