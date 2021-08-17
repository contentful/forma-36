const path = require('path');
const chalk = require('chalk');
const execa = require('execa');
const isGitClean = require('is-git-clean');
const inquirer = require('inquirer');
const meow = require('meow');
const globby = require('globby');
const inquirerChoices = require('./inquirer-choices');

const transformerDirectory = path.join(__dirname, '../', 'transforms');
const jscodeshiftExecutable = require.resolve('.bin/jscodeshift');

function checkGitStatus(force) {
  let clean = false;
  try {
    clean = isGitClean.sync(process.cwd());
  } catch (err) {
    if (err && err.stderr && err.stderr.indexOf('Not a git repository') >= 0) {
      if (!force) {
        console.log(
          chalk.yellow(
            'Not a git repository, you may use the --force flag to override this check',
          ),
        );
        process.exit(1);
      }
      clean = true;
    }
  }

  if (!clean) {
    console.log(
      chalk.yellow(
        'Before we continue, please stash or commit your git changes.',
      ),
    );
    process.exit(1);
  }
}

function runTransform({ files, flags, parser, transformer }) {
  const transformerPath = path.join(transformerDirectory, `${transformer}.js`);

  let args = [];

  const { dry, print, explicitRequire } = flags;

  if (dry) {
    args.push('--dry');
  }
  if (print) {
    args.push('--print');
  }

  if (explicitRequire === 'false') {
    args.push('--explicit-require=false');
  }

  args.push('--verbose=2');

  args.push('--ignore-pattern=**/{node_modules,dist}/**');

  args.push('--parser', parser);

  if (parser === 'tsx') {
    args.push('--extensions=tsx,ts');
  } else {
    args.push('--extensions=jsx,js');
  }

  args = args.concat(['--transform', transformerPath]);

  if (flags.jscodeshift) {
    args = args.concat(flags.jscodeshift);
  }

  args = args.concat(files);

  console.log(`Executing command: jscodeshift ${args.join(' ')}`);

  const result = execa.sync(jscodeshiftExecutable, args, {
    stdio: 'inherit',
    stripEof: false,
  });

  if (result.error) {
    throw result.error;
  }
}

function expandFilePathsIfNeeded(files) {
  const shouldExpandFiles = files.some((file) => file.includes('*'));
  return shouldExpandFiles ? globby.sync(files) : files;
}

function run() {
  const cli = meow(
    {
      description: 'Codemods for updating Forma-36 codes',
      help: `
    Usage
      $ npx @contentful/f36-codemod <transform> <path> <...options>
        transform        Currently only color-tokens-to-new-tokens.
        path             Files or directory to transform. Can be a glob like src/**.test.js
    Options
      --force            Bypass Git repository safety checks and forcibly run codemods
      --dry              Dry run (no changes are made to files)
      --print            Print transformed files to your terminal
      --jscodeshift      (Advanced) Pass options directly to jscodeshift
    `,
    },
    {
      boolean: ['force', 'dry', 'print', 'help'],
      string: ['_'],
      alias: {
        h: 'help',
      },
    },
  );

  if (!cli.flags.dry) {
    checkGitStatus(cli.flags.force);
  }

  if (
    cli.input[0] &&
    !inquirerChoices.TRANSFORMS_CHOICES.find((x) => x.value === cli.input[0])
  ) {
    console.error('Invalid transform choice, pick one of:');
    console.error(
      inquirerChoices.TRANSFORMS_CHOICES.map((x) => '- ' + x.value).join('\n'),
    );
    process.exit(1);
  }

  inquirer
    .prompt([
      {
        type: 'input',
        name: 'files',
        message: 'On which files or directory should the codemods be applied?',
        when: !cli.input[1],
        default: '.',
        filter: (files) => files.trim(),
      },
      {
        type: 'list',
        name: 'parser',
        message: 'Which dialect of JavaScript do you use?',
        default: 'babel',
        when: !cli.flags.parser,
        pageSize: inquirerChoices.PARSER_CHOICES.length,
        choices: inquirerChoices.PARSER_CHOICES,
      },
      {
        type: 'list',
        name: 'transformer',
        message: 'Which transform would you like to apply?',
        when: !cli.input[0],
        pageSize: inquirerChoices.TRANSFORMS_CHOICES.length,
        choices: inquirerChoices.TRANSFORMS_CHOICES,
      },
    ])
    .then((answers) => {
      const { files, transformer, parser } = answers;

      const filesBeforeExpansion = cli.input[1] || files;
      const filesExpanded = expandFilePathsIfNeeded([filesBeforeExpansion]);

      const selectedTransformer = cli.input[0] || transformer;
      const selectedParser = cli.flags.parser || parser;

      if (!filesExpanded.length) {
        console.log(
          `No files found matching ${filesBeforeExpansion.join(' ')}`,
        );
        return null;
      }

      return runTransform({
        files: filesExpanded,
        flags: cli.flags,
        parser: selectedParser,
        transformer: selectedTransformer,
      });
    });
}

module.exports = {
  run,
};
