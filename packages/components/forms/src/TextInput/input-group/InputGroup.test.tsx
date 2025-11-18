import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import { InputGroup } from './InputGroup';
import { TextInput } from '@contentful/f36-forms';
import { IconButton } from '@contentful/f36-button';
import { LockSimpleIcon } from '@contentful/f36-icons';

describe('InputGroup', function () {
  it('renders the component', () => {
    const { getByRole, getByLabelText } = render(
      <InputGroup>
        <TextInput
          aria-label="some-label"
          id="TextInput1"
          defaultValue="Some value"
        />
        <IconButton
          variant="secondary"
          icon={<LockSimpleIcon />}
          aria-label="Lock"
        />
      </InputGroup>,
    );

    expect(getByRole('button')).toBeTruthy();
    expect(getByLabelText('some-label')).toBeTruthy();
  });

  it('renders the component with an additional class name', () => {
    const { container } = render(
      <InputGroup className="my-extra-class">
        <TextInput
          aria-label="some-label"
          id="TextInput1"
          defaultValue="Some value"
        />
        <IconButton
          variant="secondary"
          icon={<LockSimpleIcon />}
          aria-label="Lock"
        />
      </InputGroup>,
    );

    expect(container.firstChild).toHaveClass('my-extra-class');
  });

  it('has no a11y issues', async () => {
    const { container } = render(
      <InputGroup>
        <TextInput
          aria-label="some-label"
          id="TextInput1"
          defaultValue="Some value"
        />
        <IconButton
          variant="secondary"
          icon={<LockSimpleIcon />}
          aria-label="Lock"
        />
      </InputGroup>,
    );
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
