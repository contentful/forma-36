import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import '@contentful/forma-36-react-components/dist/styles.css';
import '@contentful/forma-36-fcss/dist/styles.css';
import { css } from '@emotion/core';
import Header from './Header';
import Promo from './Promo';
import Container from './Container';
import Navigation from './Navigation';
import './Layout.css';

const styles = {
  main: css`
    display: flex;
    flex: 2;
  `,
  test: css`
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow-y: hidden;
  `,
};

const Layout = (props) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          promoText
          promoLink
          promoLinkText
          promoTagText
          menuLinks {
            name
            link
            menuLinks {
              name
              link
              menuLinks {
                name
                link
                menuLinks {
                  name
                  link
                }
              }
            }
          }
        }
      }
      allMdx {
        nodes {
          slug
          body
        }
      }
    }
  `);

  const dataFromReadme = {};

  data.allMdx.nodes.forEach((item) => {
    if (props.pageContext && props.pageContext.frontmatter.title) {
      const arrFromSlug = item.slug.split('/');
      const arrFromSlugLowercase = arrFromSlug.map((item) =>
        item.toLowerCase(),
      );

      const trimmedTitle = props.pageContext.frontmatter.title
        .replace(/\s/g, '')
        .toLowerCase();

      if (arrFromSlugLowercase.includes(trimmedTitle)) {
        dataFromReadme[props.pageContext.frontmatter.title] = item.body;
      }
    }
    return;
  });

  return (
    <div css={styles.test}>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          {
            name: 'description',
            content: 'Forma 36 - The Contentful Design System',
          },
          {
            name: 'keywords',
            content: 'contentful, design, design-system',
          },
        ]}
      >
        <html lang="en" />
      </Helmet>

      {data.site.siteMetadata.promoText && (
        <Promo
          text={data.site.siteMetadata.promoText}
          linkHref={data.site.siteMetadata.promoLink}
          linkText={data.site.siteMetadata.promoLinkText}
          tagText={data.site.siteMetadata.promoTagText}
        />
      )}

      <Header />

      <div css={styles.main}>
        <Navigation
          menuItems={data.site.siteMetadata && data.site.siteMetadata.menuLinks}
          currentPath={props && props.location && props.location.pathname}
        />
        <Container
          frontmatter={props.pageContext && props.pageContext.frontmatter}
          dataFromReadme={
            props.pageContext
              ? dataFromReadme[props.pageContext.frontmatter.title]
              : null
          }
        >
          {props.children}
        </Container>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
  location: PropTypes.object.isRequired,
};

export default Layout;
