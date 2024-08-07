---
'@contentful/f36-entity-list': patch
---

fix(<entitylistitem>): differentiate click events for entire entity card, and actions menu

It was previously impossible to differentiate when a user was clicking the menu trigger/menu
and when they were clicking anywhere else in the entity card, because events that occur in
the trigger/menu were also bubbling up the to the onclick handler for the entire card.

This PR also resolves a react validateDOM() warning, because when rendering an action menu,
we were rendering a button within a button.

The solution was to create a fragment container with 2 children, the first containing the
actual entity card elements like thumbnail, title, description etc. and the second
containing the optional actions menu. That way, click events from either component do not
clash with eachother.