import React from "react";
import { Tooltip } from "@contentful/forma-36-react-components";
import { TextLink } from "@contentful/f36-components";

<>
<Tooltip content={<div>some HTML</div>} containerElement="div" place="left">
  <TextLink>Hover me</TextLink>.
</Tooltip>

<Tooltip content={'content'} containerElement="div" place="left">
  <TextLink>Hover me</TextLink>.
</Tooltip>
</>