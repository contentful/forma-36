import React from 'react';
import orderBy from 'lodash.orderby';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Flex,
  Box,
  TextLink,
  Tooltip,
} from '@contentful/f36-components';
import type {
  PropDefinition,
  PropType,
  PropComponentDefinition,
} from './types';

const getComponentMetadata = (of: string): PropDefinition[] => {
  const metadata = (window as any).propsMetadata || {};
  const componentMetadata = metadata[of] as PropComponentDefinition | undefined;

  if (!componentMetadata) {
    return [];
  }
  const values = Object.values(componentMetadata.props);
  let core: PropDefinition[] = [];
  let component: PropDefinition[] = [];
  values.map((value) => {
    if (['ref', 'key'].includes(value.name)) {
      // don't add this types
    } else if (
      ['as', 'children', 'className', 'style', 'testId'].includes(value.name)
    ) {
      core.push(value);
    } else {
      component.push(value);
    }
  });

  core = orderBy(core, 'name');
  component = orderBy(component, ['required', 'name']);

  return [...component, ...core];
};

function EnumPropertyType({ type }: { type: PropType }) {
  return (
    <Flex flexWrap="wrap">
      {type.value.map((value) => {
        return (
          <Box key={value.value} marginRight="spacingS" marginTop="spacingS">
            <code>{value.value}</code>
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
    <Tooltip place="top" content="Click to lookup">
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

export function Props(props: { of: string }) {
  const [metadata, setMetadata] = React.useState<PropDefinition[]>([]);

  React.useEffect(() => {
    setMetadata(getComponentMetadata(props.of));
  }, [props.of]);

  if (metadata.length === 0) {
    return null;
  }

  console.log(metadata);

  return (
    <Table layout="embedded">
      <TableHead>
        <TableRow>
          <TableCell width="150px">Name</TableCell>
          <TableCell width="30px">Required</TableCell>
          <TableCell width="70px">Default</TableCell>
          <TableCell width="30%">Type</TableCell>
          <TableCell>Description</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {metadata.map((item) => (
          <TableRow key={item.name}>
            <TableCell>
              <code>{item.name}</code>
            </TableCell>
            <TableCell>{item.required ? 'required' : ''}</TableCell>
            <TableCell>
              {item.defaultValue ? item.defaultValue.value : ''}
            </TableCell>
            <TableCell>
              <PropertyType name={item.name} type={item.type} />
            </TableCell>
            <TableCell>{item.description}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
