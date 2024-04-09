import {
  getComponentLocalName,
  changeImport,
  getProperty,
  createComponent,
  addImport,
  renameProperties,
  getChildren,
} from '../utils/index.mjs';
import { getFormaImport, shouldSkipUpdateImport } from '../utils/config.mjs';

export default function checkboxFieldCodemod(file, api) {
  const j = api.jscodeshift;
  let source = file.source;

  const componentName = getComponentLocalName(j, source, {
    componentName: 'CheckboxField',
    importName: getFormaImport(),
  });

  if (!componentName) {
    return source;
  }
  let needToImportFormControl = false;

  source = j(source)
    .find(j.JSXElement, { openingElement: { name: { name: componentName } } })
    .forEach((p) => {
      let attributes = p.value.openingElement.attributes;

      attributes = renameProperties(attributes, {
        renameMap: {
          required: 'isRequired',
          disabled: 'isDisabled',
          checked: 'isChecked',
          invalid: 'isInvalid',
          indeterminate: 'isIndeterminate',
          formLabelProps: null,
          labelIsLight: null,
          helpTextProps: null,
        },
      });

      const id = getProperty(attributes, { propertyName: 'id' });
      const name = getProperty(attributes, { propertyName: 'name' });
      const labelText = getProperty(attributes, { propertyName: 'labelText' });
      const value = getProperty(attributes, { propertyName: 'value' });
      const helpText = getProperty(attributes, { propertyName: 'helpText' });
      const validationMessage = getProperty(attributes, {
        propertyName: 'validationMessage',
      });
      const required = getProperty(attributes, { propertyName: 'isRequired' });
      const disabled = getProperty(attributes, { propertyName: 'isDisabled' });
      const invalid = getProperty(attributes, { propertyName: 'isInvalid' });
      const checked = getProperty(attributes, { propertyName: 'isChecked' });
      const handlerProps = attributes.filter((attribute) =>
        ['onChange', 'onBlur'].includes(attribute.name?.name),
      );
      const commonProps = attributes.filter((attributes) =>
        ['testId', 'className'].includes(attributes.name?.name),
      );

      const checkboxProps = [
        !validationMessage ? id : null,
        helpText,
        disabled,
        name,
        value,
        checked,
        ...handlerProps,
        ...commonProps,
      ].filter((prop) => prop);

      const Checkbox = createComponent({
        j,
        componentName: 'Checkbox',
        props: checkboxProps,
        children: getChildren({ prop: labelText, j }),
      });

      const ValidationMesage =
        validationMessage &&
        createComponent({
          j,
          componentName: 'FormControl.ValidationMessage',
          children: getChildren({ prop: validationMessage, j }),
        });

      const FormControlContent = [Checkbox, ValidationMesage].reduce(
        (acc, c) => {
          return c ? [...acc, c, j.jsxText('\n')] : acc;
        },
        [j.jsxText('\n')],
      );

      const formControlProps = [
        id,
        name,
        required,
        invalid,
        ...commonProps,
      ].filter((p) => p);

      const FormControl = createComponent({
        j,
        componentName: 'FormControl',
        props: formControlProps,
        children: FormControlContent,
      });

      if (validationMessage) {
        needToImportFormControl = true;
        j(p).replaceWith(FormControl);
      } else {
        j(p).replaceWith(Checkbox);
      }
    })
    .toSource();

  if (!shouldSkipUpdateImport()) {
    if (needToImportFormControl) {
      source = addImport(j, source, [
        j.template.statement([
          'import { FormControl } from "@contentful/f36-components"',
        ]),
      ]).source;
    }

    source = changeImport(j, source, {
      componentName,
      from: getFormaImport(),
      to: '@contentful/f36-components',
      outputComponentName: 'Checkbox',
    });
  }

  return source;
}
