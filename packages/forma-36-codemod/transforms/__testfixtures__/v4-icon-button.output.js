import { IconButton } from "@contentful/f36-components";
import { ChevronDownIcon, ChevronUpIcon, CloseIcon } from "@contentful/f36-icons";
<IconButton
  variant="transparent"
  icon={<ChevronDownIcon variant="muted" className="className" />}
  aria-label="Some label" />;

const isCollapsed = true;
<IconButton
  variant="transparent"
  icon={isCollapsed ? <ChevronDownIcon variant="muted" className="className" /> : <ChevronUpIcon variant="muted" className="className" />}
  aria-label="Some label" />;

<IconButton
  variant="transparent"
  icon={<CloseIcon variant={isCollapsed ? 'muted' : 'primary'} />}
  aria-label="Delete"
  onClick={() => {}} />;
