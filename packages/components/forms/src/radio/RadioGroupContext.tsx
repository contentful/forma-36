import { createContext, useContext } from 'react';
import { RadioProps } from './Radio';
import { RadioGroupProps } from './RadioGroup';

export type RadioGroupContextProps = Omit<RadioGroupProps, 'children'>;
export type RadioGroupContextValue = Pick<
  RadioProps,
  'isChecked' | 'defaultChecked' | 'onChange' | 'name' | 'value'
>;

export const RadioGroupContext = createContext<
  RadioGroupContextProps | undefined
>(undefined);

export const useRadioGroupContext = () => {
  const context = useContext(RadioGroupContext);
  return context;
};

export const useRadioGroup = (
  props: Partial<RadioProps>,
): RadioGroupContextValue => {
  const context = useRadioGroupContext();
  if (!context) {
    return props;
  }

  const isChecked =
    context.value === undefined ? undefined : context.value === props.value;
  const defaultChecked =
    isChecked !== undefined ? undefined : context.defaultValue === props.value;
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
  };
};
