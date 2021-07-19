import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Icon } from '@contentful/forma-36-react-components';
import { css } from '@emotion/core';

const styles = {
  container: css`
    display: inline-block;
    box-sizing: border-box;
    margin: 8px;
    width: calc(20% - 16px);
    border-radius: 4px;
    border: 1px solid var(--color-element-light);
    position: relative;
  `,
  swatch: css`
    height: 100px;
    border-radius: 4px 4px 0 0;
  `,
  label: css`
    box-sizing: border-box;
    width: 100%;
    border-radius: 0 0 4px 4px;
    padding: 8px;
    color: var(--color-text-light);
  `,
  name: css`
    font-weight: bold;
    color: var(--color-text-dark);
  `,
  hex: css`
    cursor: pointer;
    font-family: var(--font-stack-monospace);
  `,
  cssVar: css`
    cursor: pointer;
  `,
};

class ColorSwatch extends Component {
  state = {
    value: '',
    copiedHex: false,
    copiedCssVar: false,
  };

  render() {
    const { name, hex, cssVar, ...otherProps } = this.props;

    return (
      <div css={styles.container} {...otherProps}>
        <div css={styles.swatch} style={{ backgroundColor: hex }} />
        <div css={styles.label}>
          <div css={styles.name}>{name}</div>
          <CopyToClipboard
            text={cssVar}
            onCopy={() => this.setState({ copiedCssVar: true })}
          >
            <div css={styles.cssVar}>
              {cssVar}
              <Icon
                icon="Copy"
                color="muted"
                style={{
                  width: '12px',
                  height: '12px',
                  marginLeft: '4px',
                }}
              />
            </div>
          </CopyToClipboard>
          <CopyToClipboard
            text={hex}
            onCopy={() => this.setState({ copiedHex: true })}
          >
            <div css={styles.hex}>
              {hex}
              <Icon
                icon="Copy"
                color="muted"
                style={{
                  width: '12px',
                  height: '12px',
                  marginLeft: '4px',
                }}
              />
            </div>
          </CopyToClipboard>
        </div>
      </div>
    );
  }
}

export default ColorSwatch;
