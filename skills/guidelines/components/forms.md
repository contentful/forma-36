# Forms

Every input must live inside a `FormControl`. No exceptions.

## FormControl

The wrapper for all form fields. Propagates state to children automatically.

```tsx
<FormControl isRequired>
  <FormControl.Label>Name</FormControl.Label>
  <TextInput value={name} onChange={e => setName(e.target.value)} />
  <FormControl.HelpText>The display name for this content type</FormControl.HelpText>
</FormControl>

<FormControl isRequired isInvalid={!!error}>
  <FormControl.Label>API ID</FormControl.Label>
  <TextInput value={apiId} onChange={e => setApiId(e.target.value)} />
  <FormControl.ValidationMessage>{error}</FormControl.ValidationMessage>
</FormControl>
```

**Structure order:** Label → Input → HelpText → ValidationMessage

| Prop | Type | Notes |
|---|---|---|
| `isRequired` | boolean | Shows asterisk on label |
| `isInvalid` | boolean | Shows validation message, red border on input |
| `isDisabled` | boolean | Disables the input |
| `isReadOnly` | boolean | |
| `as` | `'div'` `'fieldset'` | Use `fieldset` for checkbox/radio groups |

**Sub-components:**
- `FormControl.Label` — required for accessibility. Use `as="legend"` inside fieldsets
- `FormControl.HelpText` — always-visible guidance
- `FormControl.ValidationMessage` — error text, appears when `isInvalid`
- `FormControl.Counter` — character count

Set state props on FormControl, not on the input directly.

## TextInput

Short free text.

```tsx
<TextInput value={val} onChange={e => setVal(e.target.value)} placeholder="e.g. Blog Post" />
<TextInput type="search" icon={<SearchIcon />} />
```

| Prop | Type |
|---|---|
| `value` / `onChange` | standard |
| `placeholder` | string |
| `size` | `'small'` `'medium'` |
| `icon` | ReactNode |
| `type` | `'text'` `'email'` `'number'` `'password'` `'search'` `'url'` |

Use `TextInput.Group` to pair an input with an adjacent action button.

## Textarea

Long-form text. Always inside FormControl.

```tsx
<Textarea value={desc} onChange={e => setDesc(e.target.value)} rows={4} />
```

## Select

For 2–8 options. Never use Select for triggering actions (use Menu).

```tsx
<Select value={type} onChange={e => setType(e.target.value)}>
  <Select.Option value="text">Text</Select.Option>
  <Select.Option value="number">Number</Select.Option>
</Select>
```

## Autocomplete

For lists >8 items or when search is needed. Manage filtering externally.

```tsx
<Autocomplete
  items={filteredItems}
  onSelectItem={item => setSelected(item)}
  onInputValueChange={val => setFilter(val)}
  itemToString={item => item?.name ?? ''}
/>
```

## Multiselect

Multiple selection from a list.

```tsx
<Multiselect currentSelection={selected} placeholder="Select tags">
  {tags.map(tag => (
    <Multiselect.Option
      key={tag.id}
      itemId={tag.id}
      value={tag.id}
      label={tag.name}
      onSelectItem={() => toggle(tag)}
      isChecked={selected.includes(tag)}
    />
  ))}
</Multiselect>
```

## Checkbox

Selection that requires a save action.

```tsx
<Checkbox isChecked={checked} onChange={() => setChecked(!checked)}>
  Enable webhooks
</Checkbox>
```

Use `Checkbox.Group` for multiple selections. `isIndeterminate` for partial selection.

## Radio

Mutually exclusive single selection.

```tsx
<Radio.Group value={type} onChange={e => setType(e.target.value)}>
  <Radio value="short">Short text</Radio>
  <Radio value="long">Long text</Radio>
</Radio.Group>
```

## Switch

Toggle with immediate effect (no save needed).

```tsx
<Switch isChecked={enabled} onChange={() => setEnabled(!enabled)}>Dark mode</Switch>
```

Use Switch when the action takes effect immediately. Use Checkbox when a save is required.

## DatePicker

Calendar date input.

```tsx
<DatePicker value={date} onChange={setDate} dateFormat="day" />
```

| Prop | Type |
|---|---|
| `value` / `onChange` | Date |
| `dateFormat` | `'full'` `'day'` `'time'` |
| `minDate` / `maxDate` | Date |
