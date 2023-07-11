import React from 'react';

import {
  CaptionDropdowns,
  CaptionNavigation,
  type CaptionProps,
  useDayPicker,
} from 'react-day-picker';
import { Flex } from '@contentful/f36-core';
import { getStyles } from './Calendar.styles';

export const CalendarCaption = (props: CaptionProps) => {
  const styles = getStyles();
  const { fromDate, toDate, numberOfMonths } = useDayPicker();

  const isDropdownsVisible = Boolean(
    fromDate && toDate && numberOfMonths === 1,
  );

  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      className={styles.caption}
    >
      {isDropdownsVisible && <CaptionDropdowns {...props} />}
      <CaptionNavigation {...props} />
    </Flex>
  );
};
