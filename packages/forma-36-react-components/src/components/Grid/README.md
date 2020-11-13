[CSS Grid](https://developer.mozilla.org/en-US/docs/Glossary/Grid) based React component, comes with predefined values to ensure design consistency, and ease of use.

The Grid consists of two components:

- Grid: Used as a container for GridItems
- GridItem: Elements within the Grid

```js
import { Grid, GridItem } from '@contenful/forma-36-react-components';
```

<br />
## Usage

### columns

When defined as a number, it will split the space into equally sized columns; it also accepts any of the [grid-template-columns](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns) css properties. e.g.

```jsx
<Grid columns={6}></Grid>
// Or
<Grid columns={'auto 1fr'}></Grid>
```

### rows

Accepts a number or any of [grid-template-rows](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows) css properties.

```jsx
<Grid rows={6}></Grid>
// Or
<Grid rows={'auto 1fr'}></Grid>
```

### columnGap & rowGap

`columnGap` represents space between columns, `rowGap` represents the space between rows, both accepts one of [spacing](https://f36.contentful.com/foundation/spacing/) token names.

`spacing2xs` | `spacingXs` | `spacingXs` | `spacingS` | `spacingM` | `spacingL` | `spacingXl` | `spacing2Xl` | `spacing3Xl` | `spacing4Xl`

**e.g.**

```jsx
<Grid columnGap="spacingXs" rowGap="spacingXl"></Grid>
```
