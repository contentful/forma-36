import React, { useState } from 'react';
import { ToggleButton, ButtonGroup } from '@contentful/f36-components';
import {
  FormatItalicIcon,
  FormatBoldIcon,
  FormatUnderlinedIcon,
} from '@contentful/f36-icons';

export default function ToggleButtonGroupedExample() {
  const [isItalic, setIsItalic] = useState(false);
  const [isBold, setIsBold] = useState(true);
  const [isUnderline, setIsUnderline] = useState(false);
  return (
    <ButtonGroup>
      <ToggleButton
        isActive={isItalic}
        icon={<FormatItalicIcon />}
        aria-label="Italic"
        size="small"
        onToggle={() => {
          setIsItalic(!isItalic);
        }}
      />
      <ToggleButton
        isActive={isBold}
        icon={<FormatBoldIcon />}
        aria-label="Bold"
        size="small"
        onToggle={() => {
          setIsBold(!isBold);
        }}
      />
      <ToggleButton
        isActive={isUnderline}
        icon={<FormatUnderlinedIcon />}
        aria-label="Underline"
        size="small"
        onToggle={() => {
          setIsUnderline(!isUnderline);
        }}
      />
    </ButtonGroup>
  );
}
