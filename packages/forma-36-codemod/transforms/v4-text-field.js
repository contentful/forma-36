const {
  addImport,
  getNewProp,
  createComponent,
  getComponentLocalName,
  getProperty,
  removeComponentImport,
  renameProperties,
  getChildren,
  hasProperty,
  updateIcons,
  addIconImports,
  updateComponentsToImport,
} = require('../utils');
const { getFormaImport, shouldSkipUpdateImport } = require('../utils/config');
const { isConditionalExpression } = require('../utils/updateTernaryValues');

function textFieldCodemod(file, api) {
  const j = api.jscodeshift;
  let source = file.source;
  let componentsToImport = ['FormControl'];

  const componentName = getComponentLocalName(j, source, {
    componentName: 'TextField',
    importName: getFormaImport(),
  });

  if (!componentName) {
    return source;
  }
  const usedIcons = [];

  source = j(source)
    .find(j.JSXElement, { openingElement: { name: { name: componentName } } })
    .forEach((nodePath) => {
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

      // Check if is textarea
      const isTextarea = hasProperty(attributes, { propertyName: 'textarea' });
      if (isTextarea) {
        componentsToImport = updateComponentsToImport(componentsToImport, [
          'Textarea',
        ]);
      } else {
        componentsToImport = updateComponentsToImport(componentsToImport, [
          'TextInput',
        ]);
      }

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
        const { isDisabled, spreadedPropsNames, ...otherProps } =
          transformObjectToProps(textInputPropsObj, {
            j,
            attributes,
          });

        formControlProps.push(isDisabled);
        textInputProps.push(...Object.values(otherProps));
        // this will add `{...spreadedPropsName}` to the TextInput Component
        spreadedPropsNames.forEach((name) =>
          textInputProps.push(j.jsxSpreadAttribute(j.identifier(name))),
        );
      }

      // Creating components
      const Label = createComponent({
        j,
        componentName: 'FormControl.Label',
        children: getChildren({ prop: labelText, j }),
      });

      const TextInput = createComponent({
        j,
        componentName: isTextarea ? 'Textarea' : 'TextInput',
        props: textInputProps.filter(Boolean),
        isSelfClosing: true,
      });

      let childrenComponents;

      // TextLink Props
      const textLinkPropsObj = getProperty(attributes, {
        propertyName: 'textLinkProps',
      });
      if (textLinkPropsObj) {
        let TextLink;

        if (textLinkPropsObj.value.expression.type === 'Identifier') {
          const objName = textLinkPropsObj.value.expression.name;
          TextLink = createComponent({
            j,
            componentName: 'TextLink',
            children: [
              j.jsxExpressionContainer(j.identifier(`${objName}.text`)),
            ],
            props: [j.jsxSpreadAttribute(j.identifier(objName))],
          });
        }
        if (textLinkPropsObj.value.expression.type === 'ObjectExpression') {
          const { text, spreadedPropsNames, ...otherProps } =
            transformObjectToProps(textLinkPropsObj, { j, attributes });
          let textLinkProps = [];
          spreadedPropsNames.forEach((name) =>
            textLinkProps.push(j.jsxSpreadAttribute(j.identifier(name))),
          );
          textLinkProps.push(...Object.values(otherProps));

          textLinkProps = updateIcons(textLinkProps, { j, icons: usedIcons });

          TextLink = createComponent({
            j,
            componentName: 'TextLink',
            children: [j.jsxText(text.value.value)],
            props: textLinkProps,
          });
        }

        const LabelContainer = createComponent({
          j,
          componentName: 'Flex',
          children: [
            j.jsxText('\n'),
            Label,
            j.jsxText('\n'),
            TextLink,
            j.jsxText('\n'),
          ],
          props: [
            j.jsxAttribute(
              j.jsxIdentifier('justifyContent'),
              j.literal('space-between'),
            ),
            j.jsxAttribute(j.jsxIdentifier('alignItems'), j.literal('center')),
          ],
        });

        componentsToImport = updateComponentsToImport(componentsToImport, [
          'Flex',
          'TextLink',
        ]);

        childrenComponents = [LabelContainer, TextInput];
      } else {
        childrenComponents = [Label, TextInput];
      }

      // If the maxLength prop exists, we need to create a Flex component
      // and add to it the FormControl.Counter and FormControl.HelpText
      let Counter;
      let HelpText;
      const maxLengthProp = textInputProps
        .filter(Boolean)
        .find((prop) => prop.name?.name === 'maxLength');

      if (maxLengthProp) {
        Counter = createComponent({
          j,
          componentName: 'FormControl.Counter',
          isSelfClosing: true,
        });
      }

      if (helpText) {
        HelpText = createComponent({
          j,
          componentName: 'FormControl.HelpText',
          children: getChildren({ prop: helpText, j }),
        });
      }

      if (Counter) {
        const flexJustifyContent = HelpText ? 'space-between' : 'flex-end';
        const flexChildren = [HelpText, Counter].filter(Boolean);

        const Flex = createComponent({
          j,
          componentName: 'Flex',
          props: [
            j.jsxAttribute(
              j.jsxIdentifier('justifyContent'),
              j.literal(flexJustifyContent),
            ),
          ],
          children: flexChildren.reduce(
            (acc, child) => [...acc, child, j.jsxText('\n')],
            [j.jsxText('\n')],
          ),
        });

        componentsToImport = updateComponentsToImport(componentsToImport, [
          'Flex',
        ]);

        childrenComponents.push(Flex);
      } else if (HelpText && !Counter) {
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

          const isBinaryExpression = test.type === 'BinaryExpression';

          let condition;

          // if "consequent" is Falsy, it means that the validation message should show when the condition in "test" is false
          if (isBinaryExpression) {
            condition =
              !consequent.value && consequent.type !== 'Identifier'
                ? j.unaryExpression('!', j.parenthesizedExpression(test))
                : test;
          } else {
            condition =
              !consequent.value && consequent.type !== 'Identifier'
                ? j.unaryExpression('!', j.identifier(test.name))
                : j.jsxIdentifier(test.name);
          }

          // The message could be in either sides of the contional, so we do this to get the Truthy value
          const message = [consequent.type, alternate.type].includes(
            'Identifier',
          )
            ? j.jsxExpressionContainer(
                j.identifier(consequent.name || alternate.name),
              )
            : [consequent, alternate].find(({ value }) => value);

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
    source = addIconImports({ j, icons: usedIcons, source });
    source = removeComponentImport(j, source, {
      componentName: 'TextField',
      importName: getFormaImport(),
    });
    source = addImport(j, source, [
      j.template.statement([
        `import { ${componentsToImport.join(
          ', ',
        )} } from "@contentful/f36-components"`,
      ]),
    ]).source;
  }

  return source;
}

/**
 * Function that will convert all the properties in the a prop object
 * to the correct type that we need when passing them to the new components.
 * It will return an object where each key is the name of the prop and the value is the value of the prop
 *
 * @param propObj
 * @param options
 * @returns {Object} newProps
 */
function transformObjectToProps(propObj, { j, attributes }) {
  const { properties } = propObj.value.expression;

  const newProps = { spreadedPropsNames: [] };
  const propertiesMap = properties.reduce((acc, prop) => {
    let key;

    // A spreaded prop (e.g.: "...textInputProps", "...otherProps") does not have a key
    // we don't include it in the propertiesMap and we put its name directly into newProps obj
    // and later we use that name to create `{...spreadedProps}` in TextInput
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

module.exports = textFieldCodemod;
