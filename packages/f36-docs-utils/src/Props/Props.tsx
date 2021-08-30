import React from 'react';
import {
  Table,
  Flex,
  Box,
  TextLink,
  Tooltip,
} from '@contentful/f36-components';
import type { PropDefinition, PropType } from './types';
import { useProps } from './PropsProvider';

function EnumPropertyType({ type }: { type: PropType }) {
  return (
    <Flex flexWrap="wrap">
      {type.value.map((value) => {
        return (
          <Box key={value.value} marginRight="spacingS" marginBottom="spacingS">
            {value.value}
          </Box>
        );
      })}
    </Flex>
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

function PropertyType({ type, name }: { type: PropType; name: string }) {
  if (name === 'as') {
    return (
      <>
        HTML Tag or React Component, e.g. <code>div</code>, <code>span</code>,
        etc.
      </>
    );
  }
  if (name === 'children') {
    return <>{type.raw}</>;
  }
  if (type.name === 'enum') {
    if (type.value.length < 4) {
      return <EnumPropertyType type={type} />;
    }
    return <LookupPropertyType type={type} />;
  }
  return <>{type.name}</>;
}

function PropRow(props: { definition: PropDefinition }) {
  const item = props.definition;
  return (
    <Table.Row key={item.name}>
      <Table.Cell>
        <code>{item.name}</code>
      </Table.Cell>
      <Table.Cell>{item.required ? 'required' : ''}</Table.Cell>
      <Table.Cell>
        {item.defaultValue ? <>{item.defaultValue.value}</> : ''}
      </Table.Cell>
      <Table.Cell>
        <PropertyType name={item.name} type={item.type} />
      </Table.Cell>
      <Table.Cell>{item.description}</Table.Cell>
    </Table.Row>
  );
}

export function Props(props: { of: string }) {
  const [view, setView] = React.useState<'main' | 'all'>('main');
  const metadata = useProps({ of: props.of });

  if (metadata.main.length === 0) {
    return null;
  }

  const switcher = (
    <Flex
      flexDirection="row"
      alignItems="center"
      justifyContent="flex-end"
      marginBottom="spacingM"
    >
      {view === 'main' && (
        <TextLink
          as="button"
          onClick={() => {
            setView('all');
          }}
        >
          Show all props
        </TextLink>
      )}
      {view === 'all' && (
        <TextLink
          as="button"
          onClick={() => {
            setView('main');
          }}
        >
          Show main props
        </TextLink>
      )}
    </Flex>
  );

  return (
    <Flex flexDirection="column">
      {metadata.additional.length > 0 && switcher}
      <Table layout="embedded">
        <Table.Head>
          <Table.Row>
            <Table.Cell width="150px">Name</Table.Cell>
            <Table.Cell width="30px">Required</Table.Cell>
            <Table.Cell width="70px">Default</Table.Cell>
            <Table.Cell width="30%">Type</Table.Cell>
            <Table.Cell>Description</Table.Cell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {view === 'main' && (
            <>
              {metadata.main.map((item) => (
                <PropRow definition={item} key={item.name} />
              ))}
            </>
          )}
          {view === 'all' && (
            <>
              {[...metadata.main, ...metadata.additional].map((item) => (
                <PropRow definition={item} key={item.name} />
              ))}
            </>
          )}
        </Table.Body>
      </Table>
    </Flex>
  );
}
