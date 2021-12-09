import React, { useLayoutEffect, useRef } from 'react';
import tokens from '@contentful/f36-tokens';
import type { CommonProps } from '@contentful/f36-core';
import { Box } from '@contentful/f36-core';
import { getCollapseStyles } from './Collapse.styles';

export interface CollapseProps extends CommonProps {
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

  /**
   * testId
   */

  'data-test-id'?: string;
}

export const Collapse = ({
  children,
  className,
  isExpanded = false,
  'data-test-id': testId = 'cf-collapse',
  ...rest
}: CollapseProps) => {
  const panelEl = useRef<HTMLDivElement>(null);
  const styles = getCollapseStyles({ className });

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
    <Box
      {...rest}
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
