import React from 'react';
import dynamic from 'next/dynamic';

const PlaygroundComponentWithNoSSR = dynamic(
  () => import('../components/Playground/Playground'),
  {
    ssr: false,
  },
);

import { LayoutFullSize } from '../components/LayoutFullSize';

function Playground() {
  return <PlaygroundComponentWithNoSSR />;
}

Playground.getLayout = function PlaygroundLayout(props: { page: JSX.Element }) {
  return (
    <LayoutFullSize currentPage="/playground">{props.page}</LayoutFullSize>
  );
};

export default Playground;
