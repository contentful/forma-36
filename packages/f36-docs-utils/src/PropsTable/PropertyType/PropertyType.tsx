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
    return (
      <PropertyValue
        value={'HTML Tag or React Component (e.g. div, span, etc)'}
      />
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
