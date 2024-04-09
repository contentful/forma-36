import assetCard from './v4-asset-card.mjs';
import badge from './v4-badge.mjs';
import button from './v4-button.mjs';
import card from './v4-card.mjs';
import checkbox from './v4-checkbox.mjs';
import entityList from './v4-entity-list.mjs';
import entryCard from './v4-entry-card.mjs';
import flex from './v4-flex.mjs';
import form from './v4-form.mjs';
import grid from './v4-grid.mjs';
import iconButton from './v4-icon-button.mjs';
import icon from './v4-icon.mjs';
import list from './v4-list.mjs';
import modal from './v4-modal.mjs';
import note from './v4-note.mjs';
import notification from './v4-notification.mjs';
import pill from './v4-pill.mjs';
import radio from './v4-radio.mjs';
import select from './v4-select.mjs';
import skeleton from './v4-skeleton.mjs';
import spinner from './v4-spinner.mjs';
import table from './v4-table.mjs';
import textField from './v4-text-field.mjs';
import textInputs from './v4-text-inputs.mjs';
import textLink from './v4-text-link.mjs';
import tooltip from './v4-tooltip.mjs';
import typography from './v4-typography.mjs';
import helptext from './v4-helptext.mjs';
import inlineEntryCard from './v4-inline-entry-card.mjs';

import { pipe } from './common/pipe.mjs';

export default pipe([
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
