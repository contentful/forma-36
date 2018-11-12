import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './IconButton.css';
import Icon from './../Icon';
import TabFocusTrap from '../TabFocusTrap';

class IconButton extends React.Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    iconProps: PropTypes.object.isRequired,
    href: PropTypes.string,
    testId: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    buttonType: PropTypes.oneOf([
      'primary',
      'positive',
      'negative',
      'secondary',
      'muted',
    ]),
    withDropdown: PropTypes.bool,
    extraClassNames: PropTypes.string,
  };

  static defaultProps = {
    href: undefined,
    disabled: false,
    testId: 'cf-ui-icon-button',
    onClick: undefined,
    buttonType: 'primary',
    withDropdown: false,
    extraClassNames: undefined,
  };

  render() {
    const {
      label,
      iconProps,
      href,
      testId,
      disabled,
      onClick,
      buttonType,
      withDropdown,
      extraClassNames,
      ...otherProps
    } = this.props;

    const classNames = cn(styles.IconButton, extraClassNames, {
      [styles['IconButton--disabled']]: disabled,
      [styles[`IconButton--${buttonType}`]]: buttonType,
    });

    const Element = href ? 'a' : 'button';

    return (
      <Element
        className={classNames}
        onClick={!disabled ? onClick : null}
        href={!disabled ? href : null}
        disabled={disabled}
        data-test-id={testId}
        {...otherProps}
      >
        <TabFocusTrap extraClassNames={styles.IconButton__inner}>
          <Icon
            {...{
              ...iconProps,
              extraClassNames: styles.IconButton__icon,
            }}
          />
          <span className={styles.IconButton__label}>{label}</span>
          {withDropdown && (
            <Icon
              icon="ChevronDown"
              color="secondary"
              extraClassNames={styles.IconButton__dropdown}
            />
          )}
        </TabFocusTrap>
      </Element>
    );
  }
}

export default IconButton;
