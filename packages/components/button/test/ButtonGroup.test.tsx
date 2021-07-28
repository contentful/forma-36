import React from 'react';
import { render } from '@testing-library/react';
import { ButtonGroup, Button } from '../src';
import { ChevronDown } from '@contentful/f36-icons';

describe('ButtonGroup', function () {
  it('renders collapsed buttons', () => {
    const { container } = render(
      <ButtonGroup>
        <Button>Button</Button>
        <Button icon={ChevronDown} />
      </ButtonGroup>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders separated buttons', () => {
    const { container } = render(
      <ButtonGroup variant="spaced">
        <Button>Button</Button>
        <Button icon={ChevronDown} />
      </ButtonGroup>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders additional class name', () => {
    const { container } = render(
      <ButtonGroup className="additional-class">
        <Button>Button</Button>
        <Button icon={ChevronDown} />
      </ButtonGroup>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
