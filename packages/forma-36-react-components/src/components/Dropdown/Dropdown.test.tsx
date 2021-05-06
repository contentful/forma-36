import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from '@/scripts/test/axeHelper';

import { Dropdown } from './Dropdown';
import { Button } from '../Button';
import { DropdownListItem } from './DropdownListItem/DropdownListItem';
import { DropdownList } from './DropdownList/DropdownList';

it('renders the component', () => {
  const { container } = render(
    <Dropdown toggleElement={<Button onClick={() => {}}>Toggle</Button>}>
      <DropdownList>
        <DropdownListItem>entry</DropdownListItem>
      </DropdownList>
    </Dropdown>,
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const { container } = render(
    <Dropdown toggleElement={<Button onClick={() => {}}>Toggle</Button>}>
      <DropdownList>
        <DropdownListItem>entry</DropdownListItem>
      </DropdownList>
    </Dropdown>,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component as open', () => {
  const { container } = render(
    <Dropdown isOpen toggleElement={<Button onClick={() => {}}>Toggle</Button>}>
      <DropdownList>
        <DropdownListItem>entry</DropdownListItem>
      </DropdownList>
    </Dropdown>,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('toggleElement dispactions onClick event', () => {
  const onClickFunc = jest.fn();

  render(
    <Dropdown toggleElement={<Button onClick={onClickFunc}>Toggle</Button>}>
      <DropdownList>
        <DropdownListItem>entry</DropdownListItem>
      </DropdownList>
    </Dropdown>,
  );

  userEvent.click(screen.getByText('Toggle'));
  expect(onClickFunc).toHaveBeenCalled();
});

it('renders the component with a submenu', () => {
  const { container } = render(
    <Dropdown isOpen toggleElement={<Button onClick={() => {}}>Toggle</Button>}>
      <DropdownList>
        <DropdownListItem>entry</DropdownListItem>
        <Dropdown isOpen submenuToggleLabel="Submenu">
          <DropdownListItem>entry</DropdownListItem>
        </Dropdown>
        ,
      </DropdownList>
    </Dropdown>,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const { container } = render(
    <Dropdown toggleElement={<Button onClick={() => {}}>Toggle</Button>}>
      <DropdownList>
        <DropdownListItem>entry</DropdownListItem>
      </DropdownList>
    </Dropdown>,
  );
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
