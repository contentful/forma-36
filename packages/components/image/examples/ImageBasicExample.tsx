import React from 'react';
import { Image } from '@contentful/f36-image';

export default function ImageBasicExample() {
  return (
    <Image
      alt='An image saying "Everyone is welcome here"'
      height="281px"
      width="500px"
      src="https://images.ctfassets.net/iq4lnigp6fgt/2EEEk92Kiz6KxREsjBLPAN/810d5a21650d91abad12e95da4cd3beb/2021-06_Everyone_is_Welcome_here_1_.png"
    />
  );
}
