import React from "react";

import { TextLink } from "@contentful/f36-components";

import { ArrowDown, Asset } from "@contentful/f36-icons";

<TextLink as="button" isDisabled={false} variant="muted" />;

<TextLink as="button" isDisabled variant="secondary" />;

<TextLink href="https://contentful.com" />;

<TextLink as="button" children="hello" />;

<TextLink as="button" icon={<ArrowDown />} alignIcon="start">
  text
</TextLink>;

<TextLink as="button" icon={<Asset />} alignIcon="end">
  text
</TextLink>;
