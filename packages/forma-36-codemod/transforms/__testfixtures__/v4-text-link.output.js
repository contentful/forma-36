import React from "react";

import { TextLink } from "@contentful/f36-components";

import { ArrowDownIcon, AssetIcon } from "@contentful/f36-icons";

<TextLink as="button" isDisabled={false} variant="muted" />;

<TextLink as="button" isDisabled variant="secondary" />;

<TextLink href="https://contentful.com" />;

<TextLink as="button" children="hello" />;

<TextLink as="button" icon={<ArrowDownIcon />} alignIcon="start">
  text
</TextLink>;

<TextLink as="button" icon={<AssetIcon />} alignIcon="end">
  text
</TextLink>;
