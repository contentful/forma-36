import { Button } from '@contentful/forma-36-react-components';

<Button loading>Embed entry</Button>;

<Button disabled className="my-extra-class">Embed entry</Button>;

<Button size="small" buttonType="primary">Primary</Button>;
<Button size="medium" buttonType="muted">Muted</Button>;
<Button size="large" buttonType="positive">Positive</Button>;
<Button buttonType="warning">Warning</Button>;
<Button buttonType="negative">Negative</Button>;
<Button buttonType="naked">Embed entry</Button>;

const isLocked = false;
<Button buttonType={isLocked ? undefined : 'muted'}>Conditional</Button>;
<Button buttonType={isLocked ? !isLocked ? 'naked' : undefined : 'muted'}>Conditional</Button>;

<Button indicateDropdown>Embed Entry</Button>;

<Button icon="ChevronUp">Embed entry</Button>;

<Button isFullWidth>Embed entry</Button>;

<Button loading onClick={() => {}}>
  Embed entry
</Button>;

<Button href="/" target="_blank" rel="noreferrer noopener">
  Button link
</Button>;

<Button isActive>Active button</Button>;
