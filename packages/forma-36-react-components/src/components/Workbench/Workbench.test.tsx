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

function TestComplextWorkbench() {
  return (
    <Workbench>
      <Workbench.Header
        title={'Page title'}
        icon={<Icon icon="ArrowDown" />}
        actions={<Button buttonType="muted">Click</Button>}
      />
      <Workbench.Sidebar position="left">Left sidebar</Workbench.Sidebar>
      <Workbench.Content>Workbench</Workbench.Content>
      <Workbench.Sidebar position="right">Right sidebar</Workbench.Sidebar>
    </Workbench>
  );
}

const components = [
  { type: 'simple', Component: TestWorkbench },
  { type: 'complex', Component: TestComplextWorkbench },
];

components.forEach(({ type, Component }) => {
  it(`renders the component (${type})`, () => {
    const output = shallow(<Component />);

    expect(output).toMatchSnapshot();
  });

  it(`has no a11y issues (${type})`, async () => {
    const output = mount(<Component />).html();
    const results = await axe(output);

    expect(results).toHaveNoViolations();
  });
});
