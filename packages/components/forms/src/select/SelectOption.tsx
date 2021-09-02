import React from 'react';
import { CommonProps, PropsWithHTMLElement } from '@contentful/f36-core';

export type OptionProps = PropsWithHTMLElement<CommonProps, 'option'>;

export const Option = ({
  testId = 'cf-ui-select-option',
  ...otherProps
}: OptionProps) => {
  return <option data-test-id={testId} {...otherProps} />;
};
