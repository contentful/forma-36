import * as React from 'react';
import { Icon } from '@contentful/f36-components';
import { MdAccessAlarm } from 'react-icons/md';

export default function IconAsPropExample() {
  return <Icon as={MdAccessAlarm} variant="secondary" />;
}
