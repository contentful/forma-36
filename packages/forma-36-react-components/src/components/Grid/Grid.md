# Grid

[CSS Grid](https://developer.mozilla.org/en-US/docs/Glossary/Grid) based react component, comes with predefined values to ensure design consistency, and ease of use.

```js
import { Grid, GridItem } from '@contenful/forma-36-react-components';
```

## API
### columns
Accepts a number When defined as a number, it will split the space into equally sized columns, otherwise it accepts any of the [grid-template-columns](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns) css properties. e.g.

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
  <Grid columnGap='spacingXs' rowGap='spacingXl'></Grid>
```


