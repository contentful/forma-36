import React from 'react';
import { shallow, mount } from 'enzyme';
import { axe } from 'jest-axe';
import Grid from './Grid';

it('renders the component', () => {
  const output = shallow(<Grid>Grid</Grid>);

  expect(output).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const output = shallow(<Grid className="my-extra-class">Grid</Grid>);

  expect(output).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const output = mount(<Grid>Grid</Grid>).html();
  const results = await axe(output);

  expect(results).toHaveNoViolations();
});

describe('should have correct styles', () => {
  it('rowGap should be 0 by default', () => {
    const output = shallow(<Grid>Grid</Grid>);
    const outputStyles = output.get(0).props.style;
    expect(outputStyles).toMatchObject({gridRowGap: 0});
  })
  
  it('columnGap should be 1rem by default', () => {
    const output = shallow(<Grid>Grid</Grid>);
    const outputStyles = output.get(0).props.style;
    expect(outputStyles).toMatchObject({gridColumnGap: '1rem'});
  })
  
  it('should has correct numbers of columns', () => {
    const output = shallow(<Grid columns={12}>Grid</Grid>);
    const outputStyles = output.get(0).props.style;
    expect(outputStyles).toMatchObject({
      gridTemplateColumns: 'repeat(12, minmax(0, 1fr)'
    })
  })

  it('should has correct numbers of rows', () => {
    const output = shallow(<Grid rows={12}>Grid</Grid>);
    const outputStyles = output.get(0).props.style;
    expect(outputStyles).toMatchObject({
      gridTemplateRows: 'repeat(12, minmax(0, 1fr)'
    })
  })
})