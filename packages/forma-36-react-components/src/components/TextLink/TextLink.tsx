import React, { Component, MouseEventHandler } from 'react';
import cn from 'classnames';
import Icon, { IconType } from '../Icon/Icon';
import TabFocusTrap from '../TabFocusTrap';

const styles = require('./TextLink.css');

interface TextLinkProps {
  children: React.ReactNode;
  linkType?: 'primary' | 'positive' | 'negative' | 'secondary' | 'muted';
  href?: string;
  disabled?: boolean;
  testId?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
  extraClassNames?: string;
  icon?: IconType;
}

export class TextLink extends Component<TextLinkProps> {
  static defaultProps = {
    linkType: 'primary',
    testId: 'cf-ui-text-link',
    disabled: false,
  };

  renderIcon(icon, linkType) {
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

    const content = (
      <TabFocusTrap>
        {this.renderIcon(icon, linkType)}
        {children}
      </TabFocusTrap>
    );

    if (href) {
      return (
        <a
          className={classNames}
          data-test-id={testId}
          onClick={
            disabled
              ? e => {
                  e.preventDefault();
                }
              : onClick
          }
          href={href}
          {...otherProps}
        >
          {content}
        </a>
      );
    }

    return (
      <button
        type="button"
        className={classNames}
        data-test-id={testId}
        onClick={!disabled ? onClick : null}
        disabled={disabled}
        {...otherProps}
      >
        {content}
      </button>
    );
  }
}

export default TextLink;
