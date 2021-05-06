import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe } from '@/scripts/test/axeHelper';

import { Flex } from './Flex';

it('renders the component', () => {
  const { container } = render(<Flex>Flex</Flex>);

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const { container } = render(<Flex className="my-extra-class">Flex</Flex>);

  expect(container.firstChild).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const { container } = render(<Flex>Flex</Flex>);
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});

describe('should have correct styles', () => {
  it('justifyContent should be center by default', () => {
    render(<Flex justifyContent="center">Flex</Flex>);

    expect(screen.getByText('Flex')).toHaveStyle({ justifyContent: 'center' });
  });

  it('alignItems should be center by default', () => {
    render(<Flex alignItems="center">Flex</Flex>);

    expect(screen.getByText('Flex')).toHaveStyle({ alignItems: 'center' });
  });

  it('should render correct margin value', () => {
    render(<Flex marginRight="spacingXs">Flex</Flex>);

    expect(screen.getByText('Flex')).toHaveStyle({
      marginRight: '0.5rem',
    });
  });

  it('should render correct padding value', () => {
    render(<Flex paddingRight="spacingXs">Flex</Flex>);

    expect(screen.getByText('Flex')).toHaveStyle({
      paddingRight: '0.5rem',
    });
  });
});
