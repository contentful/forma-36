/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react';
import { render } from '@testing-library/react';
import { mount } from 'enzyme';

import axe from '../../utils/axeHelper';
import { InViewport } from './InViewport';
import TextLink from '../TextLink';

it('renders the component', () => {
  const { container } = render(
    <InViewport>
      <TextLink>Some Link</TextLink>
    </InViewport>,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const { container } = render(
    <InViewport className="my-extra-class">
      <TextLink>Some Link</TextLink>
    </InViewport>,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('dispatches onOverflowTop', () => {
  const onOverflowTopMock = jest.fn();
  const output = mount(
    <InViewport className="my-extra-class" onOverflowTop={onOverflowTopMock}>
      <TextLink>Some Link</TextLink>
    </InViewport>,
  );

  (output.instance() as any).nodeRef = {
    getBoundingClientRect: () => ({
      width: 10,
      height: 10,
      top: -100,
      left: 0,
      right: 10,
      bottom: 10,
    }),
  };
  (output.instance() as InViewport).getDomPosition();
  expect(onOverflowTopMock).toHaveBeenCalled();
});

it('dispatches onOverflowLeft', () => {
  const onOverflowLeftMock = jest.fn();
  const output = mount(
    <InViewport className="my-extra-class" onOverflowLeft={onOverflowLeftMock}>
      <TextLink>Some Link</TextLink>
    </InViewport>,
  );

  (output.instance() as any).nodeRef = {
    getBoundingClientRect: () => ({
      width: 10,
      height: 10,
      top: 100,
      left: -100,
      right: 10,
      bottom: 10,
    }),
  };
  (output.instance() as InViewport).getDomPosition();
  expect(onOverflowLeftMock).toHaveBeenCalled();
});

it('dispatches onOverflowRight', () => {
  const onOverflowRightMock = jest.fn();
  (window as any).innerWidth = 80;
  const output = mount(
    <InViewport
      className="my-extra-class"
      onOverflowRight={onOverflowRightMock}
    >
      <TextLink>Some Link</TextLink>
    </InViewport>,
  );

  (output.instance() as any).nodeRef = {
    getBoundingClientRect: () => ({
      width: 10,
      height: 10,
      top: 100,
      left: 100,
      right: 100,
      bottom: 10,
    }),
  };
  (output.instance() as InViewport).getDomPosition();
  expect(onOverflowRightMock).toHaveBeenCalled();
});

it('dispatches onOverflowBottom', () => {
  const onOverflowBottomMock = jest.fn();
  (window as any).innerWidth = 110;
  (window as any).innerHeight = 100;
  const output = mount(
    <InViewport
      className="my-extra-class"
      onOverflowBottom={onOverflowBottomMock}
    >
      <TextLink>Some Link</TextLink>
    </InViewport>,
  );

  (output.instance() as any).nodeRef = {
    getBoundingClientRect: () => ({
      width: 10,
      height: 10,
      top: 100,
      left: 100,
      right: 100,
      bottom: 120,
    }),
  };
  (output.instance() as InViewport).getDomPosition();
  expect(onOverflowBottomMock).toHaveBeenCalled();
});

it('does not dispatch onOverflowBottom', () => {
  const onOverflowBottomMock = jest.fn();
  (window as any).innerWidth = 110;
  (window as any).innerHeight = 100;
  const output = mount(
    <InViewport
      className="my-extra-class"
      onOverflowBottom={onOverflowBottomMock}
    >
      <TextLink>Some Link</TextLink>
    </InViewport>,
  );

  (output.instance() as any).nodeRef = {
    getBoundingClientRect: () => ({
      width: 10,
      height: 10,
      top: 100,
      left: 100,
      right: 100,
      bottom: 80,
    }),
  };
  (output.instance() as InViewport).getDomPosition();
  expect(onOverflowBottomMock).not.toHaveBeenCalled();
});

it('has no a11y issues', async () => {
  const { container } = render(
    <InViewport>
      <TextLink>Some Link</TextLink>
    </InViewport>,
  );
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
