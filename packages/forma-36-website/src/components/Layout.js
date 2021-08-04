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
    height: calc(100vh - 70px);
  `,
  withPromo: css`
    height: calc(100vh - 107px);
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
              }
            }
          }
        }
      }
    }
  `);

  const withPromo = !!data.site.siteMetadata.promoText;

  return (
    <>
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

      {withPromo && (
        <Promo
          text={data.site.siteMetadata.promoText}
          linkHref={data.site.siteMetadata.promoLink}
          linkText={data.site.siteMetadata.promoLinkText}
          tagText={data.site.siteMetadata.promoTagText}
        />
      )}

      <Header />

      <div css={[styles.main, withPromo && styles.withPromo]}>
        <Navigation
          menuItems={data.site.siteMetadata && data.site.siteMetadata.menuLinks}
          currentPath={props && props.location && props.location.pathname}
        />
        <Container
          frontmatter={props.pageContext && props.pageContext.frontmatter}
          dataFromReadme={props.pageContext && props.pageContext.body}
        >
          {props.children}
        </Container>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
  location: PropTypes.object,
};

export default Layout;
