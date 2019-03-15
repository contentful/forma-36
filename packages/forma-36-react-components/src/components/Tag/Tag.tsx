import React, { Component } from 'react';
import cn from 'classnames';

const styles = require('./Tag.css');

export type TagType =
  | 'primary'
  | 'positive'
  | 'negative'
  | 'warning'
  | 'secondary'
  | 'muted';

export type TagProps = {
  tagType?: TagType;
  testId?: string;
  style?: React.CSSProperties;
  extraClassNames?: string;
  children: React.ReactNode;
} & typeof defaultProps;

const defaultProps = {
  tagType: 'primary' as TagType,
  testId: 'cf-ui-tag',
};

export class Tag extends Component<TagProps> {
  static defaultProps = defaultProps;

  render() {
    const {
      extraClassNames,
      children,
      tagType,
      testId,
      ...otherProps
    } = this.props;

    const classNames = cn(styles.Tag, extraClassNames, {
      [styles[`Tag--${tagType}`]]: tagType,
    });

    return (
      <div className={classNames} data-test-id={testId} {...otherProps}>
        {children}
      </div>
    );
  }
}

export default Tag;
