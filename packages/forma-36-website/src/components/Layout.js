import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { css, cx } from 'emotion';
import { useStaticQuery, graphql } from 'gatsby';
import { GlobalStyles, Flex } from '@contentful/f36-core';
import './Layout.css';

import Header from './Header';
import Promo from './Promo';
import MDXPage from './MDXPage';
import Navigation from './Navigation';
import Footer from './Footer';

const styles = {
  navAndContentWrapper: css`
    display: flex;
    height: calc(100vh - 70px);
  `,
  withPromo: css`
    height: calc(100vh - 107px);
  `,
  content: css`
    width: 100%;
    height: 100%;
    overflow-y: auto;
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

      <div
        className={cx([
          styles.navAndContentWrapper,
          withPromo && styles.withPromo,
        ])}
      >
        <Navigation
          menuItems={siteMetadata?.menuLinks}
          currentPath={location?.pathname}
        />

        <Flex flexDirection="column" className={styles.content}>
          {/**
           * if pageContext is NOT undefined it means the page comes from a MDX file so we use the MDXPage component
           * the pages with no pageContext come from "../pages" and do not have pageContext
           * */}
          {pageContext ? (
            <MDXPage
              frontmatter={pageContext.frontmatter}
              mdxContent={pageContext.body}
              propsMetadata={pageContext.propsMetadata}
            />
          ) : (
            children
          )}

          <Footer />
        </Flex>
      </div>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
  location: PropTypes.object,
  pageContext: PropTypes.object,
};
