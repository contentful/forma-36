import constate from 'constate';
import { PropComponentDefinition, PropDefinition } from './types';
import orderBy from 'lodash.orderby';

const [PropsProvider, usePropsContext] = constate(
  (props: { metadata: { [key: string]: PropComponentDefinition } }) => {
    return props.metadata;
  },
);

function useProps(props: { of: string }): PropDefinition[] {
  const metadata = usePropsContext();

  const componentMetadata = metadata[props.of] as
    | PropComponentDefinition
    | undefined;

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

  core = orderBy(core, ['required', 'name'], ['desc', 'asc']);
  component = orderBy(component, ['required', 'name'], ['desc', 'asc']);

  return [...component, ...core];
}

export { PropsProvider, useProps };
