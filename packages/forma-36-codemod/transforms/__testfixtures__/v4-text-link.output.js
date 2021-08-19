import React from "react";

import { TextLink } from "@contentful/f36-components";

import { ArrowDownIcon, AssetIcon } from "@contentful/f36-icons";

<TextLink as="button" isDisabled={false} variant="muted" className="className" />;

<TextLink as="button" isDisabled variant="secondary" className="className" />;

<TextLink href="https://contentful.com" className="className" />;

<TextLink as="button" children="hello" className="className" />;

<TextLink
  as="button"
  icon={<ArrowDownIcon />}
  alignIcon="start"
  className="className">
  text
</TextLink>;

<TextLink as="button" icon={<AssetIcon />} alignIcon="end" className="className">
  text
</TextLink>;
