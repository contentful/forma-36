import React from 'react';
import { TextLink, Tooltip } from '@contentful/f36-components';

import type { PropType } from '../types';
import { PropertyValue } from '../PropertyValue';

interface EnumPropertyTypeProps {
  type: PropType;
}

function EnumPropertyType({ type }: EnumPropertyTypeProps) {
  return (
    <>
      {type.value.map(({ value }, idx) => {
        return <PropertyValue key={idx} value={value} />;
      })}
    </>
  );
}

function LookupPropertyType({ type }: { type: PropType }) {
  const [visible, setVisible] = React.useState(false);
  if (visible) {
    return <EnumPropertyType type={type} />;
  }
  return (
    <Tooltip placement="top" content="Click to lookup">
      <TextLink
        onClick={() => {
          setVisible(true);
        }}
      >
        {type.raw}
      </TextLink>
    </Tooltip>
  );
}

interface PropertyTypeProps {
  type: PropType;
  name: string;
}

export function PropertyType({ type, name }: PropertyTypeProps) {
  if (name === 'as') {
    return (
      <>
        HTML Tag or React Component (e.g. <code>div</code>, <code>span</code>,
        etc)
      </>
    );
  }

  if (name === 'children') {
    return <PropertyValue value={type.raw} />;
  }

  if (type.name === 'enum') {
    if (type.value.length < 4) {
      return <EnumPropertyType type={type} />;
    }
    return <LookupPropertyType type={type} />;
  }

  return <PropertyValue value={type.name} />;
}
