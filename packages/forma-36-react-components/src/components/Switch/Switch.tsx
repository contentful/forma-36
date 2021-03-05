import React, { FunctionComponent, KeyboardEvent } from 'react';
import classNames from 'classnames';
import styles from './Switch.css';
import { Icon } from '../Icon';

export interface SwitchProps {
  onToggle?: (isChecked: boolean) => void;
  isChecked?: boolean;
  isDisabled?: boolean;
  labelText: string;
  size?: 'default' | 'small';
  className?: string;
  id: string;
}

export const Switch: FunctionComponent<SwitchProps> = (props: SwitchProps) => {
  return (
    <div className={classNames(styles['Switch__wrapper'], {}, props.className)}>
      <input
        type="checkbox"
        onClick={onToggle}
        onKeyUp={onKeyUp}
        defaultChecked={props.isChecked}
        disabled={props.isDisabled}
        className={classNames(styles['Switch'], {
          [styles['Switch--checked']]: props.isChecked,
          [styles['Switch--disabled']]: props.isDisabled,
          [styles['Switch--small']]: props.size === 'small',
        })}
        id={props.id}
      />
      <label
        className={classNames(styles['Switch__label'], {
          [styles['Switch__label--disabled']]: props.isDisabled,
        })}
        htmlFor={props.id}
      >
        <Icon
          icon="Done"
          color="white"
          size="tiny"
          className={classNames(
            styles['Switch__icon'],
            styles['Switch__icon--done'],
          )}
        />
        {props.labelText}
        <Icon
          icon="Close"
          color="white"
          size="tiny"
          className={classNames(
            styles['Switch__icon'],
            styles['Switch__icon--close'],
          )}
        />
      </label>
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
