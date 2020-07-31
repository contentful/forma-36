import React, { FC } from 'react';
import cn from 'classnames';

import Subheading from '../../Typography/Subheading';
import Icon from '../../Icon';

import styles from '../Accordion.css';

interface AccordionHeaderProps {
  children: React.ReactNode;
  handleClick: VoidFunction;
  isExpanded: boolean;
  ariaId: number | null;
}

export const AccordionHeader: FC<AccordionHeaderProps> = ({
  children,
  handleClick,
  isExpanded,
  ariaId,
}: AccordionHeaderProps) => {
  const classNames = cn(styles.AccordionHeader, {
    [styles['AccordionHeader--expanded']]: isExpanded,
  });

  return (
    <Subheading>
      <button
        type="button"
        aria-expanded={isExpanded}
        aria-controls={`accordion-panel--${ariaId}`}
        id={`accordion--${ariaId}`}
        className={classNames}
        onClick={handleClick}
      >
        <Icon
          icon="ChevronRightTrimmed"
          color="secondary"
          className={styles.AccordionHeader__icon}
        />
        {children}
      </button>
    </Subheading>
  );
};
AccordionHeader.defaultProps = {
  isExpanded: false,
};

export default AccordionHeader;
