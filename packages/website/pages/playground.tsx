import React from 'react';
import dynamic from 'next/dynamic';

const PlaygroundComponentWithNoSSR = dynamic(
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore ignore a complaint about dynamic import
  () => import('../components/Playground/Playground'),
  {
    ssr: false,
  },
);

export default function Playground() {
  return <PlaygroundComponentWithNoSSR />;
}
