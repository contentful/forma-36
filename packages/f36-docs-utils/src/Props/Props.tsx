import React from 'react';
import {
  Grid,
  List,
  Paragraph,
  Subheading,
  Text,
} from '@contentful/f36-components';

import { useProps } from './PropsProvider';
import { PropertyValue } from './PropertyValue';
import { PropertyType } from './PropertyType';

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
