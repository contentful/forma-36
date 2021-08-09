import React from 'react';
import { render } from '@testing-library/react';
import { List } from '../src/List';

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
});
