import React from 'react';
import { render } from '@testing-library/react';
import { axe } from '@/scripts/test/axeHelper';

import { EmptyState } from './EmptyState';

it('renders the component', () => {
  const { container } = render(
    <EmptyState
      headingProps={{ text: 'Heading' }}
      descriptionProps={{ text: 'This is a description for the empty state.' }}
    />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const { container } = render(
    <EmptyState
      className="my-extra-class"
      headingProps={{ text: 'Heading' }}
      descriptionProps={{ text: 'This is a description for the empty state.' }}
    />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const { container } = render(
    <EmptyState
      headingProps={{ text: 'Heading' }}
      descriptionProps={{ text: 'This is a description for the empty state.' }}
    />,
  );
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});

it('renders component with image', () => {
  const { container } = render(
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

  expect(container.firstChild).toMatchSnapshot();
});

it('renders component with custom image element', () => {
  const { container } = render(
    <EmptyState
      headingProps={{ text: 'Heading' }}
      customImageElement={<img src={'/url'} alt="" />}
      descriptionProps={{
        text:
          'This is a description for the empty state. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vulputate, sem a porttitor porttitor, velit nulla lacinia dolor, sit amet interdum ligula lectus hendrerit sem. Aliquam ultricies viverra tincidunt.',
      }}
    />,
  );

  expect(container.firstChild).toMatchSnapshot();
});
