import React from 'react';
import { css } from 'emotion';
import { Flex, Box } from '@contentful/f36-components';
import { Topbar, TopbarHeight } from './Topbar';
import { Footer } from './Footer';

interface Props {
  children: React.ReactNode;
  currentPage: string;
}

const styles = {
  root: css({
    position: 'relative',
  }),
  main: css({
    width: '100%',
    height: `calc(100vh - ${TopbarHeight} - 176px)`,
    marginBottom: '176px',
  }),
  footer: css({
    position: 'absolute',
    bottom: '0',
    left: '0',
    right: '0',
  }),
};

function Main({ children }: Props) {
  return (
    <Box as="main" className={styles.main}>
      {children}
    </Box>
  );
}

export function LayoutFullSize({ children, currentPage }: Props) {
  return (
    <Flex className={styles.root} flexDirection="column">
      <Topbar currentPage={currentPage} />

      {/* Unique key for each page, so scroll position is not preserved when opening a new page */}
      <Main key={currentPage} currentPage={currentPage}>
        {children}
      </Main>
      <Box className={styles.footer}>
        <Footer />
      </Box>
    </Flex>
  );
}
