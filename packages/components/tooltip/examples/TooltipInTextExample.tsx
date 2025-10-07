import React from 'react';
import { Text, Tooltip } from '@contentful/f36-components';

export default function TooltipInTextExample() {
  const TextWithNote = ({ note, id, children }) => (
    <Tooltip placement="top" id={id} content={note}>
      <Text as="b" fontColor="red600" fontWeight="fontWeightDemiBold">
        {children}
      </Text>
    </Tooltip>
  );
  return (
    <Text as="p">
      A{' '}
      <TextWithNote note="Content Management System" id="cms">
        CMS
      </TextWithNote>{' '}
      is a{' '}
      <TextWithNote
        note="A collection of instructions to tell a computer how to work."
        id="software"
      >
        computer software
      </TextWithNote>{' '}
      used to manage the creation and modification of digital content.
    </Text>
  );
}
