import React, { Component } from 'react';
import cn from 'classnames';
import styles from './List.css';

export type ListProps = {
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  testId?: string;
} & Partial<typeof defaultProps>;

const defaultProps = {
  testId: 'cf-ui-list',
};

export class List extends Component<ListProps> {
  static defaultProps = defaultProps;

  render() {
    const { className, children, testId, ...otherProps } = this.props;

    const classNames = cn(styles['List'], className);

    return (
      <ul {...otherProps} className={classNames} data-test-id={testId}>
        {children}
      </ul>
    );
  }
}

export default List;
