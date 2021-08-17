import constate from 'constate';
import { PropComponentDefinition, PropDefinition } from './types';
import orderBy from 'lodash/orderBy';

const [PropsProvider, usePropsContext] = constate(
  (props: { metadata: { [key: string]: PropComponentDefinition } }) => {
    return props.metadata;
  },
);

function useProps(props: {
  of: string;
}): { main: PropDefinition[]; additional: PropDefinition[] } {
  const metadata = usePropsContext();

  const componentMetadata = metadata[props.of] as
    | PropComponentDefinition
    | undefined;

  if (!componentMetadata) {
    return {
      main: [],
      additional: [],
    };
  }

  const values = Object.values(componentMetadata.props);

  let core: PropDefinition[] = [];
  let component: PropDefinition[] = [];
  const additional = values.filter((value) => {
    const hasPolymorphicParent =
      Boolean(value.parent) &&
      value.parent?.fileName.includes('@types/react/index.d.ts');
    return hasPolymorphicParent;
  });
  values
    .filter((value) => {
      const hasPolymorphicParent =
        Boolean(value.parent) &&
        value.parent?.fileName.includes('@types/react/index.d.ts');
      return !hasPolymorphicParent;
    })
    .map((value) => {
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

  core = orderBy(core, ['required', 'name'], ['desc', 'asc']);
  component = orderBy(component, ['required', 'name'], ['desc', 'asc']);

  return {
    main: [...component, ...core],
    additional,
  };
}

export { PropsProvider, useProps };
