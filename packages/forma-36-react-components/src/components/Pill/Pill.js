import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Icon from '../Icon';
import styles from './Pill.css';
import { iconName } from './../Icon/constants';
import TabFocusTrap from '../TabFocusTrap';

class Pill extends React.Component {
  static propTypes = {
    extraClassNames: PropTypes.string,
    testId: PropTypes.string,
    label: PropTypes.string.isRequired,
    onClose: PropTypes.func,
    onDrag: PropTypes.func,
  };

  static defaultProps = {
    extraClassNames: undefined,
    onDrag: undefined,
    testId: 'cf-ui-pill',
    onClose: undefined,
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
                  icon={iconName.Drag}
                  color="muted"
                  extraClassNames={styles.Pill__icon}
                />
              </span>
            )}
            {label}
          </span>
          {onClose && (
            <button
              onClick={onClose}
              className={styles['Pill__close-button']}
              data-test-id={testId}
            >
              <TabFocusTrap>
                <Icon
                  icon={iconName.Close}
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
