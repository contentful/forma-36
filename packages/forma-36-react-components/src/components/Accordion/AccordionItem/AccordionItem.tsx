import React, { FC, useState } from 'react';

import useId from '../../../utils/useId';
import AccordionHeader from '../AccordionHeader';
import AccordionPanel from '../AccordionPanel';

import styles from '../Accordion.css';

export interface AccordionItemProps {
  /**
   * The accordion title
   */
  title: React.ReactNode;
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
}

const defaultProps: AccordionItemProps = {
  title: 'Accordion Title',
  testId: 'cf-ui-accordion-item',
  titleElement: 'h2',
};

export const AccordionItem: FC<AccordionItemProps> = ({
  title,
  titleElement,
  testId,
  children,
}: AccordionItemProps) => {
  const id = useId();
  const [isExpanded, setIsExpanded] = useState(false);

  const onClick = () => setIsExpanded(!isExpanded);

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
AccordionItem.defaultProps = defaultProps;

export default AccordionItem;
