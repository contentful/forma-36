import { IconButton } from '@contentful/f36-button';

import {
  CaretDownIcon,
  CaretUpIcon,
  XIcon,
  TrashSimpleIcon,
  InfoIcon,
  EyeClosedIcon,
  IconProps,
} from "@contentful/f36-icons-alpha";

import tokens from "@contentful/f36-tokens";

<XIcon />;
<CaretUpIcon />;
<CaretDownIcon size="small" />;
<TrashSimpleIcon size="small" />;
<InfoIcon color={tokens.gray600} />;

const largeIcon = true;
<XIcon />;
<XIcon color={largeIcon ? tokens.gray600 : tokens.colorPositive} />;

<XIcon />;
<XIcon color={tokens.gray600} />;

<IconButton icon={EyeClosedIcon} />;
