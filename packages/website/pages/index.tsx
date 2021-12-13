import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import { getMdxPaths } from '../utils/content';

interface HomeProps {
  componentsList: { slug: string }[];
}

const Home: NextPage<HomeProps> = (props) => {
  return (
    <div>
      <Head>
        <title>Forma 36 - The Contentful Design System</title>
        <meta
          name="description"
          content="Forma 36 - The Contentful Design System"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
        <h1>
          Welcome to Forma 36 in <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <ul>
          {props.componentsList.map((component, idx) => {
            return (
              <li key={idx}>
                <Link href={`/${component.slug}`}>{component.slug}</Link>
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const mdxData = await getMdxPaths();
  const sortedComponentsList = mdxData
    .map((data) => {
      return { slug: data.params.slug.join('/') };
    })
    .sort((a, b) => {
      if (a.slug < b.slug) {
        return -1;
      }
      if (a.slug > b.slug) {
        return 1;
      }
      return 0;
    });

  return {
    props: {
      componentsList: sortedComponentsList,
    },
  };
}

export default Home;
