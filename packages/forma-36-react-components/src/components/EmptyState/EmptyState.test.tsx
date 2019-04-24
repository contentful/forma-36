import React from 'react';
import { shallow, mount } from 'enzyme';
import { axe } from 'jest-axe';
import EmptyState from './EmptyState';

it('renders the component', () => {
  const output = shallow(
    <EmptyState
      heading={'Heading'}
      description="This is a description for the empty state."
    />,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const output = shallow(
    <EmptyState
      className="my-extra-class"
      heading={'Heading'}
      description="This is a description for the empty state."
    />,
  );

  expect(output).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const output = mount(
    <EmptyState
      heading={'Heading'}
      description="This is a description for the empty state."
    />,
  ).html();
  const results = await axe(output);

  expect(results).toHaveNoViolations();
});

it('renders component with image', () => {
  const output = mount(
    <EmptyState
      heading={'Heading'}
      image={{
        url: 'url',
        width: '340px',
        height: '250px',
        description: 'Image description',
      }}
      description={
        'This is a description for the empty state. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vulputate, sem a porttitor porttitor, velit nulla lacinia dolor, sit amet interdum ligula lectus hendrerit sem. Aliquam ultricies viverra tincidunt.'
      }
    />,
  );

  expect(output).toMatchSnapshot();
});
