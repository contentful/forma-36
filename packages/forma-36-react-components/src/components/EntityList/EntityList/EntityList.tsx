import React, { Component } from 'react';
import cn from 'classnames';

const styles = require('./EntityList.css');

export type EntityListProps = {
  /**
   * Class names to be appended to the className prop of the component
   */
  className?: string;
  /**
   * Child nodes to be rendered in the component
   */
  children?: React.ReactNode;
  /**
   * An ID used for testing purposes applied as a data attribute (data-test-id)
   */
  testId?: string;
} & typeof defaultProps;

const defaultProps = {
  testId: 'cf-ui-entity-list',
};

export class EntityList extends Component<EntityListProps> {
  static defaultProps = defaultProps;

  render() {
    const { className, children, testId, ...otherProps } = this.props;
    const classNames = cn(styles.EntityList, className);

    return (
      <ul {...otherProps} className={classNames} data-test-id={testId}>
        {children}
      </ul>
    );
  }
}

export default EntityList;
