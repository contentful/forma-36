import React from 'react';
import type { HeadingElement } from '@contentful/f36-typography';
import {
  useId,
  Box,
  useControllableState,
  type CommonProps,
  type ExpandProps,
} from '@contentful/f36-core';

import { AccordionHeader } from '../AccordionHeader/AccordionHeader';
import { AccordionPanel } from '../AccordionPanel/AccordionPanel';
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
  onExpand?: () => void;
  /**
   * A function to be called when the accordion item is closed
   */
  onCollapse?: () => void;
  /**
   * By default, the AccordionItem is uncontrolled (manage it's expanded state by itself)
   * But you can make it controlled by providing boolean
   */
  isExpanded?: boolean;
}

const AccordionItemBase = (
  {
    title = 'Accordion Title',
    titleElement = 'h2',
    testId = 'cf-ui-accordion-item',
    onExpand,
    onCollapse,
    children,
    className,
    isExpanded,
    ...otherProps
  }: ExpandProps<AccordionItemProps>,
  ref: React.Ref<HTMLLIElement>,
) => {
  const styles = getAccordionItemStyles({ className });
  const id = useId();
  const { isOpen, handleOpen, handleClose } = useControllableState({
    isOpen: isExpanded,
    onOpen: onExpand,
    onClose: onCollapse,
  });

  const handleOnClick = () => {
    if (isOpen) {
      handleClose();
    } else {
      handleOpen();
    }
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
        isExpanded={isOpen}
        element={titleElement}
        ariaId={id}
      >
        {title}
      </AccordionHeader>

      <AccordionPanel ariaId={id} isExpanded={isOpen}>
        {children}
      </AccordionPanel>
    </Box>
  );
};

AccordionItemBase.displayName = 'AccordionItem';

export const AccordionItem = React.forwardRef(AccordionItemBase);
