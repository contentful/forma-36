import React from 'react';

import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import rehypeToc from 'rehype-toc';
import { serialize } from 'next-mdx-remote/serialize';
import { MdxRenderer } from '../components/MdxRenderer';
import { PageContent } from '../components/PageContent';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { PropsContextProvider } from '@contentful/f36-docs-utils';
import remarkCodeTitles from 'remark-code-titles';
import remarkCodeImport from 'remark-code-import';

import { getMdxPaths, getMdxSourceBySlug } from '../utils/content';
import { getPropsMetadata, transformToc } from '../utils/propsMeta';
import { getTableOfContents } from '../utils/mdx-utils';
import { TocType, HeadingType } from '../components/TableOfContent';

type ComponentPageProps = {
  source: MDXRemoteSerializeResult;
  frontMatter: {
    title: string;
  };
  toc: TocType;
  headings: HeadingType[];
  propsMetadata: ReturnType<typeof getPropsMetadata>;
};

export default function ComponentPage(props: ComponentPageProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      <Head>
        <title>Forma 36 - {props.frontMatter.title}</title>
      </Head>
      <PageContent frontMatter={props.frontMatter} headings={props.headings}>
        <PropsContextProvider value={{ ...props.propsMetadata }}>
          <MdxRenderer source={props.source} />
        </PropsContextProvider>
      </PageContent>
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

  const mdxSource = await serialize(content, {
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
      source: mdxSource,
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
