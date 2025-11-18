# Migration Guideline Header from 4.X.X to 5.X.X

The header component is to be used mostly within the Layout component. It has undergone significant design and property changes. The most siginificant is the change of the background color from `gray100` to `white`

## Header

The Header component is meant to include the title of a page and therefore on default renders tie title as `h1`. It can receive multiple sub-components via the props `actions` `filters` `metadata`. For navigiation inside a feature, it can receive `breadcrumbs` in an array

## Header prop overview table

| Property Name   | Type                                                | Description                                                                                                 | Status    |
| --------------- | --------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | --------- |
| actions         | ReactElement \| ReactElement[]                      | Optional JSX children to display as complementary actions (e.g. buttons) related to the current page/route. | Unchanged |
| breadcrumbs     | BreadcrumbProps['breadcrumbs']                      | An (optional) list of navigable links to prepend to the current title.                                      | Unchanged |
| filters         | ReactElement                                        | An (optional) element displayed in the center of the header, typically used to render refinement/search UI. | Unchanged |
| title           | ReactElement \| string                              | The title of the element this header pertains to.                                                           | Unchanged |
| metadata        | ReactNode                                           | Additional metadata to display in the header.                                                               | Unchanged |
| backButtonProps | BackButtonProps (when withBackButton: true)         | Props to spread on the back button.                                                                         | Unchanged |
| withBackButton  | boolean                                             | If `true`, renders a leading back button within the header.                                                 | Unchanged |
| titleProps      | { as?: HeadingElement; size?: 'medium' \| 'large' } | Props to customize the rendered title element (e.g. heading level, size).                                   | **New**   |
| testId          | string                                              | Test id for the root element. (default: cf-ui-header)                                                       | **New**   |

## Code Example

```jsx
    <Header
      backButtonProps={{ onClick: action }}
      withBackButton
      breadcrumbs={[
        {
          content: 'Content Types',
          url: '#',
        },
      ]}
      title="Product"
      titleProps={
        as='h2'
        size='medium'
      }
      actions={
          <>
            <Button variant="secondary" size="small">
              Cancel
            </Button>
            <Button variant="primary" size="small">
              Save
            </Button>
          </>
      }
    />
```
