import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './DisplayText.css';

import { TypographyContext } from '../Typography/Typography';

class DisplayText extends React.Component {
  static propTypes = {
    extraClassNames: PropTypes.string,
    children: PropTypes.node.isRequired,
    testId: PropTypes.string,
    element: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p']),
    size: PropTypes.oneOf(['default', 'large']),
  };

  static defaultProps = {
    element: 'h1',
    extraClassNames: undefined,
    testId: 'cf-ui-display-text',
    size: 'default',
  };

  render() {
    const {
      extraClassNames,
      children,
      testId,
      element,
      size,
      ...otherProps
    } = this.props;

    const classNames = cn(styles.DisplayText, extraClassNames, {
      [styles[`DisplayText--${size}`]]: size,
    });

    const Element = element;

    return (
      <TypographyContext.Consumer>
        {value => {
          const contextSize =
            size === 'large' ? value['displayTextLarge'] : value['displayText'];

          return (
            <Element
              className={cn(classNames, [
                contextSize && `f36-margin-bottom--${contextSize.spacing}`,
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

export default DisplayText;
