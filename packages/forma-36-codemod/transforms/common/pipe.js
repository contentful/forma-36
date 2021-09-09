module.exports.pipe = function pipe(codemods) {
  return function (file, api) {
    let source = file.source;

    codemods.forEach((codemod) => {
      source = codemod(
        {
          ...file,
          source,
        },
        api,
      );
    });
    return source;
  };
};
