import React, { Component } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import cn from 'classnames';
import Icon from '../Icon';
import Tooltip from '../Tooltip';
import TabFocusTrap from '../TabFocusTrap';
import styles from './CopyButton.css';

export interface CopyButtonProps {
  extraClassNames?: string;
  testId?: string;
  copyValue?: string;
  onCopy: (...args: any[]) => any;
}

export interface CopyButtonState {
  copied: boolean;
}

export class CopyButton extends Component<CopyButtonProps, CopyButtonState> {
  static defaultProps = {
    testId: 'cf-ui-copy-button',
    onCopy: () => {},
  };

  state = {
    copied: false,
  };

  copyButton = null;
  tooltipAnchor = null;

  onCopy = e => {
    this.props.onCopy(e);
    this.setState({ copied: true });
    setTimeout(() => {
      this.setState({ copied: false });
      this.copyButton.blur();
    }, 1000);
  };

  render() {
    const { copyValue, extraClassNames, testId, ...otherProps } = this.props;

    const classNames = cn(styles['CopyButton'], extraClassNames);

    return (
      <div
        ref={ref => {
          this.tooltipAnchor = ref;
        }}
        className={classNames}
        id="copyButton"
        data-test-id={testId}
        {...otherProps}
      >
        <CopyToClipboard text={copyValue} onCopy={this.onCopy}>
          <Tooltip
            content={
              this.state.copied ? (
                'Copied!'
              ) : (
                <span>
                  Copy to <br /> clipboard
                </span>
              )
            }
          >
            <button
              type="button"
              ref={ref => {
                this.copyButton = ref;
              }}
              className={styles['CopyButton__button']}
            >
              <TabFocusTrap
                extraClassNames={styles['CopyButton__TabFocusTrap']}
              >
                <span className={styles['CopyButton__text']}>
                  Copy {copyValue} to clipboard
                </span>
                <Icon icon="Copy" color="muted" />
              </TabFocusTrap>
            </button>
          </Tooltip>
        </CopyToClipboard>
      </div>
    );
  }
}

export default CopyButton;
