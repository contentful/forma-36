import React from 'react';
import {
  Typography,
  Subheading,
  Paragraph,
  TextLink,
} from '@contentful/forma-36-react-components';
import tokens from '@contentful/forma-36-tokens';
import { css } from '@emotion/core';

const styles = {
  resources: css`
    max-width: 960px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: ${tokens.spacingXl};
  `,
};

const Resources = ({ children }) => (
  <div css={styles.resources}>{children}</div>
);

export default Resources;
