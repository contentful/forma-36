# Migration

## Table of contents

- [Table of contents](#table-of-contents)
- [How to migrate your packages to v4](#how-to-migrate-your-packages-to-v4)
- [Changes per Component in v4](#changes-per-component-in-v4)
  - [Tag becomes Badge](#tag-becomes-Badge)
    - [How to migrate your Tag to Badge](#how-to-migrate-your-Tag-to-Badge)
  - [Button](#button)
    - [How to migrate your Button components](#how-to-migrate-your-gutton-components)
  - [Flex](#flex)
    - [How to migrate your Flex components](#how-to-migrate-your-flex-components)
  - [Grid](#grid)
    - [How to migrate your Grid components](#how-to-migrate-your-grid-components)

## How to migrate your packages to v4

Install a package that contains all of the components from Forma 36. Tree-shaking will take care of your build, so it will include only components that you use.
We separate only icons from the main package. If you need to use our icons, please install them separately. You can do that, by running:

When using NPM

```
npm install @contentul/f36-components@next-v4
npm install @contentful/f36-icons@next-v4
```

When using YARN

```
yarn add @contentul/f36-components@next-v4
yarn add @contentful/f36-icons@next-v4
```

We provide an option to install separate packages. You will be able to use chosen components separately.
For example, you need only `Button` component in your project, you can add this package like:

When using NPM

```
npm install @contentul/f36-button@next-v4
```

When using YARN

```
yarn add @contentul/f36-button@next-v4
```

## Changes per component in v4

### Tag becomes Badge

Do you remember `<Tag>` component?
We noticed that this component is used more as a visual indicator in the interface than a tag. That's why in v4 we decided to migrate it to `<Badge>` component. The property `entityStatusType` was migrated to be a separate component `EntityStatusBadge`.

Now, instead of doing:

```tsx static=true
<Tag entityStatusType="draft">Draft</Tag>
```

you can just do:

```tsx static=true
<EntityStatusBadge entityStatusType="draft" />
```

#### How to migrate your Tag to Badge

To migrate your v3 `Tag` component to v4 `Badge` you can simply run the [codemod](https://github.com/contentful/forma-36/tree/forma-v4/packages/forma-36-codemod) that we prepared for this occasion, like:

`npx @contentful/f36-codemod`

What codemod will do for you, and what you can do yourself manually if you decide to do so, is:

it transforms:

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

into:

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

### Button

Button in version 4 of Forma 36 does not change much visually but we provide some API improvements, that we hope you gonna be happy with. All the changes are based on our codestyleguide, which allows us to create consistent, easy to use API. For example:

```tsx static=true
<Button buttonType="primary" loading>
  Primary
</Button>;
<Button buttonType="primary" disabled>
  Primary
</Button>;
```

will become:

```tsx static=true
<Button variant="primary" isLoading>
  Primary
</Button>;
<Button variant="primary" isDisabled>
  Primary
</Button>;
```

#### How to migrate your Button components

To migrate your v3 `Button` component to the version 4 you can simply run the [codemod](https://github.com/contentful/forma-36/tree/forma-v4/packages/forma-36-codemod) that we prepared for this occasion, like:

`npx @contentful/f36-codemod`

What codemod will do for you, and what you can do yourself manually if you decide to do so, is:

it transforms:

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

into:

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

### Flex

Flex component is now part of the `@contentful/f36-core` package. The only improvement that was done for Flex component in version 4 was to align properties with our (codestyleguide)[./docs/code-style-guide.md]. This way, we hope, we provided you API that is more aligned and consistent. For example:

```tsx
<Flex inlineFlex />
```

will become:

```tsx
<Flex isInline />
```

#### How to migrate your Flex components

Run the [codemod](https://github.com/contentful/forma-36/tree/forma-v4/packages/forma-36-codemod) to migrate your v3 `Flex` component to the new version:

`npx @contentful/f36-codemod`

If you decide to do it manually, you would need to transform you exising code:

```tsx static=true
import { Flex } from '@contentful/forma-36-react-components';

<Flex htmlTag="div" />;

<Flex flexDirection="column" className="test" inlineFlex />;

<Flex flexDirection="row" noShrink />;
```

into:

```tsx static=true
import { Flex } from '@contentful/f36-components';

<Flex as="div" />;

<Flex flexDirection="column" className="test" isInline />;

<Flex flexDirection="row" flexShrink={0} />;
```

### Grid

Grid component is now part of the `@contentful/f36-core` package. The same as for Flex component, the only improvement that was done for Grid in version 4 was the alignment of the properties with our (codestyleguide)[./docs/code-style-guide.md]:

#### How to migrate your Grid components

Run the [codemod](https://github.com/contentful/forma-36/tree/forma-v4/packages/forma-36-codemod) to migrate your v3 `Grid` component to the new version:

`npx @contentful/f36-codemod`

If you decide to do it manually, you would need to transform you exising code:

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

into:

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
