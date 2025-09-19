import React from 'react';
import type { CommonProps, PropsWithHTMLElement } from '@contentful/f36-core';

export type OptionInternalProps = CommonProps & {
  isDisabled?: boolean;
};

export type OptionProps = PropsWithHTMLElement<
  OptionInternalProps,
  'option',
  'defaultChecked' | 'defaultValue' | 'selected' | 'disabled'
>;

export const Option = ({
  testId = 'cf-ui-select-option',
  isDisabled,
  ...otherProps
}: OptionProps) => {
  return <option data-test-id={testId} {...otherProps} disabled={isDisabled} />;
};

Option.displayName = 'SelectOption';
