/* eslint-disable no-console */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';

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
        <NavListItem onClick={jest.fn()} as="button">
          Item 4
        </NavListItem>
        <NavListItem isDisabled onClick={jest.fn()} as="button">
          Item 4
        </NavListItem>
      </NavList>,
    );
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
