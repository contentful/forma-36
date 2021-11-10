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
  - [DateTime](#datetime)
    - [How to migrate your DateTime components](#how-to-migrate-your-datetime-components)
  - [RelativeDateTime](#relativedatetime)
    - [How to migrate your RelativeDateTime components](#how-to-migrate-your-relativedatetime-components)
  - [Flex](#flex)
    - [How to migrate your Flex components](#how-to-migrate-your-flex-components)
  - [Grid](#grid)
    - [How to migrate your Grid components](#how-to-migrate-your-grid-components)
  - [Form Components](#form-components)
    - [Field Components](#field-components)
      - [How to migrate your Field components](#how-to-migrate-your-field-components)
    - [Checkbox](#checkbox)
      - [How to migrate your Checkbox components](#how-to-migrate-your-checkbox-components)
    - [RadioButton](#radiobutton)
      - [How to migrate your RadioButton components](#how-to-migrate-your-radiobutton-components)
    - [Select](#select)
      - [How to migrate your Select components](#how-to-migrate-your-select-components)
    - [Switch](#switch)
      - [How to migrate your Switch components](#how-to-migrate-your-switch-components)
    - [TextInput and TextArea](#textinput-and-textarea)
      - [How to migrate your TextInput and TextArea component](#how-to-migrate-your-textinput-and-textarea-components)
    - [FieldGroup](#fieldgroup)
      - [How to migrate your FieldGroup components](#how-to-migrate-your-fieldgroup-components)
    - [Form](#form)
      - [How to migrate your Form components](#how-to-migrate-your-form-components)
    - [FormLabel](#formlabel)
      - [How to migrate your FormLabel components](#how-to-migrate-your-formlabe-components)
  - [Note](#note)
    - [How to migrate your Note components](#how-to-migrate-your-note-components)
  - [Notification](#notification)
    - [How to migrate your Notification components](#how-to-migrate-your-notification-components)
  - [Modal](#modal)
    - [How to migrate your Modal components](#how-to-migrate-your-modal-components)

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
```

Buttons with icons:

```tsx static=true
import { Button } from '@contentful/forma-36-react-components';

<Button
  buttonType={isLocked ? undefined : 'muted'}
  icon={isLocked ? 'Lock' : undefined}
  {...otherProps}
>
  Conditional
</Button>;

<Button indicateDropdown>Embed Entry</Button>;

<Button icon="Lock" indicateDropdown>
  Embed Entry
</Button>;

<Button icon="ChevronUp">Embed entry</Button>;

<Button href="/" target="_blank" rel="noreferrer noopener">
  Button link
</Button>;
```

will be transformed into:

```tsx static=true
import { Button } from '@contentful/f36-components';
import {
  LockIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@contentful/f36-icons';

<Button
  variant={isLocked ? 'primary' : 'secondary'}
  startIcon={isLocked ? <LockIcon /> : undefined}
  {...otherProps}
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

<Button
  as="a"
  variant="primary"
  href="/"
  target="_blank"
  rel="noreferrer noopener"
>
  Button link
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

## DateTime

The API of the DateTime component hasn't changed. The only property that has some updates, is `format` property. From `"FULL"`, `"DATE_ONLY"`, `"TIME_ONLY"`, `"WEEKDAY_DATE"` to `"full"`, `"day"`, `"time"`, `"weekday"`.

```tsx static=true
import { DateTime } from '@contentful/f36-datetime';

<DateTime date="2020-08-17T15:45:00" />
<DateTime date="2020-08-17T15:45:00" format="day" />
<DateTime date="2020-08-17T15:45:00" format="weekday" />
<DateTime date="2020-08-17T15:45:00" format="time" />
```

### How to migrate your DateTime components

Update `format` value and import. It should change form this:

```tsx static=true
import { DateTime } from '@contentful/forma-36-react-components';

<DateTime date="2020-08-17T15:45:00" format="WEEKDAY_DATE" />;
```

to this:

```tsx static=true
import { DateTime } from '@contentful/f36-components';

<DateTime date="2020-08-17T15:45:00" format="weekday" />;
```

## RelativeDateTime

The API of the RelativeDateComponent was not changed.

### How to migrate your RelativeDateTime components

You just need to update import. From this:

```tsx static=true
import { RelativeDate } from '@contentful/forma-36-react-components';

<RelativeDate date="2020-08-17T15:45:00" baseDate={'2020-07-17T15:45:00'} />;
```

to this:

```tsx static=true
import { RelativeDate } from '@contentful/f36-components';

<RelativeDate date="2020-08-17T15:45:00" baseDate={'2020-07-17T15:45:00'} />;
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

## Form Components

We changed how the Form Components work on version 4. In version 3 we had the Field components, like `TextField` or `SelectField` that would handle elements like Label, HelpText, and ValidationMessage.
In version 4 we created the `FormControl` which gives the user more flexibility and controls the given input, its validation, state, etc.
All the previous options are still available within the `FormControl` component:

- `FormControl.Label`
- `FormControl.HelpText`
- `FormControl.ValidationMessage`
- `FormControl.Counter`

Any Forma 36 form element can be used either as controlled or uncontrolled components, by using the `defaulValue`/`defaultChecked` prop for uncontrolled and `value`/`isChecked` with an `onChange` props for the controlled version. For example:

```jsx static=true
// This would render the TextInput as an uncontrolled component
<TextInput defaultValue="Some initial Value" />

// This would render the TextInput as a controlled component
<TextInput value="Some initial Value" onChange={onChange} />
```

### Field Components

The `CheckboxField`, `RadioButtonField`, `SelectField`, and `TextField` components were removed in version 4, and need to be replaced by the new `FormControl` component and its compound components. For example:

```tsx static=true
// Checkbox
<CheckboxField
  labelText="Your label text"
  id="some-id"
  type="checkbox"
  helpText="Some help text"
  validationMessage="validation message"
/>

// TextInput
<TextField
  id="inputId"
  name="email"
  labelText="Counting characters and HelpText"
  textInputProps={{
    maxLength: 10,
  }}
  helpText="Some help text"
  validationMessage="Validation Message"
/>
```

will become:

```tsx static=true
// Checkbox
<FormControl id="some-id">
  <Checkbox helpText="Some help text">Your label text</Checkbox>
  <FormControl.ValidationMessage>validation message</FormControl.ValidationMessage>
</FormControl>

// TextInput
<FormControl id="inputId">
  <FormControl.Label>Counting characters and HelpText</FormControl.Label>
  <TextInput name="email" maxLength={10} />
  <Flex justifyContent="space-between">
    <FormControl.HelpText>Some help text</FormControl.HelpText>
    <FormControl.Counter />
  </Flex>
  <FormControl.ValidationMessage>Validation Message</FormControl.ValidationMessage>
</FormControl>
```

For more detailed information and examples, check our [documentation](https://v4-forma-36.netlify.app/components/form-control/).

#### How to migrate your Field components

To migrate your `Field` components to v4, run the following [codemod](https://github.com/contentful/forma-36/tree/forma-v4/packages/forma-36-codemod):
To migrate your Field components to v4, run the following codemod:

`npx @contentful/f36-codemod`

The codemods that must be run: `v4-checkbox`, `v4-radio`, `v4-select`, and `v4-text-field`.

If you want to do it manually, you must transform your code as follows:

```tsx static=true
import { CheckboxField, TextField } from '@contentful/forma-36-react-components';

<CheckboxField
  labelText="Your label text"
  id="some-id"
  type="checkbox"
  helpText="Some help text"
  validationMessage="validation message"
/>

// TextInput
<TextField
  id="inputId"
  name="email"
  labelText="Counting characters and HelpText"
  textInputProps={{
    maxLength: 10,
  }}
  helpText="Some help text"
  validationMessage="Validation Message"
/>
```

into this new version:

```tsx static=true
import { Checkbox, TextInput, FormControl } from '@contentful/f36-components';

<FormControl id="some id">
  <Checkbox helpText="Some help text">Your label text</Checkbox>
  <FormControl.ValidationMessage>validation message</FormControl.ValidationMessage>
</FormControl>

<FormControl id="inputId">
  <FormControl.Label>Counting characters and HelpText</FormControl.Label>
  <TextInput name="email" maxLength={10} />
  <Flex justifyContent="space-between">
    <FormControl.HelpText>Some help text</FormControl.HelpText>
    <FormControl.Counter />
  </Flex>
  <FormControl.ValidationMessage>Validation Message</FormControl.ValidationMessage>
</FormControl>
```

### Checkbox

We removed the `CheckboxField` component in version 4. Now, instead of:

```jsx static=true
import { Checkbox } from '@contentful/forma-36-react-components';

<Checkbox id="checkbox" name="checkbox" labelText="some label" />;
```

_Note: This example would render only the input and the `labelText` would be set as the `aria-label`._

You can use:

```jsx static=true
import { Checkbox } from '@contentful/f36-components';

// This would render the exact same as on version 3
<Checkbox id="checkbox" name="checkbox" aria-label="some label" />

// You can also pass the label and help text to the checkbox
<Checkbox id="checkbox" name="checkbox" helpText="Some help text">
  This label will be rendered at the side of the checkbox
</Checkbox>
```

We also introduced API changes for the checkbox. This is an overview of the renamed properties:

- `required` was renamed to `isRequired`;
- `labelText` should be replaced by `aria-label` when not passing a label to the checkbox;
- `checked` was renamed to `isChecked`;
- `disabled` was renamed to `isDisabled`;
- `indeterminate` was renamed to `isIndeterminate`.

#### How to migrate your checkbox components

You must manually migrate the version 3 `Checkbox` component as it depends on the context the component is being used. For example:

```jsx static=true
import {
  Checkbox,
  Box,
  FormLabel,
} from '@contentful/forma-36-react-components';

<Box>
  <Checkbox id="checkbox" name="checkbox" />
  <FormLabel htmlFor="checkbox">Some label here</FormLabel>
</Box>;
```

becomes:

```jsx static=true
import { Checkbox } from '@contentful/f36-components';

<Checkbox id="checkbox" name="checkbox">
  Some label here
</Checkbox>;
```

If you only use `CheckboxField` component, please check the [Field components](#field-components) section.

### RadioButton

In version 4 we renamed the `RadioButton` to `Radio` and we removed the `RadioButtonField` component. Now instead of:

```jsx static=true
import { RadioButton } from '@contentful/forma-36-react-components';

<RadioButton name="someOption" id="radio" labelText="some label" />;
```

_Note: This example would render only the input and the `labelText` would be set as the `aria-label`._

You can use:

```jsx static=true
import { Radio } from '@contentful/f36-components';

// This would render the exact same as on version 3
<Radio name="someOption" id="radio" aria-label="some label" />

// You can also pass the label and help text to the radio
<Radio name="someOption" id="radio" helpText="Some help text">
  This label will be rendered at the side of the input
</Radio>
```

We also introduced API changes for the radio. This is an overview of the renamed properties:

- `required` was renamed to `isRequired`;
- `labelText` should be replaced by `aria-label` when not passing a label to the input;
- `checked` was renamed to `isChecked`;
- `disabled` was renamed to `isDisabled`.

#### How to migrate your RadioButton components

To migrate your `RadioButton` component to v4, run the following [codemod](https://github.com/contentful/forma-36/tree/forma-v4/packages/forma-36-codemod):

`npx @contentful/f36-codemod`

If you want to do it manually, you must transform your code as follows:

```jsx static=true
import { RadioButton } from '@contentful/forma-36-react-components';

<RadioButton
  id="radio"
  disabled={false}
  checked={true}
  labelText="some label"
/>;
```

into this new version:

```jsx static=true
import { Radio } from '@contentful/f36-components';

<Radio
  id="radio"
  isDisabled={false}
  isChecked={true}
  aria-label="some label"
/>;
```

### Select

The `Select` component becomes a compound component in version 4. You can use `Select` and `Select.Option` by just importing `Select`. You must transform your existing code as follows:

```tsx static=true
<Select id="optionSelect" name="optionSelect" width="large">
  <Option value="optionOne">Option 1</Option>
  <Option value="optionTwo">Long Option 2</Option>
</Select>
```

into:

```tsx static=true
<Select id="optionSelect" name="optionSelect">
  <Select.Option value="optionOne">Option 1</Select.Option>
  <Select.Option value="optionTwo">Long Option 2</Select.Option>
</Select>
```

We also introduced some API changes for the select. This is an overview of the changed props:

- `width` was removed;
- `required` was renamed to `isRequired`;
- `hasError` was renamed to `isInvalid`;
- `disabled` was renamed to `isDisabled`;
- The `Select.Option` component can receive a `isDisabled` prop instead of the `disabled`.

#### How to migrate your Select components

To migrate your v3 `Select` component, run the following [codemod](https://github.com/contentful/forma-36/tree/forma-v4/packages/forma-36-codemod):

`npx @contentful/f36-codemod`

If you want to do it manually, you must transform your code as follows:

````jsx static=true
import { Select, Option } from '@contentful/forma-36-react-components';

<Select name="optionSelect" id="optionSelect">
  <Option value="optionOne">Option One</Option>
  <Option value="optionTwo">Option Two</Option>
  <Option value="optionThree" disabled>
    Option Three
  </Option>
</Select>;

into:

```jsx static=true
import { Select } from '@contentful/f36-components';

<Select name="optionSelect" id="optionSelect">
  <Select.Option value="optionOne">Option One</Select.Option>
  <Select.Option value="optionTwo">Option Two</Select.Option>
  <Select.Option value="optionThree" isDisabled>
    Option Three
  </Select.Option>
</Select>;
````

### Switch

In v4 the `Switch` component has received API improvements. The changes are based on our code style guide, which create consistent, easy to use APIs. For example:

```jsx static=true
import { Switch } from '@contentful/forma-36-react-components';

<Switch name="switch" id="switch" onToggle={onToggle} labelText="some label" />;
```

becomes:

```jsx static=true
import { Switch } from '@contentful/f36-components';

<Switch name="switch" id="switch" onChange={onChange}>
  some label
</Switch>;
```

_Note: in v3 the `onToggle` method had `checked` value (true/false) as parameter, now the `onChange` method has the event as parameter, so `event.target.checked` will have the true/false value_

#### How to migrate your Switch components

You must manually migrate the Switch component by updating the props usage. For example:

```jsx static=true
import { Switch } from '@contentful/forma-36-react-components';

const [isChecked, setIsChecked] = React.useState(false);
const onToggle = (checked) => setIsChecked(checked);
<Switch
  name="switch"
  id="switch"
  isChecked={isChecked}
  onToggle={onToggle}
  labelText="some label"
/>;
```

into this new version:

```jsx static=true
import { Switch } from '@contentful/f36-components';

const [isChecked, setIsChecked] = React.useState(false);
const onChange = (event) => setIsChecked(event.target.checked);
<Switch name="switch" id="switch" isChecked={isChecked} onChange={onChange}>
  some label
</Switch>;
```

### TextInput and TextArea

In v4 the TextInput and TextArea components have received API improvements. The changes are based on our code style guide, which create consistent, easy to use APIs. For example:

```jsx static=true
<TextInput
  id="someInput"
  name="userEmail"
  labelText="userEmail"
  className="my-extra-class"
  value="some value"
/>

<Textarea
  id="someInput"
  name="userEmail"
  className="my-extra-class"
  disabled
  value="some value"
/>;
```

becomes:

```jsx static=true
<TextInput
  id="someInput"
  name="userEmail"
  aria-label="userEmail"
  className="my-extra-class"
  defaultValue="some value" />

<Textarea
  id="someInput"
  name="userEmail"
  className="my-extra-class"
  isDisabled
  defaultValue="some value" />;
```

#### How to migrate your TextInput and TextArea components

To migrate the `TextInput` or `TextArea` components to v4 run the following [codemod](https://github.com/contentful/forma-36/tree/forma-v4/packages/forma-36-codemod):

`npx @contentful/f36-codemod`

When running the codemod, the following changes occur:

```tsx static=true
import { TextInput, Textarea } from '@contentful/forma-36-react-components';

<TextInput
  id="someInput"
  name="userEmail"
  labelText="userEmail"
  className="my-extra-class"
  value="some value"
/>;

<TextInput
  id="someInput"
  name="userEmail"
  labelText="userEmail"
  disabled
  required
  value="some value"
  onChange={() => {}}
/>;

<TextInput
  id="someInput"
  name="userEmail"
  labelText="userEmail"
  error
  readOnly
  width="large"
  onChange={() => {}}
/>;

<TextInput
  id="someInput"
  name="userEmail"
  labelText="userEmail"
  withCopyButton
  width="small"
/>;

<Textarea
  id="someInput"
  name="userEmail"
  className="my-extra-class"
  disabled
  value="some value"
/>;

<Textarea
  id="someInput"
  name="userEmail"
  className="my-extra-class"
  error
  width="large"
  value="some value"
  onChange={() => {}}
/>;
```

becomes:

```tsx static=true
import { CopyButton, TextInput, Textarea } from '@contentful/f36-components';

<TextInput
  id="someInput"
  name="userEmail"
  aria-label="userEmail"
  className="my-extra-class"
  defaultValue="some value"
/>;

<TextInput
  id="someInput"
  name="userEmail"
  aria-label="userEmail"
  isDisabled
  isRequired
  value="some value"
  onChange={() => {}}
/>;

<TextInput
  id="someInput"
  name="userEmail"
  aria-label="userEmail"
  isInvalid
  isReadOnly
  onChange={() => {}}
/>;

<TextInput.Group>
  <TextInput id="someInput" name="userEmail" aria-label="userEmail" />
  <CopyButton />
</TextInput.Group>;

<Textarea
  id="someInput"
  name="userEmail"
  className="my-extra-class"
  isDisabled
  defaultValue="some value"
/>;

<Textarea
  id="someInput"
  name="userEmail"
  className="my-extra-class"
  isInvalid
  value="some value"
  onChange={() => {}}
/>;
```

You can also make these changes manually.

### FieldGroup

The `FieldGroup` component was removed, and should be replaced by one of the Layout components which best fits your need. For example:

```tsx static=true
<FieldGroup>...</FieldGroup>
```

for keeping the same spacing as before it should become:

```tsx static=true
<Flex flexDirection="column" gap="spacingXs">
  ...
</Flex>
```

#### How to migrate your FieldGroup components

The migration should be done manually, using the Layout component that best fits the user needs, the layout components are [Box](https://v4-forma-36.netlify.app/components/box/), [Flex](https://v4-forma-36.netlify.app/components/flex/), [Stack](https://v4-forma-36.netlify.app/components/stack/), and [Grid](https://v4-forma-36.netlify.app/components/grid/).

### Form

In version 4, we improved the Form component API by removing the `spacing` property. For example:

```tsx static=true
import { Form } from '@contentful/forma-36-react-components';

<Form onSubmit={handleSubmit} spacing="condensed">
  ...
</Form>;
```

becomes:

```tsx static=true
import { Form } from '@contentful/f36-components';

<Form onSubmit={handleSubmit} spacing="condensed">
  ...
</Form>;
```

#### How to migrate your Form components

To migrate your `Form` component to v4, run the following [codemod](https://github.com/contentful/forma-36/tree/forma-v4/packages/forma-36-codemod):

`npx @contentful/f36-codemod`

When running the codemod, the following changes occur:

```tsx static=true
import { Form } from '@contentful/forma-36-react-components';

<Form onSubmit={handleSubmit} spacing="condensed">
  Form elements goes here and spacing value is removed
</Form>;
```

becomes:

```tsx static=true
import { Form } from '@contentful/f36-components';

<Form onSubmit={handleSubmit}>
  Form elements goes here and spacing value is removed
</Form>;
```

### FormLabel

`FormLabel` becomes a compound component of the new `FormControl` component. It must be updated to be wrapped by the `FormControl` component. For example:

```jsx static=true
<FormLabel htmlFor="inputId" required>Label for the input</FormLabel>
<TextInput name="input" id="inputId" />
```

becomes:

```jsx static=true
<FormControl.FormLabel htmlFor="inputId" isRequired>Label for the input</FormControl.FormLabel>
<TextInput name="input" id="inputId" />

// You can also use the FormControl to wrap it, and it would handle the id and isRequired
<FormControl isRequired id="inputId">
  <FormControl.FormLabel>Label for the input</FormControl.FormLabel>
  <TextInput name="input" />
</FormControl>
```

#### How to migrate your FormLabel components

You must manually migrate the `FormLabel` component by updating the usage. For example:

```jsx static=true
import { TextInput, FormLabel } from '@contentful/forma-36-react-components';

<FormLabel htmlFor="inputId" required requiredText="required field">Label for the input</FormLabel>
<TextInput name="input" id="inputId" />
```

into this new version:

```jsx static=true
import { FormControl, TextInput } from '@contentful/f36-components';

<FormControl.FormLabel htmlFor="inputId" isRequired requiredText="required field">Label for the input</FormControl.FormLabel>
<TextInput name="input" id="inputId" />

// You can also use the FormControl to wrap it, and it would handle the id and isRequired
<FormControl isRequired id="inputId">
  <FormControl.FormLabel requiredText="required field">Label for the input</FormControl.FormLabel>
  <TextInput name="input">
</FormControl>
```

## Note

The properties of the Note component API have been aligned with our code [style guide](https://github.com/contentful/forma-36/blob/forma-v4/docs/code-style-guide.md).

### How to migrate your Note components

To migrate your `Note` component to v4, run the following [codemod](https://github.com/contentful/forma-36/tree/forma-v4/packages/forma-36-codemod):

`npx @contentful/f36-codemod`

If you want to do it manually, you must transform your existing code as follows:

```tsx
import { Note } from '@contentful/forma-36-react-components';

<Note noteType="positive">
  A piece of information that is relevant to the context the user is currently
  in.
</Note>;

<Note noteType="negative" hasCloseButton>
  A piece of information that is relevant to the context the user is currently
  in.
</Note>;

<Note
  title={'Title example'}
  noteType="primary"
  hasCloseButton
  onClose={() => {}}
>
  A piece of information that is relevant to the context the user is currently
  in.
</Note>;
```

into:

```tsx
import { Note } from '@contentful/f36-components';

<Note variant="positive">
  A piece of information that is relevant to the context the user is currently
  in.
</Note>;

<Note variant="negative" withCloseButton>
  A piece of information that is relevant to the context the user is currently
  in.
</Note>;

<Note
  title={'Title example'}
  variant="primary"
  withCloseButton
  onClose={() => {}}
>
  A piece of information that is relevant to the context the user is currently
  in.
</Note>;
```

## Notification

The properties of the Notification component API have been aligned with our code [style guide](https://github.com/contentful/forma-36/blob/forma-v4/docs/code-style-guide.md).

### How to migrate your Notification components

To migrate your 'Notification' component to v4, run the following [codemod](https://github.com/contentful/forma-36/tree/forma-v4/packages/forma-36-codemod):

`npx @contentful/f36-codemod`

If you want to do it manually, you must transform your existing code as follows:

```tsx
import { Notification } from '@contentful/forma-36-react-components';

const notificationText = 'Some text';
const duration = 3000;
const otherProps = {
  title: 'Some title',
};
const placement = 'bottom';

Notification.success(notificationText, {
  duration,
  canClose: true,
  close: () => {},
  ...otherProps,
});

Notification.setPosition(placement, { offset: 0 });
```

into:

```tsx
import { Notification } from '@contentful/f36-components';

const notificationText = 'Some text';
const duration = 3000;
const otherProps = {
  title: 'Some title',
};
const placement = 'bottom';

Notification.success(notificationText, {
  duration,
  withClose: true,
  onClose: () => {},
  ...otherProps,
});

Notification.setPlacement(placement, { offset: 0 });
```

## Modal

In version 4 the Modal component buttons were moved from the left to the right side of the `<Modal.Controls>` component. We now recommend swapping action buttons, the primary action should be displayed as the first one from the right in the Modal. Have a look how to do it:

In version 3:

```tsx
<Modal.Controls>
  <Button variant="primary" />
  <Button variant="secondary" />
</Modal.Controls>
```

In version 4:

```tsx
<Modal.Controls>
  <Button variant="secondary" size="small" />
  <Button variant="primary" size="small" />
</Modal.Controls>
```

### How to migrate your Modal components

To migrate your `Modal` component to v4, run the following [codemod](https://github.com/contentful/forma-36/tree/forma-v4/packages/forma-36-codemod):

`npx @contentful/f36-codemod`

If you want to do it manually, you must transform your existing code as follows:

```tsx
import {
  Modal,
  ModalHeader,
  ModalConfirm,
  ModalControls,
  ModalContent,
  ModalLauncher,
} from '@contentful/forma-36-react-components';

<ModalConfirm
  onSecondary={() => {}}
  isSecondaryLoading
  secondaryIntent="primary"
  secondaryLabel="secondary label"
  secondaryTestId="secondary id"
>
  Confirm content
</ModalConfirm>;
<ModalHeader isNotWrapped>Header content</ModalHeader>;
<ModalContent></ModalContent>;
<Modal.Controls>
  <Button buttonType="primary" />
  <Button buttonType="secondary" />
</Modal.Controls>;
```

into:

```tsx
import {
  Modal,
  ModalHeader,
  ModalControls,
  ModalContent,
  ModalConfirm,
  ModalLauncher,
} from '@contentful/f36-components';

<ModalConfirm>Confirm content</ModalConfirm>;
<ModalHeader>Header content</ModalHeader>;
<Modal.Controls>
  <Button variant="secondary" size="small" />
  <Button variant="primary" size="small" />
</Modal.Controls>;
```
