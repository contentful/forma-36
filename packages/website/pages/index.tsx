import React from 'react';
import Link from 'next/link';

import { getMdxPaths } from '../utils/content';

interface HomeProps {
  componentsList: { slug: string }[];
}

function Home({ componentsList }: HomeProps) {
  return (
    <>
      <h1>
        Welcome to Forma 36 in <a href="https://nextjs.org">Next.js!</a>
      </h1>

      <ul>
        {componentsList.map((component, idx) => {
          return (
            <li key={idx}>
              <Link href={`/${component.slug}`}>{component.slug}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

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
