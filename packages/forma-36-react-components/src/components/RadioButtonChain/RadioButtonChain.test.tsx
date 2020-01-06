import React from 'react';
import { shallow, mount } from 'enzyme';
import { axe } from 'jest-axe';

import RadioButtonChain from './RadioButtonChain';
import RadioButtonField from '../RadioButtonField/RadioButtonField';

it('renders the component with one radio button', () => {
  const options = {
    Option1: 'option1',
  };

  const wrapper = shallow(
    <RadioButtonChain>
      <RadioButtonField
        id={options.Option1}
        labelText={options.Option1}
        checked={true}
      />
    </RadioButtonChain>,
  );

  expect(wrapper).toMatchSnapshot();
});

it('renders the component with two radio buttons', () => {
  const options = {
    Option1: 'option1',
    Option2: 'option2',
  };

  const wrapper = shallow(
    <RadioButtonChain>
      <RadioButtonField
        id={options.Option1}
        labelText={options.Option1}
        checked={true}
      />
      <RadioButtonField
        id={options.Option2}
        labelText={options.Option2}
        checked={false}
      />
    </RadioButtonChain>,
  );

  expect(wrapper).toMatchSnapshot();
});

it('renders the component with multiple radio buttons', () => {
  const options = {
    Option1: 'option1',
    Option2: 'option2',
    Option3: 'option3',
    Option4: 'option4',
  };

  const wrapper = shallow(
    <RadioButtonChain>
      <RadioButtonField
        id={options.Option1}
        labelText={options.Option1}
        checked={true}
      />
      <RadioButtonField
        id={options.Option2}
        labelText={options.Option2}
        checked={false}
      />
      <RadioButtonField
        id={options.Option3}
        labelText={options.Option3}
        checked={false}
      />
      <RadioButtonField
        id={options.Option3}
        labelText={options.Option3}
        checked={false}
      />
    </RadioButtonChain>,
  );

  expect(wrapper).toMatchSnapshot();
});

it('renders the component with a custom class name', () => {
  const options = {
    Option1: 'option1',
  };

  const wrapper = shallow(
    <RadioButtonChain className="my-extra-class">
      <RadioButtonField
        id={options.Option1}
        labelText={options.Option1}
        checked={true}
      />
    </RadioButtonChain>,
  );

  expect(wrapper).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const options = {
    Option1: 'option1',
  };

  const wrapper = mount(
    <RadioButtonChain>
      <RadioButtonField
        id={options.Option1}
        labelText={options.Option1}
        checked={true}
      />
    </RadioButtonChain>,
  ).html();
  const results = await axe(wrapper);

  expect(results).toHaveNoViolations();
});
