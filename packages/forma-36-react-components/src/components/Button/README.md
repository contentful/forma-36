# Button

Buttons communicate the action that will occur when the user clicks them. They communicate calls to action to the user and allow users to interact with pages in a variety of ways. They contain a text label to describe the action, and an icon if appropriate.

## Button types

- **Primary** - Used for the most important actions in any scenario. Don’t use more than one primary button in a section or screen to avoid overwhelming users.
- **Muted** - Used for a secondary actions, the most commonly used button type.
- **Positive** - For use when the action has a positive connotation such as creating or publishing a new entity.
- **Negative** - For destructive actions - when something can't be undone. For example, deleting entities.
- **Naked** - Link button

```jsx
<>
  <Button buttonType="primary">Primary</Button>
  <Button buttonType="negative">Negative</Button>
  <Button buttonType="positive">Positive</Button>
  <Button buttonType="muted">Muted</Button>
  <Button buttonType="naked">Naked</Button>
</>
```
Buttons can be used in couple of different variations, like active, disabled or loading. Worth mentioning is `indicateDropdown` property in the component, which enables chevron icon on the right side of the button. Using `icon` property in the Button on the other hand, enables choosen icon on the left side of the button.

Contentful buttons are available in 3 different sizes: 
```jsx
<>
  <Button buttonType="positive" size="large">Large</Button>
  <Button buttonType="positive">Default</Button>
  <Button buttonType="positive" size="small">Small</Button>
</>
```

## Examples of usage

```jsx
import {Button} from '@contentful/forma-36-react-components';

<Button buttonType="primary" data-test-id="create-content-type-empty-state">Add content type</Button>

```

Usage of the button with icon

```jsx
import {Button} from '@contentful/forma-36-react-components';

<Button buttonType="primary" icon="Star">Primary star</Button>

```

## Best practices

- Position buttons in consistent places in the interface
- Reduce complexity by using a small number of actions. Too many actions can create confusion when having to decide

## Content recommendations:

 - UI usage - Button labels should be no longer than 3 words
 - Webpage usage - Button labels should be no longer than 5 words
 - Start labels with action verbs. If the button is part of an action dialog, make sure it matches the dialog header.
 - Use specific words, ideally ones that align with preceding content.
 - For buttons that are used to cancel destructive actions: label them "Never mind" or similar, instead of cancel. It makes things much easier for users to understand.

## Accessibility

Button component is used to trigger an action or event. By default button is implemented using the native `<button>` element with the proper type="button" provided. If the href element is provided, then the element would be rendered as `<a>` element in the document.
When a button has focus, both the Space and Enter keys will activate the button. If the button is disabled, then the disabled attribute is provided.
Contentful buttons are checked in terms of color contrast and pass all the requirements.
Buttons have a focus state when using keyboard navigation.

## Properies overview:

|Prop|Description|
|-|-|
|`icon`| string, optional, one of IconType |
|`indicateDropdown`| boolean, optional, adds cheveron icon on the right side of the button |
|`onClick`| optional, MouseEventHandler |
|`isFullWidth`| boolean, optional, sets width to 100% |
|`loading`| boolean, optional, sets loading state with spinner |
|`disabled`| boolean, optional, sets disable state |
|`isActive`| boolean, optional, sets active state |
|`onBlur`| optional, FocusEventHandler |
|`testId`| string, optional, additional attibute for testing pursposes |
|`buttonType`| string, optional, one of `primary` `positive` `negative` `warning` `muted` `naked`, default `primary` |
|`type`| string, optional, one of `button` `submit` `reset`, default `button` |
|`size`| string, optional, one of `small` - 30px, default 40px, `large` - 46px |
|`href`| string, optional, href prop, it also transforms button into <a> |
|`style`| optional, CSSProperties |
|`className`| string, optional, class names to be appended to the className prop of the component |
|`children`| React.ReactNode, optional, child nodes to be rendered in the component |
