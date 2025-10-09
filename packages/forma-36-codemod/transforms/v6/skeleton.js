const {
  pipe,
  changeIdentifier,
  changeImport,
  getImport,
} = require('../../utils');

const updateToV6Skeleton = function (file, api) {
  const j = api.jscodeshift;
  let source = file.source;

  source = changeIdentifier(j, source, {
    from: 'SkeletonDisplayTextProps',
    to: 'SkeletonTextProps',
  });

  source = changeIdentifier(j, source, {
    from: 'SkeletonBodyTextProps',
    to: 'SkeletonTextProps',
  });

  return source;
};

module.exports = pipe([updateToV6Skeleton]);
