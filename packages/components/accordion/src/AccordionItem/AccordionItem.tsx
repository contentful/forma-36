import React, { useState } from 'react';
import type { HeadingElement } from '@contentful/f36-typography';
import { useId, Box } from '@contentful/f36-core';

import { AccordionHeader } from '../AccordionHeader/AccordionHeader';
import { AccordionPanel } from '../AccordionPanel/AccordionPanel';
import type { CommonProps } from '@contentful/f36-core';

import { getAccordionItemStyles } from './AccordionItem.styles';

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
  {
    title = 'Accordion Title',
    titleElement = 'h2',
    testId = 'cf-ui-accordion-item',
    onExpand,
    onCollapse,
    children,
    align = 'end',
    className,
    ...otherProps
  }: AccordionItemProps,
  ref: React.Ref<HTMLLIElement>,
) => {
  const styles = getAccordionItemStyles(className);
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
      className={styles.accordionItem}
      testId={`${testId}-${id}`}
      {...otherProps}
      ref={ref}
    >
      <AccordionHeader
        onClick={handleOnClick}
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
