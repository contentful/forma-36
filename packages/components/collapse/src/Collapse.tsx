import React, { useCallback, useEffect, useLayoutEffect, useRef } from 'react';
import {
  Box,
  type CommonProps,
  type PropsWithHTMLElement,
} from '@contentful/f36-core';
import tokens from '@contentful/f36-tokens';
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

  const handleTransitionEnd = useCallback(() => {
    const { current } = panelEl;
    if (isExpanded) {
      current?.style.setProperty('height', 'auto');
    } else {
      current?.style.removeProperty('pointer-events');
      current?.style.setProperty('display', 'none');
    }
  }, [isExpanded]);

  useLayoutEffect(() => {
    const { current } = panelEl;
    // We only want to call requestAnimationFrame after the initial render when the component is mounted
    if (isMounted.current) {
      // We set the transition property after the first render
      // to avoid animating the initial render
      current?.style.setProperty(
        'transition',
        `height ${tokens.transitionDurationDefault} ${tokens.transitionEasingDefault}, padding ${tokens.transitionDurationDefault} ${tokens.transitionEasingDefault}`,
      );

      requestAnimationFrame(function () {
        if (isExpanded) {
          // Overwrite none display to see expanding transition
          current?.style.setProperty('display', 'block');
          current?.style.removeProperty('pointer-events');
        } else {
          // Don't allow interaction while collapsing
          current?.style.setProperty('pointer-events', 'none');
        }
        // Calculate panel height after removing none display
        const fromHeight = isExpanded ? '0px' : getPanelContentHeight();
        const toHeight = isExpanded ? getPanelContentHeight() : '0px';
        current?.style.setProperty('height', fromHeight);

        requestAnimationFrame(function () {
          current?.style.setProperty('height', toHeight);
        });
      });
    } else {
      // We call the handleTransitionEnd on mount to set the correct initial styles
      handleTransitionEnd();
      isMounted.current = true;
    }
  }, [handleTransitionEnd, isExpanded]);

  useEffect(() => {
    const { current } = panelEl;

    current?.addEventListener('transitionend', handleTransitionEnd);
    return () => {
      current?.removeEventListener('transitionend', handleTransitionEnd);
    };
  }, [handleTransitionEnd, isExpanded]);

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
