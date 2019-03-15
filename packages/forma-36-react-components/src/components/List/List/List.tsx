import React, { Component } from 'react';
import cn from 'classnames';
import styles from './List.css';

export type ListProps = {
  extraClassNames?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  testId?: string;
} & typeof defaultProps;

const defaultProps = {
  testId: 'cf-ui-list',
};

export class List extends Component<ListProps> {
  static defaultProps = defaultProps;

  render() {
    const { extraClassNames, children, testId, ...otherProps } = this.props;

    const classNames = cn(styles['List'], extraClassNames);

    return (
      <ul {...otherProps} className={classNames} data-test-id={testId}>
        {children}
      </ul>
    );
  }
}

export default List;
