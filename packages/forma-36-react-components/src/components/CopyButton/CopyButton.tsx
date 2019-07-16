import React, { Component } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import cn from 'classnames';
import Icon from '../Icon';
import { TooltipPlace, Tooltip } from '../Tooltip/Tooltip';
import TabFocusTrap from '../TabFocusTrap';
import styles from './CopyButton.css';

export type CopyButtonProps = {
  copyValue?: string;
  onCopy?: (value: string) => void;
  className?: string;
  testId?: string;
  tooltipPlace?: TooltipPlace;
  tooltipText?: string | React.ReactNode | HTMLElement;
  tooltipCopiedText?: string | React.ReactNode | HTMLElement;
} & typeof defaultProps;

export interface CopyButtonState {
  copied: boolean;
}

const defaultProps = {
  testId: 'cf-ui-copy-button',
  tooltipText: (
    <React.Fragment>
      Copy to <br /> clipboard
    </React.Fragment>
  ),
  tooltipCopiedText: 'Copied!',
};

export class CopyButton extends Component<CopyButtonProps, CopyButtonState> {
  static defaultProps = defaultProps;

  state = {
    copied: false,
  };

  copyButton: HTMLButtonElement | null = null;
  tooltipAnchor: HTMLDivElement | null = null;

  onCopy = (e: string) => {
    if (this.props.onCopy) {
      this.props.onCopy(e);
    }
    this.setState({ copied: true });
    setTimeout(() => {
      this.setState({ copied: false });
      if (this.copyButton) {
        this.copyButton.blur();
      }
    }, 1000);
  };

  render() {
    const {
      copyValue,
      className,
      testId,
      onCopy,
      tooltipPlace,
      tooltipText,
      tooltipCopiedText,
      ...otherProps
    } = this.props;

    const classNames = cn(styles['CopyButton'], className);
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
        <CopyToClipboard text={copyValue || ''} onCopy={this.onCopy}>
          <Tooltip
            place={tooltipPlace}
            content={
              this.state.copied ? tooltipCopiedText : <span>{tooltipText}</span>
            }
          >
            <button
              type="button"
              ref={ref => {
                this.copyButton = ref;
              }}
              className={styles['CopyButton__button']}
            >
              <TabFocusTrap className={styles['CopyButton__TabFocusTrap']}>
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
