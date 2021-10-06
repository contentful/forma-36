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
      const textInputPropsObj = getProperty(attributes, {
        propertyName: 'textInputProps',
      });
      const propsFromTextInputProps = [];

      if (textInputPropsObj) {
        const { properties } = textInputPropsObj.value.expression;

        let isDisabled = properties.find(({ key }) => key.name === 'disabled');
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
        let maxLength = properties.find(
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

          propsFromTextInputProps.push(maxLength);
        }

        let placeholder = properties.find(
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

          propsFromTextInputProps.push(placeholder);
        }
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
          ...propsFromTextInputProps,
          ...handlerProps,
        ].filter((prop) => prop !== null),
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
        let children =
          validationMessage.value.expression?.type === 'ConditionalExpression'
            ? [j.jsxText(validationMessage.value.expression.consequent.value)]
            : [j.jsxText(validationMessage.value.value)];

        if (
          validationMessage.value.expression?.type === 'ConditionalExpression'
        ) {
          const { expression } = validationMessage.value;
          children = [j.jsxText(expression.consequent.value)];

          attributes = addProperty(attributes, {
            j,
            propertyName: 'isInvalid',
            propertyValue: j.jsxExpressionContainer(
              j.conditionalExpression(
                expression.test,
                expression.consequent,
                expression.alternate,
              ),
            ),
          });

          const isInvalid = getProperty(attributes, {
            propertyName: 'isInvalid',
          });

          formControlProps.push(isInvalid);
        } else {
          children = [j.jsxText(validationMessage.value.value)];
        }

        const ValidationMesage = createComponent({
          j,
          componentName: 'FormControl.ValidationMessage',
          children,
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
        props: formControlProps.filter((prop) => prop !== null),
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
