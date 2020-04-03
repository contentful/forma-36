import React from 'react';
import { shallow, mount } from 'enzyme';
import axe from '../../../utils/axeHelper';
import SkeletonContainer from './SkeletonContainer';
import SkeletonBodyText from '../SkeletonBodyText';

it('renders the component', () => {
  const output = shallow(
    <SkeletonContainer>
      <SkeletonBodyText />
    </SkeletonContainer>,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const output = shallow(
    <SkeletonContainer className="className">
      <SkeletonBodyText />
    </SkeletonContainer>,
  );

  expect(output).toMatchSnapshot();
});

it('renders with unique default ids', () => {
  const output = shallow(
    <div>
      <SkeletonContainer testId="first">
        <SkeletonBodyText />
      </SkeletonContainer>
      <SkeletonContainer testId="first">
        <SkeletonBodyText />
      </SkeletonContainer>
    </div>,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with a custom testId', () => {
  const output = shallow(
    <SkeletonContainer testId="someId">
      <SkeletonBodyText />
    </SkeletonContainer>,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with a custom aria label', () => {
  const output = shallow(
    <SkeletonContainer ariaLabel="Custom Aria Label">
      <SkeletonBodyText />
    </SkeletonContainer>,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with a custom width', () => {
  const output = shallow(
    <SkeletonContainer width="50%">
      <SkeletonBodyText />
    </SkeletonContainer>,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with a custom height', () => {
  const output = shallow(
    <SkeletonContainer height="50%">
      <SkeletonBodyText />
    </SkeletonContainer>,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with a custom aspect ratio', () => {
  const output = shallow(
    <SkeletonContainer preserveAspectRatio="xMidYMin slice">
      <SkeletonBodyText />
    </SkeletonContainer>,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with a custom clip id', () => {
  const output = shallow(
    <SkeletonContainer clipId="some-clip-id">
      <SkeletonBodyText />
    </SkeletonContainer>,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with a custom gradient id', () => {
  const output = shallow(
    <SkeletonContainer gradientId="some-gradient-id">
      <SkeletonBodyText />
    </SkeletonContainer>,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with a custom primary color', () => {
  const output = shallow(
    <SkeletonContainer backgroundColor="#ffffff">
      <SkeletonBodyText />
    </SkeletonContainer>,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with a custom primary opacity', () => {
  const output = shallow(
    <SkeletonContainer backgroundOpacity={0}>
      <SkeletonBodyText />
    </SkeletonContainer>,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with a custom secondary color', () => {
  const output = shallow(
    <SkeletonContainer foregroundColor="#ffffff">
      <SkeletonBodyText />
    </SkeletonContainer>,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with a custom secondary opacity', () => {
  const output = shallow(
    <SkeletonContainer foregroundOpacity={0}>
      <SkeletonBodyText />
    </SkeletonContainer>,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component without animation', () => {
  const output = shallow(
    <SkeletonContainer animate={false}>
      <SkeletonBodyText />
    </SkeletonContainer>,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with a custom animation speed', () => {
  const output = shallow(
    <SkeletonContainer speed={5}>
      <SkeletonBodyText />
    </SkeletonContainer>,
  );

  expect(output).toMatchSnapshot();
});

it('renders the svg with a custom height', () => {
  const output = shallow(
    <SkeletonContainer svgHeight={100}>
      <SkeletonBodyText />
    </SkeletonContainer>,
  );

  expect(output).toMatchSnapshot();
});

it('renders the svg with a custom width', () => {
  const output = shallow(
    <SkeletonContainer svgWidth={100}>
      <SkeletonBodyText />
    </SkeletonContainer>,
  );

  expect(output).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const output = mount(
    <SkeletonContainer>
      <SkeletonBodyText />
    </SkeletonContainer>,
  ).html();
  const results = await axe(output);

  expect(results).toHaveNoViolations();
});
