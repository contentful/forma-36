import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './Paragraph.css';

import { TypographyContext } from '../Typography/Typography';

export class Paragraph extends React.Component {
  static propTypes = {
    extraClassNames: PropTypes.string,
    children: PropTypes.node.isRequired,
    testId: PropTypes.string,
    element: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p']),
  };

  static defaultProps = {
    element: 'p',
    extraClassNames: undefined,
    testId: 'cf-ui-paragraph',
  };

  render() {
    const {
      extraClassNames,
      children,
      testId,
      element,
      ...otherProps
    } = this.props;

    const classNames = cn(styles.Paragraph, extraClassNames);

    const Element = element;

    return (
      <TypographyContext.Consumer>
        {({ paragraph }) => {
          return (
            <Element
              className={cn(classNames, [
                paragraph && `f36-margin-bottom--${paragraph.spacing}`,
              ])}
              data-test-id={testId}
              {...otherProps}
            >
              {children}
            </Element>
          );
        }}
      </TypographyContext.Consumer>
    );
  }
}

export default Paragraph;
