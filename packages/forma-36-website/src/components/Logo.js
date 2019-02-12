import React from 'react';
import { css } from 'emotion';
import tokens from '@contentful/forma-36-tokens';
import logo from './logo-forma.svg';

const styles = {
  logo: css`
    width: 45px;
    display: block;
    margin: 0 auto ${tokens.spacing2Xl};
  `,
};

const Logo = () => (
  <img src={logo} className={styles.logo} alt="Forma 36 Logo" />
);
export default Logo;
