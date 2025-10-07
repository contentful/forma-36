import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Avatar } from '../Avatar';
import { AvatarGroup } from './AvatarGroup';
import { axe } from 'jest-axe';

jest.mock('@contentful/f36-image', () => ({
  Image: jest.fn((props) => <img alt="fallback avatar" {...props} />),
}));

const imgUrl = 'https://example.com/image.jpg';

describe('AvatarGroup', () => {
  it('renders up to 3 visible Avatars in a group', () => {
    render(
      <AvatarGroup>
        <Avatar alt="Marge Simpson" src={imgUrl} />
        <Avatar alt="Maggie Simpson" src={imgUrl} />
        <Avatar alt="Lisa Simpson" src={imgUrl} />
      </AvatarGroup>,
    );
    expect(screen.getAllByRole('img')).toHaveLength(3);
  });
  it('renders 2 visible Avatars in a group bigger than 3', () => {
    render(
      <AvatarGroup>
        <Avatar alt="Marge Simpson" src={imgUrl} />
        <Avatar alt="Maggie Simpson" src={imgUrl} />
        <Avatar alt="Lisa Simpson" src={imgUrl} />
        <Avatar alt="Homer Simpson" src={imgUrl} />
      </AvatarGroup>,
    );
    expect(screen.getAllByRole('img')).toHaveLength(2);
    expect(screen.getByText('+2')).toBeInTheDocument();
  });
  it('allows to set visible Avatars programmatically', () => {
    render(
      <AvatarGroup maxVisibleChildren={4}>
        <Avatar alt="Marge Simpson" src={imgUrl} />
        <Avatar alt="Maggie Simpson" src={imgUrl} />
        <Avatar alt="Lisa Simpson" src={imgUrl} />
        <Avatar alt="Homer Simpson" src={imgUrl} />
      </AvatarGroup>,
    );

    expect(screen.getAllByRole('img')).toHaveLength(4);
  });

  it('renders the rest of the avatars in a menu with image and name', async () => {
    const user = userEvent.setup();
    render(
      <AvatarGroup>
        <Avatar alt="Marge Simpson" src={imgUrl} />
        <Avatar alt="Maggie Simpson" src={imgUrl} />
        <Avatar alt="Lisa Simpson" src={imgUrl} />
        <Avatar alt="Homer Simpson" src={imgUrl} />
        <Avatar alt="Bart Simpson" src={imgUrl} />
      </AvatarGroup>,
    );
    // Only 2 avatars visible
    expect(screen.getAllByRole('img')).toHaveLength(2);
    expect(screen.queryByText('Lisa Simpson')).not.toBeInTheDocument();

    // Open the menu to show the rest of the avatars
    await user.click(screen.getByRole('button', { name: '+3' }));
    expect(screen.getByText('Lisa Simpson')).toBeInTheDocument();
    expect(screen.getAllByRole('menuitem')).toHaveLength(3);
    expect(screen.getAllByRole('img')).toHaveLength(5);
  });

  it('renders the avatars with tooltip', async () => {
    const user = userEvent.setup();
    render(
      <AvatarGroup>
        <Avatar
          alt="Marge Simpson"
          src={imgUrl}
          tooltipProps={{ content: 'Marge Simpson' }}
        />
        <Avatar alt="Maggie Simpson" src={imgUrl} />
        <Avatar alt="Lisa Simpson" src={imgUrl} />
        <Avatar alt="Homer Simpson" src={imgUrl} />
        <Avatar alt="Bart Simpson" src={imgUrl} />
      </AvatarGroup>,
    );

    // Renders the tooltip for the presented avatars
    await user.hover(screen.getAllByTestId('cf-ui-avatar')[0]);

    await waitFor(() =>
      expect(screen.getByRole('tooltip').textContent).toBe('Marge Simpson'),
    );
  });

  it('renders the avatars with tooltip in dropdown', async () => {
    const user = userEvent.setup();
    render(
      <AvatarGroup>
        <Avatar alt="Marge Simpson" src={imgUrl} />
        <Avatar alt="Maggie Simpson" src={imgUrl} />
        <Avatar
          alt="Lisa Simpson"
          src={imgUrl}
          tooltipProps={{ content: 'Lisa Simpson' }}
        />
        <Avatar alt="Homer Simpson" src={imgUrl} />
        <Avatar alt="Bart Simpson" src={imgUrl} />
      </AvatarGroup>,
    );

    await user.click(screen.getByRole('button', { name: '+3' }));
    // Hover over the 1st avatar in dropdown: 2 visible avatars + button
    await user.hover(screen.getAllByTestId('cf-ui-avatar')[4]);

    expect(screen.queryByTestId('tooltip')).not.toBeInTheDocument();
  });

  it('has no a11y issues', async () => {
    const { container } = render(
      <AvatarGroup>
        <Avatar alt="Marge Simpson" src={imgUrl} />
        <Avatar alt="Maggie Simpson" src={imgUrl} />
        <Avatar alt="Lisa Simpson" src={imgUrl} />
        <Avatar alt="Homer Simpson" src={imgUrl} />
        <Avatar alt="Bart Simpson" src={imgUrl} />
      </AvatarGroup>,
    );
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
