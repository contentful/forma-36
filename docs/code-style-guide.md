# F36 Code Styleguide

## Purpose

To have a consistent and predictable code and component apis, we will create Code Style Guide to adapt in Forma 36 version 4 refactors

## Terminology

Element: Refers to an html tag or react component

## General rules (TODO: add examples)

- Avoid using html attributes name as props if the purpose of the prop is different

- Avoid using inline style unless manipulating high dynamic values e.g. width, height, etc. (prefer classname)

- When defining the component props names, which accepts callbacks, use prefix `on` (e.g. `onClick`). For the function/methods names use prefix `handle` (e.g. `handleClick`).

```jsx
function MyComponent() {
  const handleClick = () => {...}
  return <OtherComponent onClick={handleClick}>Action</OtherComponent>
}
```

- Prefix root element props value with root… e.g. `rootClassNames = cx(…)`

- Prefix boolean flags with `is..` e.g. `isActive`

- Prefix boolean flags that controls showing/hiding child components with `with` (e.g `withDivider`). [Real code example](https://github.com/contentful/forma-36/blob/9f149b09d11c5b8f7293df140458e6020dc8090d/packages/components/button/src/ButtonGroup/types.ts#L14-L18)

- Prefix component types with component names (YourComponentNameProps for component types and interfaces (e.g. ButtonProps))

- Use `camelCase` for prop names

- Do not come up with a name if a prop is used to define a specific css property.

## Commonly used Props

| **Name**      | **Type**                     | **Description**                                                                                                                                                                                                                                                            |
| ------------- | ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| className     | `string`                     | Pass and process class names                                                                                                                                                                                                                                               |
| variant       | `primary, warning`           | Design variants                                                                                                                                                                                                                                                            |
| type          |                              | HTML `type` attribute                                                                                                                                                                                                                                                      |
| as            | `React.ElementType`          | HTML tag elements                                                                                                                                                                                                                                                          |
| children      | `React.ReactNode`            | React children                                                                                                                                                                                                                                                             |
| style         | `object`                     | Inline styles                                                                                                                                                                                                                                                              |
| isVisible     | `boolean`                    | Show/Hide element                                                                                                                                                                                                                                                          |
| isActive      | `boolean`                    | Set/Unset active state                                                                                                                                                                                                                                                     |
| isDisabled    | `boolean`                    | Disable/Enable interactive elements                                                                                                                                                                                                                                        |
| spacing       | `SpacingTokens`              | Spacing, one of F36 spacing values or css flex justifyContent values                                                                                                                                                                                                       |
| testId        | `string`                     | Pass to `data-test-id` to html elements                                                                                                                                                                                                                                    |
| ...otherProps | `object`                     | Spread the rest of the props on the root element                                                                                                                                                                                                                           |
| size          | `large, medium, small, tiny` | Size variants of elements                                                                                                                                                                                                                                                  |
| label         | `string`                     | Aria-label attribute                                                                                                                                                                                                                                                       |
| align         | `start, end`                 | Element alignment. Can be both X or Y axis. But not at the same time. If you need both axis alignment for the same element consider using `placement` prop instead. If you need to align specific element, add element name to the end of the prop name (e.g. `alignIcon`) |

## Callback Props

Keep names identical to react events names for the root element, e.g. `onClick`, `onChange`,…etc.
To expose nested elements events add element name between `on..Click`, e.g. `onChildClick`

| **Name**  | **Purpose**                         |
| --------- | ----------------------------------- |
| onClick   | Propagate and process click events  |
| onChange  | Propagate and process change events |
| onFocus   | Propagate and process focus events  |
| onKeyDown | Propagate and process keydown event |

## Handlers function names

| **Name**     | **Purpose**           |
| ------------ | --------------------- |
| handleClick  | Process click events  |
| handleChange | Process change events |
