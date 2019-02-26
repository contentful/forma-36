# Typography

A wrapper to automatically add bottom margins to Typography components

## When to use

The `<Typography>` component should be used to wrap a group of typography components (`<Heading>`, `<Paragraph>`, etc) for cases where you wish to display these components with default margins.

We follow the principle that a component should only be responsible for its own internal spacing - never its external spacing. This means that we're flexible in where our components can be used without having to override margins.

We use bottom margins only as it is easier to control layout and avoid adding any unintentional spacing when only using margins in single direction.

## Best practices

Use the Typography component to wrap a group of typography components.

#### Example

```
<Typography>
    <Heading>My heading</Heading>
    <Paragraph>My paragraph</Paragraph>
</Typography>
```
