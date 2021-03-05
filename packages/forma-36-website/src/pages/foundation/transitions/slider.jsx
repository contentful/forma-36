import React from 'react';
import { css } from '@emotion/core';
import tokens from '@contentful/f36-tokens';

const styles = {
  slider: css`
    width: 80px;
    height: 20px;
    cursor: pointer;
    &:hover div {
      transform: translate3d(80px, 0, 0);
    }
  `,
  sliderKnob: css`
    position: relative;
    left: 0;
    background: ${tokens.colorPrimary};
    width: 20px;
    height: 20px;
    cursor: pointer;
    transform: translate3d(0, 0, 0);
  `,
};

const Slider = (props) => (
  <div css={styles.slider} {...props}>
    {props.children}
  </div>
);

export const SliderKnob = (props) => <div css={styles.sliderKnob} {...props} />;

export default Slider;
