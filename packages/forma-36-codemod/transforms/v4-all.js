const assetCard = require('./v4-asset-card');
const badge = require('./v4-badge');
const button = require('./v4-button');
const card = require('./v4-card');
const checkbox = require('./v4-checkbox');
const entityList = require('./v4-entity-list');
const entryCard = require('./v4-entry-card');
const flex = require('./v4-flex');
const form = require('./v4-form');
const grid = require('./v4-grid');
const iconButton = require('./v4-icon-button');
const icon = require('./v4-icon');
const list = require('./v4-list');
const modal = require('./v4-modal');
const note = require('./v4-note');
const notification = require('./v4-notification');
const pill = require('./v4-pill');
const radio = require('./v4-radio');
const select = require('./v4-select');
const skeleton = require('./v4-skeleton');
const spinner = require('./v4-spinner');
const table = require('./v4-table');
const textField = require('./v4-text-field');
const textInputs = require('./v4-text-inputs');
const textLink = require('./v4-text-link');
const tooltip = require('./v4-tooltip');
const typography = require('./v4-typography');
const helptext = require('./v4-helptext');
const inlineEntryCard = require('./v4-inline-entry-card');

const { pipe } = require('./common/pipe');

module.exports = pipe([
  assetCard,
  badge,
  button,
  card,
  checkbox,
  entityList,
  entryCard,
  flex,
  form,
  grid,
  iconButton,
  icon,
  list,
  modal,
  note,
  notification,
  pill,
  radio,
  select,
  skeleton,
  spinner,
  table,
  textField,
  textInputs,
  textLink,
  tooltip,
  typography,
  helptext,
  inlineEntryCard,
]);
