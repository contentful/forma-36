# SkeletonRow

A component that creates table rows filled with skeletons
to be used as a good loading feedback for users.

## When to use

Use TableBody, preferably. In that component you have props
to control the loading state of your table.

## Best practices

Only use this component as a child of a `<TableBody>` component or `<tbody>` tag.
This component returns N number of table rows and if they are not inside of a table,
the browser will print an error
