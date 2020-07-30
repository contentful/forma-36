import React, { FC } from 'react';

import Subheading from '../../Typography/Subheading';
import Icon from '../../Icon';

import styles from '../Accordion.css';

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
        className={styles.AccordionHeader}
        onClick={handleClick}
      >
        <Icon
          icon={isOpen ? 'ChevronDownTrimmed' : 'ChevronRightTrimmed'}
          color="secondary"
        />
        {children}
      </button>
    </Subheading>
  );
};
AccordionHeader.defaultProps = {
  isOpen: false,
};

export default AccordionHeader;
