import React from 'react';
import ControlledInputField, {
  ControlledInputFieldDefaultProps,
  ControlledInputFieldPropTypes,
} from '../ControlledInputField/ControlledInputField';

class RadioButtonField extends React.Component {
  static propTypes = ControlledInputFieldPropTypes;

  static defaultProps = {
    ...ControlledInputFieldDefaultProps,
    testId: 'cf-ui-radio-button-field',
  };

  render() {
    const { testId, type, ...otherProps } = this.props;

    return (
      <ControlledInputField testId={testId} {...otherProps} inputType="radio" />
    );
  }
}

export default RadioButtonField;
