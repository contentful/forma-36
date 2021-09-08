import { createContext, useContext } from 'react';
import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import { BaseCheckboxProps } from './BaseCheckbox';
import { BaseCheckboxGroupProps } from './BaseCheckboxGroup';

export type BaseCheckboxGroupContextProps = Omit<
  BaseCheckboxGroupProps,
  'children'
>;
export type BaseCheckboxGroupContextValue = Pick<
  BaseCheckboxProps,
  'isChecked' | 'defaultChecked' | 'onChange' | 'name' | 'value' | 'className'
>;

export const BaseCheckboxGroupContext = createContext<
  BaseCheckboxGroupContextProps | undefined
>(undefined);

export const useBaseCheckboxGroupContext = () => {
  const context = useContext(BaseCheckboxGroupContext);
  return context;
};

export const useBaseCheckboxGroup = (
  props: Partial<BaseCheckboxProps>,
): BaseCheckboxGroupContextValue => {
  const context = useBaseCheckboxGroupContext();
  if (!context) {
    return props;
  }

  const className = css({
    '&:not(:last-child)': {
      marginBottom: tokens.spacingXs,
    },
  });

  let isChecked, defaultChecked;

  if (context.type === 'checkbox') {
    isChecked =
      context.value === undefined
        ? undefined
        : context.value?.includes(props.value);
    defaultChecked =
      isChecked !== undefined
        ? undefined
        : context.defaultValue?.includes(props.value);
  }

  if (context.type === 'radio') {
    isChecked =
      context.value === undefined ? undefined : context.value === props.value;
    defaultChecked =
      isChecked !== undefined
        ? undefined
        : context.defaultValue === props.value;
  }

  const onChange = (event) => {
    props.onChange && props.onChange(event);
    context.onChange && context.onChange(event);
  };

  return {
    defaultChecked,
    isChecked,
    onChange,
    name: context.name ?? props.name,
    value: props.value,
    className,
  };
};
