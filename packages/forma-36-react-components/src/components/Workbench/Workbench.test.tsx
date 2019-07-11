import React from 'react';
import { shallow, mount } from 'enzyme';
import { axe } from 'jest-axe';
import Workbench from './Workbench';
import Icon from '../Icon';
import Button from '../Button';

function TestWorkbench() {
  return (
    <Workbench>
      <Workbench.Header
        title={'Page title'}
        icon={<Icon icon="ArrowDown" />}
        actions={<Button buttonType="muted">Click</Button>}
      />
      <Workbench.Content>Workbench</Workbench.Content>
    </Workbench>
  );
}
it('renders the component', () => {
  const output = shallow(<TestWorkbench />);

  expect(output).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const output = mount(<TestWorkbench />).html();
  const results = await axe(output);

  expect(results).toHaveNoViolations();
});
