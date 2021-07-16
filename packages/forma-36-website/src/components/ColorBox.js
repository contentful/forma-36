import React, { Component } from 'react';
import { css } from '@emotion/core';
import tokens from '@contentful/forma-36-tokens';
import { Flex } from '@contentful/forma-36-react-components';

const styles = {
  container: css({
    display: 'inline-block',
    boxSizing: 'border-box',
    margin: tokens.spacingXs,
    width: `calc(15% - ${tokens.spacingS})`,
    border: `1px solid ${tokens.gray200}`,
    borderRadius: `4px`,
    overflow: 'hidden'
  }),
  swatch: css({
    height: '100px',
    position: 'relative',
    zIndex: -1
  }),
  name: css({
    fontWeight: 'bold',
    color: tokens.gray700,
    fontSize: tokens.fontSizeS,
  }),
};

class ColorBox extends Component {
  state = {
    value: '',
    copiedHex: false,
    copiedCssVar: false,
  };

  render() {
    console.log(tokens)
    const { name, hex, textColor, size, ...otherProps } = this.props;
    console.log(size);
    return (
      <div
        css={styles.container}
        {...otherProps}
        style={{ width: `calc(${size}% - ${tokens.spacingS})` }}
      >
        <Flex
          justifyContent="center"
          alignItems="center"
          css={styles.swatch}
          style={{ backgroundColor: hex }}
        >
          <span css={styles.name} style={{ color: textColor }}>
            {name}
          </span>
        </Flex>
      </div>
    );
  }
}

export default ColorBox;
