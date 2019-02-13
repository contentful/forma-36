import React, { Component } from 'react';
import cn from 'classnames';
import Icon from '../Icon/Icon';
import TabFocusTrap from '../TabFocusTrap';

const styles = require('./Pill.css');

interface PillProps {
  extraClassNames?: string;
  testId?: string;
  label: string;
  onClose?: () => void;
  onDrag?: () => void;
}

export class Pill extends Component<PillProps> {
  static defaultProps = {
    testId: 'cf-ui-pill',
  };

  render() {
    const {
      label,
      onClose,
      testId,
      onDrag,
      extraClassNames,
      ...otherProps
    } = this.props;

    const classNames = cn(styles.Pill, extraClassNames);

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
                <Icon
                  icon="Drag"
                  color="muted"
                  extraClassNames={styles.Pill__icon}
                />
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
                  extraClassNames={styles.Pill__icon}
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
