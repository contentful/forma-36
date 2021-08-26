import React from "react";

import { Note } from "@contentful/f36-components";

<Note variant="positive">
  A piece of information that is relevant to the context the user is currently in.
</Note>;

<Note variant="negative" withCloseButton>
  A piece of information that is relevant to the context the user is currently in.
</Note>;

<Note
  title={'Title example'}
  variant="primary"
  withCloseButton
  onClose={() => {}}>
  A piece of information that is relevant to the context the user is currently in.
</Note>;
