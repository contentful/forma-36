/* eslint-disable no-console */

const glob = require('fast-glob');
const fs = require('fs');
const assert = require('assert');
const chalk = require('chalk');
const path = require('path');
const packages = glob.sync(
  path.dirname(__dirname) + '/packages/components/*/package.json',
);

let errors = false;

// soft assert won't fail the whole thing, allowing us to accumulate all errors at once
// there's probably a nicer way to do this, but well... sometimes it's good enough. feel free to update me :)
// maybe turn me into an actual eslint plugin so we get their format for styling
function softAssert(val, message) {
  try {
    assert(val, message);
  } catch {
    console.error(chalk.red(message));
    errors = true;
  }
}
softAssert.deepEqual = function (val, val2, message) {
  try {
    assert.deepEqual(val, val2, message);
  } catch {
    console.error(chalk.red(message));
    errors = true;
  }
};
softAssert.equal = function (val, val2, message) {
  try {
    assert.strictEqual(val, val2, message);
  } catch {
    console.error(chalk.red(message));
    errors = true;
  }
};

const pkgNames = {};
for (const pkg of packages) {
  const json = JSON.parse(fs.readFileSync(pkg));
  pkgNames[json.name] = true;

  softAssert(json.main, `${pkg} did not have "main"`);
  softAssert(
    json.main.endsWith('.js'),
    `${pkg}#main should be a .js file but got "${json.main}"`,
  );
  softAssert(json.module, `${pkg} did not have "module"`);
  softAssert(
    json.module.endsWith('esm/index.js'),
    `${pkg}#module should be a separate .js file but got "${json.module}"`,
  );
  softAssert(json.source, `${pkg} did not have "source"`);
  softAssert.equal(
    json.source,
    'src/index.ts',
    `${pkg} did not match "src/index.ts"`,
  );
  softAssert.deepEqual(json.files, ['dist'], `${pkg} did not match "files"`);
  softAssert(
    !json.dependencies || !json.dependencies['react'],
    `${pkg} has react as a dependency, but it should be a peerDependency`,
  );

  softAssert(
    json.browserslist === 'extends @contentful/browserslist-config',
    'should have valid browserlist configuration',
  );

  softAssert(
    fs.existsSync(path.join(pkg, '..', 'src', 'index.ts')),
    `${pkg} is missing a src/index.ts`,
  );

  softAssert(
    json.publishConfig && json.publishConfig.access === 'public',
    `${pkg} has missing or incorrect publishConfig`,
  );
  softAssert.equal(json.license, 'MIT', `${pkg} has an incorrect license`);
  softAssert.deepEqual(
    json.repository,
    { type: 'git', url: 'https://github.com/contentful/forma-36' },
    `${pkg} has incorrect or missing repository url`,
  );

  const mdxReadme = path.join(path.dirname(pkg), 'README.mdx');
  const mdReadme = path.join(path.dirname(pkg), 'README.md');

  softAssert(
    fs.existsSync(mdxReadme) || fs.existsSync(mdReadme),
    `${pkg} is missing README file`,
  );
}

if (errors) {
  return process.exit(1);
}
