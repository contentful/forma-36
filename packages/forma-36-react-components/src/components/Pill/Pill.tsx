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
      ...otherProps
    } = this.props;

    const classNames = cn(styles.Pill, className);

    return (
      <div
        className={classNames}
        {...otherProps}
        draggable={!!onDrag}
        onDrag={onDrag}
      >
        <TabFocusTrap>
          <span className={styles.Pill__label}>
            {onDrag && (
              <span className={styles['Pill__drag-icon']}>
                <Icon icon="Drag" color="muted" className={styles.Pill__icon} />
              </span>
            )}
            {label}
          </span>
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className={styles['Pill__close-button']}
              data-test-id={testId}
            >
              <TabFocusTrap>
                <Icon
                  icon="Close"
                  color="muted"
                  className={styles.Pill__icon}
                />
              </TabFocusTrap>
            </button>
          )}
        </TabFocusTrap>
      </div>
    );
  }
}

export default Pill;
