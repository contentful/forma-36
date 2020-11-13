import React from 'react';
import { render } from '@testing-library/react';

import DropdownContainer from './DropdownContainer';

it('renders the component', () => {
  const ref = jest.fn();

  const { container } = render(
    <DropdownContainer isOpen ref={ref}>
      DropdownContainer
    </DropdownContainer>,
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const ref = jest.fn();
  const { container } = render(
    <DropdownContainer className="extraClassName" isOpen ref={ref}>
      DropdownContainer
    </DropdownContainer>,
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component as a submenu', () => {
  const ref = jest.fn();
  const { container } = render(
    <DropdownContainer className="extraClassName" isOpen submenu ref={ref}>
      DropdownContainer
    </DropdownContainer>,
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const ref = jest.fn();
  const { container } = render(
    <DropdownContainer isOpen ref={ref}>
      DropdownContainer
    </DropdownContainer>,
  );
  expect(container.firstChild).toMatchSnapshot();
});
