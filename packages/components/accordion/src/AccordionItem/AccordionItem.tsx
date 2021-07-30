import React, { useState } from 'react';
import type { HeadingElement } from '@contentful/f36-typography';
import { useId, Box } from '@contentful/f36-core';

import { AccordionHeader } from '../AccordionHeader/AccordionHeader';
import { AccordionPanel } from '../AccordionPanel/AccordionPanel';
import type { CommonProps } from '@contentful/f36-core';

import getStyles from '../Accordion.styles';

export interface AccordionItemProps extends CommonProps {
  /**
   * The accordion title
   */
  title?: React.ReactNode;
  /**
   * The heading element that will be used by the AccordionHeader
   */
  titleElement?: HeadingElement;
  /**
   * The children of the AccordionItem are in fact the content of the accordion
   */
  children?: React.ReactNode;
  /**
   * A function to be called when the accordion item is opened
   */
  onExpand?: Function;
  /**
   * A function to be called when the accordion item is closed
   */
  onCollapse?: Function;
  /**
   * Specify the alignment of the chevron inside the accordion header
   */
  align?: 'start' | 'end';
}

const _AccordionItem = (
  props: AccordionItemProps,
  ref: React.Ref<HTMLLIElement>,
) => {
  const styles = getStyles();
  const {
    title = 'Accordion Title',
    titleElement = 'h2',
    testId = 'cf-ui-accordion-item',
    onExpand,
    onCollapse,
    children,
    align = 'end',
  } = props;
  const id = useId();
  const [isExpanded, setIsExpanded] = useState(false);

  const handleOnClick = () => {
    if (!isExpanded && onExpand) {
      onExpand();
    }
    if (isExpanded && onCollapse) {
      onCollapse();
    }

    setIsExpanded(!isExpanded);
  };

  return (
    <Box
      as="li"
      ref={ref}
      className={styles.accordionItem}
      testId={`${testId}-${id}`}
    >
      <AccordionHeader
        handleOnClick={handleOnClick}
        isExpanded={isExpanded}
        element={titleElement}
        ariaId={id}
        align={align}
      >
        {title}
      </AccordionHeader>

      <AccordionPanel ariaId={id} isExpanded={isExpanded}>
        {children}
      </AccordionPanel>
    </Box>
  );
};

export const AccordionItem = React.forwardRef(_AccordionItem);
