import { describe, expect, it } from 'vitest';
import React from 'react';
import { render } from '@testing-library/react';
import { expectNoA11yViolations } from '@/scripts/test/expectNoA11yViolations';
import { HelpText } from './HelpText';

describe('HelpText', function () {
  const helpText = 'Lorem Ipsum dolor sit amet';
  it('renders the component', () => {
    const { getByText } = render(<HelpText>{helpText}</HelpText>);

    expect(getByText(helpText)).toBeTruthy();
  });

  it('renders the component with an additional class name', () => {
    const { getByText } = render(
      <HelpText className="my-extra-class">{helpText}</HelpText>,
    );

    expect(getByText(helpText)).toHaveClass('my-extra-class');
  });

  it('has no a11y issues', async () => {
    const { container } = render(<HelpText>{helpText}</HelpText>);
    await expectNoA11yViolations(container);
  });
});
