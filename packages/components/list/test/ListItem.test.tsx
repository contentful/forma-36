import React from 'react';
import { render } from '@testing-library/react';

import { ListItem } from '../src/ListItem/ListItem';

describe('ListItem', function () {
  it('renders the component', () => {
    const { getByText } = render(<ListItem>ListItem</ListItem>);

    expect(getByText('ListItem')).toBeTruthy();
  });

  it('renders the component with an additional class name', () => {
    const { container } = render(
      <ListItem className="my-extra-class">ListItem</ListItem>,
    );

    expect(container.firstChild).toHaveClass('my-extra-class');
  });
});
