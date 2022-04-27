import React from 'react';
import { cx } from 'emotion';
import { CommonProps } from '@contentful/f36-core';

import { getStyles } from './Datepicker.styles';

export interface DatepickerProps extends CommonProps {
  date?: Date;
}

function _Datepicker(props: DatepickerProps, ref: React.Ref<HTMLDivElement>) {
  const styles = getStyles();

  return (
    <div
      data-test-id={props.testId}
      ref={ref}
      className={cx(styles.datepicker, props.className)}
    >
      Datepicker
    </div>
  );
}

/**
 * TODO: Add description of component here.
 */
export const Datepicker = React.forwardRef(_Datepicker);
