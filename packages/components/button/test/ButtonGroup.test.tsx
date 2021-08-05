import React from 'react';
import { render, screen } from '@testing-library/react';
import { ButtonGroup, Button } from '../src';
import { ChevronDown } from '@contentful/f36-icons';

describe('ButtonGroup', function () {
  it('renders button group', () => {
    const { container } = render(
      <ButtonGroup>
        <Button>Button</Button>
        <Button icon={<ChevronDown />} />
      </ButtonGroup>,
    );

    expect(container.firstChild.childNodes).toHaveLength(2);
    expect(screen.getAllByRole('button')).toHaveLength(2);
  });

  it('renders additional class name', () => {
    const additionalClassName = 'additional-class';
    const { container } = render(
      <ButtonGroup className={additionalClassName}>
        <Button>Button</Button>
        <Button icon={<ChevronDown />} />
      </ButtonGroup>,
    );

    expect(container.firstChild).toHaveClass(additionalClassName);
  });
});
