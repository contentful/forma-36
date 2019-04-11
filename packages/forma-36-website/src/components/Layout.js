import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import '@contentful/forma-36-react-components/dist/styles.css';
import '@contentful/forma-36-fcss/dist/styles.css';
import { css } from '@emotion/core';
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
      }
    `}
    render={data => {
      return (
        <React.Fragment>
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
          <div css={styles.main}>
            <Navigation
              menuItems={
                data.site.siteMetadata && data.site.siteMetadata.menuLinks
              }
              currentPath={props && props.location.pathname}
            />

            <Container frontmatter={props.pageContext.frontmatter}>
              {props.children}
            </Container>
          </div>
        </React.Fragment>
      );
    }}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
};

export default Layout;
