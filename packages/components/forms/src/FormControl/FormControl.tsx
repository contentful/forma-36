import React, { Component } from 'react';

import { FormControlProps, FormControlContext } from './FormControlContext';

export class FormControl extends Component<
  FormControlProps & {
    children?: React.ReactNode;
    className?: string;
  }
> {
  render() {
    const {
      isInvalid,
      isRequired,
      isDisabled,
      isReadOnly,
      className,
      children,
    } = this.props;

    const context = {
      isRequired,
      isDisabled,
      isInvalid,
      isReadOnly,
    };

    // todo: make this component polymorphic allow to override div with as="fieldset" and so on
    // todo: pass optional `id` to FormControl

    return (
      <FormControlContext.Provider value={context}>
        <div role="group" className={className}>
          {children}
        </div>
      </FormControlContext.Provider>
    );
  }
}
