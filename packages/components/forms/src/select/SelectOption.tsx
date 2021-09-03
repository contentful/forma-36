import React from 'react';
import { CommonProps, PropsWithHTMLElement } from '@contentful/f36-core';

export type OptionInternalProps = CommonProps & {
  isSelected?: boolean;
  isDisabled?: boolean;
};

export type OptionProps = PropsWithHTMLElement<
  OptionInternalProps,
  'option',
  'defaultChecked' | 'defaultValue' | 'selected' | 'disabled'
>;

export const Option = ({
  testId = 'cf-ui-select-option',
  isSelected,
  isDisabled,
  ...otherProps
}: OptionProps) => {
  return (
    <option
      data-test-id={testId}
      {...otherProps}
      selected={isSelected}
      disabled={isDisabled}
    />
  );
};
