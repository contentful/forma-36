# AI Components

This package is a pre-release. This means it is unsupported and subject to breaking changes without warning.

A collection of components for use in AI applications, such as conversational interfaces.

## AiPill

A pill component with AI-specific visual treatment. Composes `PillNext` from `@contentful/f36-pill-next` internally.

### Import

```js
import { AiPill } from '@contentful/f36-ai-components';
```

### Usage

```tsx
<AiPill label="Machine learning" onRemove={() => {}} />
```

### Props

| Prop                | Type         | Default           | Description                         |
| ------------------- | ------------ | ----------------- | ----------------------------------- |
| `label`             | `string`     | —                 | Text displayed in the pill          |
| `onRemove`          | `() => void` | —                 | Callback when remove button clicked |
| `removeButtonLabel` | `string`     | `"Remove"`        | Accessible label for remove button  |
| `isDisabled`        | `boolean`    | `false`           | Disables the remove button          |
| `className`         | `string`     | —                 | Additional class name for the pill  |
| `testId`            | `string`     | `"cf-ui-ai-pill"` | Test ID for the root element        |

### Visual treatment

- Gradient border (AI Gradient/Default) via CSS mask technique
- Gradient background (AI Gradient/Shimmer at 5% opacity)
- Purple/600 (`#6c3ecf`) label and remove icon color
- Purple/200 (`#EDE3FF`) hover background on remove button
- Disabled state keeps the purple icon
