import {
  CloseIcon,
  ChevronUpIcon,
  ChevronDownTrimmedIcon,
  DeleteIcon,
  InfoCircleIcon,
  PreviewOffIcon,
  IconProps,
} from '@contentful/f36-icons';
import { IconButton } from '@contentful/f36-button';

<CloseIcon size="large" />;
<ChevronUpIcon size="xlarge" />;
<ChevronDownTrimmedIcon size="small" />;
<DeleteIcon size="small" />;
<InfoCircleIcon variant="muted" />;

const largeIcon = true;
<CloseIcon size={largeIcon ? 'large' : 'xlarge'} />;

<CloseIcon size={'xlarge'} />;
<CloseIcon variant={"muted"} />;

<IconButton icon={PreviewOffIcon} />;
