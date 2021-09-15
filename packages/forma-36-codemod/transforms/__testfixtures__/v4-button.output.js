import { Button } from "@contentful/f36-components";
import { LockIcon, ChevronDownIconIcon, ChevronUpIcon } from "@contentful/f36-icons";
<Button variant="primary" isLoading>Embed entry</Button>;

<Button variant="primary" isDisabled className="my-extra-class">Embed entry</Button>;

<Button size="small" variant="primary">Primary</Button>;
<Button size="medium" variant="secondary">Muted</Button>;
<Button size="large" variant="positive">Positive</Button>;
<Button variant="secondary">Warning</Button>;
<Button variant="negative">Negative</Button>;
<Button variant="transparent">Embed entry</Button>;

const isLocked = false;
<Button
  variant={isLocked ? 'primary' : 'secondary'}
  icon={isLocked ? <LockIcon /> : undefined}>Conditional</Button>;
<Button variant={isLocked ? !isLocked ? 'transparent' : 'primary' : 'secondary'}>Conditional</Button>;

<Button icon={<ChevronDownIconIcon />} alignIcon="end" variant="primary">Embed Entry</Button>;

<Button variant="primary" icon={<ChevronUpIcon />}>Embed entry</Button>;

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
