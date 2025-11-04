const scaleSpace = require('./space-scale');

const paddingSemantic = {
  // Control paddings
 

  // Container paddings
  'space-container-padding-horizontal-tight': scaleSpace['space-100'],
  'space-container-padding-horizontal-small': scaleSpace['space-200'],
  'space-container-padding-horizontal-medium': scaleSpace['space-300'],
  'space-container-padding-horizontal-large': scaleSpace['space-400'],
  'space-container-padding-horizontal-xlarge': scaleSpace['space-500'],
  'space-container-padding-horizontal-xxlarge': scaleSpace['space-600'],
  'space-container-padding-vertical-tight': scaleSpace['space-100'],
  'space-container-padding-vertical-small': scaleSpace['space-200'],
  'space-container-padding-vertical-medium': scaleSpace['space-300'],
  'space-container-padding-vertical-large': scaleSpace['space-400'],
};

module.exports = paddingSemantic;
