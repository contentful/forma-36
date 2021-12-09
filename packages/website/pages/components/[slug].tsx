import React from 'react';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import mdxPrism from 'mdx-prism';
import { css } from 'emotion';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import Link from 'next/link';

import {
  getComponentsMDX,
  getComponentSourceBySlug,
} from '../../utils/content';

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

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const { source } = getComponentSourceBySlug(params.slug);

  const { content, data } = matter(source);

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
  const pages = await getComponentsMDX();

  const paths = pages.map((page) => {
    return {
      params: {
        slug: page.slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
