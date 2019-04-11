import React from 'react';
import PropTypes from 'prop-types';
import tokens from '@contentful/forma-36-tokens';
import { navigate } from 'gatsby';
import { css } from '@emotion/core';
import {
  DisplayText,
  Subheading,
  Paragraph,
  TextLink,
  Card,
} from '@contentful/forma-36-react-components';

const styles = {
  wrapper: css`
    width: 1000px;
    display: grid;
    grid-column-gap: ${tokens.spacingM};
    grid-row-gap: ${tokens.spacingM};
    grid-template-columns: 1fr 1fr 1fr 1fr;
  `,

  icon: css`
    height: 100px;
    margin-bottom: ${tokens.spacingM};
    width: 100%;
    background: #eee;
  `,
};

const handleClick = path => {
  navigate(path);
};

const ChildSections = ({ items }) => (
  <div css={styles.wrapper}>
    {items.map((item, index) => {
      return (
        <Card
          extraClassName={styles.card}
          onClick={() => handleClick(item.path)}
          key={index}
        >
          <div css={styles.icon} />
          <Subheading>{item.title}</Subheading>
          {item.desc && <Paragraph>{item.desc}</Paragraph>}
        </Card>
      );
    })}
  </div>
);

export default ChildSections;
