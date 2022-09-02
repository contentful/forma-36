import React from 'react';
import type { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import type { ParsedUrlQuery } from 'querystring';

import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';
import rehypeSlug from 'rehype-slug';
import rehypeToc from 'rehype-toc';
import { serialize } from 'next-mdx-remote/serialize';
import remarkCodeTitles from 'remark-code-titles';
import remarkCodeImport from 'remark-code-import';
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
import type { SidebarSection } from '../types';
import mdxSidebarLinks from '../utils/sidebarLinks.json';

const componentSidebarLinks: SidebarSection[] = [
  {
    links: sortByTitle([
      ...mdxSidebarLinks.unassigned,

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
        links: mdxSidebarLinks.deprecatedComponents,
        title: 'Deprecated V3 Components',
      },
    ]),
  },
];

interface ComponentPageProps extends PageContentProps {
  propsMetadata?: ReturnType<typeof getPropsMetadata>;
  sidebarLinks: SidebarProps['links'];
  topbarLinks: TopbarProps['links'];
}

const ComponentPage: NextPage<ComponentPageProps> = ({
  frontMatter,
  headings,
  propsMetadata = {},
  sidebarLinks,
  topbarLinks,
  source,
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
          <Layout sidebarLinks={sidebarLinks} topbarLinks={topbarLinks}>
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

  const [section] = context.params?.slug;
  const topbarLinks = await getTopbarLinks();
  let sidebarLinks = (await getSidebarLinksBySectionSlug(section)) ?? [];

  if (section === HARDCODED_WEBSITE_SECTION.COMPONENTS) {
    sidebarLinks = [
      ...sidebarLinks,
      ...componentSidebarLinks,
      { title: 'Utils', links: mdxSidebarLinks.utils },
      { title: 'Integrations', links: mdxSidebarLinks.integrations },
    ];
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

    const shortIntro = await serialize(shortIntroText);
    const mainContent = await serialize(mainContentText, {
      // Optionally pass remark/rehype plugins
      mdxOptions: {
        remarkPlugins: [remarkCodeTitles, remarkCodeImport],
        rehypePlugins: [
          rehypeSlug,
          [
            rehypeToc,
            {
              nav: false,
              headings: ['h1', 'h2', 'h3'],
              customizeTOC: (t) => {
                toc = transformToc(t);
                return false;
              },
            },
          ],
        ],
        filepath: mdxSource.filepath,
      },
      scope: data,
    });

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
    const contentfulResult = await getSingleArticleBySlug(entrySlug);

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
    let [section] = item.linkedFrom?.sectionCollection?.items;

    if (!section) {
      section =
        item.linkedFrom?.kbAppCategoryCollection?.items[0]?.linkedFrom
          ?.sectionCollection?.items[0];
    }

    const slug = [section.slug, item.slug];
    return {
      params: {
        slug,
      },
    };
  });

  return {
    paths: [...mdxPaths, ...contentfulPaths],
    fallback: false,
  };
};

export default ComponentPage;
