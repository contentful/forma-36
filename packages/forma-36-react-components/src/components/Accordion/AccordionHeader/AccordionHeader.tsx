import React, { FC } from 'react';
import cn from 'classnames';

import Subheading from '../../Typography/Subheading';
import Icon from '../../Icon';

import styles from '../Accordion.css';

interface AccordionHeaderProps {
  /**
   * Child nodes to be rendered in the component
   */
  children?: React.ReactNode;
  /**
   * An ID used for testing purposes applied as a data attribute (data-test-id)
   */
  testId?: string;
  /**
   * The function that will be called once the user clicks on the accordion title
   */
  handleClick: VoidFunction;
  /**
   * A boolean that tells if the accordion should be expanded or collapsed
   */
  isExpanded: boolean;
  /**
   * An unique id that is necessary for the aria roles and properties
   */
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
