import React from 'react';

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

interface PropertyTypeProps {
  type: PropType;
  name: string;
}

export function PropertyType({ type, name }: PropertyTypeProps) {
  if (name === 'as') {
    const filteredValue = type.value.filter((item) => !item.value.includes('&'));
    const sortedValue = filteredValue.sort((a, b) => a.value.localeCompare(b.value));

    return (
      <>
        {sortedValue.map(({ value }, idx) => {
          return <PropertyValue key={idx} value={value} />;
        })}
      </>
    );
  }

  if (name === 'children') {
    return <PropertyValue value={type.raw} />;
  }

  if (type.name === 'enum') {
    return <EnumPropertyType type={type} />;
  }

  return <PropertyValue value={type.name} />;
}
