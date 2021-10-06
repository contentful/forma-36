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
const { isConditionalExpression } = require('../utils/updateTernaryValues');

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
      const id = getProperty(attributes, { propertyName: 'id' });
      const isRequired = getProperty(attributes, {
        propertyName: 'isRequired',
      });
      const formControlProps = [id, isRequired];

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
      const textInputProps = [...commonProps, name, value, ...handlerProps];

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

      if (textInputPropsObj) {
        const { isDisabled, maxLength, placeholder } = transformTextInputProps(
          textInputPropsObj,
          {
            j,
            attributes,
          },
        );

        formControlProps.push(isDisabled);
        textInputProps.push(maxLength, placeholder);
      }

      // Creating components
      const Label = createComponent({
        j,
        componentName: 'FormControl.Label',
        children: [j.jsxText(labelText.value.value)],
      });

      const TextInput = createComponent({
        j,
        componentName: 'TextInput',
        props: textInputProps.filter((prop) => prop !== null),
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
        const isConditional = isConditionalExpression(validationMessage, j);
        let ValidationMessage;

        if (isConditional) {
          const { expression } = validationMessage.value;

          const Component = createComponent({
            j,
            componentName: 'FormControl.ValidationMessage',
            children: [j.jsxText(expression.consequent.value)],
          });

          // Creates logical AND expression that will render FormControl.ValidationMessage if it's true
          ValidationMessage = j.jsxExpressionContainer(
            j.logicalExpression('&&', expression.test, Component),
          );

          // set the value of isInvalid prop in FormControl
          attributes = addProperty(attributes, {
            j,
            propertyName: 'isInvalid',
            propertyValue: j.jsxExpressionContainer(
              j.jsxIdentifier(expression.test.name),
            ),
          });

          const isInvalid = getProperty(attributes, {
            propertyName: 'isInvalid',
          });

          formControlProps.push(isInvalid);
        } else {
          ValidationMessage = createComponent({
            j,
            componentName: 'FormControl.ValidationMessage',
            children: [j.jsxText(validationMessage.value.value)],
          });
        }

        childrenComponents.push(ValidationMessage);
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

function transformTextInputProps(textInputPropsObj, { j, attributes }) {
  const { properties } = textInputPropsObj.value.expression;

  let isDisabled = properties.find(({ key }) => key.name === 'disabled');
  if (isDisabled) {
    const { value } = isDisabled;

    let propertyValue =
      value.type === 'ConditionalExpression'
        ? j.jsxExpressionContainer(
            j.conditionalExpression(
              value.test,
              value.consequent,
              value.alternate,
            ),
          )
        : null; // passing "null" so the prop is added without a value because it's a boolean prop

    attributes = addProperty(attributes, {
      j,
      propertyName: 'isDisabled',
      propertyValue,
    });

    isDisabled = getProperty(attributes, {
      propertyName: 'isDisabled',
    });
  }

  let maxLength = properties.find((prop) => prop.key.name === 'maxLength');
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

  let placeholder = properties.find((prop) => prop.key.name === 'placeholder');
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

  return { isDisabled, placeholder, maxLength };
}

module.exports = pipe([textFieldCodemod]);
