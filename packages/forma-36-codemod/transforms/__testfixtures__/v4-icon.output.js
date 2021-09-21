import React from "react";

import { Icon } from "@contentful/f36-components";

import {
  EditIcon,
  AssetIcon,
  ChevronUpIcon,
  CloseIcon,
  EditTrimmedIcon,
  DownloadIcon,
  FolderTrimmedIcon,
} from "@contentful/f36-icons";

<div>
  <Icon variant="primary" icon={<EditIcon />} />
  <Icon variant="positive" icon={<AssetIcon />} size="small" />
  <Icon variant="negative" icon={<ChevronUpIcon />} className="customClassName" />
  <Icon variant="warning" icon={<CloseIcon />} style={{ marginLeft: 0 }} />
  <Icon variant="secondary" icon={<EditTrimmedIcon />} />
  <Icon variant="muted" icon={<DownloadIcon />} />
  <Icon variant="white" icon={<FolderTrimmedIcon />} size="large" />
</div>;
