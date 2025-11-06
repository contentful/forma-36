import React from 'react';
import type { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import type { ParsedUrlQuery } from 'node:querystring';

import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';
import { PropsContextProvider } from '@contentful/f36-docs-utils';

import { sortByTitle } from '../utils/sortByTitle';
import { getMdxPaths, getMdxSourceBySlug } from '../utils/content';
import { getPropsMetadata, transformToc } from '../utils/propsMeta';
import { getToCFromMdx, getToCFromContentful } from '../utils/tableOfContents';
import { FrontMatterContextProvider } from '../utils/frontMatterContext';
import { PageContent } from '../components/PageContent';
import type { PageContentProps } from '../components/PageContent';
import {
  getAllArticles,
  getSidebarLinksBySectionSlug,
  getSingleArticleBySlug,
  getTopbarLinks,
} from '../lib/api';
import type { SidebarProps } from '../components/Sidebar';
import type { TopbarProps } from '../components/Topbar/Topbar';
import { Layout } from '../components/Layout';
import { HARDCODED_WEBSITE_SECTION } from '../types';
import type { SidebarLink, SidebarSection, SidebarSubsection } from '../types';
import mdxSidebarLinks from '../utils/sidebarLinks.json';

const componentSidebarLinks: SidebarSection[] = [
  {
    links: [
      ...sortByTitle([
        ...(mdxSidebarLinks.unassigned as SidebarLink[]),

        {
          type: 'subsection',
          links: mdxSidebarLinks.animationComponents,
          title: 'Animation Components',
        },
        {
          type: 'subsection',
          links: mdxSidebarLinks.layoutComponents,
          title: 'Layout Components',
        },
        {
          type: 'subsection',
          links: mdxSidebarLinks.typographyComponents,
          title: 'Typography Components',
        },
        {
          type: 'subsection',
          links: mdxSidebarLinks.buttonComponents,
          title: 'Button Components',
        },
        {
          type: 'subsection',
          links: mdxSidebarLinks.formComponents,
          title: 'Form Components',
        },
        {
          type: 'subsection',
          links: mdxSidebarLinks.dateComponents,
          title: 'Date Components',
        },
        {
          type: 'subsection',
          links: mdxSidebarLinks.modalComponents,
          title: 'Modal Components',
        },
        {
          type: 'subsection',
          links: mdxSidebarLinks.cardComponents,
          title: 'Card Components',
        },
        {
          type: 'subsection',
          links: mdxSidebarLinks.avatarComponents,
          title: 'Avatar Components',
        },
      ] as SidebarSubsection[]),
      {
        title: 'Deprecated components',
        type: 'subsection',
        links: mdxSidebarLinks.deprecatedComponents,
      } as SidebarSubsection,
    ],
  },
];

interface ComponentPageProps extends PageContentProps {
  propsMetadata?: ReturnType<typeof getPropsMetadata>;
  sidebarLinks: SidebarProps['links'];
  topbarLinks: TopbarProps['links'];
  isPreview?: boolean;
}

const ComponentPage: NextPage<ComponentPageProps> = ({
  frontMatter,
  headings,
  propsMetadata = {},
  sidebarLinks,
  topbarLinks,
  source,
  isPreview,
}: ComponentPageProps) => {
  const router = useRouter();

  if (router.isFallback) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      <Head>
        <title>Forma 36 - {frontMatter.title}</title>
      </Head>

      <PropsContextProvider value={{ ...propsMetadata }}>
        <FrontMatterContextProvider value={frontMatter}>
          <Layout
            sidebarLinks={sidebarLinks}
            topbarLinks={topbarLinks}
            isPreview={isPreview}
          >
            <PageContent
              frontMatter={frontMatter}
              headings={headings}
              source={source}
            />
          </Layout>
        </FrontMatterContextProvider>
      </PropsContextProvider>
    </>
  );
};

interface Params extends ParsedUrlQuery {
  slug: string[];
}

export const getStaticProps: GetStaticProps<
  ComponentPageProps,
  Params
