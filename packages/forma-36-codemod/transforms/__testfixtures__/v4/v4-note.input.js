import React from "react";

import { Note } from "@contentful/forma-36-react-components";

<Note noteType="positive">
  A piece of information that is relevant to the context the user is currently in.
</Note>;

<Note noteType="negative" hasCloseButton>
  A piece of information that is relevant to the context the user is currently in.
</Note>;

<Note
  title="Title example"
  noteType="primary"
  hasCloseButton
  onClose={() => {}}>
  A piece of information that is relevant to the context the user is currently in.
</Note>;
