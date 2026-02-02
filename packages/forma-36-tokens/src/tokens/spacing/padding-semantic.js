const scaleSpace = require('./space-scale');

const paddingSemantic = {
  // Control paddings
  'space-control-padding-horizontal-tight': scaleSpace['space-100'],
  'space-control-padding-horizontal-small': scaleSpace['space-200'],
  'space-control-padding-vertical-tight': scaleSpace['space-50'],

  // Container paddings
  'space-container-padding-horizontal-tight': scaleSpace['space-100'],
  'space-container-padding-horizontal-small': scaleSpace['space-200'],
  'space-container-padding-horizontal-medium': scaleSpace['space-300'],
  'space-container-padding-horizontal-large': scaleSpace['space-400'],
  'space-container-padding-horizontal-xlarge': scaleSpace['space-500'],
  'space-container-padding-horizontal-2xlarge': scaleSpace['space-600'],
  'space-container-padding-horizontal-3xlarge': scaleSpace['space-700'],
  'space-container-padding-horizontal-4xlarge': scaleSpace['space-800'],
  'space-container-padding-horizontal-5xlarge': scaleSpace['space-900'],
  'space-container-padding-vertical-tight': scaleSpace['space-100'],
  'space-container-padding-vertical-small': scaleSpace['space-200'],
  'space-container-padding-vertical-medium': scaleSpace['space-300'],
  'space-container-padding-vertical-large': scaleSpace['space-400'],
  'space-container-padding-vertical-xlarge': scaleSpace['space-500'],
  'space-container-padding-vertical-2xlarge': scaleSpace['space-600'],
  'space-container-padding-vertical-3xlarge': scaleSpace['space-700'],
  'space-container-padding-vertical-4xlarge': scaleSpace['space-800'],
  'space-container-padding-vertical-5xlarge': scaleSpace['space-900'],
};

module.exports = paddingSemantic;
