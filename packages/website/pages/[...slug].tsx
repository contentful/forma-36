import React from 'react';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';
import Link from 'next/link';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import mdxPrism from 'mdx-prism';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { css } from 'emotion';
import { DisplayText } from '@contentful/f36-components';

import { Slider } from '../components/Slider';
import { SpacingTokensTable } from '../components/SpacingTokensTable';

import { getMdxPaths, getMdxSourceBySlug } from '../utils/content';

const styles = {
  root: css({
    display: 'flex',
    flexDirection: 'column',
  }),
};

/* eslint-disable react/display-name */
const components = {
  h1: (props) => <DisplayText {...props} />,
  Slider,
  SpacingTokensTable,
};
/* eslint-enable react/display-name */

type ComponentPageProps = {
  source: MDXRemoteSerializeResult;
  frontMatter: {
    title: string;
  };
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

      <article className={styles.root}>
        <Link href="/">Back</Link>
        <h1>{props.frontMatter.title}</h1>

        <MDXRemote {...props.source} components={components} />
      </article>
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
      rehypePlugins: [mdxPrism, rehypeSlug, rehypeAutolinkHeadings],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
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
