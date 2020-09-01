import React from 'react';
import { shallow, mount } from 'enzyme';
import axe from '../../utils/axeHelper';
import Flex from './Flex';

it('renders the component', () => {
  const output = shallow(<Flex>Flex</Flex>);

  expect(output).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const output = shallow(<Flex className="my-extra-class">Flex</Flex>);

  expect(output).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const output = mount(<Flex>Flex</Flex>).html();
  const results = await axe(output);

  expect(results).toHaveNoViolations();
});

describe('should have correct styles', () => {
  it('justifyContent should be center by default', () => {
    const output = shallow(<Flex justifyContent="center">Flex</Flex>);
    const outputStyles = output.get(0).props.style;
    expect(outputStyles).toMatchObject({ justifyContent: 'center' });
  });

  it('alignItems should be center by default', () => {
    const output = shallow(<Flex alignItems="center">Flex</Flex>);
    const outputStyles = output.get(0).props.style;
    expect(outputStyles).toMatchObject({ alignItems: 'center' });
  });

  it('should render correct margin value', () => {
    const output = shallow(<Flex marginRight="spacingXs">Flex</Flex>);
    const outputStyles = output.get(0).props.style;
    expect(outputStyles).toMatchObject({
      marginRight: '0.5rem',
    });
  });

  it('should render correct padding value', () => {
    const output = shallow(<Flex paddingRight="spacingXs">Flex</Flex>);
    const outputStyles = output.get(0).props.style;
    expect(outputStyles).toMatchObject({
      paddingRight: '0.5rem',
    });
  });
});
