import React from 'react';
import {
  Badge,
  Paragraph,
  Subheading,
  Text,
  Table,
} from '@contentful/f36-components';

import { getPropsTableStyles } from './PropsTable.styles';

import { usePropsOf } from './PropsContext';
import { PropertyValue } from './PropertyValue';
import { PropertyType } from './PropertyType';

interface PropsTableProps {
  of: string;
}

export function PropsTable({ of }: PropsTableProps) {
  const styles = getPropsTableStyles();
  const componentProps = usePropsOf(of);

  if (componentProps.length === 0) {
    return null;
  }

  return (
    <Table layout="embedded">
      <Table.Head>
        <Table.Row>
          <Table.Cell className={styles.headerCell}>
            <Subheading marginBottom="none">Name</Subheading>
          </Table.Cell>
          <Table.Cell className={styles.headerCell}>
            <Subheading marginBottom="none">Type</Subheading>
          </Table.Cell>
          <Table.Cell className={styles.headerCell}>
            <Subheading marginBottom="none">Default</Subheading>
          </Table.Cell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {componentProps.map((item, idx) => {
          return (
            <Table.Row key={idx}>
              <Table.Cell className={styles.cell} width="20%">
                <Text
                  fontStack="fontStackMonospace"
                  fontColor="gray900"
                  fontWeight="fontWeightDemiBold"
                  marginRight="spacingXs"
                >
                  {item.name}
                </Text>
                {item.required && (
                  <Badge variant="featured" size="small">
                    required
                  </Badge>
                )}{' '}
                {item.tags && 'deprecated' in item.tags && (
                  <Badge variant="negative" size="small">
                    Deprecated
                  </Badge>
                )}
              </Table.Cell>
              <Table.Cell className={styles.cell}>
                <PropertyType name={item.name} type={item.type} />
                <Paragraph marginBottom="none">{item.description}</Paragraph>
              </Table.Cell>
              <Table.Cell className={styles.cell} width="20%">
                {item.defaultValue && (
                  <PropertyValue value={item.defaultValue.value} />
                )}
              </Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
}
