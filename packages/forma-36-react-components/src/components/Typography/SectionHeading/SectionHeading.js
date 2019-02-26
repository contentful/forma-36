import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './SectionHeading.css';

import { TypographyContext } from '../Typography/Typography';

class SectionHeading extends React.Component {
  static propTypes = {
    extraClassNames: PropTypes.string,
    children: PropTypes.node.isRequired,
    testId: PropTypes.string,
    element: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p']),
  };

  static defaultProps = {
    element: 'h3',
    extraClassNames: undefined,
    testId: 'cf-ui-section-heading',
  };

  render() {
    const {
      extraClassNames,
      children,
      testId,
      element,
      ...otherProps
    } = this.props;

    const classNames = cn(styles.SectionHeading, extraClassNames);

    const Element = element;

    return (
      <TypographyContext.Consumer>
        {({ sectionHeading }) => {
          return (
            <Element
              className={cn(classNames, [
                sectionHeading &&
                  `f36-margin-bottom--${sectionHeading.spacing}`,
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

export default SectionHeading;
