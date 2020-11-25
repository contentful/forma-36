import React, { CSSProperties } from 'react';
import cn from 'classnames';
import { productIconName } from './constants';

import Spaces from './svg/Spaces';
import Apis from './svg/Apis';
import Billing from './svg/Billing';
import Home from './svg/Home';
import Media from './svg/Media';
import ContentModel from './svg/ContentModel';
import Content from './svg/Content';
import Apps from './svg/Apps';
import Oauth from './svg/Oauth';
import OrgInfo from './svg/OrgInfo';
import Organizations from './svg/Organizations';
import Purchase from './svg/Purchase';
import Settings from './svg/Settings';
import Sso from './svg/Sso';
import Subscription from './svg/Subscription';
import Teams from './svg/Teams';
import Token from './svg/Token';
import Usage from './svg/Usage';
import UserProfile from './svg/UserProfile';
import Users from './svg/Users';

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
