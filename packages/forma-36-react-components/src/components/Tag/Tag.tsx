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
  style?: React.CSSProperties;
  className?: string;
  testId?: string;
  children: React.ReactNode;
} & typeof defaultProps;

const defaultProps = {
  tagType: 'primary' as TagType,
  testId: 'cf-ui-tag',
};

export class Tag extends Component<TagProps> {
  static defaultProps = defaultProps;

  render() {
    const { className, children, tagType, testId, ...otherProps } = this.props;

    const classNames = cn(styles.Tag, className, {
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
