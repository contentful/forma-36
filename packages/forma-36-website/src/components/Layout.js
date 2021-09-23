import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { css } from '@emotion/core';
import { useStaticQuery, graphql } from 'gatsby';
import { GlobalStyles } from '@contentful/f36-core';
import './Layout.css';

import Header from './Header';
import Promo from './Promo';
import Container from './Container';
import Navigation from './Navigation';

const styles = {
  navAndContentWrapper: css`
    display: flex;
    height: calc(100vh - 70px);
  `,
  withPromo: css`
    height: calc(100vh - 107px);
  `,
};

export default function Layout({ location, pageContext, children }) {
  useEffect(() => {
    // track page visit only when the page is mounted
    if (window.analytics) {
      window.analytics.page();
    }
  }, []);

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
              }
            }
          }
        }
      }
    }
  `);

  const { siteMetadata } = data.site;
  const withPromo = !!siteMetadata.promoText;

  return (
    <>
      <GlobalStyles />
      <Helmet
        title={siteMetadata.title}
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

      {withPromo && (
        <Promo
          text={siteMetadata.promoText}
          linkHref={siteMetadata.promoLink}
          linkText={siteMetadata.promoLinkText}
          tagText={siteMetadata.promoTagText}
        />
      )}

      <Header />

      <div css={[styles.navAndContentWrapper, withPromo && styles.withPromo]}>
        <Navigation
          menuItems={siteMetadata?.menuLinks}
          currentPath={location?.pathname}
        />
        {/* pageContext is `undefined` during website build in Netlify */}
        <Container
          frontmatter={pageContext && pageContext.frontmatter}
          dataFromReadme={pageContext && pageContext.body}
          propsMetadata={pageContext && pageContext.propsMetadata}
        >
          {children}
        </Container>
      </div>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
  location: PropTypes.object,
  pageContext: PropTypes.object,
};
