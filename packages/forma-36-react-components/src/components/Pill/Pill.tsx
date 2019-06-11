import React, { Component } from 'react';
import cn from 'classnames';
import Icon from '../Icon/Icon';
import TabFocusTrap from '../TabFocusTrap';

const styles = require('./Pill.css');

export type PillProps = {
  label: string;
  onClose?: () => void;
  onDrag?: () => void;
  className?: string;
  testId?: string;
  style?: React.CSSProperties;
  dragHandleComponent?: React.ReactNode;
} & typeof defaultProps;

const defaultProps = {
  testId: 'cf-ui-pill',
};

export class Pill extends Component<PillProps> {
  static defaultProps = defaultProps;

  render() {
    const {
      label,
      onClose,
      testId,
      onDrag,
      className,
      dragHandleComponent,
      ...otherProps
    } = this.props;

    const classNames = cn(styles.Pill, className);

    return (
      <div
        className={classNames}
        data-test-id={testId}
        {...otherProps}
        draggable={!!onDrag}
        onDrag={onDrag}
      >
        {onDrag &&
          (dragHandleComponent ? (
            dragHandleComponent
          ) : (
            <span className={styles['Pill__drag-icon']}>
              <Icon icon="Drag" color="muted" className={styles.Pill__icon} />
            </span>
          ))}
        <span aria-label={label} className={styles.Pill__label}>
          {label}
        </span>
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className={styles['Pill__close-button']}
          >
            <TabFocusTrap>
              <Icon icon="Close" color="muted" className={styles.Pill__icon} />
            </TabFocusTrap>
          </button>
        )}
      </div>
    );
  }
}

export default Pill;
