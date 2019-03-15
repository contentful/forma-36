import React, { Component } from 'react';
import cn from 'classnames';
import IconButton from '../../IconButton/IconButton';

const styles = require('./ModalHeader.css');

export type ModalHeaderProps = {
  title: string;
  onClose?: Function;
  testId?: string;
  extraClassNames?: string;
  isNotWrapped?: boolean;
  style?: React.CSSProperties;
} & typeof defaultProps;

const defaultProps = {
  testId: 'cf-ui-modal-header',
};

export class ModalHeader extends Component<ModalHeaderProps> {
  static defaultProps = defaultProps;

  render() {
    const {
      onClose,
      title,
      testId,
      isNotWrapped,
      extraClassNames,
      ...rest
    } = this.props;

    const titleClassNames = cn(styles.ModalHeader__title, {
      [styles['ModalHeader__title--is-not-wrapped']]: isNotWrapped,
    });

    return (
      <div
        {...rest}
        className={cn(styles.ModalHeader, extraClassNames)}
        data-test-id={testId}
      >
        <h1 className={titleClassNames}>{title}</h1>
        {onClose && (
          <IconButton
            iconProps={{ icon: 'Close' }}
            buttonType="muted"
            label="Close"
            onClick={() => onClose()}
          />
        )}
      </div>
    );
  }
}

export default ModalHeader;
