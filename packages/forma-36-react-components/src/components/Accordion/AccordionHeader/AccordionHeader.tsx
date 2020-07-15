import React, { FC } from 'react';

import Subheading from '../../Typography/Subheading';
import Icon from '../../Icon';

interface AccordionHeaderProps {
  children: React.ReactNode;
  handleClick: VoidFunction;
  isOpen: boolean;
  ariaId: number | null;
}

export const AccordionHeader: FC<AccordionHeaderProps> = ({
  children,
  handleClick,
  isOpen,
  ariaId,
}: AccordionHeaderProps) => {
  return (
    <Subheading>
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={`accordion-panel--${ariaId}`}
        id={`accordion--${ariaId}`}
        onClick={handleClick}
      >
        <Icon icon={isOpen ? 'ChevronDown' : 'ChevronRight'} />
        {children}
      </button>
    </Subheading>
  );
};
AccordionHeader.defaultProps = {
  isOpen: false,
};

export default AccordionHeader;
