import React from 'react';
import { DisplayText, Text, Typography } from '@contentful/f36-components';
import tokens from '@contentful/f36-tokens';
import { css } from 'emotion';
import bg from '../images/dot-bg.png';

const styles = {
  masthead: css`
    display: flex;
    justify-content: center;
    background-color: ${tokens.colorBlueDark};
    text-align: center;
    padding: ${tokens.spacing3Xl} 0;
    background-image: url(${bg});
    background-size: 30px;
    background-position: center top;
  `,
  content: css`
    width: 28rem;
  `,
  title: css`
    color: #fff;
  `,
  description: css`
    font-size: ${tokens.fontSizeL};
    color: #fff;
  `,
  logo: css`
    margin-bottom: ${tokens.spacingXl};
  `,
};

const Logo = () => (
  <svg
    x="0px"
    y="0px"
    width="80px"
    height="80px"
    viewBox="0 0 90 90"
    enableBackground="new 0 0 90 90"
    className={styles.logo}
  >
    <circle fill="#ffffff" cx="45" cy="10" r="10" />
    <circle fill="#ffffff" cx="10" cy="10" r="10" />
    <circle fill="#ffffff" cx="80" cy="10" r="10" />
    <circle fill="#ffffff" cx="10" cy="45" r="10" />
    <circle fill="#ffffff" cx="45" cy="45" r="10" />
    <circle fill="#ffffff" cx="10" cy="80" r="10" />
  </svg>
);

const Masthead = ({ title, description, hasLogo }) => (
  <div className={styles.masthead}>
    <div className={styles.content}>
      {hasLogo && <Logo />}
      <Typography>
        <DisplayText size="large" className={styles.title}>
          {title}
        </DisplayText>
        {description && (
          <Text className={styles.description}>{description}</Text>
        )}
      </Typography>
    </div>
  </div>
);

export default Masthead;
