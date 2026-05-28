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

### When to use AiPill vs PillNext

Use `AiPill` for content that was generated or suggested by AI — it communicates to users that the item originates from an AI system. Use `PillNext` for user-created or system-defined metadata where the AI distinction is not relevant.
