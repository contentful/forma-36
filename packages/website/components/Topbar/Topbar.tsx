import React from 'react';
import { css, cx } from '@emotion/css';
import { Grid, Flex, List, Button } from '@contentful/f36-components';
import tokens from '@contentful/f36-tokens';

import { getGridStyles, TOPBAR_HEIGHT } from '../../utils/getGridStyles';
import { useCurrentLocation } from '../../hooks/useCurrentLocation';
import { TopbarLink } from './TopbarLink';
import { TopbarLogo } from './TopbarLogo';
import { signOut, useSession } from 'next-auth/react';
import { DocSearch } from '@docsearch/react';
import '@docsearch/css';

const styles = {
  header: css({
    display: 'grid',
    backgroundColor: tokens.colorWhite,
    color: tokens.blue700,
    height: TOPBAR_HEIGHT,
    borderBottom: `1px solid ${tokens.gray300}`,
  }),
  navList: css({
    listStyle: 'none',
    padding: 0,
    display: 'flex',
    '> li': {
      marginRight: tokens.spacingXl,
      fontSize: tokens.fontSizeL,
    },
  }),
  docSearchContainer: css({
    '.DocSearch-Button': {
      fontSize: tokens.fontSizeM,
      lineHeight: tokens.lineHeightCondensed,
      minHeight: '40px',
      fontWeight: tokens.fontWeightMedium,
      border: '1px solid',
      boxShadow: '0px 1px 0px rgb(25, 37, 50, 0.08)',
      borderRadius: tokens.borderRadiusMedium,
      borderColor: tokens.gray300,
      '&:hover': {
        backgroundColor: tokens.gray100,
      },
    },
    '.DocSearch-Button-Key, .DocSearch-Button': {
      color: tokens.gray900,
    },
  }),
  signOut: css({
    marginLeft: tokens.spacing2Xs,
  }),
};

type TopbarLink = Record<'initialLink' | 'slug' | 'title', string>;

export interface TopbarProps {
  links: TopbarLink[];
}

export function Topbar({ links }: TopbarProps) {
  const gridStyles = getGridStyles();
  const { currentSection } = useCurrentLocation();

  const { data: session } = useSession();

  return (
    <Grid.Item
      as="header"
      area="topbar"
      className={cx(styles.header, gridStyles.wrapperColumns)}
    >
      <Flex paddingLeft="spacingXl">
        <TopbarLogo />
      </Flex>

      <Flex
        justifyContent="space-between"
        alignItems="center"
        className={cx(
          gridStyles.contentColumns,
          gridStyles.contentColumnsBigScreens,
        )}
      >
        <Flex
          as="nav"
          alignItems="center"
          className={gridStyles.columnStartTwo}
        >
          <List className={styles.navList}>
            {links.map((section) => {
              const isActive =
                currentSection !== '' && section.slug.includes(currentSection);

              return (
                <List.Item key={section.slug}>
                  <TopbarLink
                    href={`/${section.slug}${
                      section.initialLink && section.initialLink !== '/'
                        ? `/${section.initialLink}`
                        : ''
                    }`}
                    label={section.title}
                    isActive={isActive}
                  />
                </List.Item>
              );
            })}
          </List>
        </Flex>

        <Flex className={styles.docSearchContainer}>
          <DocSearch
            appId={process.env.NEXT_PUBLIC_DOCSEARCH_APP_ID || ''}
            apiKey={process.env.NEXT_PUBLIC_DOCSEARCH_API_KEY || ''}
            indices={[process.env.NEXT_PUBLIC_DOCSEARCH_INDEX_NAME || '']}
          />
          {session ? (
            <Button
              className={styles.signOut}
              onClick={() => signOut({ callbackUrl: '/' })}
            >
              Log out
            </Button>
          ) : null}
        </Flex>
      </Flex>
    </Grid.Item>
  );
}
