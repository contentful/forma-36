import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './ColorSwatch.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Icon } from './../../../../src';

class ColorSwatch extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    hex: PropTypes.string.isRequired,
    cssVar: PropTypes.string.isRequired,
  };

  state = {
    value: '',
    copiedHex: false,
    copiedCssVar: false,
  };

  render() {
    const { name, hex, cssVar, ...otherProps } = this.props;

    const classNames = cn(styles.ColorSwatch);

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
