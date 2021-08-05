import React, { Fragment } from 'react';
import { render } from '@testing-library/react';
import { MdHelp as ExternalIcon } from 'react-icons/md';

import { Icon } from '../src/';

describe('Icon', () => {
  describe('with children', () => {
    const internalIcon = (
      <Fragment>
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        <path d="M0 0h24v24H0z" fill="none" />
      </Fragment>
    );

    it('renders', () => {
      const { getByTestId } = render(
        <Icon viewBox="0 0 30 30">{internalIcon}</Icon>,
      );

      const icon = getByTestId('cf-ui-icon');

      expect(icon.getAttribute('aria-hidden')).toEqual('true');
      expect(icon.getAttribute('viewBox')).toEqual('0 0 30 30');
    });

    it('removes aria-hidden=true if aria-label is passed', () => {
      const { getByTestId } = render(
        <Icon viewBox="0 0 30 30" aria-label="internal icon">
          {internalIcon}
        </Icon>,
      );

      const icon = getByTestId('cf-ui-icon');

      expect(icon.getAttribute('aria-hidden')).toBeNull();
      expect(icon.getAttribute('aria-label')).toEqual('internal icon');
    });
  });

  describe('with external icons', () => {
    it('renders', () => {
      const { getByTestId } = render(<Icon as={ExternalIcon} color="red" />);

      const icon = getByTestId('cf-ui-icon');

      expect(icon.getAttribute('aria-hidden')).toEqual('true');
    });

    it('removes aria-hidden=true if aria-label is passed', () => {
      const { getByTestId } = render(
        <Icon as={ExternalIcon} color="red" aria-label="external icon" />,
      );

      const icon = getByTestId('cf-ui-icon');

      expect(icon.getAttribute('aria-hidden')).toBeNull();
      expect(icon.getAttribute('aria-label')).toEqual('external icon');
    });
  });

  describe('expect omitted properties', () => {
    it('component has no width and height properties', () => {
      // @ts-expect-error expect width to be missing
      render(<Icon width="100" />);
      // @ts-expect-error expect height to be missing
      render(<Icon height="100" />);

      expect(1).toBe(1);
    });
  });
});
