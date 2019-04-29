import React from 'react';
import { shallow, mount } from 'enzyme';
import { axe } from 'jest-axe';
import EmptyState from './EmptyState';

it('renders the component', () => {
  const output = shallow(
    <EmptyState
      headingProps={{ text: 'Heading' }}
      descriptionProps={{ text: 'This is a description for the empty state.' }}
    />,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const output = shallow(
    <EmptyState
      className="my-extra-class"
      headingProps={{ text: 'Heading' }}
      descriptionProps={{ text: 'This is a description for the empty state.' }}
    />,
  );

  expect(output).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const output = mount(
    <EmptyState
      headingProps={{ text: 'Heading' }}
      descriptionProps={{ text: 'This is a description for the empty state.' }}
    />,
  ).html();
  const results = await axe(output);

  expect(results).toHaveNoViolations();
});

it('renders component with image', () => {
  const output = mount(
    <EmptyState
      headingProps={{ text: 'Heading' }}
      imageProps={{
        url: 'url',
        width: '340px',
        height: '250px',
        description: 'Image description',
      }}
      descriptionProps={{
        text:
          'This is a description for the empty state. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vulputate, sem a porttitor porttitor, velit nulla lacinia dolor, sit amet interdum ligula lectus hendrerit sem. Aliquam ultricies viverra tincidunt.',
      }}
    />,
  );

  expect(output).toMatchSnapshot();
});

it('renders component with custom image element', () => {
  const output = mount(
    <EmptyState
      headingProps={{ text: 'Heading' }}
      customImageElement={<img src={'/url'} alt="" />}
      descriptionProps={{
        text:
          'This is a description for the empty state. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vulputate, sem a porttitor porttitor, velit nulla lacinia dolor, sit amet interdum ligula lectus hendrerit sem. Aliquam ultricies viverra tincidunt.',
      }}
    />,
  );

  expect(output).toMatchSnapshot();
});
