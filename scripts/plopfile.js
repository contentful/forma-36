module.exports = function (plop) {
  plop.setActionType('renameMany', require('./plop-actions/renameMany'));
  plop.setHelper('replace', function (match, replacement, options) {
    let string = options.fn(this);
    return string.replace(match, replacement);
  });
  plop.setHelper('toCamelCase', function (string) {
    return string.replace(/^\w/, (match) => match.toLowerCase());
  });

  plop.setHelper('includes', function (array, string) {
    return array.includes(string);
  });

  // controller generator
  plop.setGenerator('component', {
    description: 'add new component',
    prompts: [
      {
        type: 'input',
        name: 'packageName',
        message: 'package name, all lowercase (e.g. textfield)',
        validate: (answer) => answer.length > 0,
      },
      {
        type: 'input',
        name: 'componentName',
        message:
          'component name, please use appropriate uppercase (e.g. TextField)',
        validate: (answer) => answer.length > 0,
      },
    ],
    actions: function (data) {
      let { packageName, componentName } = data;
      let actions = [];

      actions.push({
        type: 'addMany',
        templateFiles: './plop-templates/package/**',
        base: './plop-templates/package/',
        destination: `../packages/components/${packageName}`,
        data: { componentName, packageName },
      });
      actions.push({
        type: 'renameMany',
        templateFiles: `packages/components/${packageName}/**`,
        renamer: (name) => `${name.replace('Component', componentName)}`,
      });

      return actions;
    },
  });

  plop.setGenerator('codemod', {
    description: 'add new codemod',
    prompts: [
      {
        type: 'list',
        name: 'context',
        message: 'context of the codemod',
        choices: ['v5'],
      },
      {
        type: 'input',
        name: 'codemodName',
        message: 'codemod name without the context',
        validate: (answer) => Boolean(answer.length),
      },
      {
        type: 'input',
        name: 'description',
        message: 'describe what the codemod does',
        validate: (answer) => Boolean(answer.length),
      },
    ],
    actions: function (data) {
      const { context, codemodName, description } = data;
      const transform = `${context}/${codemodName}`;

      let actions = [];
      actions.push({
        type: 'add',
        path: `../packages/forma-36-codemod/transforms/${transform}.js`,
        templateFile: './plop-templates/codemod/transforms/transform.js',
        data: { transform: codemodName },
      });
      actions.push({
        type: 'addMany',
        destination: `../packages/forma-36-codemod/transforms/`,
        base: './plop-templates/codemod/transforms/',
        templateFiles:
          './plop-templates/codemod/transforms/__testfixtures__/**',
        data: { context, transform: codemodName },
      });
      actions.push({
        type: 'modify',
        path: '../packages/forma-36-codemod/transforms/__tests__/{{context}}.test.js',
        pattern: /(const tests = \[)/,
        template: "$1'{{transform}}',\n",
        data: { context, transform },
      });
      actions.push({
        type: 'modify',
        path: '../packages/forma-36-codemod/bin/inquirer-choices.mjs',
        pattern: /\s+(\/\/ Add extra codemods - do not remove)/,
        templateFile: './plop-templates/codemod/bin/inquirer-choices.hbs',
        data: { transform, description },
      });
      actions.push({
        type: 'modify',
        pattern: /$(?![\r\n])/,
        path: '../packages/forma-36-codemod/README.md',
        templateFile: './plop-templates/codemod/README.hbs',
        data: { transform, description },
      });

      return actions;
    },
  });
};
