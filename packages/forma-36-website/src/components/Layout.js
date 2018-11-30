import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import '@contentful/forma-36-react-components/dist/styles.css';
import Paragraph from '@contentful/forma-36-react-components/dist/components/Typography/Paragraph';

import Header from './Header';
import Container from './Container';
import Footer from './Footer';
import './Layout.scss';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <div>
          <Header />
          <Container>{children}</Container>
          <Footer>
            <Paragraph>A product of Contentful</Paragraph>
          </Footer>
        </div>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
