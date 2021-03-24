import React from 'react';
import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import logo from '../images/logo-forma.svg';

const styles = {
  logo: css`
    width: 45px;
    display: block;
    margin: ${tokens.spacingXl} auto ${tokens.spacing4Xl};
  `,
};

const Logo = () => (
  <img src={logo} className={styles.logo} alt="Forma 36 Logo" />
);
export default Logo;
