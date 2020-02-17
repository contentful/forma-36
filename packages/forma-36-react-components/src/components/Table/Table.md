### Usage

Use tables to present large amounts of data, and data which has multiple properties attached to it.

### Properties

#### Width

Tables always span the full width of the container they're in.

#### Elements

Tables always consist of a **table head**, describing the content of the respective columns, and the **table body**.

#### Rows & columns

Columns are ordered by relevance from left to right. Images, if present, have a higher priority, and should be placed in the first column. Checkboxes naturally have the highest priority.

#### Content sorting

Tables support sorting by columns (ascending and descending) by clicking on the column's table header. Even if the table doesn't support changing the sorting, it should show which column it's sorted by.

### Variations

All variations apply to the whole table, not single rows or cells.

#### Vertical padding

By default, cells have a vertical padding of 20px. If a table features images that are expected to exceed the height of the text content, the padding can be decreased to 10px to prevent the rows from taking up too much vertical space.

<img src="https://projects.invisionapp.com/static-signed/live-embed/118156364/191656271/1/latest/jjlEw5hiimk3lEQC5SElAlEQT5hL0luxKfBBPkf5nbhhMaVlEGEmsGNWNnkzZpozct8II2GsAmQSGHGu8XTDlE1SgfAlE/Padding-variations.png" alt="Vertical padding elements">

#### Single-line vs. multi-line

There are 2 options to deal with content that potentially exceeds the width of the table cells:

- **Single line cells:** Truncating the text automatically to fit into 1 line. The content is aligned to the vertical center of the cell.
- **Multi-line cells:** The text can take up multiple lines, although the length is capped at 200 characters. The content is aligned to the top of the cell. Use

<img src="https://projects.invisionapp.com/static-signed/live-embed/118156364/191656236/1/latest/5uV48Oi9vnNBlElNSlPVghDbTQlEY5bIDImeclETWv2mG9qKrA1YA16PXCqBu8emSaSCnnBiPl7pfo4p7NJSq8EglE/Line-variations.png" alt="Single-line vs. multi-line">

#### Table interactions

Generally, there are 2 ways tables rows can be interacted with:

- **Clickable rows:** the whole row is clickable. A column with a label can be added, in case it's not clear what action will be triggered when clicking a row.
- **Single action:** a single action, that's very specific and shouldn't be triggered by clicking the whole row, is placed in an extra column.
- **Multiple actions:** multiple actions can be placed together in an extra column.

Rows can have a checkbox for bulk actions (refer to the section below), which works independently from the interactions described above.

<img src="https://projects.invisionapp.com/static-signed/live-embed/118156364/191656209/1/latest/zJMkLlEPwlnYji05LOsMxamfJVNtIJ9iKJdbWAMnRo6l5ZQsgszZMlEPYjZM1lE1t1En3Wux4NqMpMUdqhAWxYduglE/Table-actions.png" alt="Table interactions" width="1100">

#### Sorting

If the table supports sorting, the respective columns are highlighted when being hovered over.

<img src="https://projects.invisionapp.com/static-signed/live-embed/118156364/192385196/1/latest/A9sNGLKfSlEVlE56knNM03v2621waKm5lEhnxHidf5XkzccT4XcssOlEzeVGWvReWSVcWRS3lPDxNj2eOuYW1NtPZQlE/Sorting.png" alt="Sorting">

#### Bulk actions

Upon selecting rows by clicking the checkbox, a bar displaying the actions available for the selected items appears below the table head. The selected rows are additionally highlighted with a light blue background. If a table spans multiple pages, accessible via pagination, the selected rows get unchecked automatically when switching to another page.

<img src="https://projects.invisionapp.com/static-signed/live-embed/118156364/191656191/1/latest/TSgwUaLvnq5idznSSy1iJkogGqwsJSmj8M8uJCD8SGlR8Vc6kt8qwIFtZZpnMfiZ05lEes2pUXuEmoIl02dvNnwlE/Bulk-actions.png" alt="Bulk actions">
