import {
  CloseIcon,
  ChevronUpIcon,
  ChevronDownTrimmedIcon,
  DeleteIcon,
  InfoCircleIcon,
  PreviewOffIcon,
  IconProps,
} from '@contentful/f36-icons';
import { Icon } from '@contentful/f36-components';
import { IconButton } from '@contentful/f36-button';

<CloseIcon size="large" />;
<ChevronUpIcon size="xlarge" />;
<ChevronDownTrimmedIcon size="small" />;
<DeleteIcon size="small" />;
<InfoCircleIcon color={tokens.gray600} />;

const largeIcon = true;
<CloseIcon size={largeIcon ? 'large' : 'xlarge'} />;
<CloseIcon variant={largeIcon ? "muted" : "positive"} />;

<CloseIcon size={'xlarge'} />;
<CloseIcon variant={"muted"} />;

const size = 'medium';
<CloseIcon size={size} />;

<IconButton icon={PreviewOffIcon} />;

<Icon as={PreviewOffIcon} color={tokens.gray600} />
