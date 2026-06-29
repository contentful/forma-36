const scaleGray = require('./scale-gray');
const colorsSemantic = require('./colors-semantic');

const colorsDataviz = {
  'color-dataviz-categorical-1-default': '#4269D0',
  'color-dataviz-categorical-2-default': '#A463F2',
  'color-dataviz-categorical-3-default': '#EFB118',
  'color-dataviz-categorical-4-default': '#6CC5B0',
  'color-dataviz-categorical-5-default': '#FF8AB7',
  'color-dataviz-categorical-6-default': '#9C6B4E',
  'color-dataviz-categorical-7-default': '#FF725C',
  'color-dataviz-categorical-8-default': '#004080',
  'color-dataviz-categorical-9-default': '#ADDC30',
  'color-dataviz-categorical-10-default': '#D6B4FC',

  'color-dataviz-categorical-1-muted': '#4269D0AA',
  'color-dataviz-categorical-2-muted': '#A463F2AA',
  'color-dataviz-categorical-3-muted': '#EFB118AA',
  'color-dataviz-categorical-4-muted': '#6CC5B0AA',
  'color-dataviz-categorical-5-muted': '#FF8AB7AA',
  'color-dataviz-categorical-6-muted': '#9C6B4EAA',
  'color-dataviz-categorical-7-muted': '#FF725CAA',
  'color-dataviz-categorical-8-muted': '#004080AA',
  'color-dataviz-categorical-9-muted': '#ADDC30AA',
  'color-dataviz-categorical-10-muted': '#D6B4FCAA',

  'color-dataviz-seq-blue-100': '#b5cbff',
  'color-dataviz-seq-blue-300': '#7c98fe',
  'color-dataviz-seq-blue-500': '#456cd3',
  'color-dataviz-seq-blue-700': '#0742a2',
  'color-dataviz-seq-blue-900': '#00186b',

  'color-dataviz-seq-purple-100': '#ffc9ff',
  'color-dataviz-seq-purple-300': '#d48ffd',
  'color-dataviz-seq-purple-500': '#9d5ceb',
  'color-dataviz-seq-purple-700': '#6c30ba',
  'color-dataviz-seq-purple-900': '#370089',

  'color-dataviz-seq-teal-100': '#a0fae4',
  'color-dataviz-seq-teal-300': '#6dc6b1',
  'color-dataviz-seq-teal-500': '#389480',
  'color-dataviz-seq-teal-700': '#026352',
  'color-dataviz-seq-teal-900': '#003527',

  'color-dataviz-seq-pink-100': '#ffbeeb',
  'color-dataviz-seq-pink-300': '#f37fad',
  'color-dataviz-seq-pink-500': '#c35381',
  'color-dataviz-seq-pink-700': '#932558',
  'color-dataviz-seq-pink-900': '#5d002c',

  'color-dataviz-chart-gridline': scaleGray['gray-200'],
  'color-dataviz-axis-labels': scaleGray['gray-500'],

  'color-dataviz-positive': colorsSemantic['color-positive'],
  'color-dataviz-negative': colorsSemantic['color-negative'],
  'color-dataviz-warning': colorsSemantic['color-warning'],
};

module.exports = colorsDataviz;
