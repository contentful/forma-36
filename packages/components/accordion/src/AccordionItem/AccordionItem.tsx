import React, { FC, useState } from 'react';
import type { HeadingElement } from '@contentful/f36-typography';
import { useId } from '@contentful/f36-core';
import { AccordionHeader } from '../AccordionHeader/AccordionHeader';
import { AccordionPanel } from '../AccordionPanel/AccordionPanel';
import { styles } from './AccordionItem.styles';

export interface AccordionItemProps {
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
   * An ID used for testing purposes applied as a data attribute (data-test-id)
   */
  testId?: string;
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

export const AccordionItem: FC<AccordionItemProps> = ({
  title = 'Accordion Title',
  titleElement = 'h2',
  testId = 'cf-ui-accordion-item',
  onExpand,
  onCollapse,
  children,
  align = 'end',
}: AccordionItemProps) => {
  const id = useId();
  const [isExpanded, setIsExpanded] = useState(false);

  const onClick = () => {
    if (!isExpanded && onExpand) {
      onExpand();
    }
    if (isExpanded && onCollapse) {
      onCollapse();
    }

    setIsExpanded(!isExpanded);
  };

  console.log({ title, children });

  return (
    <li className={styles.accordionItem} data-test-id={`${testId}-${id}`}>
      <AccordionHeader
        handleClick={onClick}
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
    </li>
  );
};
