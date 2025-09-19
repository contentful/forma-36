import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { useImageLoaded } from '@contentful/f36-core';
import { Image } from './Image';
import { axe } from 'jest-axe';

jest.mock('@contentful/f36-core', () => {
  const originalModule = jest.requireActual('@contentful/f36-core');

  return {
    __esModule: true,
    ...originalModule,
    useImageLoaded: jest.fn(),
  };
});

describe('Image', () => {
  const src = 'https://example.com/image.jpg';
  const alt = 'An image';
  const width = '400px';
  const height = '300px';

  it('should render the image once loaded', async () => {
    (useImageLoaded as jest.Mock).mockReturnValueOnce({
      loaded: true,
    });

    render(<Image alt={alt} src={src} width={width} height={height} />);
    const image = screen.getByAltText(alt);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', src);
  });

  it('has no a11y issues', async () => {
    (useImageLoaded as jest.Mock).mockReturnValueOnce({
      loaded: true,
    });

    const { container } = render(
      <Image alt={alt} src={src} width={width} height={height} />,
    );
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it('should render the skeleton while loading', async () => {
    (useImageLoaded as jest.Mock).mockReturnValueOnce({
      loaded: false,
    });

    render(<Image alt={alt} src={src} width={width} height={height} />);

    expect(
      screen.getByLabelText('Loading', { exact: false }),
    ).toBeInTheDocument();
  });

  it('should not render the skeleton once loaded', async () => {
    (useImageLoaded as jest.Mock).mockReturnValueOnce({
      loaded: true,
    });
    render(<Image alt={alt} src={src} width={width} height={height} />);
    const image = screen.getByAltText(alt);

    await waitFor(() => expect(image).toBeInTheDocument());
    expect(image).toHaveAttribute('src', src);
    const skeleton = screen.queryByLabelText('Loading', { exact: false });
    expect(skeleton).not.toBeInTheDocument();
  });
});
