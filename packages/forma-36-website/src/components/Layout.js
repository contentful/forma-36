import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { css } from 'emotion';
import '@contentful/forma-36-react-components/dist/styles.css';
import '@contentful/forma-36-fcss/dist/styles.css';
import Container from './Container';
import Navigation from './Navigation';
import './Layout.css';

const styles = {
  main: css`
    display: flex;
  `,
};

const Layout = props => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
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
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: 'Forma 36 - The Contentful Design System',
            },
            { name: 'keywords', content: 'contentful, design, design-system' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <div className={styles.main}>
          <Navigation
            menuItems={
              data.site.siteMetadata && data.site.siteMetadata.menuLinks
            }
            currentPath={props && props.location.pathname}
          />
          <Container>{props.children}</Container>
        </div>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
};

export default Layout;
