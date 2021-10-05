const {
  addImport,
  addProperty,
  createComponent,
  getComponentLocalName,
  getProperty,
  removeComponentImport,
  renameProperties,
} = require('../utils');
const { getFormaImport, shouldSkipUpdateImport } = require('../utils/config');
const { pipe } = require('./common/pipe');

function textFieldCodemod(file, api) {
  const j = api.jscodeshift;
  let source = file.source;

  const componentName = getComponentLocalName(j, source, {
    componentName: 'TextField',
    importName: getFormaImport(),
  });

  if (!componentName) {
    return source;
  }

  source = j(source)
    .find(j.JSXElement, { openingElement: { name: { name: componentName } } })
    .forEach((nodePath) => {
      // const options = nodePath.value.children;
      let attributes = nodePath.value.openingElement.attributes;

      attributes = renameProperties(attributes, {
        renameMap: {
          required: 'isRequired',
        },
      });

      // FormControl PROPS
      const formControlProps = [];

      const id = getProperty(attributes, { propertyName: 'id' });
      const isRequired = getProperty(attributes, {
        propertyName: 'isRequired',
      });
      formControlProps.push(id, isRequired);

      // FormLabel
      const labelText = getProperty(attributes, { propertyName: 'labelText' });

      // TextInput PROPS
      const name = getProperty(attributes, { propertyName: 'name' });
      const value = getProperty(attributes, { propertyName: 'value' });
      const commonProps = attributes.filter((attribute) =>
        ['testId', 'className'].includes(attribute.name?.name),
      );
      const handlerProps = attributes.filter((attribute) =>
        ['onChange', 'onBlur'].includes(attribute.name?.name),
      );

      // HelpText Props
      const helpText = getProperty(attributes, { propertyName: 'helpText' });

      // ValidationMessage Props
      const validationMessage = getProperty(attributes, {
        propertyName: 'validationMessage',
      });

      // from textInputProps
      const textInputProps = getProperty(attributes, {
        propertyName: 'textInputProps',
      }).value.expression.properties;

      let isDisabled = textInputProps.find(
        ({ key }) => key.name === 'disabled',
      );
      if (isDisabled) {
        const { value } = isDisabled;

        let propertyValue = null; // passing "null" so the prop is added without a value because it's a boolean prop

        if (value.type === 'ConditionalExpression') {
          propertyValue = j.jsxExpressionContainer(
            j.conditionalExpression(
              value.test,
              value.consequent,
              value.alternate,
            ),
          );
        }

        attributes = addProperty(attributes, {
          j,
          propertyName: 'isDisabled',
          propertyValue,
        });

        isDisabled = getProperty(attributes, {
          propertyName: 'isDisabled',
        });

        formControlProps.push(isDisabled);
      }

      // to be added to TextInput
      let maxLength = textInputProps.find(
        (prop) => prop.key.name === 'maxLength',
      );
      if (maxLength) {
        attributes = addProperty(attributes, {
          j,
          propertyName: 'maxLength',
          propertyValue: j.jsxExpressionContainer(
            j.numericLiteral(maxLength.value.value),
          ),
        });

        maxLength = getProperty(attributes, {
          propertyName: 'maxLength',
        });
      }

      let placeholder = textInputProps.find(
        (prop) => prop.key.name === 'placeholder',
      );
      if (placeholder) {
        attributes = addProperty(attributes, {
          j,
          propertyName: 'placeholder',
          propertyValue: j.literal(placeholder.value.value),
        });

        placeholder = getProperty(attributes, {
          propertyName: 'placeholder',
        });
      }

      const Label = createComponent({
        j,
        componentName: 'FormControl.Label',
        children: [j.jsxText(labelText.value.value)],
      });

      const TextInput = createComponent({
        j,
        componentName: 'TextInput',
        props: [
          ...commonProps,
          name,
          value,
          placeholder,
          maxLength,
          ...handlerProps,
        ],
        isSelfClosing: true,
      });

      const childrenComponents = [Label, TextInput];

      if (helpText) {
        const HelpText = createComponent({
          j,
          componentName: 'FormControl.HelpText',
          children: [j.jsxText(helpText.value.value)],
        });

        childrenComponents.push(HelpText);
      }

      if (validationMessage) {
        const ValidationMesage = createComponent({
          j,
          componentName: 'FormControl.ValidationMessage',
          children: [j.jsxText(validationMessage.value.value)],
        });

        childrenComponents.push(ValidationMesage);
      }

      const children = childrenComponents.reduce(
        (acc, child) => [...acc, child, j.jsxText('\n')],
        [j.jsxText('\n')],
      );

      const FormControl = createComponent({
        j,
        componentName: 'FormControl',
        props: formControlProps,
        children,
      });

      j(nodePath).replaceWith(FormControl);
    })
    .toSource();

  if (!shouldSkipUpdateImport()) {
    source = removeComponentImport(j, source, {
      componentName: 'TextField',
      importName: getFormaImport(),
    });
    source = addImport(j, source, [
      j.template.statement([
        'import { FormControl, TextInput } from "@contentful/f36-components"',
      ]),
    ]).source;
  }

  return source;
}

module.exports = pipe([textFieldCodemod]);
