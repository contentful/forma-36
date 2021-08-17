import React from "react";
import { TextLink } from "@contentful/forma-36-react-components";

import { ArrowDown, Asset } from "@contentful/f36-icons";

<TextLink isDisabled={false} variant="muted" />;

<TextLink isDisabled variant="secondary" />;

<TextLink as="a" href="https://contentful.com" />;

<TextLink children="hello" />;

<TextLink icon={<ArrowDown />} alignIcon="start">
  text
</TextLink>;

<TextLink icon={<Asset />} alignIcon="end">
  text
</TextLink>;
