import { Button } from "@contentful/f36-components";
import { LockIcon, ChevronDownIcon, ChevronUpIcon } from "@contentful/f36-icons";
<Button variant="primary" isLoading>Embed entry</Button>;

<Button variant="primary" isDisabled className="my-extra-class">Embed entry</Button>;

<Button size="small" variant="primary">Primary</Button>;
<Button size="medium" variant="secondary">Muted</Button>;
<Button size="large" variant="positive">Positive</Button>;
<Button variant="secondary">Warning</Button>;
<Button variant="negative">Negative</Button>;
<Button variant="transparent">Embed entry</Button>;

const isLocked = false;
const otherProps = { testId: 'cf-ui-button' };
<Button
  variant={isLocked ? 'primary' : 'secondary'}
  startIcon={isLocked ? <LockIcon /> : undefined}
  {...otherProps}>Conditional</Button>;
<Button variant={isLocked ? !isLocked ? 'transparent' : 'primary' : 'secondary'}>Conditional</Button>;

<Button endIcon={<ChevronDownIcon />} variant="primary">Embed Entry</Button>;
<Button endIcon={<ChevronDownIcon />} variant="primary" startIcon={<LockIcon />}>Embed Entry</Button>;

<Button variant="primary" startIcon={<ChevronUpIcon />}>Embed entry</Button>;

<Button variant="primary" isFullWidth>Embed entry</Button>;

<Button variant="primary" isLoading onClick={() => {}}>
  Embed entry
</Button>;

<Button
  as="a"
  variant="primary"
  href="/"
  target="_blank"
  rel="noreferrer noopener">
  Button link
</Button>;

<Button variant="primary" isActive>Active button</Button>;
