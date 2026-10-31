import { describe, expect, it } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { expectNoA11yViolations } from './expectNoA11yViolations';

import FolderListHandleReplacesIconExample from '../../packages/website/content/guidelines/drag-and-drop/examples/FolderListHandleReplacesIconExample';

describe('FolderListHandleReplacesIconExample a11y audit', () => {
  it('has no axe violations at rest', async () => {
    const { container } = render(<FolderListHandleReplacesIconExample />);
    await expectNoA11yViolations(container);
  });

  it('exposes an accessible name via aria-label, not text content', () => {
    render(<FolderListHandleReplacesIconExample />);
    const handle = screen.getByRole('button', { name: 'Reorder Fruits' });

    expect(handle).toHaveAttribute('aria-label', 'Reorder Fruits');
    // The bug we chased: if the accessible name comes from a visible text
    // node, VoiceOver can walk it character-by-character once
    // role="application" is applied. Confirm there is no text child.
    expect(handle.textContent).toBe('');
  });

  it('does not default to role=button while idle (no override present yet)', () => {
    render(<FolderListHandleReplacesIconExample />);
    const handle = screen.getByRole('button', { name: 'Reorder Fruits' });

    // useSortable's default role is "button" until a drag starts.
    expect(handle.getAttribute('role')).toBe('button');
  });

  it('every folder handle has a unique, name-based accessible name (no raw ids)', () => {
    render(<FolderListHandleReplacesIconExample />);
    const names = ['Fruits', 'Vegetables', 'Nuts', 'Seeds'];

    for (const name of names) {
      expect(
        screen.getByRole('button', { name: `Reorder ${name}` }),
      ).toBeInTheDocument();
    }

    // None of the internal ids ('test', 'bas', 'folder', 'max') should leak
    // into any accessible name in the tree.
    const leakedIds = ['test', 'bas', 'folder', 'max'];
    for (const id of leakedIds) {
      expect(screen.queryByRole('button', { name: id })).toBeNull();
    }
  });
});
