import {
  CloseIcon,
  ChevronUpIcon,
  ChevronDownIcon,
  DeleteIcon,
  InfoCircleIcon,
  PreviewOffIcon,
} from '@contentful/f36-icons';
import { IconButton } from '@contentful/f36-button';

<CloseIcon size="large" />;
<ChevronUpIcon size="xlarge" />;
<ChevronDownIcon size="small" />;
<DeleteIcon size="small" />;
<InfoCircleIcon variant="muted" />;

const largeIcon = true;
<CloseIcon size={largeIcon ? 'large' : 'xlarge'} />;

<CloseIcon size={'xlarge'} />;
<CloseIcon variant={"muted"} />;

<IconButton icon={PreviewOffIcon} />;
