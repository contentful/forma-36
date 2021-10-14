# Migration

## How to migrate your packages to v4

Install a package that contains all of the components from Forma 36. Tree-shaking will take care of your build, so it will include only components that you use.
We separate only icons from the main package. If you need to use our icons, please install them separately. You can do that, by running:

When using NPM

```
npm install @contentul/f36-components@next-v4
npm install @contentful/f36-icons@next-v4
```

When using YARN

```yarn add @contentul/f36-components@next-v4
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

## Components

### Tag becomes Badge

#### Changes in v4

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

To migrate your `Tag` components from v3 to `Badge` from v4 you can simply run the codemod that we prepared for this ocasion, like:

`npx @contentful/f36-codemod <transform> <path> [...options]`

Follow the prompt and chose the `v4-badge` option from the list.
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
