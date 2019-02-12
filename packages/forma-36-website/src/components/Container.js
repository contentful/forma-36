import React from 'react';
import PropTypes from 'prop-types';
import tokens from '@contentful/forma-36-tokens';
import { css } from 'emotion';

const styles = {
  container: css`
    min-height: 100vh;
    flex: 1;
    padding: ${tokens.spacing2Xl} ${tokens.spacingXl};
  `,
};

const Container = ({ children }) => (
  <div className={styles.container}>{children}</div>
);
Container.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Container;
