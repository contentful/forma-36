## Dates and Times

Provides components for displaying dates and times while following the [Forma 36 guidelines](https://f36.contentful.com/guidelines/date-and-time/).

## React Components

### DateTime

Displays an absolute date and/or time in a variety of formats that conforms to Forma 36 guidelines.

| Format Code | Example |
| ---- | ---- |
| `FULL` | `12 Aug 2020 at 8:00 am` |
| `DATE_ONLY` | `12 Aug 2020` |
| `TIME_ONLY` | `8:00 am` |
| `WEEKDAY_DATE` | `Wed, 12 Aug` |

**Example Usage**

```ts
import React from 'react';
import { DateTime } from '@contentful/forma36-react-components';

export const MyComponent: React.FC<{ date: Date }> = ({ date }) => {
  return (<DateTime date={date} />)
}
```

or with a different format

```ts
import React from 'react';
import { DateTime } from '@contentful/forma36-react-components';

export const ScheduledForWeekdate: React.FC<{ date: Date }> = ({ date }) => {
  return (<DateTime date={date} format="WEEKDAY_DATE" />)
}
```

### RelativeDate

Provides a relative date string for resolutions ranging from seconds up through years. Should be used when absolute date and time is unnecessarily specific.

**NOTE**: The component includes a `setInterval` that will automatically trigger a re-render on a per-second basis to keep the value accurate over time.

**Example Usage**

```ts
import React from 'react';
import { RelativeDate } from '@contentful/forma36-react-components';

export const EntryPublishedRelative: React.FC<{ publishedAt: Date }> = ({ publishedAt }) => {
  return (<RelativeDate date={publishedAt} />)
}
```

With a different `baseDate`

```ts
import React from 'react';
import { RelativeDate } from '@contentful/forma36-react-components';

export const EntryLifetime: React.FC<{ createdAt: Date, publishedAt: Date }> = ({ createdAt, publishedAt }) => {
  return (<RelativeDate date={publishedAt} baseDate={createdAt} />)
}
```

## Utility Functions

Additional functions are available for strings in cases when the date and/or time needs to be embedded in plaintext.

| Method | Description |
| ---- | ---- |
| `formatDateTime` | Given a JS date and an optional format returns a string matching the format. Defaults to `FULL` |
| `formatDate` | Given a JS date returns only the date portion as a string |
| `formatTime` | Given a JS date returns only the time portion as a string |
| `formatWeekdayDate` | Given a JS date returns the date portion prefixed with the 3 letter weekday |
| `formatRelativeDateTime` | Given a JS date and an optional `baseDate` calculates the relative time difference |

**NOTE** `formatRelativeDateTime` returns a static string, meaning you will need to trigger a re-render if the relative time is to stay accurate for near-term times. `<RelativeDate />` does this for you automatically.

**Example**

```ts
import { datetime } from '@contentful/forma36-react-components'

const publishedTime = datetime.formatTime(date)
```
