import React, { useState } from 'react';
import { ToggleButton, ButtonGroup } from '@contentful/f36-components';

import {
  TextBIcon,
  TextItalicIcon,
  TextUnderlineIcon,
} from '@contentful/f36-icons-alpha';

export default function ToggleButtonGroupedExample() {
  const [isItalic, setIsItalic] = useState(false);
  const [isBold, setIsBold] = useState(true);
  const [isUnderline, setIsUnderline] = useState(false);
  return (
    <ButtonGroup>
      <ToggleButton
        isActive={isItalic}
        icon={<TextItalicIcon />}
        aria-label="Italic"
        size="small"
        onToggle={() => {
          setIsItalic(!isItalic);
        }}
      />
      <ToggleButton
        isActive={isBold}
        icon={<TextBIcon />}
        aria-label="Bold"
        size="small"
        onToggle={() => {
          setIsBold(!isBold);
        }}
      />
      <ToggleButton
        isActive={isUnderline}
        icon={<TextUnderlineIcon />}
        aria-label="Underline"
        size="small"
        onToggle={() => {
          setIsUnderline(!isUnderline);
        }}
      />
    </ButtonGroup>
  );
}
