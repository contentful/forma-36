---
'@contentful/f36-button': minor
---

add stacking context for ButtonGroup component. It should fix the bug when the buttons is stacking not within the ButtonGroup’s context, but within the context of the parent element (because the ButtonGroup itself didn't create a stacking context)
