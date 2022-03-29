import React from 'react';
import type { NextPage } from 'next';
import slugger from 'github-slugger';

import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';
import rehypeSlug from 'rehype-slug';
import rehypeToc from 'rehype-toc';
import { serialize } from 'next-mdx-remote/serialize';
import remarkCodeTitles from 'remark-code-titles';
import remarkCodeImport from 'remark-code-import';
import { PropsContextProvider } from '@contentful/f36-docs-utils';

import { getMdxPaths, getMdxSourceBySlug } from '../utils/content';
import { getPropsMetadata, transformToc } from '../utils/propsMeta';
import { getTableOfContents, HeadingType } from '../utils/mdx-utils';
import { FrontMatterContextProvider } from '../utils/frontMatterContext';
import type { PageContentProps } from '../components/PageContent';
import { PageContent } from '../components/PageContent';
import { getAllArticles, getSingleArticleBySlug } from '../lib/api';

interface ComponentPageProps extends PageContentProps {
  propsMetadata: ReturnType<typeof getPropsMetadata>;
}

const ComponentPage: NextPage<ComponentPageProps> = ({
  frontMatter,
  headings,
  propsMetadata,
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
          <PageContent
            frontMatter={frontMatter}
            headings={headings}
            source={source}
          />
        </FrontMatterContextProvider>
      </PropsContextProvider>
    </>
  );
};

// TODO: mrege Heading and getToC to getTableOfContents from 'mdx-utils'
interface Heading {
  nodeType: string;
  content: Array<{ value: string }>;
}

function getToC(content) {
  let tableOfContents: HeadingType[] = [];
  const headings: Heading[] = content.filter((node) =>
    node.nodeType.includes('heading'),
  );

  if (headings.length) {
    tableOfContents = headings.map((heading) => {
      const headingType = heading.nodeType === 'heading-2' ? 'h2' : 'h3';
      const headingText = heading.content[0].value;
      const headingLink = slugger.slug(headingText, false);
      return {
        text: headingText,
        id: headingLink,
        level: headingType,
      };
    });
  }

  return tableOfContents;
}

// [WIP]: I started adding stronger types to this function but I could not finish
// that's why I renamed some stuff here, I was trying to follow this:
// https://nextjs.org/docs/basic-features/typescript#static-generation-and-server-side-rendering
export const getStaticProps = async (context: {
  params: { slug: string[] };
}) => {
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
        headings: getTableOfContents(mdxSource.content),
        frontMatter: data,
        propsMetadata,
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
        headings: getToC(contentfulResult.body.json.content),
        frontMatter: {
          title: contentfulResult.title,
        },
        source: {
          contentfulShortIntro: contentfulResult.subtitle,
          richTextBody: contentfulResult.body.json,
          richTextLinks: contentfulResult.body.links,
        },
      },
    };
  }
};

export async function getStaticPaths() {
  const mdxPaths = await getMdxPaths();
  const allArticles = await getAllArticles();
  const contentfulPaths = allArticles.map((item) => {
    const slug = [item.kbAppCategory.slug, item.slug];
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
}

export default ComponentPage;
