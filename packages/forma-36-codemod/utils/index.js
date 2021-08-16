const { getComponentLocalName } = require('./getComponentLocalName');
const { renameProperties } = require('./renameProperties');
const { deleteProperty } = require('./deleteProperty');
const { hasProperty } = require('./hasProperty');
const { addProperty } = require('./addProperty');
const { changeProperties } = require('./changeProperties');

module.exports = {
  getComponentLocalName,
  renameProperties,
  hasProperty,
  deleteProperty,
  addProperty,
  changeProperties,
};
