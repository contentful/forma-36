import React from 'react';

import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';
import rehypeSlug from 'rehype-slug';
import rehypeToc from 'rehype-toc';
import { serialize } from 'next-mdx-remote/serialize';

import type { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { PropsContextProvider } from '@contentful/f36-docs-utils';
import remarkCodeTitles from 'remark-code-titles';
import remarkCodeImport from 'remark-code-import';

import type { FrontMatter } from '../types';
import { getMdxPaths, getMdxSourceBySlug } from '../utils/content';
import { getPropsMetadata, transformToc } from '../utils/propsMeta';
import { FrontMatterContextProvider } from '../utils/frontMatterContext';
import { getTableOfContents } from '../utils/mdx-utils';
import { PageContent, HeadingType } from '../components/PageContent';
import { getAllArticles, getSingleArticleBySlug } from '../lib/api';

type ComponentPageProps = {
  source: {
    shortIntro: MDXRemoteSerializeResult;
    mainContent: MDXRemoteSerializeResult;
  };
  frontMatter?: FrontMatter;
  contentfulFrontMatter?: {
    title: string;
  };
  headings: HeadingType[];
  propsMetadata: ReturnType<typeof getPropsMetadata>;
};

export default function ComponentPage({
  frontMatter,
  headings,
  propsMetadata,
  source,
  contentfulFrontMatter,
}: ComponentPageProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      <Head>
        <title>
          Forma 36 - {frontMatter?.title || contentfulFrontMatter?.title}
        </title>
      </Head>

      <PropsContextProvider value={{ ...propsMetadata }}>
        <FrontMatterContextProvider value={frontMatter}>
          {frontMatter ? (
            <PageContent
              frontMatter={frontMatter}
              headings={headings}
              source={source}
            />
          ) : (
            <div>{contentfulFrontMatter?.title} is coming from Contentful</div>
          )}
        </FrontMatterContextProvider>
      </PropsContextProvider>
    </>
  );
}

interface GetStaticPropsProps {
  params: {
    slug: string[];
  };
}

export async function getStaticProps(props: GetStaticPropsProps) {
  const mdxSource = await getMdxSourceBySlug(props.params.slug);

  if (mdxSource) {
    const {
      frontMatter: { content, data },
    } = mdxSource;

    let toc = {};

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
                toc = transformToc(t) as any;
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
    const entrySlug = props.params.slug[props.params.slug.length - 1];
    const contentfulResult = await getSingleArticleBySlug(entrySlug);

    if (!contentfulResult) {
      throw new Error(
        'Could not find an entry in Contentful or a MDX file for: ' +
          props.params.slug,
      );
    }

    return {
      props: {
        contentfulFrontMatter: {
          title: contentfulResult.title,
        },
      },
    };
  }
}

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
