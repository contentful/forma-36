import React from 'react';
import { shallow, mount } from 'enzyme';
import axe from '../../../utils/axeHelper';
import GridItem from './GridItem';

it('renders the component', () => {
  const output = shallow(<GridItem>Grid Item</GridItem>);

  expect(output).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const output = shallow(
    <GridItem className="my-extra-class">Grid Item</GridItem>,
  );

  expect(output).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const output = mount(<GridItem>Grid Item</GridItem>).html();
  const results = await axe(output);

  expect(results).toHaveNoViolations();
});

describe('should have correct styles', () => {
  it('should result to gridColumn', () => {
    const output = shallow(<GridItem columnStart={3} columnEnd={6} />);
    const outputStyles = output.get(0).props.style;
    expect(outputStyles).toMatchObject({ gridArea: 'auto / 3 / auto / 6' });
  });

  it('columnStart should have the correct value', () => {
    const output = shallow(<GridItem columnStart={3} />);
    const outputStyles = output.get(0).props.style;
    expect(outputStyles).toMatchObject({ gridArea: 'auto / 3 / auto / auto' });
  });

  it('columnEnd should have the correct value', () => {
    const output = shallow(<GridItem columnEnd={4} />);
    const outputStyles = output.get(0).props.style;
    expect(outputStyles).toMatchObject({ gridArea: 'auto / auto / auto / 4' });
  });

  it('rowStart should have the correct value', () => {
    const output = shallow(<GridItem rowStart={3} />);
    const outputStyles = output.get(0).props.style;
    expect(outputStyles).toMatchObject({ gridArea: '3 / auto / auto / auto' });
  });

  it('rowEnd should have the correct value', () => {
    const output = shallow(<GridItem rowEnd={4} />);
    const outputStyles = output.get(0).props.style;
    expect(outputStyles).toMatchObject({ gridArea: 'auto / auto / 4 / auto' });
  });
});
