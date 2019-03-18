import React from 'react';
import { shallow, mount } from 'enzyme';
import { axe } from 'jest-axe';
import Illustration, { IllustrationType } from './Illustration';
import { illustrationName } from './constants';

it('renders the component', () => {
  const output = shallow(
    <Illustration
      illustration={illustrationName[Object.keys(illustrationName)[0]]}
    />,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const output = shallow(
    <Illustration
      illustration={illustrationName[Object.keys(illustrationName)[0]]}
      className="my-extra-class"
    />,
  );

  expect(output).toMatchSnapshot();
});

Object.keys(illustrationName).forEach(illustration => {
  it(`${illustration} has no a11y issues`, async () => {
    const output = mount(
      <Illustration illustration={illustration as IllustrationType} />,
    ).html();

    const results = await axe(output);

    expect(results).toHaveNoViolations();
  });
});
