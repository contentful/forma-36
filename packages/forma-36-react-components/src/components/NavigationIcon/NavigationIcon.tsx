import React, { Component, CSSProperties } from 'react';
import cn from 'classnames';
import { navigationIconName } from './constants';

import Spaces from './svg/Spaces.svg';
import Apis from './svg/Apis.svg';
import Billing from './svg/Billing.svg';
import Home from './svg/Home.svg';
import Media from './svg/Media.svg';
import ContentModel from './svg/ContentModel.svg';
import Content from './svg/Content.svg';
import Apps from './svg/Apps.svg';
import Oauth from './svg/Oauth.svg';
import OrgInfo from './svg/OrgInfo.svg';
import Organizations from './svg/Organizations.svg';
import Settings from './svg/Settings.svg';
import Sso from './svg/Sso.svg';
import Subscription from './svg/Subscription.svg';
import Teams from './svg/Teams.svg';
import Token from './svg/Token.svg';
import Usage from './svg/Usage.svg';
import UserProfile from './svg/UserProfile.svg';
import Users from './svg/Users.svg';

import styles from './NavigationIcon.css';

const iconComponents = {
  Spaces,
  Apis,
  Apps,
  Billing,
  ContentModel,
  Content,
  Home,
  Media,
  Oauth,
  OrgInfo,
  Organizations,
  Settings,
  Sso,
  Subscription,
  Teams,
  Token,
  Usage,
  UserProfile,
  Users,
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
export type NavigationIconTagType = 'div' | 'span';

export interface NavigationIconProps {
  size?: NavigationIconSize;
  color?: NavigationIconColorType;
  style?: CSSProperties;
  icon: NavigationIconType;
  className?: string;
  testId?: string;
  tag: 'div' | 'span';
}

const defaultProps = {
  testId: 'cf-ui-navigation-icon',
  size: 'medium',
  color: 'positive',
  tag: 'div'
};

export const NavigationIcon = ({
  className,
  icon,
  size,
  color,
  testId,
  tag,
  ...otherProps
}: NavigationIconProps) => {
  const classNames = cn(
    styles.NavigationIconContainer,
    {
      [styles[`NavigationIconContainer--${size}`]]: size,
      [styles['NavigationIconContainer--trimmed']]: icon.toLowerCase().includes('trimmed'),
    },
    className,
  );

    const svgFillClass = cn(
      styles.NavigationIcon,
      {
        [styles[`NavigationIcon--${color}`]]: color,
      },
      className,
    )
    const Element = iconComponents[icon];
    const Tag = tag;

    return (
      <Tag
        className={classNames}
        data-test-id={testId}
      >
        <Element className={svgFillClass} {...otherProps} />
      </Tag>
    );
}

NavigationIcon.defaultProps = defaultProps;

export default NavigationIcon;
