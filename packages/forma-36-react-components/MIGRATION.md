# Migration notes

## Migrating from Forma v2.X.X to Forma v3.X.X

Forma v3.0.0 has a number of breaking changes, here is a summary of what has changed since version v2.x.x:

### Deprecated `extraClassNames` prop for all components

The `extraClassNames` prop has been renamed to `className` for all components. This removes the cognitive load of having to remember how to add extra class names to a component by making it consistent with the regular className prop.

**Example**

```jsx
// Before
<Button extraClassNames="my-custom-class">My button</Button>

// After
<Button className="my-custom-class">My button</Button>
```

### Remove statically exported constants

The Note and Modal components previously used statically exported constants for sharing constants between stories, tests, and component files. This has now been removed and instead stories and tests use strings.

### Modal component props

The `Modal` component contains a pre-configured combination of sub-components such as `Modal.Header` and `Modal.Content`. Previously the `isNotWrapped` prop on the `Modal.Header` component was passed to the Modal component using the `isNotWrapped` prop.

This has changed in favour of the convention of passing props down to child props (in the case of `Modal.Header` you now pass `modalHeaderProps`).

**Example**

```jsx
// Before
<Modal isNotWrapped>
  Content
</Modal>

// After
<Modal modalHeaderProps={{isNotWrapped: true}}>
  Content
</Modal>
```

### Renaming of ReferenceCard/InlineReferenceCard components

The `ReferenceCard` and `InlineReference` card components have been renamed to better describe the content they represent.

**Example**

```jsx
// Before
<ReferenceCard title="Entry title" />

<InlineReferenceCard>
  Entry title
</InlineReferenceCard>

// After
<EntryCard title="Entry title" />

<InlineEntryCard>
  Entry title
</InlineEntryCard>
```

### Card component actions

All Card components (`AssetCard`, `EntryCard`, `InlineEntryCard`) now use the new `CardActions` component to render actions. To render this component you should now use the `dropdownListElements` prop to pass a `DropdownList` containing `DropdownListItem`s. This is a breaking change for `EntryCard` and `InlineEntryCard` components.

**ReferenceCard example**

```jsx
// Before
<ReferenceCard
  title="Entry title"
  actionElements={
    <div>
      <IconButton
        buttonType="muted"
        iconProps={{ icon: 'Edit' }}
        label="Edit entry"
        key="0"
      />
      <IconButton
        buttonType="muted"
        iconProps={{ icon: 'Close' }}
        label="Remove reference"
        key="1"
      />
    </div>
  }
/>

// After
<EntryCard
  title="Entry title"
  dropdownListElements={
    <DropdownList>
      <DropdownListItem key="edit" onClick={() => {}}>
        Edit
      </DropdownListItem>
      <DropdownListItem key="remove" onClick={() => {}}>
        Remove
      </DropdownListItem>
    </DropdownList>
  }
/>

**InlineReferenceCard example**

```

// Before
<InlineReferenceCard
dropdownListItemNodes={[
<DropdownListItem key="edit" onClick={() => {}}>
Edit
</DropdownListItem>,
<DropdownListItem key="remove" onClick={() => {}}>
Remove
</DropdownListItem>,
]}

> Entry title
> </InlineReferenceCard>

// After
<InlineEntryCard
dropdownListElements={
<DropdownList>
<DropdownListItem key="edit" onClick={() => {}}>
Edit
</DropdownListItem>
<DropdownListItem key="remove" onClick={() => {}}>
Remove
</DropdownListItem>
</DropdownList>
}

> Entry title
> </InlineEntryCard>

```

```
