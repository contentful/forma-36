ProductIcon component currently is used mainly in the top navigation and headlines of contentful pages. ProductIcon uses separate set of SVG's then the standard `Icon` component. We also would like to make sure that we separate the purpose of those 2 components.

*Please keep in mind that component is still in it's alpha state. This means the API of the component still might change*

## Examples of usage

Common practice is to use ProductIcons in the top navigation in Contentful webapp. In the case of the top navigation, white icon is shown on the dark background next to the white text.

```jsx
import { Label } from '@contentful/forma-36-react-components';
import { NavigationIcon } from '@contentful/forma-36-react-components/dist/alpha';

<Label>
  <NavigationIcon
    icon={item.navIcon}
    size="medium"
    color="white"
  />
  {elementTitle}
</Label>

```

Another good example of usage of ProductIcons is the headlines of the pages, next to the title. In that case icons are used within our `Workbench` component.

```jsx
import { Workbench } from '@contentful/forma-36-react-components';
import { NavigationIcon } from '@contentful/forma-36-react-components/dist/alpha';

<>
  <DocumentTitle title="Users" />
  <Workbench>
    <Workbench.Header
      title={'Page title'}
      icon={<NavigationIcon icon="Users" size="large" />}
    />
    <Workbench.Content>...</Workbench.Content>
  </Workbench>
</>
```

## Best practices

- Select an icon that accurately represents the subject
- Pair icons with text
- Make sure that the size of the icon is same or similar to the line height of the text

## Accessibility

- Make sure to use proper color for the icon and text in the context. It passes the the accesibility color contrast [requirements](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html) - contrast ratio of at least 3:1.
