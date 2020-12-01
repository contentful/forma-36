import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
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

const getComponentName = (nodes) => {
  return nodes.map(item => console.log(item));
};

const Layout = props => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            promoText
            promoLink
            promoLinkText
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
            id
            fileAbsolutePath
            internal {
              content
            }
          }
        }
      }
    `}
    render={data => {
      const componentsNames = data.allMdx.nodes.map(item => {
        const pathArray = item.fileAbsolutePath.split('/');
        pathArray.pop();
        return pathArray.pop();
      })
      console.log(componentsNames);
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
            />
          )}

          <Header />

          <div css={styles.main}>
            <Navigation
              menuItems={
                data.site.siteMetadata && data.site.siteMetadata.menuLinks
              }
              currentPath={props && props.location && props.location.pathname}
            />
            <Container
              frontmatter={props.pageContext && props.pageContext.frontmatter}
            >
              {props.children}
            </Container>
          </div>
        </div>
      );
    }}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
};

export default Layout;
