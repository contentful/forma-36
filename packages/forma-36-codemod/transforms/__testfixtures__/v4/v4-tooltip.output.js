import React from "react";
import { TextLink, Tooltip } from "@contentful/f36-components";

<>
<Tooltip content={<div>some HTML</div>} as="div" placement="left">
  <TextLink>Hover me</TextLink>.
</Tooltip>

<Tooltip content="content" as="div" placement="left">
  <TextLink>Hover me</TextLink>.
</Tooltip>
</>