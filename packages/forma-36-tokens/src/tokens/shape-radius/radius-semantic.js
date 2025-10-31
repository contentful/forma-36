const scaleRadius = require('./scale-radius');

const radiusSemantic = {
  // Control radii
  'shape-radius-control-small': scaleRadius['radius-100'],
  'shape-radius-control-medium': scaleRadius['radius-200'],
  'shape-radius-control-pill': scaleRadius['radius-full'],

  // Container radii
  'shape-radius-container-tight': scaleRadius['radius-200'],
  'shape-radius-container-small': scaleRadius['radius-300'],
  'shape-radius-container-medium': scaleRadius['radius-400'],
  'shape-radius-container-full': scaleRadius['radius-full'],
};

module.exports = radiusSemantic;
