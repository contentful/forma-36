import React from "react";
import { InfoCircleIcon } from '@contentful/f36-icons';
import { Pill } from "@contentful/forma-36-react-components";

<Pill label="test label" variant="active" onClose={() => {}} />;

<Pill label="test label" variant="deleted" onClose={() => {}} />;

<Pill
  label="example.user@contentful.com"
  variant="idle"
  onDrag={() => {}}
  dragHandleComponent={
    <InfoCircleIcon
      aria-label="Drag handler"
      variant="muted"
      style={{ padding: '0.375rem 0.625rem' }}
    />
  }
/>;
