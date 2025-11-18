import * as React from 'react';
import tokens from '@contentful/f36-tokens';
import { Icon } from '@contentful/f36-icon';
import { MdAccessAlarm } from 'react-icons/md';

export default function IconAsPropExample() {
  return <Icon as={MdAccessAlarm} size="small" color={tokens.colorPrimary} />;
}
