import React, { Fragment } from 'react';
import { render } from '@testing-library/react';
import { MdHelp as ExternalIcon } from 'react-icons/md';

import { Icon } from '../src/';

describe('Icon', () => {
  describe('with children', () => {
    it('renders', () => {
      const { baseElement } = render(
        <Icon>
          <Fragment>
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </Fragment>
        </Icon>,
      );

      expect(baseElement).toMatchSnapshot();
    });
  });

  describe('with external icons', () => {
    it('renders', () => {
      const { baseElement } = render(<Icon as={ExternalIcon} />);

      expect(baseElement).toMatchSnapshot();
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
