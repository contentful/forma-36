import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import { ValidationMessage } from './ValidationMessage';

describe('ValidationMessage', function () {
  it('renders the component with all required props', () => {
    const { getByText, getByTestId } = render(
      <ValidationMessage>This field is required</ValidationMessage>,
    );

    const textElement = getByText('This field is required');
    const iconElement = getByTestId('cf-ui-icon');
    expect(textElement).toBeTruthy();
    expect(textElement.previousSibling).toContainElement(iconElement);
  });

  it('renders the component with an additional class name', () => {
    const { container } = render(
      <ValidationMessage className="my-extra-class">
        This field is required
      </ValidationMessage>,
    );

    expect(container.firstChild).toHaveClass('my-extra-class');
  });

  it('has no a11y issues', async () => {
    const { container } = render(
      <ValidationMessage>This field is required</ValidationMessage>,
    );
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
