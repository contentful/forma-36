import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './FormLabel.css';

class FormLabel extends React.Component {
  static propTypes = {
    htmlFor: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
    testId: PropTypes.string,
    extraClassNames: PropTypes.string,
    requiredText: PropTypes.string,
    required: PropTypes.bool,
  };

  static defaultProps = {
    extraClassNames: undefined,
    testId: 'cf-ui-form-label',
    requiredText: 'required',
    required: false,
  };

  render() {
    const {
      extraClassNames,
      children,
      testId,
      htmlFor,
      requiredText,
      required,
      ...otherProps
    } = this.props;

    const classNames = cn(styles.FormLabel, extraClassNames);

    return (
      // eslint-disable-next-line jsx-a11y/label-has-for
      <label
        className={classNames}
        data-test-id={testId}
        htmlFor={htmlFor}
        {...otherProps}
      >
        {children}
        {required && !!requiredText.length && (
          <span className={styles['FormLabel__required-text']}>
            ({requiredText})
          </span>
        )}
      </label>
    );
  }
}

export default FormLabel;
