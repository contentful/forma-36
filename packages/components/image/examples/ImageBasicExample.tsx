import React from 'react';
import { Image } from '@contentful/f36-components';

export default function ImageBasicExample() {
  return (
    <Image
      alt='An image saying "Everyone is welcome here"'
      height="281px"
      width="500px"
      src="https://images.ctfassets.net/iq4lnigp6fgt/72KhxI84kw1SE9gP8gDp7R/c5fa24bdc295a318018aea0ca46e2de8/forma-36-storybook-asset.png"
    />
  );
}
