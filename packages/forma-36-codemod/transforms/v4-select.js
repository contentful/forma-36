const {
  getNewProp,
  getComponentLocalName,
  changeImport,
  getProperty,
  createComponent,
  addImport,
  renameProperties,
  removeComponentImport,
  changeComponentName,
  changeProperties,
  deleteProperty,
  getChildren,
} = require('../utils');
const { getFormaImport, shouldSkipUpdateImport } = require('../utils/config');
const { isConditionalExpression } = require('../utils/updateTernaryValues');
const { pipe } = require('./common/pipe');

function selectCodemod(file, api) {
  const j = api.jscodeshift;
  let source = file.source;

  const componentName = getComponentLocalName(j, source, {
    componentName: 'Select',
    importName: getFormaImport(),
  });

  if (!componentName) {
    return source;
  }

  source = changeProperties(j, source, {
    componentName,
    fn(attributes) {
      let modifiedAttributes = attributes;

      modifiedAttributes = renameProperties(modifiedAttributes, {
        renameMap: {
          required: 'isRequired',
          hasError: 'isInvalid',
        },
      });

      modifiedAttributes = deleteProperty(modifiedAttributes, {
        propertyName: 'width',
        file,
      });

      return modifiedAttributes;
    },
  });

  source = changeComponentName(j, source, {
    componentName: 'Option',
    outputComponentName: 'Select.Option',
  });

  if (!shouldSkipUpdateImport()) {
    source = removeComponentImport(j, source, {
      componentName: 'Option',
      importName: getFormaImport(),
    });
    source = changeImport(j, source, {
      componentName,
      from: getFormaImport(),
      to: '@contentful/f36-components',
      outputComponentName: 'Select',
    });
  }

  return source;
}

function selectFieldCodemod(file, api) {
  const j = api.jscodeshift;
  let source = file.source;

  const componentName = getComponentLocalName(j, source, {
    componentName: 'SelectField',
    importName: getFormaImport(),
  });

  if (!componentName) {
    return source;
  }

  source = j(source)
    .find(j.JSXElement, { openingElement: { name: { name: componentName } } })
    .forEach((p) => {
      const options = p.value.children;
      let attributes = p.value.openingElement.attributes;

      attributes = renameProperties(attributes, {
        renameMap: {
          required: 'isRequired',
        },
      });

      const id = getProperty(attributes, { propertyName: 'id' });
      const name = getProperty(attributes, { propertyName: 'name' });
      const labelText = getProperty(attributes, { propertyName: 'labelText' });
      const helpText = getProperty(attributes, { propertyName: 'helpText' });
      const value = getProperty(attributes, { propertyName: 'value' });
      const validationMessage = getProperty(attributes, {
        propertyName: 'validationMessage',
      });
      const required = getProperty(attributes, { propertyName: 'isRequired' });
      const handlerProps = attributes.filter((attribute) =>
        ['onChange', 'onBlur'].includes(attribute.name?.name),
      );
      const commonProps = attributes.filter((attributes) =>
        ['testId', 'className'].includes(attributes.name?.name),
      );

      const Label = createComponent({
        j,
        componentName: 'FormControl.Label',
        children: getChildren({ prop: labelText, j }),
      });

      const HelpText =
        helpText &&
        createComponent({
          j,
          componentName: 'FormControl.HelpText',
          children: getChildren({ prop: helpText, j }),
        });

      const ValidationMesage =
        validationMessage &&
        createComponent({
          j,
          componentName: 'FormControl.ValidationMessage',
          children: getChildren({ prop: validationMessage, j }),
        });

      const selectProps = [name, value, ...handlerProps].filter((prop) => prop);
      const formControlProps = [id, required, ...commonProps].filter((p) => p);

      // from selectProps
      const selectPropsObj = getProperty(attributes, {
        propertyName: 'selectProps',
      });

      if (selectPropsObj) {
        const { isDisabled, spreadedPropsNames, ...otherProps } =
          transformSelectProps(selectPropsObj, {
            j,
            attributes,
          });

        if (isDisabled) {
          formControlProps.push(isDisabled);
        }
        selectProps.push(...Object.values(otherProps));
        // this will add `{...spreadedPropsName}` to the Select Component
        spreadedPropsNames.forEach((name) =>
          selectProps.push(j.jsxSpreadAttribute(j.identifier(name))),
        );
      }

      const Select = createComponent({
        j,
        componentName: 'Select',
        props: selectProps,
        children: options,
      });

      const content = [Label, Select, HelpText, ValidationMesage].reduce(
        (acc, c) => {
          return c ? [...acc, c, j.jsxText('\n')] : acc;
        },
        [j.jsxText('\n')],
      );

      const FormControl = createComponent({
        j,
        componentName: 'FormControl',
        props: formControlProps,
        children: content,
      });

      j(p).replaceWith(FormControl);
    })
    .toSource();

  source = changeComponentName(j, source, {
    componentName: 'Option',
    outputComponentName: 'Select.Option',
  });

  if (!shouldSkipUpdateImport()) {
    source = removeComponentImport(j, source, {
      componentName: 'Option',
      importName: getFormaImport(),
    });
    source = addImport(j, source, [
      j.template.statement([
        'import { FormControl, Select } from "@contentful/f36-components"',
      ]),
    ]).source;
    source = changeImport(j, source, {
      componentName,
      from: getFormaImport(),
      to: '@contentful/f36-components',
      outputComponentName: 'Select',
    });
  }

  return source;
}

/**
 * Function that will convert all the properties in the "selectProps" object
 * to the correct type that we need when passing them to FormControl and Select components.
 * It will return an object where each key is the name of the prop and the value is the value of the prop
 *
 * @param selectPropsObj
 * @param options
 * @returns {Object} newProps
 */
function transformSelectProps(selectPropsObj, { j, attributes }) {
  const { properties } = selectPropsObj.value.expression;

  const newProps = { spreadedPropsNames: [] };
  const propertiesMap = properties.reduce((acc, prop) => {
    let key;

    // A spreaded prop (e.g.: "...selectProps", "...otherProps") does not have a key
    // we don't include it in the propertiesMap and we put its name directly into newProps obj
    // and later we use that name to create `{...spreadedProps}` in Select
    if (!prop.key && prop.type === 'SpreadElement') {
      newProps.spreadedPropsNames.push(prop.argument.name);
      return acc;
    }

    // rename props if necessary
    switch (prop.key.name) {
      case 'disabled':
        key = 'isDisabled';
        break;
      case 'inputRef':
        key = 'ref';
        break;
      default:
        key = prop.key.name;
    }

    return { ...acc, [key]: prop };
  }, {});

  Object.keys(propertiesMap).forEach((key) => {
    let propertyValue;

    if (isConditionalExpression(propertiesMap[key], j)) {
      const { value } = propertiesMap[key];

      propertyValue = j.jsxExpressionContainer(
        j.conditionalExpression(value.test, value.consequent, value.alternate),
      );
    } else if (propertiesMap[key].value.type === 'Identifier') {
      const { name } = propertiesMap[key].value;

      propertyValue = j.jsxExpressionContainer(j.jsxIdentifier(name));
    } else {
      const { value } = propertiesMap[key].value;

      propertyValue =
        typeof value === 'number'
          ? j.jsxExpressionContainer(j.numericLiteral(value))
          : j.literal(value);
    }

    newProps[key] = getNewProp(attributes, {
      j,
      propertyName: key,
      propertyValue,
    });
  });

  return newProps;
}

module.exports = pipe([selectCodemod, selectFieldCodemod]);
