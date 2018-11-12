import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './CopyButton.css';
import Icon from '../Icon';
import Tooltip from '../Tooltip';
import TabFocusTrap from '../TabFocusTrap';

class CopyButton extends React.Component {
  static propTypes = {
    extraClassNames: PropTypes.string,
    testId: PropTypes.string,
    copyValue: PropTypes.string,
    onCopy: PropTypes.func,
  };

  static defaultProps = {
    extraClassNames: undefined,
    copyValue: undefined,
    testId: 'cf-ui-copy-button',
    onCopy: () => {},
  };

  state = {
    copied: false,
  };

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

    const classNames = cn(styles.CopyButton, extraClassNames);

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
              ref={ref => {
                this.copyButton = ref;
              }}
              className={styles.CopyButton__button}
            >
              <TabFocusTrap extraClassNames={styles.CopyButton__TabFocusTrap}>
                <span className={styles.CopyButton__text}>
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
