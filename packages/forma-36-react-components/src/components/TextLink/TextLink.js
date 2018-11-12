import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './TextLink.css';
import { iconName } from './../Icon/constants';
import Icon from './../Icon';
import TabFocusTrap from '../TabFocusTrap';

class TextLink extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    href: PropTypes.string,
    disabled: PropTypes.bool,
    testId: PropTypes.string,
    linkType: PropTypes.oneOf([
      'primary',
      'positive',
      'negative',
      'secondary',
      'muted',
    ]),
    onClick: PropTypes.func,
    extraClassNames: PropTypes.string,
    icon: PropTypes.oneOf(Object.keys(iconName)),
  };

  static defaultProps = {
    linkType: 'primary',
    href: undefined,
    testId: 'cf-ui-text-link',
    disabled: false,
    onClick: undefined,
    extraClassNames: undefined,
    icon: undefined,
  };

  renderIcon() {
    const { icon, linkType } = this.props;

    if (!icon) return undefined;

    return (
      <div className={styles['TextLink__icon-wrapper']}>
        <Icon
          icon={icon}
          color={linkType}
          extraClassNames={styles.TextLink__icon}
        />
      </div>
    );
  }

  render() {
    const {
      children,
      href,
      linkType,
      testId,
      onClick,
      disabled,
      extraClassNames,
      icon,
      ...otherProps
    } = this.props;

    const classNames = cn(styles.TextLink, extraClassNames, {
      [styles[`TextLink--${linkType}`]]: linkType,
      [styles['TextLink--disabled']]: disabled,
    });

    const Element = href ? 'a' : 'button';

    return (
      <Element
        className={classNames}
        data-test-id={testId}
        onClick={!disabled ? onClick : null}
        href={!disabled ? href : null}
        disabled={disabled}
        {...otherProps}
      >
        <TabFocusTrap>
          {this.renderIcon()}
          {children}
        </TabFocusTrap>
      </Element>
    );
  }
}

export default TextLink;
