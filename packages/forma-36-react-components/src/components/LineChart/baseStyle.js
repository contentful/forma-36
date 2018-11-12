export default {
  axisPointer: {
    zlevel: -1,
    lineStyle: {
      color: '#263545',
    },
  },
  tooltip: {
    trigger: 'axis',
    backgroundColor: '#263545',
  },
  xAxis: {
    axisTick: { alignWithLabel: true, interval: 6 },
    axisLabel: { interval: 6 },
    offset: 8,
    axisLine: {
      lineStyle: {
        color: '#263545',
      },
    },
  },
  yAxis: {
    splitLine: {
      show: false,
    },
    position: 'right',
    offset: 10,
    axisLabel: {
      verticalAlign: 'bottom',
      margin: 15,
    },
    axisTick: { length: 8 },
    axisLine: {
      show: false,
      lineStyle: {
        color: '#263545',
      },
    },
    splitNumber: 4,
  },
  textStyle: {
    fontFamily: 'Avenir Next W01',
    fontSize: 11,
    fontWeight: 600,
    lineHeight: 15,
  },
};

export const seriesBaseStyle = {
  type: 'line',
  lineStyle: {
    width: 2,
  },
  itemStyle: {
    borderColor: '#fff',
    borderWidth: 2,
  },
  symbolSize: 6,
  showSymbol: false,
};
