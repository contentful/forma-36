---
'@contentful/f36-button': minor
'@contentful/f36-forms': minor
---

Add stacking context for the ButtonGroup and InputGroup components. It should fix the bug when the group elements are stacking not within the Group’s context, but within the context of the parent element (because the ButtonGroup/InputGroup itself didn't create a stacking context)
