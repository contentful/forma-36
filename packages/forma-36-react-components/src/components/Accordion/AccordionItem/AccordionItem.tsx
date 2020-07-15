import React, { FC, useState } from 'react';

import useId from '../../../utils/useId';
import AccordionHeader from '../AccordionHeader';
import AccordionPanel from '../AccordionPanel';

export interface AccordionItemProps {
  /**
   * Child nodes to be rendered in the component
   */
  children?: React.ReactNode;
  /**
   * An ID used for testing purposes applied as a data attribute (data-test-id)
   */
  testId?: string;
  /**
   * A boolean that controls if the content of the accordion is expanded or not
   */
  isOpen?: boolean;
}

const defaultProps: AccordionItemProps = {
  testId: 'cf-ui-accordion',
};

const AccordionItem: FC<AccordionItemProps> = ({
  testId,
}: AccordionItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const id = useId();

  const onClick = () => setIsExpanded(!isExpanded);

  return (
    <li data-test-id={testId}>
      <AccordionHeader handleClick={onClick} isOpen={isExpanded} ariaId={id}>
        Accordion {id}
      </AccordionHeader>

      <AccordionPanel ariaId={id} isOpen={isExpanded}>
        Content for accordion {id}
      </AccordionPanel>
    </li>
  );
};
AccordionItem.defaultProps = defaultProps;

export default AccordionItem;
