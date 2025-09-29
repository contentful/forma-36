import path from 'path';
import type {
  PropComponentDefinition,
  PropDefinition,
} from '@contentful/f36-docs-utils';
const docgen = require('react-docgen-typescript');

// List of props that we do not need to show
// because they are, basically, inherited props from HTML elements or React
const PROPS_TO_HIDE = ['ref', 'key', 'style'];

type PropsMetadata = { [key: string]: PropComponentDefinition };

const getPreparedComponent = (
  component: PropComponentDefinition,
): PropComponentDefinition => {
  const resultComponent: PropComponentDefinition = {
    description: component.description,
    displayName: component.displayName,
    props: {},
  };

  // filter out the props that come from @types/react definitions and/or are HTML elements
  const filteredProps = Object.values(component.props).filter(
    (prop) =>
      !prop.parent?.fileName.includes('@types/react/index.d.ts') &&
      !PROPS_TO_HIDE.includes(prop.name),
  );

  filteredProps.map((prop) => {
    resultComponent.props[prop.name] = {
      ...prop,
      // Convert undefined to null for further data serialization
      parent: (prop.parent ?? null) as PropDefinition['parent'],
    };
  });

  return resultComponent;
};

function getTypescriptMetaInformation(sourcePath) {
  try {
    const tsConfigParser = docgen.withCustomConfig(
      path.resolve('../../tsconfig.json'),
      {
        savePropValueAsString: true,
        shouldExtractLiteralValuesFromEnum: true,
        shouldExtractValuesFromUnion: true,
        skipChildrenPropWithoutDoc: false,
        shouldIncludePropTagMap: true,
      },
    );

    const components: PropComponentDefinition[] =
      tsConfigParser.parse(sourcePath) || [];

    return components.reduce<PropsMetadata>((result, component) => {
      result[component.displayName] = getPreparedComponent(component);
      return result;
    }, {});
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log('Problem with parsing Typescript props for  ' + sourcePath, e);
    return {};
  }
}

function getPropsMetadata(filePath: string, sourcesPaths?: string) {
  if (!sourcesPaths) {
    return null;
  }

  const propsMetadata: PropsMetadata = {};
  const typescriptSources = sourcesPaths.trim().split(',');

  typescriptSources.forEach((source) => {
    const sourcePath = path.resolve(path.dirname(filePath), source);

    Object.assign(propsMetadata, getTypescriptMetaInformation(sourcePath));
  });

  return propsMetadata;
}

function transformToc(toc: any) {
  if (!toc || !toc.children) {
    return null;
  }
  const result: any[] = [];
  toc.children.forEach((element) => {
    switch (element.tagName) {
      case 'a':
        result.push({
          type: 'link',
          href: element.properties.href,
          text: element.children[0].value,
        });
        break;
      case 'ol':
        result.push({ type: 'list', children: transformToc(element) });
        break;
      default:
        result.push(transformToc(element));
        break;
    }
  });
  return result;
}

export { getPropsMetadata, transformToc };
