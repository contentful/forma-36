const scaleRadius = require('./scale-radius');

const radiusSemantic = {
  // Control radii
  'shape-radius-control-small': scaleRadius['radius-100'],   // 4px
  'shape-radius-control-medium': scaleRadius['radius-200'],  // 8px
  'shape-radius-control-pill': scaleRadius['radius-full'],   // 999px

  // Container radii
  'shape-radius-container-tight': scaleRadius['radius-200'],  // 4 + 4 = 8px
  'shape-radius-container-small': scaleRadius['radius-300'],  // 4 + 8 = 12px
  'shape-radius-container-medium': scaleRadius['radius-400'], // 8 + 8 = 16px
  'shape-radius-container-full': scaleRadius['radius-full'],  // 999px
};

module.exports = radiusSemantic;
