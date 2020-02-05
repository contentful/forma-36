import React from 'react';
import { shallow, mount } from 'enzyme';
import { axe } from 'jest-axe';
import { AssetIcon } from './AssetIcon';

it('renders the component', () => {
  const output = shallow(
    <AssetIcon />
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const output = shallow(
    <AssetIcon
      type="presentation"
      className="extra-class-name"
    />
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with type pdf', () => {
  const output = shallow(
    <AssetIcon
      className="extra-class-name"
      type="pdf"
    />
  );

  expect(output).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const output = mount(
    <AssetIcon type="presentation" />
  ).html();
  const results = await axe(output);

  expect(results).toHaveNoViolations();
});
