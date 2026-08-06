import { describe, expect, it } from 'vitest';
import React from 'react';
import { render } from '@testing-library/react';
import { expectNoA11yViolations } from '@/scripts/test/expectNoA11yViolations';
import { List } from './List';
import { ListItem } from './ListItem/ListItem';

describe('List', function () {
  it('renders', () => {
    const tree = render(<List>hello world</List>);

    expect(tree).toBeTruthy();
  });

  it('renders the component with an additional class name', () => {
    const { container } = render(
      <List className="my-extra-class">List children</List>,
    );

    expect(container.firstChild).toHaveClass('my-extra-class');
  });

  it('has no a11y issues', async () => {
    const { container } = render(
      <List>
        <ListItem>First List Child</ListItem>
        <ListItem>Second List Child</ListItem>
      </List>,
    );
    await expectNoA11yViolations(container);
  });
});
