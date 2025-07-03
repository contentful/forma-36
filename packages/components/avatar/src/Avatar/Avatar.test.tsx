import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import tokens from '@contentful/f36-tokens';
import { CheckCircleIcon } from '@contentful/f36-icons';
import userEvent from '@testing-library/user-event';
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

  it('renders an icon when it is provided', () => {
    const src = 'https://example.com/image.jpg';
    render(
      <Avatar
        src={src}
        icon={<CheckCircleIcon color={tokens.colorPositive} />}
      />,
    );

    expect(screen.queryByTestId('cf-ui-avatar-icon')).toBeInTheDocument();
  });

  it('renders no tooltip when no props are provided', async () => {
    const user = userEvent.setup();
    render(<Avatar />);
    await user.hover(screen.getByTestId('cf-ui-avatar-fallback'));

    await waitFor(() =>
      expect(screen.queryByTestId('tooltip')).not.toBeInTheDocument(),
    );
  });

  it('renders with tooltip when props are provided', async () => {
    const user = userEvent.setup();
    render(<Avatar tooltipProps={{ content: 'some content' }} />);
    await user.hover(screen.getByTestId('cf-ui-avatar-fallback'));

    await waitFor(() =>
      expect(screen.getByRole('tooltip').textContent).toBe('some content'),
    );
  });
});
