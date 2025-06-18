import React from 'react';
import { render, screen } from '@testing-library/react';
import { CaretDownIcon } from '@contentful/f36-icons-alpha';
import { ButtonGroup } from './ButtonGroup';
import { Button } from '../Button';

describe('ButtonGroup', () => {
  it('renders correctly', () => {
    const { container } = render(
      <ButtonGroup>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
      </ButtonGroup>,
    );
    expect(container.firstChild.childNodes).toHaveLength(2);
    expect(screen.getAllByRole('button')).toHaveLength(2);
  });

  it('renders with an icon', () => {
    const { container } = render(
      <ButtonGroup>
        <Button startIcon={<CaretDownIcon />}>Button with icon</Button>
      </ButtonGroup>,
    );
    expect(container.firstChild.childNodes).toHaveLength(1);
    expect(screen.getByText('Button with icon')).toBeInTheDocument();
  });
});
