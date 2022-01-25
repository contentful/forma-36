import React from 'react';

import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
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

type ComponentPageProps = {
  source: {
    shortIntro: MDXRemoteSerializeResult;
    mainContent: MDXRemoteSerializeResult;
  };
  frontMatter: FrontMatter;
  headings: HeadingType[];
  propsMetadata: ReturnType<typeof getPropsMetadata>;
};

export default function ComponentPage({
  frontMatter,
  headings,
  propsMetadata,
  source,
}: ComponentPageProps) {
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
}

export async function getStaticProps(props: { params: { slug: string[] } }) {
  const result = await getMdxSourceBySlug(props.params.slug);

  if (!result) {
    throw new Error(
      'Could not read file by slug: ' + props.params.slug.join('/'),
    );
  }

  const {
    frontMatter: { content, data },
  } = result;

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
        rehypeAutolinkHeadings,
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
      filepath: result.filepath,
    },
    scope: data,
  });

  const propsMetadata = getPropsMetadata(result.filepath, data.typescript);

  return {
    props: {
      source: { shortIntro, mainContent },
      toc,
      headings: getTableOfContents(result.content),
      frontMatter: data,
      propsMetadata,
    },
  };
}

export async function getStaticPaths() {
  const paths = await getMdxPaths();
  return {
    paths,
    fallback: false,
  };
}
