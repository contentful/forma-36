import React from 'react';
import { render, screen } from '@testing-library/react';
import { Segmentation } from './Segmentation';
import { Button } from '@contentful/f36-button';

describe('Segmentation', function () {
  it('renders text', () => {
    render(<Segmentation segments={['1', '2', '3']} />);

    expect(screen.getByTestId('cf-ui-segmentation')).toHaveTextContent('123');
  });

  it('renders components', () => {
    render(
      <Segmentation
        segments={[
          <span key={1}>1</span>,
          <Button key={2}>2</Button>,
          <div key={3}>3</div>,
        ]}
      />,
    );
    expect(screen.getByTestId('cf-ui-segmentation')).toHaveTextContent('123');
  });

  it('renders children', () => {
    render(
      <Segmentation>
        <span>1</span>
        <Button>2</Button>
        <div>3</div>
      </Segmentation>,
    );
    expect(screen.getByTestId('cf-ui-segmentation')).toHaveTextContent('123');
  });
});
