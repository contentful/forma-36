const {
  getComponentLocalName,
  changeImport,
  getProperty,
  createComponent,
  addImport,
} = require('../utils');
const { getFormaImport, shouldSkipUpdateImport } = require('../utils/config');
const { pipe } = require('./common/pipe');

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
      const attributes = p.value.openingElement.attributes;

      const id = getProperty(attributes, { propertyName: 'id' });
      const name = getProperty(attributes, { propertyName: 'name' });
      const labelText = getProperty(attributes, { propertyName: 'labelText' });
      const helpText = getProperty(attributes, { propertyName: 'helpText' });
      const value = getProperty(attributes, { propertyName: 'value' });
      const validationMessage = getProperty(attributes, {
        propertyName: 'validationMessage',
      });

      const Label = createComponent({
        j,
        componentName: 'FormControl.Label',
        children: [j.jsxText(labelText.value.value)],
      });

      const HelpText =
        helpText &&
        createComponent({
          j,
          componentName: 'FormControl.HelpText',
          children: [j.jsxText(helpText.value.value)],
        });

      const ValidationMesage =
        validationMessage &&
        createComponent({
          j,
          componentName: 'FormControl.ValidationMessage',
          children: [j.jsxText(validationMessage.value.value)],
        });

      const selectProps = [value].filter((prop) => prop);
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
        props: [id, name],
        children: content,
      });

      j(p).replaceWith(FormControl);
    })
    .toSource();

  if (!shouldSkipUpdateImport()) {
    source = addImport(j, source, [
      j.template.statement([
        'import { FormControl, Option, Select } from "@contentful/f36-components"',
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

function selectCodemod(file, api) {
  return file.source;
}

module.exports = pipe([selectCodemod, selectFieldCodemod]);
