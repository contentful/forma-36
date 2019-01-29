import React from 'react';
import { shallow } from 'enzyme';
import { pick } from 'lodash';

import LineChart from './LineChart';
import baseStyle from './baseStyle';

import Spinner from '../Spinner';

const shallowRenderChart = (
  fakeRequire = { ensure: jest.fn() },
  options = {},
  loading = false,
  empty = false,
  EmptyPlaceholder,
) =>
  shallow(
    <LineChart
      require={fakeRequire}
      options={options}
      loading={loading}
      empty={empty}
      EmptyPlaceholder={EmptyPlaceholder}
    />,
  );

it('tries to load echarts', () => {
  const fakeRequire = { ensure: jest.fn() };
  const output = shallowRenderChart(fakeRequire, {}, false, false);

  expect(output).toMatchSnapshot();
});

describe('library is not loaded', () => {
  it('renders pending indicator even with pending false, because echarts needs to be loaded', () => {
    const output = shallowRenderChart();

    expect(output.find(Spinner).exists()).toBe(true);
    expect(output).toMatchSnapshot();
  });
});

describe('library is loaded', () => {
  const fakeLoadingEcharts = () => {
    const fakeSetOptions = jest.fn();
    const fakeEcharts = {
      init: jest.fn(() => ({ setOption: fakeSetOptions })),
    };
    const fakeEnsuredRequire = jest.fn(() => fakeEcharts);
    const fakeRequire = {
      ensure: jest.fn((_, callback) => callback(fakeEnsuredRequire)),
    };
    return { fakeSetOptions, fakeEcharts, fakeEnsuredRequire, fakeRequire };
  };

  it('remove pending indicator and inits echarts with options', () => {
    const { fakeSetOptions, fakeEcharts, fakeRequire } = fakeLoadingEcharts();
    const testOption = {};
    const options = { testOption };
    const output = shallowRenderChart(fakeRequire, options);

    expect(fakeSetOptions).toHaveBeenCalled();
    expect(fakeEcharts.init).toHaveBeenCalledWith(undefined, null, {
      renderer: 'svg',
    });
    expect(fakeSetOptions).toHaveBeenCalledWith(
      expect.objectContaining(testOption),
    );
    expect(output.find(Spinner).exists()).toBe(false);
    expect(output).toMatchSnapshot();
  });

  it('shows empty indicator if chart is empty', () => {
    const { fakeRequire } = fakeLoadingEcharts();
    const FakeEmptyPlaceholder = () => <div />;
    const output = shallowRenderChart(
      fakeRequire,
      {},
      false,
      true,
      FakeEmptyPlaceholder,
    );

    expect(output.find(FakeEmptyPlaceholder).exists()).toBe(true);
    expect(output.find(Spinner).exists()).toBe(false);
    expect(output).toMatchSnapshot();
  });

  it('should apply default chart config', () => {
    const { fakeRequire, fakeSetOptions } = fakeLoadingEcharts();
    shallowRenderChart(fakeRequire);
    expect(fakeSetOptions.mock.calls[0][0]).toMatchObject(
      pick(baseStyle, 'tooltip.trigger'),
    );
  });

  it('should overwrite default chart config', () => {
    const { fakeRequire, fakeSetOptions } = fakeLoadingEcharts();
    shallowRenderChart(fakeRequire, { tooltip: { trigger: 'test' } });
    expect(fakeSetOptions.mock.calls[0][0]).not.toMatchObject(
      pick(baseStyle, 'tooltip.trigger'),
    );
  });
});
