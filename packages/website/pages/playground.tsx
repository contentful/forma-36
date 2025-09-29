import React from 'react';
import dynamic from 'next/dynamic';
import type { InferGetStaticPropsType } from 'next';

import { Layout } from '../components/Layout';
import { getTopbarLinks } from '../lib/api';

const PlaygroundComponentWithNoSSR = dynamic(
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore ignore a complaint about dynamic import
  () => import('../components/Playground/Playground'),
  {
    ssr: false,
  },
);

type PlaygroundProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function Playground({ topbarLinks }: PlaygroundProps) {
  return (
    <Layout topbarLinks={topbarLinks}>
      <PlaygroundComponentWithNoSSR />
    </Layout>
  );
}

export async function getStaticProps() {
  const topbarLinks = await getTopbarLinks();

  return {
    props: {
      topbarLinks,
    },
  };
}
