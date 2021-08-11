import React from 'react';
import { render } from '@testing-library/react';
import { axe } from '@/scripts/test/axeHelper';
import { Button } from '@contentful/f36-button';

import { EmptyState } from '../src/EmptyState';

describe('EmptyState', function () {
  const description = 'This is a description for the empty state.';
  const heading = 'Heading';

  it('renders the component', () => {
    const { container, getByText } = render(
      <EmptyState
        headingProps={{ text: heading }}
        descriptionProps={{
          text: description,
        }}
      />,
    );

    expect(getByText(heading)).toBeTruthy();
    expect(getByText(description)).toBeTruthy();
    expect(container.querySelector('img')).toBeNull();
  });

  it('renders the component with an additional class name', () => {
    const extraClass = 'my-extra-class';
    const { container } = render(
      <EmptyState
        className={extraClass}
        headingProps={{ text: heading }}
        descriptionProps={{
          text: description,
        }}
      />,
    );

    expect(container.firstChild).toHaveClass(extraClass);
  });

  it('renders component with image', () => {
    const imageProps = {
      url: 'url',
      width: '340px',
      height: '250px',
      description: 'Image description',
    };
    const { getByAltText } = render(
      <EmptyState
        headingProps={{ text: 'Heading' }}
        imageProps={imageProps}
        descriptionProps={{
          text: description,
        }}
      />,
    );

    const img = getByAltText(imageProps.description);
    expect(img).toBeTruthy();
    expect(img.getAttribute('src')).toEqual(imageProps.url);
    expect(img.style.width).toEqual(imageProps.width);
    expect(img.style.height).toEqual(imageProps.height);
  });

  it('renders component with custom image element', () => {
    const { getByAltText } = render(
      <EmptyState
        headingProps={{ text: 'Heading' }}
        customImageElement={<img src={'/url'} alt="Custom element" />}
        descriptionProps={{
          text: description,
        }}
      />,
    );

    const img = getByAltText('Custom element');
    expect(img).toBeTruthy();
    expect(img.getAttribute('src')).toEqual('/url');
  });

  it('renders component with children', () => {
    const buttonText = 'A button';
    const { getByRole } = render(
      <EmptyState
        headingProps={{ text: heading }}
        descriptionProps={{
          text: description,
        }}
      >
        <Button variant="primary">{buttonText}</Button>
      </EmptyState>,
    );

    const button = getByRole('button');
    expect(button).toBeTruthy();
    expect(button.textContent).toEqual(buttonText);
  });

  it('has no a11y issues', async () => {
    const { container } = render(
      <EmptyState
        headingProps={{ text: heading }}
        descriptionProps={{
          text: description,
        }}
      />,
    );
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
