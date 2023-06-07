import React from 'react';
import { render, screen } from '@testing-library/react';
import { Avatar } from './Avatar';

jest.mock('@contentful/f36-image', () => ({
  // eslint-disable-next-line jsx-a11y/alt-text
  Image: jest.fn((props) => <img {...props} />),
}));

describe('Avatar', () => {
  it('renders with fallback when no src is provided', () => {
    render(<Avatar />);

    expect(screen.getByTestId('cf-ui-avatar-fallback')).toBeInTheDocument();
  });

  it('renders with image when src is provided', () => {
    const src = 'https://example.com/image.jpg';
    render(<Avatar src={src} />);

    expect(screen.getByRole('img')).toHaveAttribute('src', src);
  });
});
