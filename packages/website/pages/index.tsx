import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import { getComponentsMDX } from '../utils/content';

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

        <div>
          <Link href="/getting-started">
            Getting Started (the MDX file in /pages)
          </Link>
        </div>

        <h2>Pages generated from MDX files in /packages/components</h2>
        <ul>
          {props.componentsList.map((component, idx) => {
            return (
              <li key={idx}>
                <Link href={`/components/${component.slug}`}>
                  {component.slug}
                </Link>
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const mdxData = await getComponentsMDX();
  const sortedComponentsList = mdxData.sort((a, b) => {
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
