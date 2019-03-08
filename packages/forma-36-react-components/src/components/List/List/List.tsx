import React, { Component } from 'react';
import cn from 'classnames';
import styles from './List.css';

export interface ListProps {
  extraClassNames?: string;
  children: React.ReactNode;
  testId?: string;
}

export class List extends Component<ListProps> {
  static defaultProps = {
    testId: 'cf-ui-list',
  };

  render() {
    const { extraClassNames, children, testId, ...otherProps } = this.props;

    const classNames = cn(styles['List'], extraClassNames);

    return (
      <ul className={classNames} data-test-id={testId} {...otherProps}>
        {children}
      </ul>
    );
  }
}

export default List;
