import React, { Component } from 'react';
import cn from 'classnames';
import styles from './ColorSwatch.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Icon from './../../../../src/components/Icon';

interface ColorSwatchProps {
  name: string;
  hex: string;
  cssVar: string;
}

class ColorSwatch extends Component<ColorSwatchProps> {
  state = {
    value: '',
    copiedHex: false,
    copiedCssVar: false,
  };

  render() {
    const { name, hex, cssVar, ...otherProps } = this.props;

    const classNames = cn(styles['ColorSwatch']);

    return (
      <div className={classNames} {...otherProps}>
        <div
          className={styles['ColorSwatch__swatch']}
          style={{ backgroundColor: hex }}
        />
        <div className={styles['ColorSwatch__label']}>
          <div className={styles['ColorSwatch__name']}>{name}</div>
          <CopyToClipboard
            text={cssVar}
            onCopy={() => this.setState({ copiedCssVar: true })}
          >
            <div className={styles['ColorSwatch__css-var']}>
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
            <div className={styles['ColorSwatch__hex']}>
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
