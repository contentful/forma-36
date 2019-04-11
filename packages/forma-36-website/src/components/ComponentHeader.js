import React from 'react';
import PropTypes from 'prop-types';
import tokens from '@contentful/forma-36-tokens';

import { css } from '@emotion/core';
import {
  DisplayText,
  Heading,
  Paragraph,
  TextLink,
  Card,
} from '@contentful/forma-36-react-components';

const styles = {
  header: css`
    border-bottom: 1px solid ${tokens.colorElementMid};
    padding-bottom: ${tokens.spacing2Xl};
    margin-bottom: ${tokens.spacing2Xl};
  `,
};

const ComponentHeader = ({ title, storybookUrl, githubUrl }) => (
  <header css={styles.header}>
    <DisplayText>{title}</DisplayText>
    <TextLink href={githubUrl}>View {title} on GitHub</TextLink> |{' '}
    <TextLink href={storybookUrl}>View {title} in Storybook</TextLink>
  </header>
);

export default ComponentHeader;
