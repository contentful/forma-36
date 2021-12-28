import React from 'react';
import { LayoutFullSize } from '../components/LayoutFullSize';

function Playground() {
  return <div>playground</div>;
}

Playground.getLayout = function PlaygroundLayout(props: { page: JSX.Element }) {
  return (
    <LayoutFullSize currentPage="/playground">{props.page}</LayoutFullSize>
  );
};

export default Playground;
