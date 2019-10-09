import React from 'react';
import { DisplayText, Paragraph } from '@contentful/forma-36-react-components';
import tokens from '@contentful/forma-36-tokens';
import { css } from '@emotion/core';

const styles = {
  section: css`
    text-align: center;
    padding: ${tokens.spacing3Xl} ${tokens.spacingL};
  `,
  sectionSecondary: css`
    background-color: ${tokens.colorElementLightest};
    text-align: center;
    padding: ${tokens.spacing3Xl} 0;
  `,
};

const Section = ({ children, isSecondary }) => (
  <section css={isSecondary ? styles.sectionSecondary : styles.section}>
    {children}
  </section>
);

export default Section;
