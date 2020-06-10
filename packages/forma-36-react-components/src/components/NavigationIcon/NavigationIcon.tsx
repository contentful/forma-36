import React, { Component, CSSProperties } from 'react';
import cn from 'classnames';
import { navigationIconName } from './constants';

import Spaces from './svg/Spaces.svg';
import Apis from './svg/Apis.svg';
import Billing from './svg/Billing.svg';
// import Content from './svg/Content.svg';
// import Apps from './svg/Apps.svg';
// import UserProfile from './svg/UserProfile.svg';

import styles from './NavigationIcon.css';

const iconComponents = {
  Spaces,
  Apis,
  Billing,
};

export type NavigationIconType = keyof typeof navigationIconName;
export type NavigationIconColorType =
  | 'primary'
  | 'positive'
  | 'negative'
  | 'warning'
  | 'secondary'
  | 'muted'
  | 'white';

export type NavigationIconSize = 'small' | 'medium' | 'large' | 'xlarge';

export interface NavigationIconProps {
  size?: NavigationIconSize;
  color?: NavigationIconColorType;
  style?: CSSProperties;
  icon: NavigationIconType;
  className?: string;
  testId?: string;
}

const defaultProps = {
  testId: 'cf-ui-navigation-icon',
  size: 'small',
  color: 'primary',
};

export class NavigationIcon extends Component<NavigationIconProps & typeof defaultProps> {
  static defaultProps = defaultProps;
  
  render() {
    const { className, icon, size, color, testId, ...otherProps } = this.props;
    
    const classNames = cn(
      styles.NavigationIcon,
      {
        [styles[`NavigationIcon--${size}`]]: size,
        [styles[`NavigationIcon--${color}`]]: color,
        [styles['NavigationIcon--trimmed']]: icon.toLowerCase().includes('trimmed'),
      },
      className,
    );

    const Element = iconComponents[icon];
    console.log('????', Element)
    return (
      <Element data-test-id={testId} className={classNames} {...otherProps} />
    );
  }
}

export default NavigationIcon;
