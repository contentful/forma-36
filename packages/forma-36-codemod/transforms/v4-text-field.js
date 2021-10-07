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
      const commonProps = attributes.filter((attribute) =>
        ['testId', 'className'].includes(attribute.name?.name),
      );
      const formControlProps = [...commonProps, id, isRequired];

      // FormLabel
      const labelText = getProperty(attributes, { propertyName: 'labelText' });

      // TextInput PROPS
      const name = getProperty(attributes, { propertyName: 'name' });
      const value = getProperty(attributes, { propertyName: 'value' });

      const handlerProps = attributes.filter((attribute) =>
        ['onChange', 'onBlur'].includes(attribute.name?.name),
      );
      const textInputProps = [name, value, ...handlerProps];

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
        const {
          isDisabled,
          spreadedPropsName,
          ...otherProps
        } = transformTextInputProps(textInputPropsObj, {
          j,
          attributes,
        });

        formControlProps.push(isDisabled);
        textInputProps.push(
          ...Object.values(otherProps),
          // this will add `{...spreadedPropsName}` to the Component
          !!spreadedPropsName &&
            j.jsxSpreadAttribute(j.identifier(spreadedPropsName)),
        );
      }

      // Creating components
      const Label = createComponent({
        j,
        componentName: 'FormControl.Label',
        children: [
          labelText.value.type === 'StringLiteral' ||
          labelText.value.type === 'Literal'
            ? j.jsxText(labelText.value.value)
            : j.jsxExpressionContainer(
                j.identifier(labelText.value.expression.name),
              ),
        ],
      });

      const TextInput = createComponent({
        j,
        componentName: 'TextInput',
        props: textInputProps.filter((prop) => prop),
        isSelfClosing: true,
      });

      const childrenComponents = [Label, TextInput];

      if (helpText) {
        const HelpText = createComponent({
          j,
          componentName: 'FormControl.HelpText',
          children: [
            helpText.value.type === 'StringLiteral' ||
            helpText.value.type === 'Literal'
              ? j.jsxText(helpText.value.value)
              : j.jsxExpressionContainer(
                  j.identifier(helpText.value.expression.name),
                ),
          ],
        });

        childrenComponents.push(HelpText);
      }

      if (validationMessage) {
        const isConditional = isConditionalExpression(validationMessage, j);
        const { value } = validationMessage;
        let ValidationMessage;

        if (isConditional) {
          const {
            expression: { test, consequent, alternate },
          } = value;

          // if "consequent" is Falsy, it means that the validation message should show when the condition in "test" is false
          const condition = !consequent.value
            ? j.unaryExpression('!', j.identifier(test.name))
            : j.jsxIdentifier(test.name);

          // The message could be in both sides of the contional, so we do this to get the Truthy value
          const message = [consequent, alternate].find(({ value }) => value);

          const Component = createComponent({
            j,
            componentName: 'FormControl.ValidationMessage',
            children: [message],
          });

          // Creates logical AND expression that will render FormControl.ValidationMessage if it's true
          ValidationMessage = j.jsxExpressionContainer(
            j.logicalExpression('&&', condition, Component),
          );

          // set the value of isInvalid prop in FormControl
          const isInvalid = getNewProp(attributes, {
            j,
            propertyName: 'isInvalid',
            propertyValue: j.jsxExpressionContainer(condition),
          });

          formControlProps.push(isInvalid);
        } else if (value.type === 'JSXExpressionContainer') {
          const variableName = j.identifier(value.expression.name);

          const Component = createComponent({
            j,
            componentName: 'FormControl.ValidationMessage',
            children: [j.jsxExpressionContainer(variableName)],
          });

          // Creates logical AND expression that will render FormControl.ValidationMessage if the variable is not Falsy
          ValidationMessage = j.jsxExpressionContainer(
            j.logicalExpression('&&', variableName, Component),
          );

          // set the value of isInvalid prop in FormControl
          const isInvalid = getNewProp(attributes, {
            j,
            propertyName: 'isInvalid',
            propertyValue: j.jsxExpressionContainer(variableName),
          });

          formControlProps.push(isInvalid);
        } else {
          ValidationMessage = createComponent({
            j,
            componentName: 'FormControl.ValidationMessage',
            children: [j.jsxText(value.value)],
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
        props: formControlProps.filter((prop) => prop),
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

/**
 * Function that will convert all the properties in the "textInputProps" object
 * to the correct type that we need when passing them to FormControl and TextInput components.
 * It will return an object where each key is the name of the prop and the value is the value of the prop
 *
 * @param textInputPropsObj
 * @param options
 * @returns {Object} newProps
 */
function transformTextInputProps(textInputPropsObj, { j, attributes }) {
  const { properties } = textInputPropsObj.value.expression;

  const newProps = {};
  const propertiesMap = properties.reduce((acc, prop) => {
    let key;

    // A spreaded prop (e.g.: "...textInputProps", "...otherProps") does not have a key
    // we don't include it in the propertiesMap and we put its name directly into newProps obj
    // and later we use that name to create `{...spreadedProps}` in TextInput
    if (!prop.key && prop.type === 'SpreadElement') {
      newProps.spreadedPropsName = prop.argument.name;
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

/**
 * Function that adds a new prop to attributes and returns it
 *
 * @returns property
 */
function getNewProp(attributes, { j, propertyName, propertyValue }) {
  attributes = addProperty(attributes, {
    j,
    propertyName,
    propertyValue,
  });

  return getProperty(attributes, {
    propertyName,
  });
}

module.exports = pipe([textFieldCodemod]);
