/**
 * Runs multiple codemods in the order they are provided
 * @param {*} codemods - array of codemods to apply
 * @returns Function that will run all codemods on the provided file with the provided api
 */
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
