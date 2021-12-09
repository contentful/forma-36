import React from 'react';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import mdxPrism from 'mdx-prism';
import { css } from 'emotion';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import Link from 'next/link';

import { getMdxPaths, getMdxSourceBySlug } from '../utils/content';

const styles = {
  root: css({
    minHeight: '100vh',
    padding: '0 0.5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }),
};

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
    <article className={styles.root}>
      <Link href="/">Back</Link>
      <h1>{props.frontMatter.title}</h1>
      <div>
        <MDXRemote {...props.source} />
      </div>
    </article>
  );
}

export async function getStaticProps(props: { params: { slug: string[] } }) {
  const result = await getMdxSourceBySlug(props.params.slug);

  if (!result) {
    throw new Error(
      'Could not read file by slug: ' + props.params.slug.join('/'),
    );
  }

  const { frontMatter } = result;

  const mdxSource = await serialize(frontMatter.content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [require('remark-code-titles')],
      rehypePlugins: [mdxPrism, rehypeSlug, rehypeAutolinkHeadings],
    },
    scope: frontMatter.data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: frontMatter.data,
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
