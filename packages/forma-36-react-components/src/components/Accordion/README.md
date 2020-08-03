# Accordion

Accordions are a good way to deliver a large amount of information. An accordion is a list of headers that after being clicked reveal or hide more content related to them.
The header gives the user a summary of the content and the user decides if they need to see the extended content or not.

## Accordion variations

The accordion has two variations that define the alignment of the chevron icon: left or right.

![Accordion variations](images/img-1.png)

## Examples of usage

```jsx
import {
  Accordion,
  AccordionItem,
} from '@contentful/forma-36-react-components/dist/alpha';

<Accordion>
  <AccordionItem title="What payment methods do you accept?">
    Customers on the Team tier can pay with a credit card (American Express,
    MasterCard or Visa). Enterprise customers have the choice of paying with a
    credit card or wire transfer.
  </AccordionItem>
</Accordion>;
```

Contentful react accordion will be renderd as:

```html
<ul
  class="Accordion__Accordion___2vsT6 Accordion__Accordion--end___1WaCd"
  data-test-id="cf-ui-accordion"
>
  <li data-test-id="cf-ui-accordion-item-52">
    <h2 class="Subheading__Subheading___2mA9j" data-test-id="cf-ui-subheading">
      <button
        type="button"
        aria-expanded="false"
        aria-controls="accordion-panel--1"
        id="accordion--1"
        class="Accordion__AccordionHeader___3k1Uh"
      >
        <svg
          data-test-id="cf-ui-icon"
          class="Icon__Icon___38Epv Icon__Icon--small___1yGZK Icon__Icon--secondary___1ztcw Icon__Icon--trimmed___1CmZL Accordion__AccordionHeader__icon___1pUm4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 5.6 18"
        >
          <path d="M1.1 4.5L0 5.6 3.4 9 0 12.4l1.1 1.1L5.6 9 1.1 4.5z"></path>
          <path d="M0 0h5.6v18H0V0z" fill="none"></path>
        </svg>
        What payment methods do you accept?
      </button>
    </h2>
    <div
      id="accordion-panel--1"
      role="region"
      aria-labelledby="accordion--1"
      class="AccordionPanel__AccordionPanel___V6i9q"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </div>
  </li>
</ul>
```

Other typographic components can be passed as the accordion's title and anything can be used as the accordion's content. For example:

```jsx
import {
  Accordion,
  AccordionItem,
} from '@contentful/forma-36-react-components/dist/alpha';
import {
  SectionHeading,
  Paragraph,
} from '@contentful/forma-36-react-components';

<Accordion>
  <AccordionItem
    title={<SectionHeading>What payment methods do you accept?</SectionHeading>}
  >
    <Paragraph>
      Customers on the Team tier can pay with a credit card (American Express,
      MasterCard or Visa). Enterprise customers have the choice of paying with a
      credit card or wire transfer.
    </Paragraph>
  </AccordionItem>
</Accordion>;
```

## Content recommendations:

- The title should be a short message that summarize the content of the accordion.
- Anything can be passed as the content of the accordion, but often organizing it with Paragraphs and Tables would be enough.
- When using headings, be mindful about the heading levels. The header is a Subheading with `h2` tag.

## Best practices

- The title prop accepts React nodes, but we recommend that only Typography components are used.
- Since the whole header is a button, do not use Buttons or Links in the title prop. The only click event that should exist is the header's event.

## Properies overview:

### Accordion

| Prop        | Description                                                                         |
| ----------- | ----------------------------------------------------------------------------------- |
| `align`     | optional, one of `start` or default `end`                                           |
| `testId`    | string, optional, additional attibute for testing pursposes                         |
| `className` | string, optional, class names to be appended to the className prop of the component |
| `children`  | React.ReactNode, optional, child nodes to be rendered in the component              |

### AccordionItem

| Prop       | Description                                                            |
| ---------- | ---------------------------------------------------------------------- |
| `title`    | required, a string or a ReactNode to define the header content         |
| `testId`   | string, optional, additional attibute for testing pursposes            |
| `children` | React.ReactNode, optional, child nodes to be rendered in the component |
