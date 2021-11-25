import React from 'react';
import {
  Grid,
  List,
  Paragraph,
  Subheading,
  Text,
  TextLink,
  Tooltip,
} from '@contentful/f36-components';

import type { PropType } from './types';
import { useProps } from './PropsProvider';
import { PropertyValue } from './PropertyValue';

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

function PropertyType({ type, name }: PropertyTypeProps) {
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

interface PropsProps {
  of: string;
}

export function Props({ of }: PropsProps) {
  const metadata = useProps({ of });

  if (metadata.main.length === 0) {
    return null;
  }

  return (
    <List style={{ listStyleType: 'none' }}>
      {[...metadata.main, ...metadata.additional].map((item, idx) => {
        return (
          <List.Item
            key={idx}
            style={{ padding: '1rem 0', borderBottom: '1px solid black' }}
          >
            <Grid columns="20% 1fr" columnGap="spacingM">
              <Text>Name</Text>
              <Subheading>
                {item.name}
                {item.required && '*'}
              </Subheading>

              {item.description && (
                <>
                  <Text>Description</Text>
                  <Paragraph>{item.description}</Paragraph>
                </>
              )}

              <Grid.Item columnStart={2}>
                <PropertyType name={item.name} type={item.type} />
              </Grid.Item>

              {item.defaultValue && (
                <>
                  <Text>Default</Text>
                  <PropertyValue value={item.defaultValue.value} />
                </>
              )}
            </Grid>
          </List.Item>
        );
      })}
    </List>
  );
}
