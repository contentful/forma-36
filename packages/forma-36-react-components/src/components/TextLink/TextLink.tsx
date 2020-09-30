import React, { Component, MouseEventHandler } from 'react';
import cn from 'classnames';
import Icon, { IconType } from '../Icon';
import TabFocusTrap from '../TabFocusTrap';

import styles from './TextLink.css';

export type TextLinkType =
  | 'primary'
  | 'positive'
  | 'negative'
  | 'secondary'
  | 'muted'
  | 'white';

type IconPositionType = 'right' | 'left';

export interface TextLinkProps {
  children?: React.ReactNode;
  linkType?: TextLinkType;
  href?: React.AnchorHTMLAttributes<HTMLAnchorElement>['href'];
  target?: React.AnchorHTMLAttributes<HTMLAnchorElement>['target'];
  rel?: React.AnchorHTMLAttributes<HTMLInputElement>['rel'];
  disabled?: boolean;
  testId?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
  className?: string;
  icon?: IconType;
  text?: string;
  iconPosition?: IconPositionType;
}

const defaultProps: Partial<TextLinkProps> = {
  linkType: 'primary',
  testId: 'cf-ui-text-link',
  disabled: false,
  iconPosition: 'left',
};

export class TextLink extends Component<TextLinkProps> {
  static defaultProps = defaultProps;

  renderIcon(icon: IconType, linkType: TextLinkType) {
    if (!icon) return undefined;

    return (
      <div
        className={
          this.props.iconPosition === 'right'
            ? styles['TextLink__icon-wrapper--right']
            : styles['TextLink__icon-wrapper']
        }
      >
        <Icon icon={icon} color={linkType} className={styles.TextLink__icon} />
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
      className,
      icon,
      text,
      iconPosition,
      ...otherProps
    } = this.props;

    const classNames = cn(styles.TextLink, className, {
      [styles[`TextLink--${linkType}`]]: linkType,
      [styles['TextLink--disabled']]: disabled,
    });

    const content = (
      <TabFocusTrap>
        {icon && iconPosition === 'left' && this.renderIcon(icon, linkType)}
        {text || children}
        {icon && iconPosition === 'right' && this.renderIcon(icon, linkType)}
      </TabFocusTrap>
    );

    if (href) {
      return (
        <a
          className={classNames}
          data-test-id={testId}
          onClick={
            disabled
              ? (e) => {
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
        onClick={!disabled ? onClick : () => {}}
        disabled={disabled}
        {...otherProps}
      >
        {content}
      </button>
    );
  }
}

export default TextLink;
