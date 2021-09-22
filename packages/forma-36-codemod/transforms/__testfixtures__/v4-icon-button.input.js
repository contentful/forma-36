import { IconButton } from "@contentful/forma-36-react-components";

<IconButton
  label="Some label"
  buttonType="muted"
  iconProps={{ icon: 'ChevronDown', className: 'className' }}
/>;

const isCollapsed = true;
<IconButton
  label="Some label"
  buttonType="muted"
  iconProps={{ icon: isCollapsed ? 'ChevronDown' : 'ChevronUp', className: 'className' }}
/>;

<IconButton
  buttonType="primary"
  label="Delete"
  iconProps={{ icon: 'Close' }}
  onClick={() => {}}
/>;
