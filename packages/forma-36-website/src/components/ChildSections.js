import React from 'react';
import tokens from '@contentful/forma-36-tokens';
import { navigate } from 'gatsby';
import { css } from '@emotion/core';
import {
  Subheading,
  Paragraph,
  Card,
} from '@contentful/forma-36-react-components';

const handleClick = path => {
  if (path.includes('http')) {
    window.location = path;
  } else {
    navigate(path);
  }
};

const ChildSections = ({ items }) => {
  const styles = {
    wrapper: css`
      width: 960px;
      margin: 0 auto;
      padding: 0 ${tokens.spacingL} ${tokens.spacingL};
      display: grid;
      grid-column-gap: ${tokens.spacingM};
      grid-row-gap: ${tokens.spacingM};
      grid-template-columns: 1fr 1fr 1fr 1fr;
    `,

    icon: css`
      height: 100px;
      margin-bottom: ${tokens.spacingM};
      width: 100%;
      background-color: ${tokens.colorElementLight};
      display: flex;
      align-items: center;
      justify-content: center;
    `,

    description: css`
      margin-top: ${tokens.spacing2Xs};
      font-size: ${tokens.fontSizeL};
    `,
  };

  return (
    <div css={styles.wrapper}>
      {items.map((item, index) => {
        return (
          <Card onClick={() => handleClick(item.path)} key={index}>
            {item.icon && (
              <div css={styles.icon}>
                <img
                  src={`/icons/${item.icon}.svg`}
                  alt={`Icon for ${item.title} section`}
                />
              </div>
            )}
            <Subheading>{item.title}</Subheading>
            {item.desc && (
              <Paragraph css={styles.description}>{item.desc}</Paragraph>
            )}
          </Card>
        );
      })}
    </div>
  );
};

export default ChildSections;
