import React from 'react';
import { render } from '@testing-library/react';
import { axe } from '@/scripts/test/axeHelper';
import { HelpText } from '../src/HelpText';

describe('HelpText', function () {
  it('renders the component', () => {
    const { container } = render(
      <HelpText>Lorem Ipsum dolor sit amet</HelpText>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders the component with an additional class name', () => {
    const { container } = render(
      <HelpText className="my-extra-class">
        Lorem Ipsum dolor sit amet
      </HelpText>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('has no a11y issues', async () => {
    const { container } = render(
      <HelpText>Lopem Ipsum dolor sit amet</HelpText>,
    );
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
