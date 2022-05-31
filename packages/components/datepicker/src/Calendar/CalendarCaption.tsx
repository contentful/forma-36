import React from 'react';

import {
  CaptionDropdowns,
  CaptionNavigation,
  CaptionProps,
} from 'react-day-picker';
import { Flex } from '@contentful/f36-core';
import { getStyles } from './Calendar.styles';

export const CalendarCaption = (props: CaptionProps) => {
  const styles = getStyles();

  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      className={styles.caption}
    >
      <CaptionDropdowns {...props} />
      <CaptionNavigation {...props} />
    </Flex>
  );
};
