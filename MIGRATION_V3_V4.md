# Migration

## Table of contents

- [Migration](#migration)
  - [Table of contents](#table-of-contents)
  - [How to migrate your packages to v4](#how-to-migrate-your-packages-to-v4)
    - [Migrate all components to v4 with one command](#migrate-all-components-to-v4-with-one-command)
    - [Migrate to v4 - step by step guide](#migrate-to-v4---step-by-step-guide)
      - [Step 1 - Install new packages](#step-1---install-new-packages)
        - [Install icons package separately](#install-icons-package-separately)
        - [Install packages separately](#install-packages-separately)
      - [Step 2 - Migrate your components](#step-2---migrate-your-components)
      - [Step 3 - Remove version 3 packages and CSS imports](#step-3---remove-version-3-packages-and-css-imports)
      - [Step 4 - Use the GlobalStyles component](#step-4---use-the-globalstyles-component)
  - [Changes per component in v4](#changes-per-component-in-v4)
    - [Accordion](#accordion)
      - [How to migrate your Accordion components](#how-to-migrate-your-accordion-components)
      - [How to migrate your Accordion components with compound pattern](#how-to-migrate-your-accordion-components-with-compound-pattern)
    - [Asset](#asset)
      - [How to migrate your Asset components](#how-to-migrate-your-asset-components)
    - [Autocomplete](#autocomplete)
      - [How to migrate your Autocomplete components](#how-to-migrate-your-autocomplete-components)
    - [Button](#button)
      - [How to migrate your Button components](#how-to-migrate-your-button-components)
    - [Card](#card)
      - [How to migrate your Card components](#how-to-migrate-your-card-components)
    - [CopyButton](#copybutton)
      - [How to migrate your CopyButton components](#how-to-migrate-your-copybutton-components)
    - [DateTime](#datetime)
      - [How to migrate your DateTime components](#how-to-migrate-your-datetime-components)
    - [Dropdown](#dropdown)
      - [How to migrate your Dropdown components](#how-to-migrate-your-dropdown-components)
      - [`Dropdown` to `Menu`](#dropdown-to-menu)
    - [Simple case](#simple-case)
    - [Case with Titles, Dividers, Links and dropdown maxHeight](#case-with-titles-dividers-links-and-dropdown-maxheight)
    - [Case with Submenu](#case-with-submenu)
      - [`Dropdown` to `Popover`](#dropdown-to-popover)
    - [Popover case with checkboxes](#popover-case-with-checkboxes)
    - [EntityList](#entitylist)
      - [How to migrate your EntityList components](#how-to-migrate-your-entitylist-components)
    - [Icon](#icon)
      - [How to migrate your Icon components](#how-to-migrate-your-icon-components)
    - [IconButton](#iconbutton)
      - [How to migrate your IconButton components](#how-to-migrate-your-iconbutton-components)
    - [Flex](#flex)
      - [How to migrate your Flex components](#how-to-migrate-your-flex-components)
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
        - [How to migrate your TextInput and TextArea components](#how-to-migrate-your-textinput-and-textarea-components)
      - [FieldGroup](#fieldgroup)
        - [How to migrate your FieldGroup components](#how-to-migrate-your-fieldgroup-components)
      - [Form](#form)
        - [How to migrate your Form components](#how-to-migrate-your-form-components)
      - [FormLabel](#formlabel)
        - [How to migrate your FormLabel components](#how-to-migrate-your-formlabel-components)
    - [Grid](#grid)
      - [How to migrate your Grid components](#how-to-migrate-your-grid-components)
    - [HelpText](#helptext)
      - [How to migrate your HelpText components](#how-to-migrate-your-helptext-components)
    - [List](#list)
      - [How to migrate your List components](#how-to-migrate-your-list-components)
    - [Modal](#modal)
      - [How to migrate your Modal components](#how-to-migrate-your-modal-components)
    - [Note](#note)
      - [How to migrate your Note components](#how-to-migrate-your-note-components)
    - [Notification](#notification)
      - [How to migrate your Notification components](#how-to-migrate-your-notification-components)
    - [Pill](#pill)
      - [How to migrate your Pill component](#how-to-migrate-your-pill-component)
    - [RelativeDateTime](#relativedatetime)
      - [How to migrate your RelativeDateTime components](#how-to-migrate-your-relativedatetime-components)
    - [Skeleton](#skeleton)
      - [How to migrate your Skeleton components](#how-to-migrate-your-skeleton-components)
    - [Spinner](#spinner)
      - [How to migrate your Spinner components](#how-to-migrate-your-spinner-components)
    - [Table](#table)
      - [How to migrate your Table components](#how-to-migrate-your-table-components)
    - [Tabs](#tabs)
      - [How to migrate your Tabs components](#how-to-migrate-your-tabs-components)
    - [Tag becomes Badge](#tag-becomes-badge)
      - [How to migrate your Tag to Badge](#how-to-migrate-your-tag-to-badge)
    - [TextLink](#textlink)
      - [How to migrate your TextLink components](#how-to-migrate-your-textlink-components)
    - [ToggleButton](#togglebutton)
      - [How to migrate your ToggleButton components](#how-to-migrate-your-togglebutton-components)
    - [Tooltip](#tooltip)
      - [How to migrate your Tooltip components](#how-to-migrate-your-tooltip-components)
    - [Typography](#typography)
      - [How to migrate your Typography components](#how-to-migrate-your-typography-components)
    - [Workbench](#workbench)
      - [How to migrate your Workbench components](#how-to-migrate-your-workbench-components)

## How to migrate your packages from v3 to v4

### Migrate all components to v4 with one command

We focused on improving your experience and creating a seamless migration to version 4. As such, you can run one codemod command and migrate the whole project to version 4.

```bash
npx @contentful/f36-codemod
```

Note: When running this command for the first time it installs the package in the NPM cache. Make sure you run it again.

When you run this command, the following prompt is displayed:

```bash
run-all-v4: Update package json with new packages and remove old ones, remove v3 CSS imports and run all possible codemods for components.
update-package-json: Updates package.json file with correct packages, and remove v3 CSS imports
migrate-all-components-to-v4: Run all exising codemods
migrate-specific-component-to-v4: Select which v4 codemod you want to apply
```

Select the first option from the list: `run-all-v4`. This codemod will adjust your `package.json`, install new packages, remove old ones, and also remove the CSS imports required for version 3.

The following components do not have a codemod, so you must migrate them manually:

- [Accordion](#accordion)
- [Asset](#asset)
- [Autocomplete](https://f36.contentful.com/components/autocomplete/)
- [DateTime](#datetime)
- [ToggleButton](#togglebutton)
- [Dropdown](#dropdown)
- [Workbench](#workbench)
- [Tabs](#tabs)
- [Switch](#switch)

### Migrate to v4 - step by step guide

#### Step 1 - Install new packages

Install a package that contains all of the components from Forma 36 version 4. Tree-shaking will take care of your build, so it will include only components that you use.

For NPM

```bash
npm install @contentful/f36-components
npm install @contentful/f36-tokens
```

For YARN

```bash
yarn add @contentful/f36-components
yarn add @contentful/f36-tokens
```

##### Install icons package separately

Starting from version 4, icons are not included in the main components package. If you need to use our icons or you use them already in version 3, install them separately, by running the following commands:

```bash
npm install @contentful/f36-icons
```

For YARN

```bash
yarn add @contentful/f36-icons
```

##### Install packages separately

You can install packages separately in version 4 if, for some reason, you project requires it.
For example, if you only need the `Button` component in your project, you can add this package by running the following command:

For NPM

```bash
npm install @contentful/f36-button
```

For YARN

```bash
yarn add @contentful/f36-button
```

Note: We don't recommend using it this way, it is much easier to [install the full package of components](#Step-1-install-new-packages). Tree-shaking will take care of your build

#### Step 2 - Migrate your components

We created codemods for most of the components to make it easier for you to migrate. All you need to do is run this command and follow the prompt:

```bash
npx @contentful/f36-codemod
```

Note: When running this command for the first time it installs the package in the NPM cache. Make sure you run it again.

There are still a couple of components that require manual migration, have a look at [the detailed documentation on how to do it](#changes-per-component-in-v4).

#### Step 3 - Remove version 3 packages and CSS imports

Now that you have your fresh version of Forma 36 installed, you don't need the old packages anymore. Remove them by running the following command:

For NPM

```bash
npm uninstall @contentful/forma-36-react-components
npm uninstall @contentful/forma-36-tokens
npm uninstall @contentful/forma-36-fcss
```

For YARN

```bash
yarn remove @contentful/forma-36-react-components
yarn remove @contentful/forma-36-tokens
yarn remove @contentful/forma-36-fcss
```

Now find the following imports and remove them as well:

```tsx
import '@contentful/forma-36-react-components/dist/styles.css';
import '@contentful/forma-36-fcss/dist/styles.css';
import '@contentful/forma-36-tokens/dist/css/index.css';
```

#### Step 4 - Use the GlobalStyles component

Control default browser styles with the `GlobalStyles` component. The GlobalStyles component uses the Global component from [Emotion](https://emotion.sh/docs/globals) under the hood. Import GlobalStyles somewhere at the root of your project like in the example below:

```jsx static=true
import ReactDOM from 'react-dom';
import { GlobalStyles } from '@contentful/f36-components';

import App from './App';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <>
    <GlobalStyles />
    <App />
  </>,
  rootElement,
);
```

## Changes per component in v4

### Accordion

The API of the Accordion component has not changed.

#### How to migrate your Accordion components

To migrate the Accordion component to v4, you must update the import. It changes from this:

```tsx
import {
  Accordion,
  AccordionItem,
} from '@contentful/forma-36-react-components';
```

to this:

```tsx
import { Accordion, AccordionItem } from '@contentful/f36-components';
```

#### How to migrate your Accordion components with compound pattern

To migrate the Accordion component to v4 with compound pattern, do the following changes:

```tsx
import {
  Accordion,
  AccordionItem,
} from '@contentful/forma-36-react-components';

<Accordion>
  <AccordionItem title="What payment methods do you accept?">
    Customers on the Team tier can pay with a credit card (American Express,
    MasterCard or Visa). Enterprise customers have the choice of paying with a
    credit card or wire transfer.
  </AccordionItem>
</Accordion>;
```

to this:

```tsx
import { Accordion } from '@contentful/f36-components';

<Accordion>
  <Accordion.Item title="What payment methods do you accept?">
    Customers on the Team tier can pay with a credit card (American Express,
    MasterCard or Visa). Enterprise customers have the choice of paying with a
    credit card or wire transfer.
  </Accordion.Item>
</Accordion>;
```

### Asset

The API of the Asset component has not changed.

#### How to migrate your Asset components

To migrate the Asset component to v4, you must update the import. It changes from this:

```tsx
import { Asset } from '@contentful/forma-36-react-components';
```

to this:

```tsx
import { Asset } from '@contentful/f36-components';
```

### Autocomplete

Autocomplete component in the version 3 was never released as stable. We improved API and now most of the properies are different for this component. We were not able to provide you with a codemod for this component so you need to migrate it manually to v.

#### How to migrate your Autocomplete component

Your implementation in the version 3 might have looked like this:

```tsx
import { Autocomplete } from '@contentful/forma-36-react-components/dist/alpha';

function AutocompleteExample() {
  const items = [
    { value: 1, label: 'Travel Blog' },
    { value: 2, label: 'Finnance Blog' },
    { value: 3, label: 'Fitness App' },
    { value: 4, label: 'News Website' },
    { value: 5, label: 'eCommerce Catalogue' },
  ];

  const [filteredItems, setFilteredItems] = React.useState(items);
  const [selectedItem, setSelectedItem] = React.useState();

  const handleQueryChange = (query) => {
    setFilteredItems(
      query ? items.filter((item) => item.label.includes(query)) : items,
    );
  };

  const handleOnChange = (item) => {
    setSelectedItem(item.label);
  };

  return (
    <Autocomplete
      items={filteredItems}
      onQueryChange={handleQueryChange}
      placeholder={'search'}
      emptyListMessage={'no result found'}
      noMatchesMessage={'no matches'}
      dropdownProps={{ isFullWidth: true }}
      onChange={handleOnChange}
      selectedItem={selectedItem}
    >
      {(options) =>
        options.map((option) => <span key={option.value}>{option.label}</span>)
      }
    </Autocomplete>
  );
}
```

Now it is much simpler, you don't need to handle so many properties anymore yourself, component will take care of it for you. It will look like this:

```tsx
import { Autocomplete } from '@contentful/f36-components';

function AutocompleteExample() {
  const spaces = [
    'Travel Blog',
    'Finnance Blog',
    'Fitness App',
    'News Website',
    'eCommerce Catalogue',
    'Photo Gallery',
  ];

  // This `useState` is going to store the selected "space" so we can show it in the UI
  const [selectedSpace, setSelectedSpace] = React.useState();
  const [filteredItems, setFilteredItems] = React.useState(spaces);

  // We filter the "spaces" array by the inputValue
  // we use 'toLowerCase()' to make the search case insensitive
  const handleInputValueChange = (value) => {
    const newFilteredItems = spaces.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase()),
    );
    setFilteredItems(newFilteredItems);
  };

  // This function will be called once the user selects an item in the list of options
  const handleSelectItem = (item) => {
    setSelectedSpace(item);
  };

  return (
    <Autocomplete
      // those are only 3 main properties that are required
      items={filteredItems}
      onInputValueChange={handleInputValueChange}
      onSelectItem={handleSelectItem}
    />
  );
}
```

Need more properties for the Autocomplete component? Check out full documentation of the new API in [here](https://f36.contentful.com/components/autocomplete)

### Button

In v4, the Button component has received API improvements. The changes are based on our code style guide, which create consistent, easy to use APIs. For example:

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

To migrate the `Button` component to v4 run the following [codemod](https://github.com/contentful/forma-36/tree/v5/packages/forma-36-codemod):

```bash
npx @contentful/f36-codemod
```

Note: When running this command for the first time it installs the package in the NPM cache. Make sure you run it again.

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

becomes:

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

### Card

In v4, the Card component has received API improvements. The changes are based on our code style guide, which create consistent, easy to use APIs. For example:

```tsx static=true
import {
  Card,
  AssetCard,
  EntryCard,
} from '@contentful/forma-36-react-components';

<Card selected>Selectable card content</Card>;

<Card href="example.com">Selectable card content</Card>;

<AssetCard
  type="archive"
  title="Some title"
  selected={isSelected}
  href=""
  status="archived"
  src=""
  onClick={() => {}}
  cardDragHandleComponent={<div />}
  withDragHandle={true}
  dropdownListElements={
    <>
      <span />
    </>
  }
  size="default"
/>;

<EntryCard
  type="archive"
  title="Some title"
  selected={isSelected}
  href=""
  status="archived"
  onClick={() => {}}
  cardDragHandleComponent={<div />}
  withDragHandle={true}
  dropdownListElements={
    <>
      <span />
    </>
  }
  size="default"
/>;
```

becomes:

```tsx static=true
import { Card, AssetCard, EntryCard Menu } from "@contentful/f36-components";

<Card isSelected>
  Selectable card content
</Card>;

<Card as="a" href="example.com">
  Selectable card content
</Card>;

<AssetCard
  as="a"
  type="archive"
  title="Some title"
  isSelected={true}
  href=""
  status="archived"
  src=""
  onClick={() => {}}
  withDragHandle={true}
  actions={[<Menu.Item>action</Menu.Item>]}
  size="default" />;
```

This is an overview of the changed props:

- `cardDragHandleComponent` was removed
- `selected` was renamed to `isSelected`
- `isDragActive` was renamed to `isDragging`
- `statusIcon` was renamed to `icon`, and now expects an Icon component
- `cardDragHandleProps` was renamed to `dragHandleProps`
- `dropdownListElements` was renamed to `actions` and updated to use the new `Menu` component. It should receive an array of `Menu.Item`. For more information, see the Menu [documentation](https://f36.contentful.com/components/menu/).

#### How to migrate your Card components

To migrate the `Card` component to v4, run the following [codemod](https://github.com/contentful/forma-36/tree/v5/packages/forma-36-codemod):

```bash
npx @contentful/f36-codemod
```

Note: When running this command for the first time it installs the package in the NPM cache. Make sure you run it again.

There are codemods for `Card`, `AssetCard` and `EntryCard`. When running the codemods, the following changes occur:

```tsx static=true
import {
  Card,
  AssetCard,
  EntryCard,
} from '@contentful/forma-36-react-components';

<Card selected>Selectable card content</Card>;

<Card href="example.com">Selectable card content</Card>;

<AssetCard
  type="archive"
  title="Some title"
  selected={isSelected}
  href=""
  status="archived"
  src=""
  onClick={() => {}}
  cardDragHandleComponent={<div />}
  withDragHandle={true}
  dropdownListElements={
    <>
      <span />
    </>
  }
  size="default"
/>;

<EntryCard
  type="archive"
  title="Some title"
  selected={isSelected}
  href=""
  status="archived"
  onClick={() => {}}
  cardDragHandleComponent={<div />}
  withDragHandle={true}
  dropdownListElements={
    <>
      <span />
    </>
  }
  size="default"
/>;
```

becomes:

```tsx static=true
import { Card, AssetCard, EntryCard Menu } from "@contentful/f36-components";

<Card isSelected>
  Selectable card content
</Card>;

<Card as="a" href="example.com">
  Selectable card content
</Card>;

<AssetCard
  as="a"
  type="archive"
  title="Some title"
  isSelected={true}
  href=""
  status="archived"
  src=""
  onClick={() => {}}
  withDragHandle={true}
  actions={[<Menu.Item>action</Menu.Item>]}
  size="default" />;
```

### CopyButton

In v4, the CopyButton component has received API improvements. The changes are based on our code style guide, which create consistent, easy to use APIs. For example:

```jsx static=true
<CopyButton
  onCopy={onCopy}
  copyValue="value to be copied"
  tooltipCopiedText={<>Copied!</>}
  tooltipText={
    <>
      Copy to <br /> clipboard
    </>
  }
  tooltipPlace="bottom"
/>
```

becomes:

```jsx static=true
<CopyButton
  onCopy={onCopy}
  value="value to be copied"
  tooltipCopiedText="Copied!"
  tooltipText="Copy to clipboard"
  tooltipProps={{
    placement: 'bottom',
  }}
/>
```

For more information on what can be passed on the `tooltipProps` prop, see the Tooltip [documentation](https://f36.contentful.com/components/tooltip/). It accepts all props except `children` and `content`.
We also added the possibility to pass `isDisabled` and `size` props to the CopyButton component.

#### How to migrate your CopyButton components

You must manually migrate the version 3 `CopyButton` component by updating the props. For example:

```jsx static=true
<CopyButton
  onCopy={onCopy}
  copyValue="value to be copied"
  tooltipCopiedText={<>Copied!</>}
  tooltipText={
    <>
      Copy to <br /> clipboard
    </>
  }
  tooltipPlace="bottom"
/>
```

becomes:

```jsx static=true
<CopyButton
  onCopy={onCopy}
  value="value to be copied"
  tooltipCopiedText="Copied!"
  tooltipText="Copy to clipboard"
  tooltipProps={{
    placement: 'bottom',
  }}
/>
```

### DateTime

The API of the DateTime component has not changed. The `format` property is the only one that was updated: from `"FULL"`, `"DATE_ONLY"`, `"TIME_ONLY"`, `"WEEKDAY_DATE"` to `"full"`, `"day"`, `"time"`, `"weekday"`.

```tsx static=true
import { DateTime } from '@contentful/f36-datetime';

<DateTime date="2020-08-17T15:45:00" />
<DateTime date="2020-08-17T15:45:00" format="day" />
<DateTime date="2020-08-17T15:45:00" format="weekday" />
<DateTime date="2020-08-17T15:45:00" format="time" />
```

#### How to migrate your DateTime components

To migrate your DateTime component to v4, you must update the format value and import. It changes from this:

```tsx static=true
import { DateTime } from '@contentful/forma-36-react-components';

<DateTime date="2020-08-17T15:45:00" format="WEEKDAY_DATE" />;
```

to this:

```tsx static=true
import { DateTime } from '@contentful/f36-components';

<DateTime date="2020-08-17T15:45:00" format="weekday" />;
```

### Dropdown

The Dropdown component is replaced with three new components: [Menu](https://github.com/contentful/forma-36/blob/v5/packages/components/menu/Menu.mdx), [Autocomplete](https://github.com/contentful/forma-36/blob/v5/packages/components/autocomplete/Autocomplete.mdx) and [Popover](https://github.com/contentful/forma-36/blob/v5/packages/components/popover/Popover.mdx).
By creating separate components we improved the accessibility and simplified its API. Each of these new components serves its own purpose.

We renamed prop the `position` to `placement` and changed its value type. Below is the mapping of the old values to the new ones:

```jsx static=true
const positionToPlacementMap = {
  'bottom-left': 'bottom-start',
  'bottom-right': 'bottom-end',
  right: 'right-start',
  left: 'left-start',
  'top-left': 'top-start',
  'top-right': 'top-end',
};
```

#### How to migrate your Dropdown components

You must migrate the component manually since there might be different approaches for each case.

- If you used the `Dropdown` to offer a list of choices to the user, such as a set of actions or links, you should replace it with `Menu`.
- If you used the `Dropdown` in combination with input to help the user set the value by choosing from a list of options, replace it with `Autocomplete`.
- If you used the `Dropdown` for some custom case that does not match the previously described cases, replace it with `Popover`. Most likely, you don't need to use `Popover` at all. Consider it only for special, custom solutions.

_Note: `Popover` is a low-level component and it is used as a base for `Autocomplete` and `Menu`_

Here are a few examples of how to migrate the `Dropdown` component:

#### `Dropdown` to `Menu`

### Simple case

Keep in mind:

- By default `Menu` is an uncontrolled component, so you don't have to pass callbacks and state. Nevertheless, you can make it controlled if you need to. [See the controlled Menu example in component docs](https://github.com/contentful/forma-36/blob/v5/packages/components/menu/Menu.mdx#controlled-menu)
- By default, clicking the `MenuItem` closes the menu. If you want to disable this behaviour, just pass the `closeOnSelect="false"` prop.

Forma v3:

```tsx static=true
import { Dropdown, DropdownList, DropdownListItem, IconButton } from '@contentful/forma-36-react-components';

const [isDropdownOpen, setDropdownOpen] = React.useState(false)

<Dropdown
  isOpen={isDropdownOpen}
  onClose={() => setDropdownOpen(false)}
  toggleElement={
    <IconButton
      aria-label="Open Actions"
      icon={<MoreVerticalIcon size="small" />}
      onClick={(event) => {
        setDropdownOpen((isOpen) => !isOpen)
      }}
    />
  }>
  <DropdownList>
    <DropdownListItem onClick={() => {
        /* do some action and close dropdown */
        setDropdownOpen(false)
      }}>
      First action
    </DropdownListItem>
    <DropdownListItem onClick={() => {
        /* do some action and close dropdown */
        setDropdownOpen(false)
      }}>
      Second action
    </DropdownListItem>
  </DropdownList>
</Dropdown>
```

Forma v4:

```tsx static=true
import { Menu, IconButton } from '@contentful/f36-components';

<Menu>
  <Menu.Trigger>
    <IconButton
      aria-label="Open Actions"
      icon={<MoreVerticalIcon size="small" />}
    />
  </Menu.Trigger>
  <Menu.List>
    <Menu.Item
      onClick={() => {
        /* do some action */
      }}
    >
      First action
    </Menu.Item>
    <Menu.Item
      onClick={() => {
        /* do some action */
      }}
    >
      Second action
    </Menu.Item>
  </Menu.List>
</Menu>;
```

### Case with Titles, Dividers, Links and dropdown maxHeight

Keep in mind:

- `<DropdownListItem isTitle>Title</DropdownListItem>` got replaced with `<Menu.SectionTitle>Title</Menu.SectionTitle>`
- To add a divider just add `<Menu.Divider />`
- To add a link as a menu item, just pass prop `as="a"` to `Menu.Item`. Note that `Menu.Item` is a polymorphic component.
- Instead of `maxHeight` prop you can just set the `maxHeight` within your styles. It can be passed in a style object or be set within a classname.

Forma v3:

```tsx static=true
import { Dropdown, DropdownList, DropdownListItem, IconButton } from '@contentful/forma-36-react-components';

const [isDropdownOpen, setDropdownOpen] = React.useState(false)

<Dropdown
  isOpen={isDropdownOpen}
  onClose={() => setDropdownOpen(false)}
  toggleElement={
    <IconButton
      aria-label="Open Actions"
      icon={<MoreVerticalIcon size="small" />}
      onClick={(event) => {
        setDropdownOpen((isOpen) => !isOpen)
      }}
    />
  }>
  <DropdownList maxHeight={200}>
    <DropdownListItem isTitle>Actions</DropdownListItem>
    <DropdownListItem>
      First action
    </DropdownListItem>
    <DropdownListItem>
      Second action
    </DropdownListItem>
    <DropdownList border="top">
      <DropdownListItem>
        <TextLink href="https://contentful.com" target="_blank">About Contentful</TextLink>
      </DropdownListItem>
    </DropdownList>
  </DropdownList>
</Dropdown>
```

Forma v4:

```tsx static=true
import { Menu, IconButton } from '@contentful/f36-components';

<Menu>
  <Menu.Trigger>
    <IconButton
      aria-label="Open Actions"
      icon={<MoreVerticalIcon size="small" />}
    />
  </Menu.Trigger>
  <Menu.List style={{ maxHeight: '200px' }}>
    <Menu.SectionTitle>Actions</Menu.SectionTitle>
    <Menu.Item>First action</Menu.Item>
    <Menu.Item>Second action</Menu.Item>
    <Menu.Divider />
    <Menu.Item as="a" href="https://contentful.com" target="_blank">
      About Contentful
    </Menu.Item>
  </Menu.List>
</Menu>;
```

### Case with Submenu

Keep in mind:

- Instead of nesting another `Dropdown` use a specific component `Menu.Submenu`.
- Instead of passing the `submenuToggleLabel` prop use a specific component `Menu.SubmenuTrigger`. That will serve as a trigger for a submenu.
- The submenu is always displayed on the right side of the menu. There is no way to display it on the left side now.

Forma v3:

```tsx static=true
import { Dropdown, DropdownList, DropdownListItem, IconButton } from '@contentful/forma-36-react-components';

const [isDropdownOpen, setDropdownOpen] = React.useState(false)

<Dropdown
  isOpen={isDropdownOpen}
  onClose={() => setDropdownOpen(false)}
  toggleElement={
    <IconButton
      aria-label="Open Actions"
      icon={<MoreVerticalIcon size="small" />}
      onClick={(event) => {
        setDropdownOpen((isOpen) => !isOpen)
      }}
    />
  }>
  <DropdownList>
    <DropdownListItem>
      First action
    </DropdownListItem>
    <Dropdown submenuToggleLabel="Open submenu">
      <DropdownList>
        <DropdownListItem>
          Submenu action 1
        </DropdownListItem>
        <DropdownListItem>
          Submenu action 2
        </DropdownListItem>
      </DropdownList>
    </Dropdown>
    <DropdownListItem>
      Second action
    </DropdownListItem>
  </DropdownList>
</Dropdown>
```

Forma v4:

```tsx static=true
import { Menu, IconButton } from '@contentful/f36-components';

<Menu>
  <Menu.Trigger>
    <IconButton
      aria-label="Open Actions"
      icon={<MoreVerticalIcon size="small" />}
    />
  </Menu.Trigger>
  <Menu.List>
    <Menu.Item
      onClick={() => {
        /* do some action */
      }}
    >
      First action
    </Menu.Item>
    <Menu.Submenu>
      <Menu.SubmenuTrigger>Open submenu</Menu.SubmenuTrigger>
      <Menu.List>
        <Menu.Item>Submenu action 1</Menu.Item>
        <Menu.Item>Submenu action 2</Menu.Item>
      </Menu.List>
    </Menu.Submenu>
    <Menu.Item
      onClick={() => {
        /* do some action */
      }}
    >
      Second action
    </Menu.Item>
  </Menu.List>
</Menu>;
```

#### `Dropdown` to `Popover`

### Popover case with checkboxes

Keep in mind:

- Unlike `Menu`, `Popover` is a controlled component. So you have to pass callbacks and state to make it work as expected.
- We used `FocusLock` from [react-focus-lock](https://github.com/theKashey/react-focus-lock) to enhance a11y. It traps users' focus in the popover content and they will not be able to leave the popover when using "Tab" navigation.

Forma v3:

```tsx static=true
import { Dropdown, DropdownList, DropdownListItem, Button, Checkbox } from '@contentful/forma-36-react-components';

const [isDropdownOpen, setDropdownOpen] = React.useState(false)

<Dropdown
  isOpen={isDropdownOpen}
  onClose={() => setDropdownOpen(false)}
  toggleElement={
    <Button
      endIcon={<ChevronDownIcon />}
      onClick={(event) => {
        setDropdownOpen((isOpen) => !isOpen);
      }}
    >
      Select
    </Button>
  }>
  <DropdownList>
    {props.list.map(({ id, label }) => (
      <DropdownListItem key={id}>
        <Checkbox
          isChecked={selection[id]}
          onChange={() => changeSelection(id)}
          name={id}>
          {label}
        </Checkbox>
      </DropdownListItem>
    ))}
  </DropdownList>
</Dropdown>
```

Forma v4:

```tsx static=true
import { Menu, Button, Stack, Checkbox } from '@contentful/f36-components';
import FocusLock from 'react-focus-lock';

const [isPopoverOpen, setIsPopoverOpen] = React.useState(false);

<Popover isOpen={isPopoverOpen} onClose={() => setIsPopoverOpen(false)}>
  <Popover.Trigger>
    <Button
      endIcon={<ChevronDownIcon />}
      onClick={(event) => {
        setIsPopoverOpen((isOpen) => !isOpen);
      }}
    >
      Select
    </Button>
  </Popover.Trigger>
  <Popover.Content>
    <FocusLock>
      <Stack
        as="ul"
        padding="spacingS"
        margin="none"
        spacing="spacingXs"
        flexDirection="column"
        alignItems="flex-start"
      >
        {props.list.map(({ id, label }) => (
          <li key={id}>
            <Checkbox
              isChecked={selection[id]}
              onChange={() => changeSelection(id)}
              name={id}
            >
              {label}
            </Checkbox>
          </li>
        ))}
      </Stack>
    </FocusLock>
  </Popover.Content>
</Popover>;
```

### EntityList

In v4, the EntityList component has received API improvements. Here is an overview of the changes:

- `EntityList` became a compound component. Instead of `EntityListItem` you can use `EntityList.Item`
- `dropdownListElements` prop was renamed to `actions` and updated to use the new `Menu` component. It should receive an array of `Menu.Item`. For more information, see the EntityList [code examples](https://f36.contentful.com/components/entity-list/#code-examples) and Menu [documentation](https://f36.contentful.com/components/menu/).

#### How to migrate your EntityList components

To migrate the `EntityList` component to v4, run the following [codemod](https://github.com/contentful/forma-36/tree/v5/packages/forma-36-codemod):

```bash
npx @contentful/f36-codemod
```

Note: When running this command for the first time it installs the package in the NPM cache. Make sure you run it again.

Note: The `actions` prop value update should be done manually. Codemod will not update it to use the new `Menu.Item` component.

The example of changes:

```tsx static=true
import {
  EntityList,
  EntityListItem,
} from '@contentful/forma-36-react-components';

<EntityList>
  <EntityListItem
    title="Entry 1"
    description="Description"
    contentType="My content type"
    status="published"
    dropdownListElements={
      <DropdownList>
        <DropdownListItem>Edit</DropdownListItem>
        <DropdownListItem>Download</DropdownListItem>
        <DropdownListItem>Remove</DropdownListItem>
      </DropdownList>
    }
  />
  <EntityListItem
    title="Entry 2"
    description="Description"
    contentType="My content type"
    status="draft"
  />
</EntityList>;
```

becomes:

```tsx static=true
import { EntityList, MenuItem } from '@contentful/f36-components';

<EntityList>
  <EntityList.Item
    title="Entry 1"
    description="Description"
    contentType="My content type"
    status="published"
    actions={[
      <MenuItem key="edit">Edit</MenuItem>,
      <MenuItem key="download">Download</MenuItem>,
      <MenuItem key="remove">Remove</MenuItem>,
    ]}
  />
  <EntityList.Item
    title="Entry 2"
    description="Description"
    contentType="My content type"
    status="draft"
  />
</EntityList>;
```

### Icon

In v4, the Icon component has a simplified API. You can import a required icon from `@contentful/f36-icons`.

```tsx static=true
import { ChevronLeftIcon } from '@contentful/f36-icons';

<ChevronLeftIcon size="small" variant="primary" />;
```

To use an icon from a third-party library, you can pass it as an `as` prop:

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

#### How to migrate your Icon components

To migrate the Icon component to v4, run the following [codemod](https://github.com/contentful/forma-36/tree/v5/packages/forma-36-codemod):

```bash
npx @contentful/f36-codemod
```

Note: When running this command for the first time it installs the package in the NPM cache. Make sure you run it again.

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

### IconButton

The API of the IconButton component has changed slightly:

- The icon is defined by the icon element, passed to `icon` prop.
- The `iconProps` was removed - icon props are passed directly to the icon element.

```tsx static=true
import { IconButton } from '@contentful/f36-button';
import { PreviewIcon } from '@contentful/f36-icons';

<IconButton
  variant="transparent"
  aria-label="Preview"
  icon={<PreviewIcon variant="secondary" size="medium" />}
/>;
```

#### How to migrate your IconButton components

To migrate the IconButton component to v4, run the following [codemod](https://github.com/contentful/forma-36/tree/v5/packages/forma-36-codemod):

```bash
npx @contentful/f36-codemod
```

Note: When running this command for the first time it installs the package in the NPM cache. Make sure you run it again.

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

### Flex

The Flex component is now part of the `@contentful/f36-core` package. The only improvement that was done for the Flex component in version 4 was to align properties with our [code style guide](./docs/code-style-guide.md). This way, we hope, the API is more aligned and consistent. For example:

```tsx
<Flex inlineFlex />
```

becomes:

```tsx
<Flex isInline />
```

#### How to migrate your Flex components

To migrate the Flex component to v4, run the following [codemod](https://github.com/contentful/forma-36/tree/v5/packages/forma-36-codemod):

```bash
npx @contentful/f36-codemod
```

Note: When running this command for the first time it installs the package in the NPM cache. Make sure you run it again.

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

### Form Components

We changed how the Form Components work on version 4. In version 3 we had the Field components, like `TextField` or `SelectField`, that would handle elements like Label, HelpText, and ValidationMessage.
In version 4 we created the `FormControl` which gives the user more flexibility and controls the given input, its validation, state, etc.
All the previous options are still available within the `FormControl` component:

- `FormControl.Label`
- `FormControl.HelpText`
- `FormControl.ValidationMessage`
- `FormControl.Counter`

Any Forma 36 form element can be used either as controlled or uncontrolled components, by using the `defaultValue`/`defaultChecked` prop for uncontrolled and `value`/`isChecked` with an `onChange` props for the controlled version. For example:

```jsx static=true
// This would render the TextInput as an uncontrolled component
<TextInput defaultValue="Some initial Value" />

// This would render the TextInput as a controlled component
<TextInput value="Some initial Value" onChange={onChange} />
```

#### Field Components

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

becomes:

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

If you are using the `textLinkProps` prop on the `TextField` we recommend updating it so:

```tsx static=true
<TextField
  id="with-text-link"
  name="with-text-link"
  labelText="With text link"
  textLinkProps={{
    text: 'Text Link',
    icon: 'Preview',
    href: '#',
  }}
/>
```

becomes:

```tsx static=true
<FormControl id="with-text-link">
  <Flex justifyContent="space-between" alignItems="center">
    <FormControl.Label>With text link</FormControl.Label>
    <TextLink icon={<PreviewIcon />} href="#">
      Text Link
    </TextLink>
  </Flex>
  <TextInput name="with-text-link" />
</FormControl>
```

For more detailed information and examples, see our [documentation](https://f36.contentful.com/components/form-control/).

##### How to migrate your Field components

To migrate your Field components to v4, run the following [codemod](https://github.com/contentful/forma-36/tree/v5/packages/forma-36-codemod):

```bash
npx @contentful/f36-codemod
```

Note: When running this command for the first time it installs the package in the NPM cache. Make sure you run it again.

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

#### Checkbox

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

We also introduced API changes for the Checkbox. This is an overview of the renamed properties:

- `required` was renamed to `isRequired`.
- `labelText` should be replaced by `aria-label` when not passing a label to the checkbox.
- `checked` was renamed to `isChecked`.
- `disabled` was renamed to `isDisabled`.
- `indeterminate` was renamed to `isIndeterminate`.

##### How to migrate your Checkbox components

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

If you only use the `CheckboxField` component, please see [Field components](#field-components) section.

#### RadioButton

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

- `required` was renamed to `isRequired`.
- `labelText` should be replaced by `aria-label` when not passing a label to the input.
- `checked` was renamed to `isChecked`.
- `disabled` was renamed to `isDisabled`.

##### How to migrate your RadioButton components

To migrate your `RadioButton` component to v4, run the following [codemod](https://github.com/contentful/forma-36/tree/v5/packages/forma-36-codemod):

```bash
npx @contentful/f36-codemod
```

Note: When running this command for the first time it installs the package in the NPM cache. Make sure you run it again.

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

#### Select

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

We also introduced some API changes for the Select. This is an overview of the changed props:

- `width` was removed.
- `required` was renamed to `isRequired`.
- `hasError` was renamed to `isInvalid`.
- `disabled` was renamed to `isDisabled`.
- The `Select.Option` component can receive a `isDisabled` prop instead of the `disabled`.

##### How to migrate your Select components

To migrate your v3 `Select` component, run the following [codemod](https://github.com/contentful/forma-36/tree/v5/packages/forma-36-codemod):

```bash
npx @contentful/f36-codemod
```

Note: When running this command for the first time it installs the package in the NPM cache. Make sure you run it again.

If you want to do it manually, you must transform your code as follows:

```jsx static=true
import { Select, Option } from '@contentful/forma-36-react-components';

<Select name="optionSelect" id="optionSelect">
  <Option value="optionOne">Option One</Option>
  <Option value="optionTwo">Option Two</Option>
  <Option value="optionThree" disabled>
    Option Three
  </Option>
</Select>;
```

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
```

#### Switch

In v4, the `Switch` component has received API improvements. The changes are based on our code style guide, which create consistent, easy to use APIs. For example:

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

_Note: In v3, the `onToggle` method had `checked` value (true/false) as parameter. Now, the `onChange` method has the event as parameter, so `event.target.checked` will have the true/false value_

##### How to migrate your Switch components

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

#### TextInput and TextArea

In v4, the TextInput and TextArea components have received API improvements. The changes are based on our code style guide, which create consistent, easy to use APIs. For example:

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

##### How to migrate your TextInput and TextArea components

To migrate the `TextInput` or `TextArea` components to v4 run the following [codemod](https://github.com/contentful/forma-36/tree/v5/packages/forma-36-codemod):

```bash
npx @contentful/f36-codemod
```

Note: When running this command for the first time it installs the package in the NPM cache. Make sure you run it again.

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

#### FieldGroup

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

##### How to migrate your FieldGroup components

The migration must be done manually, using the Layout component that best fits the user needs. The layout components are [Box](https://f36.contentful.com/components/box/), [Flex](https://f36.contentful.com/components/flex/), [Stack](https://f36.contentful.com/components/stack/), and [Grid](https://f36.contentful.com/components/grid/).

#### Form

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

##### How to migrate your Form components

To migrate your `Form` component to v4, run the following [codemod](https://github.com/contentful/forma-36/tree/v5/packages/forma-36-codemod):

```bash
npx @contentful/f36-codemod
```

Note: When running this command for the first time it installs the package in the NPM cache. Make sure you run it again.

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

#### FormLabel

`FormLabel` becomes a compound component of the new `FormControl` component. It must be updated to be wrapped by the `FormControl` component. For example:

```jsx static=true
<FormLabel htmlFor="inputId" required>Label for the input</FormLabel>
<TextInput name="input" id="inputId" />
```

becomes:

```jsx static=true
<FormControl.Label htmlFor="inputId" isRequired>Label for the input</FormControl.Label>
<TextInput name="input" id="inputId" />

// You can also use the FormControl to wrap it, and it would handle the id and isRequired
<FormControl isRequired id="inputId">
  <FormControl.Label>Label for the input</FormControl.Label>
  <TextInput name="input" />
</FormControl>
```

##### How to migrate your FormLabel components

You must manually migrate the `FormLabel` component by updating the usage. For example:

```jsx static=true
import { TextInput, FormLabel } from '@contentful/forma-36-react-components';

<FormLabel htmlFor="inputId" required requiredText="required field">Label for the input</FormLabel>
<TextInput name="input" id="inputId" />
```

into this new version:

```jsx static=true
import { FormControl, TextInput } from '@contentful/f36-components';

<FormControl.Label htmlFor="inputId" isRequired requiredText="required field">Label for the input</FormControl.Label>
<TextInput name="input" id="inputId" />

// You can also use the FormControl to wrap it, and it would handle the id and isRequired
<FormControl isRequired id="inputId">
  <FormControl.Label requiredText="required field">Label for the input</FormControl.Label>
  <TextInput name="input">
</FormControl>
```

### Grid

The Grid component is now part of the `@contentful/f36-core` package. We improved the Grid component by aligning its properties with our [code style guide](./docs/code-style-guide.md):

#### How to migrate your Grid components

To migrate your Grid component to v4, run the following [codemod](https://github.com/contentful/forma-36/tree/v5/packages/forma-36-codemod):

```bash
npx @contentful/f36-codemod
```

Note: When running this command for the first time it installs the package in the NPM cache. Make sure you run it again.

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

### HelpText

The properties of the HelpText component API have been aligned with our code [style guide](https://github.com/contentful/forma-36/blob/v5/docs/code-style-guide.md).

#### How to migrate your HelpText components

To migrate your HelpText component to v4, run the following [codemod](https://github.com/contentful/forma-36/tree/v5/packages/forma-36-codemod):

```bash
npx @contentful/f36-codemod
```

Note: When running this command for the first time it installs the package in the NPM cache. Make sure you run it again.

If you want to do it manually, you must transform your existing code as follows:

```tsx static=true
import { Form, HelpText } from '@contentful/forma-36-react-components';

<HelpText>Some help text outside form</HelpText>;

<Form>
  <HelpText>Help text inside form</HelpText>
</Form>;
```

into this new version:

```tsx static=true
import { Form, HelpText } from '@contentful/forma-36-react-components';

import { Text } from '@contentful/f36-components';

<Text as="p" fontColor="gray500" marginTop="spacingXs">
  Some help text outside form
</Text>;

<Form>
  <HelpText>Help text inside form</HelpText>
</Form>;
```

### List

The properties of the List component API have been aligned with our code [style guide](https://github.com/contentful/forma-36/blob/v5/docs/code-style-guide.md).

#### How to migrate your List components

To migrate your `List` component to v4, run the following [codemod](https://github.com/contentful/forma-36/tree/v5/packages/forma-36-codemod):

```bash
npx @contentful/f36-codemod
```

If you want to do it manually, you must transform your existing code as follows:

```tsx
import { List, ListItem } from '@contentful/forma-36-react-components';

<List element="ul" className="className" testId="testId">
  <ListItem>ListItem1</ListItem>
  <ListItem>ListItem2</ListItem>
</List>;
```

to this:

```tsx
import { List, ListItem } from '@contentful/f36-components';

<List as="ul" className="className" testId="testId">
  <ListItem>ListItem1</ListItem>
  <ListItem>ListItem2</ListItem>
</List>;
```

### Modal

In version 4, the Modal component buttons were moved from the left to the right side of the `<Modal.Controls>` component. We now recommend swapping action buttons: the primary action should be displayed as the first one from the right in the Modal. Have a look how to do it:

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

#### How to migrate your Modal components

To migrate your `Modal` component to v4, run the following [codemod](https://github.com/contentful/forma-36/tree/v5/packages/forma-36-codemod):

```bash
npx @contentful/f36-codemod
```

Note: When running this command for the first time it installs the package in the NPM cache. Make sure you run it again.

NOTE: If you are using Buttons inside Modal.Controls component, you have to add size="small" to the Buttons and swap buttons' positions manually, so the primary button is the last one.

If you want to migrate your `Modal` manually, you must transform your existing code as follows:

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

### Note

The properties of the Note component API have been aligned with our code [style guide](https://github.com/contentful/forma-36/blob/v5/docs/code-style-guide.md).

#### How to migrate your Note components

To migrate your `Note` component to v4, run the following [codemod](https://github.com/contentful/forma-36/tree/v5/packages/forma-36-codemod):

```bash
npx @contentful/f36-codemod
```

Note: When running this command for the first time it installs the package in the NPM cache. Make sure you run it again.

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
  title="Title example"
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
  title="Title example"
  variant="primary"
  withCloseButton
  onClose={() => {}}
>
  A piece of information that is relevant to the context the user is currently
  in.
</Note>;
```

### Notification

The properties of the Notification component API have been aligned with our code [style guide](https://github.com/contentful/forma-36/blob/v5/docs/code-style-guide.md).

#### How to migrate your Notification components

To migrate your `Notification` component to v4, run the following [codemod](https://github.com/contentful/forma-36/tree/v5/packages/forma-36-codemod):

```bash
npx @contentful/f36-codemod
```

Note: When running this command for the first time it installs the package in the NPM cache. Make sure you run it again.

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

### Pill

The API of the Pill component has not changed.

#### How to migrate your Pill component

To migrate your `Pill` component to v4, run the following [codemod](https://github.com/contentful/forma-36/tree/v5/packages/forma-36-codemod):

```bash
npx @contentful/f36-codemod
```

If you want to manually migrate your Pill component to v4, you must update the import. It changes from this:

```tsx
import { Pill } from '@contentful/forma-36-react-components';
```

to this:

```tsx
import { Pill } from '@contentful/f36-components';
```

### RelativeDateTime

The API of the RelativeDateComponent has not changed.

#### How to migrate your RelativeDateTime components

To migrate RelativeDateComponent to v4, you must update the import. From this:

```tsx static=true
import { RelativeDate } from '@contentful/forma-36-react-components';

<RelativeDate date="2020-08-17T15:45:00" baseDate="2020-07-17T15:45:00" />;
```

to this:

```tsx static=true
import { RelativeDate } from '@contentful/f36-components';

<RelativeDate date="2020-08-17T15:45:00" baseDate="2020-07-17T15:45:00" />;
```

### Skeleton

In v4, SkeletonContainer, we changed the `animate` prop to `isAnimated` to align with our code [style guide](https://github.com/contentful/forma-36/blob/v5/docs/code-style-guide.md).

#### How to migrate your Skeleton components

To migrate your `Skeleton` component to v4, run the following [codemod](https://github.com/contentful/forma-36/tree/v5/packages/forma-36-codemod):

```bash
npx @contentful/f36-codemod
```

Note: When running this command for the first time it installs the package in the NPM cache. Make sure you run it again.

If you want to do it manually, you must update imports and rename the `animate` prop to `isAnimated`:

```tsx
import {
  SkeletonContainer,
  SkeletonDisplayText,
  SkeletonText,
  SkeletonBodyText,
  SkeletonRow,
  Table,
  TableBody,
  SkeletonImage,
} from '@contentful/forma-36-react-components';

<SkeletonContainer animate={false}>
  <SkeletonDisplayText numberOfLines={1} />
  <SkeletonBodyText numberOfLines={3} offsetTop={35} />
</SkeletonContainer>;

<Table>
  <TableBody>
    <SkeletonRow />
  </TableBody>
</Table>;

<SkeletonContainer>
  <SkeletonImage />
  <SkeletonText />
</SkeletonContainer>;
```

The result should be like this:

```tsx
import React from 'react';
import { Table, TableBody } from '@contentful/forma-36-react-components';

import {
  SkeletonContainer,
  SkeletonRow,
  SkeletonBodyText,
  SkeletonDisplayText,
  SkeletonImage,
  SkeletonText,
} from '@contentful/f36-components';

<SkeletonContainer isAnimated={false}>
  <SkeletonDisplayText numberOfLines={1} />
  <SkeletonBodyText numberOfLines={3} offsetTop={35} />
</SkeletonContainer>;

<Table>
  <TableBody>
    <SkeletonRow />
  </TableBody>
</Table>;

<SkeletonContainer>
  <SkeletonImage />
  <SkeletonText />
</SkeletonContainer>;
```

### Spinner

In v4, we changed the `color` prop to `variant` - to align with our code [style guide](https://github.com/contentful/forma-36/blob/v5/docs/code-style-guide.md).

#### How to migrate your Spinner components

To migrate your `Spinner` component to v4, run the following [codemod](https://github.com/contentful/forma-36/tree/v5/packages/forma-36-codemod):

```bash
npx @contentful/f36-codemod
```

Note: When running this command for the first time it installs the package in the NPM cache. Make sure you run it again.

If you want to do it manually, you must transform your existing code from this:

```tsx
import { Spinner } from '@contentful/forma-36-react-components';

<Spinner color="default" size="default" />;

<Spinner color="primary" customSize={12} />;

<Spinner size="large" />;

<Spinner size="small" className="test-class-name" />;
```

to this:

```tsx
import { Spinner } from '@contentful/f36-components';

<Spinner variant="default" size="medium" />;

<Spinner variant="primary" customSize={12} />;

<Spinner size="large" />;

<Spinner size="small" className="test-class-name" />;
```

### Table

In version 4, the Table component becomes a compound component. There is also one property that got renamed: `selected` became `isSelected`.

#### How to migrate your Table components

To migrate your `Table` component to v4, run the following [codemod](https://github.com/contentful/forma-36/tree/v5/packages/forma-36-codemod):

```bash
npx @contentful/f36-codemod
```

Note: When running this command for the first time it installs the package in the NPM cache. Make sure you run it again.

If you want to do it manually, you must transform your existing code as follows:

```tsx
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@contentful/forma-36-react-components';

<Table layout="embedded">
  <TableHead>
    <TableRow>
      <TableCell>Name</TableCell>
      <TableCell>Email</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    <TableRow selected>
      <TableCell>Jane Roe</TableCell>
      <TableCell>jane@roe.com</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>John Doe</TableCell>
      <TableCell>john@doe.com</TableCell>
    </TableRow>
  </TableBody>
</Table>;
```

Into:

```tsx
import { Table } from '@contentful/f36-components';

<Table layout="embedded">
  <Table.Head>
    <Table.Row>
      <Table.Cell>Name</Table.Cell>
      <Table.Cell>Email</Table.Cell>
    </Table.Row>
  </Table.Head>
  <Table.Body>
    <Table.Row isSelected>
      <Table.Cell>Jane Roe</Table.Cell>
      <Table.Cell>jane@roe.com</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>John Doe</Table.Cell>
      <Table.Cell>john@doe.com</Table.Cell>
    </Table.Row>
  </Table.Body>
</Table>;
```

### Tabs

The Tabs component API has been improved. The `role` prop was removed. This is the current API structure:

```tsx static=true
import { Tabs } from '@contentful/f36-components';

<Tabs defaultTab="first">
  <Tabs.List variant="vertical-divider">
    <Tabs.Tab panelId="first">First</Tabs.Tab>
    <Tabs.Tab panelId="second">Second</Tabs.Tab>
    <Tabs.Tab panelId="third">Third</Tabs.Tab>
  </Tabs.List>
  <Tabs.Panel id="first">Content for the first tab</Tabs.Panel>
  <Tabs.Panel id="second">Content for the second tab</Tabs.Panel>
  <Tabs.Panel id="third">Content for the third tab</Tabs.Panel>
</Tabs>;
```

You can also use `Tabs` as a controlled component. For example:

```tsx static=true
import { Tabs } from '@contentful/f36-components';

() => {
  const [currentTab, setCurrentTab] = React.useState('first');
  return (
    <Tabs currentTab={currentTab} onTabChange={setCurrentTab}>
      <Tabs.List>
        <Tabs.Tab panelId="first">First</Tabs.Tab>
        <Tabs.Tab panelId="second">Second</Tabs.Tab>
        <Tabs.Tab panelId="third">Third</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel id="first">content first tab</Tabs.Panel>
      <Tabs.Panel id="second">content second tab</Tabs.Panel>
      <Tabs.Panel id="third">content third tab</Tabs.Panel>
    </Tabs>
  );
};
```

#### How to migrate your Tabs components

Because of the significant changes done to the Tabs API, you cannot run a codemod to migrate this component. You must manually migrate the Tabs component by replacing:

```tsx static=true
import { Tabs, Tab, TabPanel } from '@contentful/forma-36-react-components';

() => {
  const [selected, setSelected] = useState('first');

  const onSelect = (id) => {
    setSelected(id);
  }

  return (
    <div>
      <Tabs>
        <Tab
          id="first"
          selected={selected === 'first'}
          onSelect={onSelect}
        >
          First
        </Tab>
        <Tab
          id="second"
          selected={selected === 'second'}
          onSelect={onSelect}
        >
          Second
        </Tab>
      </Tabs>
      {selected === 'first' && (
        <TabPanel id="first">content first tab</TabPanel>
      )}
      {selected === 'second' && (
        <TabPanel id="second">content second tab</TabPanel>
      )}
    </div>
```

with:

```tsx static=true
import { Tabs } from '@contentful/f36-components';

<Tabs defaultTab="first">
  <Tabs.List>
    <Tabs.Tab panelId="first">First</Tabs.Tab>
    <Tabs.Tab panelId="second">Second</Tabs.Tab>
  </Tabs.List>
  <Tabs.Panel id="first">content first tab</Tabs.Panel>
  <Tabs.Panel id="second">content second tab</Tabs.Panel>
</Tabs>;
```

To keep the controlled version use:

```tsx static=true
import { Tabs } from '@contentful/f36-components';

() => {
  const [currentTab, setCurrentTab] = React.useState('first');

  return (
    <Tabs currentTab={currentTab} onTabChange={setCurrentTab}>
      <Tabs.List>
        <Tabs.Tab panelId="first">First</Tabs.Tab>
        <Tabs.Tab panelId="second">Second</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel id="first">content first tab</Tabs.Panel>
      <Tabs.Panel id="second">content second tab</Tabs.Panel>
    </Tabs>
  );
};
```

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

To migrate your v3 `Tag` component to v4 `Badge` run the following [codemod](https://github.com/contentful/forma-36/tree/v5/packages/forma-36-codemod):

```bash
npx @contentful/f36-codemod
```

Note: When running this command for the first time it installs the package in the NPM cache. Make sure you run it again.

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

### TextLink

In v4, we changed the API of the `TextLink` to align with our code style guide. For examples:

```tsx static=true
<TextLink disabled={false} linkType="muted" className="className" />s
```

becomes:

```tsx static=true
<TextLink
  as="button"
  isDisabled={false}
  variant="muted"
  className="className"
/>
```

#### How to migrate your TextLink components

To migrate your `TextLink` component to v4, run the following [codemod](https://github.com/contentful/forma-36/tree/v5/packages/forma-36-codemod):

```bash
npx @contentful/f36-codemod
```

Note: When running this command for the first time it installs the package in the NPM cache. Make sure you run it again.

If you want to do it manually, you must transform your existing code as follows:

```tsx static=true
import { TextLink } from '@contentful/forma-36-react-components';

<TextLink disabled={false} linkType="muted" className="className" />;

<TextLink disabled linkType="secondary" className="className" />;

<TextLink href="https://contentful.com" className="className" />;

<TextLink text="hello" className="className" />;

<TextLink icon="ArrowDown" iconPosition="left" className="className">
  text
</TextLink>;

<TextLink icon="Asset" iconPosition="right" className="className">
  text
</TextLink>;
```

into:

```tsx static=true
import { TextLink } from '@contentful/f36-components';

import { ArrowDownIcon, AssetIcon } from '@contentful/f36-icons';

<TextLink
  as="button"
  isDisabled={false}
  variant="muted"
  className="className"
/>;

<TextLink as="button" isDisabled variant="secondary" className="className" />;

<TextLink href="https://contentful.com" className="className" />;

<TextLink as="button" children="hello" className="className" />;

<TextLink
  as="button"
  icon={<ArrowDownIcon />}
  alignIcon="start"
  className="className"
>
  text
</TextLink>;

<TextLink
  as="button"
  icon={<AssetIcon />}
  alignIcon="end"
  className="className"
>
  text
</TextLink>;
```

### ToggleButton

In v4, we changed the API of the `ToggleButton` to align it with the new way we use icons on our components. For examples:

```tsx static=true
<ToggleButton isActive icon="Calendar">
  Embed Entry
</ToggleButton>
```

becomes:

```tsx static=true
<ToggleButton isActive icon={<CalendarIcon />}>
  Embed Entry
</ToggleButton>
```

#### How to migrate your ToggleButton components

You must manually migrate the version 3 `ToggleButton` component by updating the `icon` prop. For example:

```tsx static=true
<ToggleButton isActive icon="Calendar">
  Embed Entry
</ToggleButton>
<ToggleButton isActive icon="Plus">
  Add Entry
</ToggleButton>
```

becomes:

```tsx static=true
<ToggleButton isActive icon={<CalendarIcon />}>
  Embed Entry
</ToggleButton>
<ToggleButton isActive icon={<PlusIcon />}>
  Add Entry
</ToggleButton>
```

### Tooltip

In v4, we renamed two Tooltip props: `containerElement` is now `as` and `place` is now `placement`.

#### How to migrate your Tooltip components

To migrate your `Tooltip` component to v4, run the following [codemod](https://github.com/contentful/forma-36/tree/v5/packages/forma-36-codemod):

```bash
npx @contentful/f36-codemod
```

Note: When running this command for the first time it installs the package in the NPM cache. Make sure you run it again.

If you want to do it manually, you must transform your existing code as follows:

```tsx
import { Tooltip } from '@contentful/forma-36-react-components';

<Tooltip content="content of the Tooltip" containerElement="div" place="left">
  <TextLink>Hover me</TextLink>.
</Tooltip>;
```

into:

```tsx
import { Tooltip } from '@contentful/f36-components';

<Tooltip content="content of the Tooltip" as="div" placement="left">
  <TextLink>Hover me</TextLink>.
</Tooltip>;
```

### Typography

In version 4, `Typography` component has been removed, and there are changes on the API of [Paragraph](https://f36.contentful.com/components/paragraph/), [Heading](https://f36.contentful.com/components/heading/), [SectionHeading](https://f36.contentful.com/components/section-heading/), [Subheading](https://f36.contentful.com/components/subheading/), and [DisplayText](https://f36.contentful.com/components/display-text/) to align with our code [style guide](https://github.com/contentful/forma-36/blob/v5/docs/code-style-guide.md).

#### How to migrate your Typography components

To migrate your `Typography` components to v4, run the following [codemod](https://github.com/contentful/forma-36/tree/v5/packages/forma-36-codemod):

```bash
npx @contentful/f36-codemod
```

If you want to do it manually, you must transform your existing code as follows:

```tsx
import {
  Heading,
  Subheading,
  SectionHeading,
  Paragraph,
  DisplayText,
} from '@contentful/forma-36-react-components';

<Heading element="h4" className="className">
  Some text
</Heading>;

<Subheading element="h2" className="className">
  Some text
</Subheading>;

<SectionHeading element="h4" className="className">
  Some text
</SectionHeading>;

<Paragraph element="p" className="className">
  Some text
</Paragraph>;

<DisplayText size="large" element="h4" className="className">
  Some text
</DisplayText>;
```

into:

```tsx
import {
  Heading,
  DisplayText,
  Paragraph,
  Subheading,
  SectionHeading,
} from '@contentful/f36-components';

<Heading marginBottom="none" as="h4" className="className">
  Some text
</Heading>;

<Subheading marginBottom="none" as="h2" className="className">
  Some text
</Subheading>;

<SectionHeading marginBottom="none" as="h4" className="className">
  Some text
</SectionHeading>;

<Paragraph marginBottom="none" as="p" className="className">
  Some text
</Paragraph>;

<DisplayText marginBottom="none" size="large" as="h4" className="className">
  Some text
</DisplayText>;
```

For components wrapped with Typography component, change:

```tsx
<Typography>
  <Heading element="h4" className="className">
    Some text
  </Heading>
</Typography>;

<Typography>
  <Subheading element="h2" className="className">
    Some text
  </Subheading>
</Typography>;

<Typography>
  <SectionHeading element="h4" className="className">
    Some text
  </SectionHeading>
</Typography>;

<Typography>
  <Paragraph element="p" className="className">
    Some text
  </Paragraph>
</Typography>;

<Typography>
  <DisplayText size="large" element="h4" className="className">
    Some text
  </DisplayText>
</Typography>;
```

into:

```tsx
<React.Fragment>
  <Heading as="h4" className="className">
    Some text
  </Heading>
</React.Fragment>;

<React.Fragment>
  <Subheading as="h2" className="className">
    Some text
  </Subheading>
</React.Fragment>;

<React.Fragment>
  <SectionHeading as="h4" className="className">
    Some text
  </SectionHeading>
</React.Fragment>;

<React.Fragment>
  <Paragraph as="p" className="className">
    Some text
  </Paragraph>
</React.Fragment>;

<React.Fragment>
  <DisplayText size="large" as="h4" className="className">
    Some text
  </DisplayText>
</React.Fragment>;
```

For deeply nested components, change:

```tsx
<Typography>
  <div>
    <div>
      <div>
        <Paragraph element="p" className="className">
          Some text
        </Paragraph>
      </div>
      <Subheading element="h2" className="className">
        Some text
      </Subheading>
    </div>
  </div>
</Typography>
```

into:

```tsx
<React.Fragment>
  <div>
    <div>
      <div>
        <Paragraph as="p" className="className">
          Some text
        </Paragraph>
      </div>
      <Subheading as="h2" className="className">
        Some text
      </Subheading>
    </div>
  </div>
</React.Fragment>
```

### Workbench

In version 4, Workbench got moved into a separate package. Because this component will eventually be deprecated, we did not include it in the main package. To use this component you must install it from a separate package:

```bash
npm install @contentful/f36-workbench
```

```bash
yarn add @contentful/f36-workbench
```

We also removed `labelText` in the version 4 of Workbench.

#### How to migrate your Workbench components

```tsx
import { Workbench } from '@contentful/forma-36-react-components';

<Workbench>
  <Workbench.Header
    title="title"
    description="description"
    icon={{}}
    actions={{}}
  />
  <Workbench.Sidebar
    position="left"
    labelText="Example label text"
  ></Workbench.Sidebar>
  <Workbench.Content type="default"></Workbench.Content>
  <Workbench.Sidebar
    position="right"
    labelText="Example label text"
  ></Workbench.Sidebar>
</Workbench>;
```

Into:

```tsx
import { Workbench } from '@contentful/f36-workbench';

<Workbench>
  <Workbench.Header
    title="title"
    description="description"
    icon={{}}
    actions={{}}
  />
  <Workbench.Sidebar position="left"></Workbench.Sidebar>
  <Workbench.Content type="default"></Workbench.Content>
  <Workbench.Sidebar position="right"></Workbench.Sidebar>
</Workbench>;
```
