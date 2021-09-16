import React from 'react';
import { cx } from 'emotion';
import { CommonProps } from '@contentful/f36-core';
import { styles } from './Autocomplete.styles';

export interface AutocompleteProps extends CommonProps {
  children: React.ReactNode;
}

function _Autocomplete(
  props: AutocompleteProps,
  ref: React.Ref<HTMLDivElement>,
) {
  return (
    <div
      data-test-id={props.testId}
      ref={ref}
      className={cx(styles.autocomplete, props.className)}
    >
      {props.children}
    </div>
  );
}

/**
 * TODO: Add description of component here.
 */
export const Autocomplete = React.forwardRef(_Autocomplete);
