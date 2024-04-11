import path from 'node:path';
import { fileURLToPath } from 'node:url';
import chalk from 'chalk';
import execa from 'execa';
import isGitClean from 'is-git-clean';
import inquirer from 'inquirer';
import meow from 'meow';
import globby from 'globby';
import { createRequire } from 'module';
import * as inquirerChoices from './inquirer-choices.mjs';
import updateDependencies from './updateDependencies.mjs';

const require = createRequire(import.meta.url);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
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

  if (!clean && !force) {
    console.log(
      chalk.yellow(
        'Before we continue, please stash or commit your changes.\nIf you want to override this check, use the --force flag',
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

export function run() {
  const cli = meow(
    {
      description: 'Codemods for updating Forma-36 codes',
      help: `
    Usage
      $ npx @contentful/f36-codemod <transform> <path> <...options>
        transform        Check all included transformers on https://github.com/contentful/forma-36/tree/main/packages/forma-36-codemod#included-transforms.
        path             Files or directory to transform. Can be a glob like src/**.test.js
    Options
      --force            Bypass Git repository safety checks and forcibly run codemods
      --dry              Dry run (no changes are made to files)
      --print            Print transformed files to your terminal
      --parser           Which parser to be used: babel or tsx
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
    !inquirerChoices.TRANSFORMS_CHOICES.find((x) => x.value === cli.input[0]) &&
    !cli.input[0]
      ?.split(',')
      .every((t) =>
        inquirerChoices.TRANSFORMS_CHOICES.find((x) => x.value === t),
      )
  ) {
    console.error('Invalid transform choice, pick one of:');
    console.error(
      inquirerChoices.TRANSFORMS_CHOICES.filter((x) => x.value)
        .map((x) => '- ' + x.value)
        .join('\n'),
    );
    process.exit(1);
  }

  inquirer
    .prompt([
      {
        type: 'list',
        name: 'v4setup',
        message: 'Which codemod you would like to use?',
        when: !cli.input[0],
        pageSize: inquirerChoices.TRANSFORMS_CHOICES.length,
        choices: inquirerChoices.SETUP_CHOICES,
      },
      {
        type: 'checkbox',
        name: 'transformer',
        message: 'Which component would you like to migrate to v4?',
        when: (answers) =>
          !cli.input[0] &&
          answers.v4setup === 'migrate-specific-component-to-v4',
        pageSize: inquirerChoices.TRANSFORMS_CHOICES.length,
        choices: inquirerChoices.TRANSFORMS_CHOICES,
      },
      {
        type: 'list',
        name: 'parser',
        message: 'Which dialect of JavaScript do you use?',
        default: 'babel',
        when: (answers) =>
          !cli.flags.parser && answers.v4setup !== 'update-package-json',
        pageSize: inquirerChoices.PARSER_CHOICES.length,
        choices: inquirerChoices.PARSER_CHOICES,
      },
      {
        type: 'input',
        name: 'files',
        message: 'On which files or directory should the codemods be applied?',
        when: !cli.input[1],
        default: '.',
        filter: (files) => files.trim(),
      },
    ])
    .then(async (answers) => {
      const { files, transformer, parser, v4setup } = answers;

      const filesBeforeExpansion = cli.input[1] || files;
      const filesExpanded = expandFilePathsIfNeeded([filesBeforeExpansion]);
      const selectedParser = cli.flags.parser || parser;

      if (v4setup === 'update-package-json') {
        await updateDependencies(filesBeforeExpansion);
        return runTransform({
          files: filesExpanded,
          flags: cli.flags,
          parser: selectedParser,
          transformer: 'v4-clean-css',
        });
      }

      if (!filesExpanded.length) {
        console.log(
          `No files found matching ${filesBeforeExpansion.join(' ')}`,
        );
        return null;
      }

      const selectedTransformer = cli.input[0]?.split(',') || transformer;
      if (selectedTransformer) {
        return selectedTransformer.forEach((t) => {
          runTransform({
            files: filesExpanded,
            flags: cli.flags,
            parser: selectedParser,
            transformer: t,
          });
        });
      }

      if (v4setup === 'run-all-v4') {
        await updateDependencies(filesBeforeExpansion);
        runTransform({
          files: filesExpanded,
          flags: cli.flags,
          parser: selectedParser,
          transformer: 'v4-clean-css',
        });
      }

      return runTransform({
        files: filesExpanded,
        flags: cli.flags,
        parser: selectedParser,
        transformer: 'v4-all',
      });
    });
}
