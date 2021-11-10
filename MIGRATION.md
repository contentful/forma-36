# Migration

## Table of contents

- [Table of contents](#table-of-contents)
- [How to migrate your packages to v4](#how-to-migrate-your-packages-to-v4)
- [Changes per Component in v4](#changes-per-component-in-v4)
  - [Tag becomes Badge](#tag-becomes-badge)
    - [How to migrate your Tag to Badge](#how-to-migrate-your-tag-to-badge)
  - [Button](#button)
    - [How to migrate your Button components](#how-to-migrate-your-button-components)
  - [Icon](#icon)
    - [How to migrate your Icon components](#how-to-migrate-your-icon-components)
  - [IconButton](#iconbutton)
    - [How to migrate your IconButton components](#how-to-migrate-your-iconbutton-components)
  - [Flex](#flex)
    - [How to migrate your Flex components](#how-to-migrate-your-flex-components)
  - [Grid](#grid)
    - [How to migrate your Grid components](#how-to-migrate-your-grid-components)

## How to migrate your packages to v4

Install a package that contains all of the components from Forma 36. Tree-shaking will take care of your build, so it will include only components that you use.
We separate only icons from the main package. If you need to use our icons, install them separately, by running the following commands:
:

For NPM

```sh
npm install @contentul/f36-components@beta
npm install @contentful/f36-icons@beta
```

For YARN

```sh
yarn add @contentul/f36-components@beta
yarn add @contentful/f36-icons@beta
```

You can install separate packages and use chosen components separately.
For example, if you need only the `Button` component in your project, you can add this package by running the following command:

For NPM

```sh
npm install @contentul/f36-button@beta
```

For YARN

```sh
yarn add @contentul/f36-button@beta
```

## Changes per component in v4

### Tag becomes Badge

Remember the `<Tag>` component?
Since this component was used more as a visual indicator in the interface than a tag, in v4 we migrated it to the `<Badge>` component. The property `entityStatusType` was migrated to be a separate component `EntityStatusBadge`.

Now, instead of:

```tsx static=true
<Tag entityStatusType="draft">Draft</Tag>
```

you can use:

```tsx static=true
<EntityStatusBadge entityStatusType="draft" />
```

#### How to migrate your Tag to Badge

To migrate your v3 `Tag` component to v4 `Badge` run the following [codemod](https://github.com/contentful/forma-36/tree/forma-v4/packages/forma-36-codemod):

`npx @contentful/f36-codemod`

When running the codemod the following changes occur:

```tsx static=true
import { Tag } from '@contentful/forma-36-react-components';

<Tag tagType="primary">primary</Tag>;

<Tag tagType="muted">primary</Tag>;

<Tag size="small">primary</Tag>;

<Tag tagType="primary-filled" size="small">
  primary filled
</Tag>;

<Tag entityStatusType="draft">Draft</Tag>;
```

becomes:

```tsx static=true
import { Badge, EntityStatusBadge } from '@contentful/f36-components';

<Badge variant="primary">primary</Badge>;

<Badge variant="secondary">primary</Badge>;

<Badge size="small">primary</Badge>;

<Badge variant="primary-filled" size="small">
  primary filled
</Badge>;

<EntityStatusBadge entityStatusType="draft" />;
```

You can also make these changes manually.

### Button

In v4 the Button component has received API improvements. The changes are based on our code style guide, which create consistent, easy to use APIs. For example:

```tsx static=true
<Button buttonType="primary" loading>
  Primary
</Button>;
<Button buttonType="primary" disabled>
  Primary
</Button>;
```

becomes:

```tsx static=true
<Button variant="primary" isLoading>
  Primary
</Button>;
<Button variant="primary" isDisabled>
  Primary
</Button>;
```

#### How to migrate your Button components

To migrate the `Button` component to the v4 run the following [codemod](https://github.com/contentful/forma-36/tree/forma-v4/packages/forma-36-codemod):

`npx @contentful/f36-codemod`

When running the codemod, the following changes occur:

```tsx static=true
import { Button } from '@contentful/forma-36-react-components';

<Button loading>Embed entry</Button>;
<Button disabled className="my-extra-class">
  Embed entry
</Button>;
<Button size="small" buttonType="primary">
  Primary
</Button>;
<Button size="medium" buttonType="muted">
  Muted
</Button>;
<Button size="large" buttonType="positive">
  Positive
</Button>;
<Button buttonType="warning">Warning</Button>;
<Button buttonType="negative">Negative</Button>;
<Button buttonType="naked">Embed entry</Button>;
<Button
  buttonType={isLocked ? undefined : 'muted'}
  icon={isLocked ? 'Lock' : undefined}
  {...otherProps}
>
  Conditional
</Button>;
<Button buttonType={isLocked ? (!isLocked ? 'naked' : undefined) : 'muted'}>
  Conditional
</Button>;
<Button indicateDropdown>Embed Entry</Button>;
<Button icon="Lock" indicateDropdown>
  Embed Entry
</Button>;
<Button icon="ChevronUp">Embed entry</Button>;
<Button isFullWidth>Embed entry</Button>;
<Button loading onClick={() => {}}>
  Embed entry
</Button>;
<Button href="/" target="_blank" rel="noreferrer noopener">
  Button link
</Button>;
<Button isActive>Active button</Button>;
```

becomes:

```tsx static=true
import { Button } from '@contentful/f36-components';
import {
  LockIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@contentful/f36-icons';
<Button variant="primary" isLoading>
  Embed entry
</Button>;
<Button variant="primary" isDisabled className="my-extra-class">
  Embed entry
</Button>;
<Button size="small" variant="primary">
  Primary
</Button>;
<Button size="medium" variant="secondary">
  Muted
</Button>;
<Button size="large" variant="positive">
  Positive
</Button>;
<Button variant="secondary">Warning</Button>;
<Button variant="negative">Negative</Button>;
<Button variant="transparent">Embed entry</Button>;
<Button
  variant={isLocked ? 'primary' : 'secondary'}
  startIcon={isLocked ? <LockIcon /> : undefined}
  {...otherProps}
>
  Conditional
</Button>;
<Button
  variant={isLocked ? (!isLocked ? 'transparent' : 'primary') : 'secondary'}
>
  Conditional
</Button>;
<Button endIcon={<ChevronDownIcon />} variant="primary">
  Embed Entry
</Button>;
<Button
  endIcon={<ChevronDownIcon />}
  variant="primary"
  startIcon={<LockIcon />}
>
  Embed Entry
</Button>;
<Button variant="primary" startIcon={<ChevronUpIcon />}>
  Embed entry
</Button>;
<Button variant="primary" isFullWidth>
  Embed entry
</Button>;
<Button variant="primary" isLoading onClick={() => {}}>
  Embed entry
</Button>;
<Button
  as="a"
  variant="primary"
  href="/"
  target="_blank"
  rel="noreferrer noopener"
>
  Button link
</Button>;
<Button variant="primary" isActive>
  Active button
</Button>;
```

You can also make these changes manually.

## Icon

In v4, the Icon component has a simplified API. You can a required icon from `@contentful/f36-icons`.

```tsx static=true
import { ChevronLeftIcon } from '@contentful/f36-icons';

<ChevronLeftIcon size="small" variant="primary" />;
```

To use an icon from a third-party library, you can pass it as `as` prop:

```tsx static=true
import { Icon } from '@contentful/f36-icons';
import { MdAccessAlarm } from 'react-icons/md';

const AccessAlarm = (props) => {
  return <Icon {...props} as={MdAccessAlarm} variant="secondary" />;
};
```

There is an option to render a custom icon as a child with standard HTML tags:

```tsx static=true
import { Icon } from '@contentful/f36-icon';

const CustomIcon = (props) => {
  return (
    <Icon {...props} variant="secondary">
      <path d="M7 10l5 5 5-5z" />,
      <path d="M0 0h24v24H0z" fill="none" />
    </Icon>
  );
};
```

### How to migrate your Icon components

To migrate the Icon component to v4, run the following [codemod](https://github.com/contentful/forma-36/tree/forma-v4/packages/forma-36-codemod):

`npx @contentful/f36-codemod`

If you want to do it manually, you must transform your code as follows:

```tsx static=true
import { Icon } from '@contentful/forma-36-react-components';

<div>
  <Icon color="primary" icon="Edit" />
  <Icon color="positive" icon="Asset" size="small" />
  <Icon color="negative" icon="ChevronUp" className="customClassName" />
  <Icon color="warning" icon="Close" style={{ marginLeft: 0 }} />
  <Icon color="secondary" icon="EditTrimmed" />
  <Icon color="muted" icon="Download" />
  <Icon color="white" icon="FolderTrimmed" size="large" />
</div>;

const isCondition = true;

<div>
  <Icon color="primary" icon={isCondition ? 'Edit' : 'ChevronUp'} />
</div>;
```

into this new version:

```tsx static=true
import { Icon } from '@contentful/f36-components';

import {
  EditIcon,
  AssetIcon,
  ChevronUpIcon,
  CloseIcon,
  EditTrimmedIcon,
  DownloadIcon,
  FolderTrimmedIcon,
} from '@contentful/f36-icons';

<div>
  <EditIcon variant="primary" />
  <AssetIcon variant="positive" size="small" />
  <ChevronUpIcon variant="negative" className="customClassName" />
  <CloseIcon variant="warning" style={{ marginLeft: 0 }} />
  <EditTrimmedIcon variant="secondary" />
  <DownloadIcon variant="muted" />
  <FolderTrimmedIcon variant="white" size="large" />
</div>;

const isCondition = true;

<div>
  <Icon variant="primary" as={isCondition ? EditIcon : ChevronUpIcon} />
</div>;
```

## IconButton

The API of the IconButton component has changed slightly:

- The icon is defined by icon element, passed to `icon` prop.
- There is no `iconProps` anymore as - icon props are passed directly to the icon element.

```tsx static=true
import { IconButton } from '@contentful/f36-button';
import { PreviewIcon } from '@contentful/f36-icons';

<IconButton
  variant="transparent"
  aria-label="Preview"
  icon={<PreviewIcon variant="secondary" size="medium" />}
/>;
```

### How to migrate your IconButton components

To migrate the IconButton component to v4, run the following [codemod](https://github.com/contentful/forma-36/tree/forma-v4/packages/forma-36-codemod):

`npx @contentful/f36-codemod`

If you want to do it manually, you must transform your code as follows:

```tsx static=true
import { IconButton } from '@contentful/forma-36-react-components';

<IconButton
  label="Some label"
  buttonType="muted"
  iconProps={{ icon: 'ChevronDown', className: 'className' }}
/>;

const isCollapsed = true;
<IconButton
  label="Some label"
  buttonType="muted"
  iconProps={{
    icon: isCollapsed ? 'ChevronDown' : 'ChevronUp',
    className: 'className',
  }}
  disabled={isCollapsed}
/>;

<IconButton
  buttonType={isCollapsed ? 'muted' : 'primary'}
  label="Delete"
  iconProps={{ icon: 'Close' }}
  onClick={() => {}}
/>;
```

into this new version:

```tsx static=true
import { IconButton } from '@contentful/f36-components';
import {
  ChevronDownIcon,
  ChevronUpIcon,
  CloseIcon,
} from '@contentful/f36-icons';

<IconButton
  variant="transparent"
  icon={<ChevronDownIcon variant="muted" className="className" />}
  aria-label="Some label"
/>;

const isCollapsed = true;
<IconButton
  variant="transparent"
  icon={
    isCollapsed ? (
      <ChevronDownIcon variant="muted" className="className" />
    ) : (
      <ChevronUpIcon variant="muted" className="className" />
    )
  }
  aria-label="Some label"
  isDisabled={isCollapsed}
/>;

<IconButton
  variant="transparent"
  icon={<CloseIcon variant={isCollapsed ? 'muted' : 'primary'} />}
  aria-label="Delete"
  onClick={() => {}}
/>;
```

## Flex

The Flex component is now part of the `@contentful/f36-core` package. The only improvement that was done for the Flex component in version 4 was to align properties with our [code style guide](./docs/code-style-guide.md). This way, we hope, the API is more aligned and consistent. For example:

```tsx
<Flex inlineFlex />
```

becomes:

```tsx
<Flex isInline />
```

### How to migrate your Flex components

To migrate the Flex component to v4, run the following [codemod](https://github.com/contentful/forma-36/tree/forma-v4/packages/forma-36-codemod):

`npx @contentful/f36-codemod`

If you want to do it manually, you must transform your existing code as follows:

```tsx static=true
import { Flex } from '@contentful/forma-36-react-components';

<Flex htmlTag="div" />;

<Flex flexDirection="column" className="test" inlineFlex />;

<Flex flexDirection="row" noShrink />;
```

into this new version:

```tsx static=true
import { Flex } from '@contentful/f36-components';

<Flex as="div" />;

<Flex flexDirection="column" className="test" isInline />;

<Flex flexDirection="row" flexShrink={0} />;
```

### Grid

The Grid component is now part of the `@contentful/f36-core` package. Only improvement that was done for the Grid in version 4 was the alignment of the properties with our [code style guide](./docs/code-style-guide.md):

#### How to migrate your Grid components

To migrate your Grid component to v4, run the following [codemod](https://github.com/contentful/forma-36/tree/forma-v4/packages/forma-36-codemod):

`npx @contentful/f36-codemod`

If you want to do it manually, you must transform your existing code as follows:

```tsx static=true
import { Grid, GridItem } from '@contentful/forma-36-react-components';

<Grid columns="1fr 2fr 1fr 2fr 1fr 2fr" columnGap="spacingM" inline>
  <GridItem />
  <GridItem htmlTag="span" />
  <GridItem />
  <GridItem />
  <GridItem />
  <GridItem />
</Grid>;
```

into this new version:

```tsx static=true
import { Grid, GridItem } from '@contentful/f36-components';

<Grid columns="1fr 2fr 1fr 2fr 1fr 2fr" columnGap="spacingM" isInline>
  <GridItem />
  <GridItem as="span" />
  <GridItem />
  <GridItem />
  <GridItem />
  <GridItem />
</Grid>;
```
