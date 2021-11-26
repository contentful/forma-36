import React from 'react';
import {
  Grid,
  List,
  Paragraph,
  Subheading,
  Text,
} from '@contentful/f36-components';

import { getPropsStyles } from './Props.styles';

import { usePropsOf } from './PropsContext';
import { PropertyValue } from './PropertyValue';
import { PropertyType } from './PropertyType';

interface PropsProps {
  of: string;
}

export function Props({ of }: PropsProps) {
  const styles = getPropsStyles();
  const componentProps = usePropsOf(of);

  if (componentProps.length === 0) {
    return null;
  }

  return (
    <List className={styles.list}>
      {componentProps.map((item, idx) => {
        return (
          <List.Item key={idx} className={styles.listItem}>
            <Grid columns="20% 1fr" columnGap="spacingM" rowGap="spacingM">
              <Text>Name</Text>
              <Subheading marginBottom="none">
                {item.name}
                {item.required && '*'}
              </Subheading>

              {item.description && (
                <>
                  <Text>Description</Text>
                  <Paragraph marginBottom="none">{item.description}</Paragraph>
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
