import React from 'react';
import addons, { types } from '@storybook/addons';
import PropTypesPanel from './PropTypesPanel';

const ADDON_ID = 'with-prop-types';
const PANEL_ID = `${ADDON_ID}/panel`;

addons.register(ADDON_ID, api => {
  const render = ({ active }) => (
    <PropTypesPanel key={ADDON_ID} api={api} active={active} />
  );
  const title = 'PropTypes';

  addons.add(PANEL_ID, {
    type: types.PANEL,
    title,
    render,
  });
});
