import React, { Component } from 'react';
import cn from 'classnames';
import IconButton from '../../IconButton/IconButton';

const styles = require('./ModalHeader.css');

export interface ModalHeaderProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  onClose?: Function;
  title: string;
  testId?: string;
  extraClassNames?: string;
}

export class ModalHeader extends Component<ModalHeaderProps> {
  static defaultProps = {
    testId: 'cf-ui-modal-header',
  };

  render() {
    const { onClose, title, testId, extraClassNames, ...rest } = this.props;
    return (
      <div
        {...rest}
        className={cn(styles.ModalHeader, extraClassNames)}
        data-test-id={testId}
      >
        <h1 className={styles.ModalHeader__title}>{title}</h1>
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
