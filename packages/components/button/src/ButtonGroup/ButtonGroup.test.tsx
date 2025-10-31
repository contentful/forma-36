import React from 'react';
import { render, screen } from '@testing-library/react';
import { ButtonGroup, Button, IconButton } from '..';
import { CaretDownIcon } from '@contentful/f36-icons';
import { axe } from 'jest-axe';

describe('ButtonGroup', function () {
  it('renders button group', () => {
    const { container } = render(
      <ButtonGroup>
        <Button>Button</Button>
        <IconButton icon={<CaretDownIcon />} aria-label="open" />
      </ButtonGroup>,
    );

    expect(container.firstChild.childNodes).toHaveLength(2);
    expect(screen.getAllByRole('button')).toHaveLength(2);
  });

  it('has no a11y issues', async () => {
    const { container } = render(
      <ButtonGroup>
        <Button>Button</Button>
        <Button startIcon={<CaretDownIcon />}>Open</Button>
        <IconButton icon={<CaretDownIcon />} aria-label="open" />
      </ButtonGroup>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('renders additional class name', () => {
    const additionalClassName = 'additional-class';
    const { container } = render(
      <ButtonGroup className={additionalClassName}>
        <Button>Button</Button>
        <Button startIcon={<CaretDownIcon />}>Open</Button>
      </ButtonGroup>,
    );

    expect(container.firstChild).toHaveClass(additionalClassName);
  });
});
