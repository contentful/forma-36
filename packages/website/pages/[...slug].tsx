import React from 'react';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import { serialize } from 'next-mdx-remote/serialize';
import { MdxRenderer } from '../components/MdxRenderer';
import { PageContent } from '../components/PageContent';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { PropsContextProvider } from '@contentful/f36-docs-utils';

import { getMdxPaths, getMdxSourceBySlug } from '../utils/content';
import { getPropsMetadata } from '../utils/propsMeta';

type ComponentPageProps = {
  source: MDXRemoteSerializeResult;
  frontMatter: {
    title: string;
  };
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
      <PageContent>
        <>
          <h1>{props.frontMatter.title}</h1>
          <div>
          <PropsContextProvider value={{ ...props.propsMetadata }}>
            <MdxRenderer source={props.source} />
          </PropsContextProvider>
          </div>
        </>
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

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [require('remark-code-titles')],
      rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
    },
    scope: data,
  });

  const propsMetadata = getPropsMetadata(result.filepath, data.typescript);

  return {
    props: {
      source: mdxSource,
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
