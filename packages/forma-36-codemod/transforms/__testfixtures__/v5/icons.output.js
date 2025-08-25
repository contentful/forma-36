import {
  CaretDownIcon,
  CaretUpIcon,
  XIcon,
  TrashSimpleIcon,
  InfoIcon,
  EyeClosedIcon,
  IconProps,
} from '@contentful/f36-icons';
import { IconButton } from '@contentful/f36-button';

import { Icon } from "@contentful/f36-icon";

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

const size = 'medium';
<XIcon size={size} />;

<IconButton icon={EyeClosedIcon} />;

<Icon as={EyeClosedIcon} color={tokens.gray600} />
