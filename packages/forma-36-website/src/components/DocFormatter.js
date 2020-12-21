import React, { useState } from 'react';
import { css } from '@emotion/core';
import tokens from '@contentful/forma-36-tokens';
import {
  DisplayText,
  Button,
  Tag,
} from '@contentful/forma-36-react-components';
import storybookIcon from '../images/storybook.svg';
import githubIcon from '../images/github.svg';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const styles = {
  header: css`
    width: 960px;
    margin: 0 auto;
    padding-bottom: ${tokens.spacingXl};
    margin-bottom: ${tokens.spacingXl};
    border-bottom: 1px solid ${tokens.colorElementMid};
  `,
  subheaderRow: css`
    display: flex;
    justify-content: space-between;
  `,
  buttonLeft: css`
    margin-right: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  `,
  buttonRight: css`
    margin-left: 0;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    margin-right: ${tokens.spacingM};
  `,
  tag: css`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin-left: ${tokens.spacingM};
  `,
  imageLink: css`
    font-size: ${tokens.fontSizeM};
    color: ${tokens.colorTextMid};
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    padding: calc(${tokens.spacing2Xs} / 2) ${tokens.spacingXs};
    border-radius: calc(${tokens.fontSizeS} / 5);

    &:hover {
      background-color: ${tokens.colorElementLight};
    }

    img {
      margin-right: ${tokens.spacingXs};
    }
  `,
  buttonList: css`
    display: flex;
  `,
};

const DocFormatter = ({ frontmatter, dataFromReadme, children }) => {
  const [activeSection, setActiveSection] = useState('design');
  const designDocs =
    Array.isArray(children) &&
    children.filter((child) => child.props.mdxType === 'DesignDocs');
  const developDocs =
    Array.isArray(children) &&
    children.filter((child) => child.props.mdxType === 'DevelopDocs');
  const hasDevelopDocs = developDocs.length > 0;
  const hasDesignDocs = designDocs.length > 0;

  const data = {
    title: frontmatter && frontmatter.title,
    githubUrl: frontmatter && frontmatter.github,
    storybookUrl: frontmatter && frontmatter.storybook,
    status: frontmatter && frontmatter.status,
  };
  return (
    <React.Fragment>
      {/* Remove styles condition once all docs follow the same structure */}
      <header css={data.title ? styles.header : ''}>
        {data.title && <DisplayText>{data.title}</DisplayText>}
        <div css={styles.subheaderRow}>
          <div css={styles.buttonList}>
            {hasDevelopDocs && hasDesignDocs && (
              <>
                <Button
                  size="small"
                  buttonType={activeSection === 'design' ? 'primary' : 'muted'}
                  css={styles.buttonLeft}
                  icon={activeSection === 'design' && 'CheckCircleTrimmed'}
                  isActive={activeSection === 'design'}
                  onClick={() => setActiveSection('design')}
                >
                  Design
                </Button>
                <Button
                  size="small"
                  css={styles.buttonRight}
                  buttonType={activeSection === 'develop' ? 'primary' : 'muted'}
                  icon={activeSection === 'develop' && 'CheckCircleTrimmed'}
                  isActive={activeSection === 'develop'}
                  onClick={() => setActiveSection('develop')}
                >
                  Develop
                </Button>
              </>
            )}
            {data.storybookUrl && (
              <a
                css={styles.imageLink}
                href={data.storybookUrl}
                title={`View ${data.title} in Storybook`}
              >
                <img src={storybookIcon} alt="" />
                <span>Storybook</span>
              </a>
            )}
            {data.githubUrl && (
              <a
                css={styles.imageLink}
                href={data.githubUrl}
                title={`View ${data.title} on GitHub`}
              >
                <img src={githubIcon} alt="" />
                <span>Github</span>
              </a>
            )}
          </div>

          {data.status && (
            <span css={styles.tag}>
              <Tag tagType={data.status === 'alpha' ? 'warning' : 'positive'}>
                {data.status}
              </Tag>
            </span>
          )}
        </div>
      </header>

      <main>
        {activeSection === 'design' && hasDesignDocs && designDocs}
        {activeSection === 'develop' && hasDevelopDocs && developDocs}

        {dataFromReadme && <MDXRenderer>{dataFromReadme}</MDXRenderer>}
        {!hasDevelopDocs && !hasDesignDocs && children}
      </main>
    </React.Fragment>
  );
};

export default DocFormatter;
