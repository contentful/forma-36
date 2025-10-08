import React from 'react';

import { screen } from '@testing-library/react';
import { ModalLauncher } from './ModalLauncher';

it('closeAll', async () => {
  ModalLauncher.open(() => <div>Test Modal</div>);
  expect(screen.queryByText('Test Modal')).toBeDefined();

  await ModalLauncher.closeAll();
  expect(screen.queryByText('Test Modal')).toBeNull();
});
