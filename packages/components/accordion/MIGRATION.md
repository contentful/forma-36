# Migration Guideline Accordion from V5.x to 6.x

The Accordion component contains the following breaking changes:

The alignment property was removed from the child elements and is now spread via a context on the accordion. This requiresd all AccordionItems and Accordion Headers to be renderd _within_ the accordion parent element.

- AccordionItem:
  - `align` property is removed
- AccordionHeader
  - `align` property is removed
