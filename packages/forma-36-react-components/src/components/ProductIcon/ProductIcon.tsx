import React, { CSSProperties } from 'react';
import cn from 'classnames';
import { productIconName } from './constants';

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
import Purchase from './svg/Purchase.svg';
import Settings from './svg/Settings.svg';
import Sso from './svg/Sso.svg';
import Subscription from './svg/Subscription.svg';
import Teams from './svg/Teams.svg';
import Token from './svg/Token.svg';
import Usage from './svg/Usage.svg';
import UserProfile from './svg/UserProfile.svg';
import Users from './svg/Users.svg';

import styles from './ProductIcon.css';

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
  Purchase,
  Settings,
  Sso,
  Subscription,
  Teams,
  Token,
  Usage,
  UserProfile,
  Users,
};

export type ProductIconType = keyof typeof productIconName;
export type ProductIconColorType =
  | 'primary'
  | 'positive'
  | 'negative'
  | 'warning'
  | 'secondary'
  | 'muted'
  | 'white';

export type ProductIconSize = 'small' | 'medium' | 'large' | 'xlarge';
export type ProductIconTagType = 'div' | 'span';

export interface ProductIconProps {
  size?: ProductIconSize;
  color?: ProductIconColorType;
  style?: CSSProperties;
  icon: ProductIconType;
  className?: string;
  testId?: string;
  tag: ProductIconTagType;
}

const defaultProps = {
  testId: 'cf-ui-navigation-icon',
  size: 'medium',
  color: 'positive',
  tag: 'div',
};

export const ProductIcon = ({
  className,
  icon,
  size,
  color,
  testId,
  tag,
  ...otherProps
}: ProductIconProps) => {
  const classNames = cn(
    styles.ProductIconContainer,
    {
      [styles[`ProductIconContainer--${size}`]]: size,
      [styles['ProductIconContainer--trimmed']]: icon
        .toLowerCase()
        .includes('trimmed'),
    },
    className,
  );

  const svgFillClass = cn(
    styles.ProductIcon,
    {
      [styles[`ProductIcon--${color}`]]: color,
    },
    className,
  );
  const Element = iconComponents[icon];
  const Tag = tag;

  return (
    <Tag className={classNames} data-test-id={testId}>
      <Element className={svgFillClass} {...otherProps} />
    </Tag>
  );
};

ProductIcon.defaultProps = defaultProps;

export default ProductIcon;
