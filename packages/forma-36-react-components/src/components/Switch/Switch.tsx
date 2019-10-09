import React, { FunctionComponent, KeyboardEvent } from 'react';
import FormLabel from '../FormLabel';
import classNames from 'classnames';
import styles from './Switch.css';

export interface SwitchProps {
  onToggle?: (isChecked: boolean) => void;
  isChecked?: boolean;
  isDisabled?: boolean;
  labelText: string;
  className?: string;
  id: string;
}

export const Switch: FunctionComponent<SwitchProps> = (props: SwitchProps) => {
  return (
    <div className={classNames(styles['Switch__wrapper'], props.className)}>
      <input
        type="checkbox"
        onClick={onToggle}
        onKeyUp={onKeyUp}
        checked={props.isChecked}
        disabled={props.isDisabled}
        className={classNames(styles['Switch'], {
          [styles['Switch--checked']]: props.isChecked,
          [styles['Switch--disabled']]: props.isDisabled,
        })}
        id={props.id}
      />
      <FormLabel
        className={classNames(styles['Switch__label'], {
          [styles['Switch__label--disabled']]: props.isDisabled,
        })}
        htmlFor={props.id}
      >
        {props.labelText}
      </FormLabel>
    </div>
  );

  function onToggle() {
    if (props.onToggle) {
      props.onToggle(!props.isChecked);
    }
  }

  function onKeyUp(e: KeyboardEvent<HTMLElement>) {
    if (props.onToggle && e.key === 'Enter') {
      props.onToggle(!props.isChecked);
    }
  }
};

export default Switch;