> = async (context) => {
  if (!context.params) {
    throw new Error();
  }

  const { default: remarkCodeTitles } = await import('remark-code-titles');
  const { codeImport } = await import('remark-code-import');
  const { remarkCodeMeta } = await import('../utils/remark-code-meta');
  const { default: rehypeSlug } = await import('rehype-slug');
  const { default: rehypeToc } = await import('rehype-toc');
  const path = await import('node:path');
  const { serialize } = await import('next-mdx-remote/serialize');

  const [section] = context.params.slug;
  const isPreview = context.preview ?? false;
  const topbarLinks = await getTopbarLinks();
  let sidebarLinks = (await getSidebarLinksBySectionSlug(section)) ?? [];

  const sectionsWithComponentsSidebar: string[] = [
    HARDCODED_WEBSITE_SECTION.COMPONENTS,
    HARDCODED_WEBSITE_SECTION.INTEGRATIONS,
    HARDCODED_WEBSITE_SECTION.UTILS,
    HARDCODED_WEBSITE_SECTION.HOOKS,
  ];
  if (sectionsWithComponentsSidebar.includes(section)) {
    sidebarLinks = [
      ...sidebarLinks,
      ...componentSidebarLinks,
      { title: 'Hooks', links: mdxSidebarLinks.hooks },
      { title: 'Utilities', links: mdxSidebarLinks.utils },
      { title: 'Integrations', links: mdxSidebarLinks.integrations },
    ];
  }

  // We want to show the changelog page as if it was part of the introduction section
  if (section === HARDCODED_WEBSITE_SECTION.WHATS_NEW) {
    sidebarLinks = (await getSidebarLinksBySectionSlug('introduction')) ?? [];
  }

  if (section === HARDCODED_WEBSITE_SECTION.TOKENS) {
    sidebarLinks = [...sidebarLinks, { links: mdxSidebarLinks.tokens }];
  }

  const mdxSource = await getMdxSourceBySlug(context.params?.slug ?? []);

  if (mdxSource) {
    const {
      frontMatter: { content, data },
    } = mdxSource;

    let toc: unknown = {};

    let shortIntroText = '';
    let mainContentText = content;
    // It will match every text that comes before the first "## Import"
    const shortIntroRegex = new RegExp(/([^#]+)/);
    const matches = content.match(shortIntroRegex);

    if (matches !== null) {
      shortIntroText = matches[0];
      mainContentText = content.replace(matches[0], '');
    }

    const shortIntro = await serialize({
      value: shortIntroText,
      path: mdxSource.filepath,
    });
    const mainContent = await serialize(
      { value: mainContentText, path: mdxSource.filepath },
      {
        mdxOptions: {
          remarkPlugins: [
            remarkCodeTitles,
            [
              codeImport,
              {
                // Going up the tree from website build dir `.next`
                rootDir: path.join(__dirname, '../../../../../'),
              },
            ],
            // Add plugin to parse code meta attributes and pass them as props
            remarkCodeMeta,
          ],
          rehypePlugins: [
            rehypeSlug,
            [
              rehypeToc,
              {
                nav: false,
                headings: ['h1', 'h2', 'h3'],
                customizeTOC: (t: unknown) => {
                  toc = transformToc(t);
                  return false;
                },
              },
            ],
          ],
        },
        scope: data,
      },
    );

    const propsMetadata = getPropsMetadata(mdxSource.filepath, data.typescript);

    return {
      props: {
        source: { shortIntro, mainContent },
        toc,
        headings: getToCFromMdx(mdxSource.content),
        frontMatter: data as ComponentPageProps['frontMatter'],
        propsMetadata,
        sidebarLinks,
        topbarLinks,
      },
    };
  } else {
    const entrySlug = context.params?.slug[context.params?.slug.length - 1];
    const contentfulResult = await getSingleArticleBySlug(entrySlug, isPreview);

    if (!contentfulResult) {
      throw new Error(
        'Could not find an entry in Contentful or a MDX file for: ' +
          context.params?.slug,
      );
    }

    return {
      props: {
        headings: getToCFromContentful(contentfulResult.body.json.content),
        frontMatter: {
          title: contentfulResult.title,
        },
        source: {
          contentfulShortIntro: contentfulResult.subtitle,
          richTextBody: contentfulResult.body.json,
          richTextLinks: contentfulResult.body.links,
        },
        sidebarLinks,
        topbarLinks,
        isPreview,
      },
    };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  const mdxPaths = await getMdxPaths();
  const allArticles = (await getAllArticles()) ?? [];

  // Getting all the paths based on the data from Contentful
  const contentfulPaths = allArticles.map((item) => {
    // Article either has a section parent, or it has a category parent with a section parent
    let [section] = item.linkedFrom?.sectionCollection?.items ?? [];

    if (!section) {
      section =
        item.linkedFrom?.kbAppCategoryCollection?.items[0]?.linkedFrom
          ?.sectionCollection?.items[0];
    }

    const sectionSlug = section?.slug ?? 'default-section';
    const itemSlug = item?.slug ?? 'default-item';
    const slug = item.authProtected
      ? [sectionSlug, 'protected', itemSlug]
      : [sectionSlug, itemSlug];

    return {
      params: {
        slug,
      },
    };
  });

  return {
    paths: [...mdxPaths, ...contentfulPaths],
    fallback: 'blocking',
  };
};

// eslint-disable-next-line import/no-default-export
export default ComponentPage;
