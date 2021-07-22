import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Copy } from '@contentful/f36-icons';
import { css } from 'emotion';

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
      <div className={styles.container} {...otherProps}>
        <div className={styles.swatch} style={{ backgroundColor: hex }} />
        <div className={styles.label}>
          <div className={styles.name}>{name}</div>
          <CopyToClipboard
            text={cssVar}
            onCopy={() => this.setState({ copiedCssVar: true })}
          >
            <div className={styles.cssVar}>
              {cssVar}
              <Copy
                variant="muted"
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
            <div className={styles.hex}>
              {hex}
              <Copy
                variant="muted"
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
