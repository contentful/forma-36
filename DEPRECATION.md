# Deprecation Process

This document outlines the process for deprecating components, props, and features in Forma 36. Following a consistent deprecation process ensures that consumers of the design system have adequate time to migrate away from deprecated APIs while maintaining stability and clear communication.

## Table of Contents

- [When to Deprecate](#when-to-deprecate)
- [Deprecation Timeline](#deprecation-timeline)
- [Communication Process](#communication-process)
- [Implementation Guidelines](#implementation-guidelines)
- [Creating Changesets for Deprecations](#creating-changesets-for-deprecations)
- [Migration Guide Requirements](#migration-guide-requirements)
- [Examples](#examples)

## When to Deprecate

**Deprecation is specifically for breaking changes.** The deprecation process allows us to introduce breaking changes in a controlled manner by giving consumers advance notice and time to migrate. If a change can be made without breaking existing functionality (e.g., adding new props, extending accepted values, adding new components), it does not require deprecation.

Consider deprecating a component, prop, or feature when:

- **Replacement available**: A better alternative exists that provides the same or improved functionality
- **Design system evolution**: The component no longer aligns with current design principles
- **Performance issues**: A more performant solution is available
- **Accessibility improvements**: A more accessible alternative exists
- **API simplification**: Consolidating similar functionality to reduce confusion
- **Technical debt**: Removing outdated patterns or dependencies

**Do NOT deprecate when:**

- No clear migration path exists
- The feature is still widely used without a suitable alternative
- The change would cause excessive disruption without significant benefit
- The change can be performed non-breaking e.g. adding additional properties or extending accepted values

## Deprecation Timeline

We follow a **gradual deprecation approach** aligned with [semantic versioning](https://semver.org/):

### Phase 1: Deprecation (Minor Release)

- Mark the feature as deprecated
- Add an entry for this feature / component into the deprecation log
- Add runtime console warnings (development only)
- Update documentation with deprecation notices
- Provide migration guide
- Create codemod if applicable (for complex migrations)
- Feature remains fully functional
- Feature is in maintenance mode and will receive security updates as well as bug fixes

**Minimum duration**: At least **one major version cycle** or **6 months**, whichever is longer

### Phase 2: Removal (Major Release)

- Remove the deprecated feature in the next major version
- Update documentation and examples
- Update migration guides

### Example Timeline

```text
v4.10.0 (Minor) - Component deprecated, warnings added
v4.11.0 - v4.x  - Deprecated but functional
v5.0.0  (Major) - Component removed
```

Or if the next major version is sooner than 6 months

```text
v4.10.0 (Minor) - Component deprecated, warnings added
v4.11.0 - v4.x  - Deprecated but functional
v5.0.0 (Major)  - Deprecated but functional
v5.0.0 - v5.x   - Deprecated but functional
v6.0.0  (Major) - Component removed
```

## Communication Process

Effective communication is crucial for successful deprecations. Follow these steps:

### 1. Internal Discussion

- Discuss deprecation with the team
- Document reasons and alternatives
- Plan migration strategy
- Consider impact on known consumers

### 2. Documentation Updates

Update the following locations:

#### Component Documentation

Add a prominent deprecation notice at the top of the component page:

```markdown
> **⚠️ Deprecated**: This component is deprecated and will be removed in v5.0.0.
> Please use [NewComponent](link) instead. See the [migration guide](#migration).
```

#### Changelog

Include deprecation notices in the package CHANGELOG:

```markdown
### Deprecated

- **ComponentName**: Deprecated in favor of NewComponent. Will be removed in v5.0.0.
```

### Deprecationlog

Document the deprecated feature or component in the Deprecation log

### 3. Runtime Warnings

Add console warnings in development mode:

```typescript
if (process.env.NODE_ENV === 'development') {
  console.warn(
    'Warning: `OldComponent` is deprecated and will be removed in v5.0.0. ' +
      'Please use `NewComponent` instead. ' +
      'See migration guide: https://f36.contentful.com/components/old-component#migration',
  );
}
```

For deprecated props on components still in use:

```typescript
if (process.env.NODE_ENV === 'development' && oldProp !== undefined) {
  console.warn(
    '`oldProp` on ComponentName is deprecated and will be removed in v5.0.0. ' +
      'Please use `newProp` instead.',
  );
}
```

### 4. Community Communication

- Announce deprecation in release notes
- Consider posting in community channels
- For major deprecations, consider a blog post

## Implementation Guidelines

### TypeScript Support

Use TypeScript's `@deprecated` JSDoc tag for IDE support:

```typescript
/**
 * @deprecated Use NewComponent instead. Will be removed in v5.0.0.
 * @see {@link NewComponent}
 */
export const OldComponent: React.FC<OldComponentProps> = (props) => {
  // Implementation
};
```

### Prop Deprecation

For individual props, keep the prop functional but add type annotations:

````typescript
export interface ComponentProps {
  /**
   * @deprecated Use `variant` prop instead. Will be removed in v5.0.0.
   */
  type?: 'primary' | 'secondary';

  /** The variant of the component */
  variant?: 'primary' | 'secondary';
}
```rop?: string;
````

### Export Strategy

Keep deprecated exports available but marked:

```typescript
// src/index.ts
export { NewComponent } from './NewComponent';

/**
 * @deprecated Use NewComponent instead
 */
export { OldComponent } from './OldComponent';
```

## Creating Changesets for Deprecations

When adding a deprecation, create a changeset that clearly indicates the deprecation:

```bash
npx changeset
```

Structure the changeset with clear messaging:

```markdown
---
'@contentful/f36-components': minor
'@contentful/f36-button': minor
---

**Deprecated**

- `OldButton`: Deprecated in favor of `Button` with `variant` prop. Will be removed in v5.0.0
- Migration guide available at: https://f36.contentful.com/components/button#migration
```

### Changeset Guidelines

- **Version bump**: Deprecations are `minor` changes (new warnings, not breaking)
- **Label clearly**: Start with `**Deprecated**` in the description
- **Provide context**: Explain what's deprecated and what to use instead
- **Link to docs**: Always include a link to migration guidance
- **Removal is major**: When actually removing, use `major` version bump

## Migration Guide Requirements

Every deprecation must include a migration guide. The guide should contain:

### 1. Clear Statement

- What is being deprecated
- When it will be removed
- Why it's being deprecated

### 2. Before/After Examples

```tsx
// ❌ Deprecated - will be removed in v5.0.0
<OldButton type="primary">Click me</OldButton>

// ✅ Recommended
<Button variant="primary">Click me</Button>
```

### 3. Prop Mapping Table

For complex components, provide a mapping:

| Old Prop     | New Prop   | Notes                   |
| ------------ | ---------- | ----------------------- |
| `type`       | `variant`  | Direct replacement      |
| `size`       | `size`     | Unchanged               |
| `isDisabled` | `disabled` | Renamed for consistency |

### 4. Edge Cases and Gotchas

Document any behavioral differences:

```markdown
### Important Changes

- The new component uses CSS Grid instead of Flexbox
- Default spacing has changed from 16px to 12px
- Event handlers now receive synthetic events (previously native)
```

### 5. Codemod Availability

If a codemod is available, provide instructions:

```bash
npx @contentful/forma-36-codemod old-button-to-button path/to/files
```

### 6. Support Contact

Provide a way to get help:

```markdown
If you encounter issues during migration, please:

- Check our [GitHub Issues](https://github.com/contentful/forma-36/issues)
- Send us direct feedback via [our form](https://forms.gle/j3oC9GuhxEJ1DF4k6)
```

## Examples

### Example 1: Deprecating a Component Prop

```typescript
export interface ButtonProps {
  /**
   * The visual style of the button
   */
  variant?: 'primary' | 'secondary' | 'positive' | 'negative';

  /**
   * @deprecated Use `variant` instead. Will be removed in v5.0.0.
   */
  buttonType?: 'primary' | 'secondary' | 'positive' | 'negative';
}

export const Button: React.FC<ButtonProps> = ({
  variant,
  buttonType,
  ...props
}) => {
  if (process.env.NODE_ENV === 'development' && buttonType) {
    console.warn(
      'Button: `buttonType` prop is deprecated. Use `variant` instead. ' +
      'This prop will be removed in v5.0.0.'
    );
  }

  const actualVariant = variant ?? buttonType ?? 'primary';

  return <button className={`button-${actualVariant}`} {...props} />;
};
```

### Example 2: Deprecating an Entire Component

````typescript
// NewCard.tsx - The replacement component
export const Card: React.FC<CardProps> = (props) => {
  // New implementation
};

// OldCard.tsx - The deprecated component
import { Card } from './Card';

/**
 * @deprecated Use `Card` from '@contentful/f36-card' instead.
 * Will be removed in v5.0.0.
 *
 * @see {@link Card} for the replacement component
 * @example
 * ```tsx
 * // Before
 * <LegacyCard padding="large">Content</LegacyCard>
 *
 * // After
 * <Card padding="12px">Content</Card>
 * ```
 */
export const LegacyCard: React.FC<LegacyCardProps> = (props) => {
  if (process.env.NODE_ENV === 'development') {
    console.warn(
      'LegacyCard is deprecated and will be removed in v5.0.0. ' +
      'Please migrate to Card. ' +
      'See: https://f36.contentful.com/components/card#migration'
    );
  }

  // Map old props to new props
  const newProps = {
    padding: props.padding === 'large' ? '24px' : '12px',
    ...props,
  };

  return <Card {...newProps} />;
};
````

### Example 3: Changeset for Deprecation

`.changeset/deprecate-legacy-card.md`:

```markdown
---
'@contentful/f36-card': minor
'@contentful/f36-components': minor
---

**Deprecated**

- `LegacyCard`: This component is deprecated in favor of the new `Card` component which provides better performance and accessibility. The `LegacyCard` will be removed in v5.0.0.
  - Use `Card` instead with updated prop names
  - See migration guide: https://f36.contentful.com/components/card#migration-from-legacy-card
  - Console warnings added in development mode to help identify usage
```

## Related Documentation

- [Releases Process](./RELEASES.md) - How to create changesets and publish releases
- [Migration Guides](./MIGRATION.md) - Existing migration documentation
- [Contributing Guidelines](https://f36.contentful.com/introduction/contributing) - General contribution process
- [Semantic Versioning](https://semver.org/) - Versioning specification we follow

## Questions?

If you have questions about the deprecation process:

1. Check existing deprecation examples in the codebase
2. Ask in the team's internal channels
3. Review previous deprecation PRs for reference
4. Consult with the design system team leads

---

**Remember**: Deprecation is about making change manageable, not avoiding it. Clear communication and adequate transition time are key to maintaining trust with the community.
