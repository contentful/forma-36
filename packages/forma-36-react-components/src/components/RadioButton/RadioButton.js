import React from 'react';
import ControlledInput, {
  ControlledInputDefaultProps,
  ControlledInputPropTypes,
} from '../ControlledInput/ControlledInput';

const RadioButton = props => <ControlledInput {...props} type="radio" />;

RadioButton.propTypes = ControlledInputPropTypes;
RadioButton.defaultProps = {
  ...ControlledInputDefaultProps,
  testId: 'cf-ui-radio-button',
};

export default RadioButton;
