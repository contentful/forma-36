import React from 'react';
import { render } from '@testing-library/react';
import { axe } from '@/scripts/test/axeHelper';

import { Illustration, IllustrationType } from './Illustration';
import { illustrationName } from './constants';

it('renders the component', () => {
  const { container } = render(
    <Illustration
      illustration={illustrationName[Object.keys(illustrationName)[0]]}
    />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const { container } = render(
    <Illustration
      illustration={illustrationName[Object.keys(illustrationName)[0]]}
      className="my-extra-class"
    />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

Object.keys(illustrationName).forEach((illustration) => {
  it(`${illustration} has no a11y issues`, async () => {
    const { container } = render(
      <Illustration illustration={illustration as IllustrationType} />,
    );

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
