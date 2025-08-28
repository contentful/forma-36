# Migration Guideline Icon from v4.X.X to v5.X.X

The `Icon` component has been significantly updated in version 5, introducing several breaking changes to its API. The available icon sizes have been streamlined to three options for greater consistency and ease of use. The `trimmed` and `variant` props have been removed to simplify the component. Instead, a new `color` prop has been added, allowing for more flexible icon styling. Additionally, an `isActive` prop is now available to indicate the active state of an icon.

## Icon Prop

| Property Name | Type                                    | Description                                                                                                                                         | Status    |
| ------------- | --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| `size`        | IconSize                                | Supports three sizes `medium`: 20px x 20px, `small`: 16px x 16px, and `tiny`: 14px x 14px. The sizes `xlarge`: 48px x 48px and `large`: 32px x 32px | updated   |
| `trimmed`     | boolean                                 |                                                                                                                                                     | removed   |
| `variant`     | IconVariant                             |                                                                                                                                                     | removed   |
| `color`       | string                                  | Allows setting the icon color directly via a string value.                                                                                          | new       |
| `isActive`    | boolean                                 | Indicates whether the icon is in an active state.                                                                                                   | new       |
| `viewBox`     | SVGAttributes<SVGSVGElement>['viewBox'] | Allows custom SVG viewBox.                                                                                                                          | unchanged |
| `children`    | ReactElement \| ReactElement[]          |                                                                                                                                                     | unchanged |

## Code Example

### Before

```tsx static=true
import { Icon } from '@contentful/f36-icons';
import { MdAccessAlarm } from 'react-icons/md';

const AccessAlarm = (props) => {
  return <Icon {...props} as={MdAccessAlarm} variant="secondary" />;
};
```

### After

```tsx static=true
import { Icon } from '@contentful/f36-icons';
import { MdAccessAlarm } from 'react-icons/md';
import tokens from '@contentful/f36-tokens';

const AccessAlarm = (props) => {
  return (
    <Icon {...props} as={MdAccessAlarm} color={tokens.colorPositive} isActive />
  );
};
```

### Run the migration script

We provide an automated migration script to help you update all existing Forma 36 icons to use the new props and the updated icon set based on Phosphor icons.

```bash
npx @contentful/f36-codemod
```
