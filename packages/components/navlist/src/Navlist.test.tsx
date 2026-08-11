import { describe, expect, it, vi } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { expectNoA11yViolations } from '@/scripts/test/expectNoA11yViolations';

import { NavList } from './NavList/NavList';
import { NavListItem } from './NavListItem/NavListItem';

describe('Navlist and Navlist Item', () => {
  it('renders the component', () => {
    render(
      <NavList>
        <NavListItem href="#Item1" isActive>
          Item 1
        </NavListItem>
        <NavListItem href="#Item2" isDisabled>
          Item 2
        </NavListItem>
        <NavListItem href="#Item3">Item 3</NavListItem>
        <NavListItem href="#Item4">Item 4</NavListItem>
      </NavList>,
    );

    expect(screen.getByRole('navigation')).toBeTruthy();
  });
  it('has no a11y issues', async () => {
    const { container } = render(
      <NavList>
        <NavListItem href="#Item1" isActive>
          Item 1
        </NavListItem>
        <NavListItem href="#Item2" isDisabled>
          Item 2
        </NavListItem>
        <NavListItem href="#Item3">Item 3</NavListItem>
        <NavListItem onClick={vi.fn()} as="button">
          Item 4
        </NavListItem>
        <NavListItem isDisabled onClick={vi.fn()} as="button">
          Item 4
        </NavListItem>
      </NavList>,
    );
    await expectNoA11yViolations(container);
  });
});
