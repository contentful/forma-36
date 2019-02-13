import React, { Component } from 'react';
import cn from 'classnames';

const styles = require('./Tag.css');

interface TagProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  extraClassNames?: string;
  children: React.ReactNode;
  tagType?:
    | 'primary'
    | 'positive'
    | 'negative'
    | 'warning'
    | 'secondary'
    | 'muted';
  testId?: string;
}

export class Tag extends Component<TagProps> {
  static defaultProps = {
    tagType: 'primary',
    testId: 'cf-ui-tag',
  };

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
