# Writing

The Contentful interface is clear, direct, respectful, and calm.

## Voice

| Quality        | What it means                                                  |
| -------------- | -------------------------------------------------------------- |
| **Clear**      | Say exactly what you mean. No jargon, no hedging.              |
| **Direct**     | Lead with the action or outcome. Do not bury the point.        |
| **Respectful** | Treat users as capable adults. Do not over-explain.            |
| **Calm**       | Even error messages stay composed. The interface never panics. |

The voice is never casual, never corporate, never clever, never apologetic.

## Sentence case

All text in the interface uses sentence case. No exceptions.

- "Content types" not "Content Types"
- "Add field" not "Add Field"
- "Published" not "PUBLISHED"

## Button and link labels

Always start with a verb. Max 3 words.

- "Add field" — not "New field"
- "Delete entry" — not "Entry deletion"
- "Publish changes" — not "Changes"

## Error messages

Tell the user exactly what went wrong and what to do next.

- "This field is required. Add a value before publishing."
- "The entry couldn't be saved. Check your connection and try again."

Do not write: "Something went wrong", "Error", "Invalid input".

## Forbidden phrases

Do not use these phrases anywhere in the interface:

| Phrase          | Instead                                                          |
| --------------- | ---------------------------------------------------------------- |
| "Click here"    | Describe the action                                              |
| "Please"        | Direct language is respectful                                    |
| "Sorry"         | Fix the problem                                                  |
| "Successfully"  | Just state the result: "Entry published"                         |
| "Are you sure?" | State what will happen: "This will permanently delete the entry" |
| "Learn more"    | Link to the specific topic                                       |

## Confirmation dialogs

For destructive actions:

- **Title:** verb + noun ("Delete content type")
- **Body:** one sentence stating the consequence ("This content type and all its fields will be permanently deleted.")
- **Confirm:** verb + noun matching the title ("Delete content type")
- **Cancel:** "Never mind"

Never use "Cancel", "Go back", or "No" as the cancel label.

## Notifications

- Active voice, present tense: "Entry published"
- Max 1-2 sentences
- Auto-dismiss after 6 seconds unless error

## Tooltips

- One sentence maximum
- Non-critical information only
- No links or interactive elements

## Status labels

| Status                   | Label       |
| ------------------------ | ----------- |
| Published and current    | "Published" |
| Published with changes   | "Changed"   |
| Never published          | "Draft"     |
| Removed from publication | "Archived"  |

Do not invent custom status labels for standard Contentful entity states.
