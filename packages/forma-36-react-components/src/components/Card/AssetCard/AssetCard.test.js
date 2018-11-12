import React from 'react';
import { shallow, mount } from 'enzyme';
import { axe } from 'jest-axe';
import AssetCard from './AssetCard';

it('renders the component', () => {
  const output = shallow(<AssetCard>AssetCard</AssetCard>);

  expect(output).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const output = shallow(
    <AssetCard
      extraClassNames="my-extra-class"
      src="http://placekitten.com/200/300"
      title="picture of a cat"
    />,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component in loading state', () => {
  const output = shallow(
    <AssetCard
      isLoading
      src="http://placekitten.com/200/300"
      title="picture of a cat"
    />,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with status', () => {
  const output = shallow(
    <AssetCard
      status="archived"
      src="http://placekitten.com/200/300"
      title="picture of a cat"
    />,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with actions', () => {
  const output = shallow(
    <AssetCard
      actions={[
        {
          title: 'delete',
          onClick: () => {},
        },
      ]}
      src="http://placekitten.com/200/300"
      title="picture of a cat"
    />,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component without actions', () => {
  const output = shallow(
    <AssetCard src="http://placekitten.com/200/300" title="picture of a cat" />,
  );

  expect(output.find('Dropdown').length).toEqual(0);
  expect(output).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const output = mount(
    <AssetCard src="http://placekitten.com/200/300" title="picture of a cat" />,
  ).html();
  const results = await axe(output);

  expect(results).toHaveNoViolations();
});
