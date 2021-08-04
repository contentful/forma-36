import React from 'react';
import { render } from '@testing-library/react';
import { ArrowDown } from '@contentful/f36-icons';
import { axe } from '@/scripts/test/axeHelper';

import { Workbench } from './Workbench';
import { Button } from '@contentful/f36-button';

function TestWorkbench() {
  return (
    <Workbench>
      <Workbench.Header
        title={'Page title'}
        icon={ArrowDown}
        actions={<Button variant="transparent">Click</Button>}
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
        icon={ArrowDown}
        actions={<Button variant="transparent">Click</Button>}
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
    const { container } = render(<Component />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it(`has no a11y issues (${type})`, async () => {
    const { container } = render(<Component />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
