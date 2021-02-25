import React, { FC, useState } from 'react';

import useId from '../../../utils/useId';
import { AccordionHeader } from '../AccordionHeader/AccordionHeader';
import { AccordionPanel } from '../AccordionPanel/AccordionPanel';

import styles from '../Accordion.css';

export interface AccordionItemProps {
  /**
   * The accordion title
   */
  title?: React.ReactNode;
  /**
   * The heading element that will be used by the AccordionHeader
   */
  titleElement?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
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
}

export const AccordionItem: FC<AccordionItemProps> = ({
  title = 'Accordion Title',
  titleElement = 'h2',
  testId = 'cf-ui-accordion-item',
  onExpand,
  onCollapse,
  children,
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

  return (
    <li className={styles.AccordionItem} data-test-id={`${testId}-${id}`}>
      <AccordionHeader
        handleClick={onClick}
        isExpanded={isExpanded}
        element={titleElement}
        ariaId={id}
      >
        {title}
      </AccordionHeader>

      <AccordionPanel ariaId={id} isExpanded={isExpanded}>
        {children}
      </AccordionPanel>
    </li>
  );
};
