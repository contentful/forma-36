'use strict';

const fs = require('fs');
const path = require('path');

const read = (fileName) =>
  fs.readFileSync(
    path.join(__dirname, global.baseDir, 'test', fileName),
    'utf8',
  );

global.test = (transformName, testFileName, options) => {
  const jscodeshift = require('jscodeshift');
  const source = read(testFileName + '.js');
  const output = read(testFileName + '.output.js');
  let path = testFileName + '.js';
  let transform = require(path.join(
    global.baseDir,
    '/transforms/',
    transformName,
  ));

  expect(
    (transform({ path, source }, { jscodeshift }, options || {}) || '').trim(),
  ).toEqual(output.trim());
};
