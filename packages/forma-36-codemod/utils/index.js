const { getComponentLocalName } = require('./getComponentLocalName');
const { renameProperties } = require('./renameProperties');
const { deleteProperty } = require('./deleteProperty');
const { hasProperty } = require('./hasProperty');
const { addProperty } = require('./addProperty');
const { changeProperties } = require('./changeProperties');
const { updatePropertyValue } = require('./updatePropertyValue');
const { getProperty } = require('./getProperty');
const { addImport } = require('./addImport');
const { updateIcons, addIconImports } = require('./updateIcons');
const { removeComponentImport } = require('./removeComponentImport');
const { changeImport } = require('./changeImport');
const { changeComponentName } = require('./changeComponentName');
const { updateTernaryValues } = require('./updateTernaryValues');
const { warningMessage } = require('./warningMessage');
const { createComponent } = require('./createComponent');
const { getChildren } = require('./getChildren');
const { getNewProp } = require('./getNewProp');
const { updateComponentsToImport } = require('./updateComponentsToImport');

module.exports = {
  getComponentLocalName,
  renameProperties,
  hasProperty,
  deleteProperty,
  addProperty,
  changeProperties,
  updatePropertyValue,
  getProperty,
  addImport,
  updateIcons,
  addIconImports,
  removeComponentImport,
  changeImport,
  changeComponentName,
  updateTernaryValues,
  warningMessage,
  createComponent,
  getChildren,
  getNewProp,
  updateComponentsToImport,
};
