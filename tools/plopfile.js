const npm = require('npm');
const { exec } = require('child_process');
const path = require('path');

module.exports = function(plop) {
  plop.setActionType('tsdxInstallPackage', function(answers) {
    return new Promise((resolve, reject) => {
      const packageName = `forma-36-react-${answers.name}`;
      exec(
        `cd packages/components && npx tsdx create ${packageName} --template react && cd ${packageName} && yarn add jest-axe enzyme --dev && rm -rf test/blah.test.tsx && rm -rf example`,
        (err, stdout) => {
          if (err) {
            reject(`tsdx failed ${err}`);
            return;
          }
          resolve(stdout);
        },
      );
    });
  });

  plop.setActionType('addDependencies', function(answers) {
    return new Promise((resolve, reject) => {
      exec(
        `cd packages/components/forma-36-react-${answers.name} && yarn add emotion`,
        (err, stdout) => {
          if (err) {
            reject(`add dependencies failed ${err}`);
            return;
          }
          resolve(stdout);
        },
      );
    });
  });

  plop.setActionType('lernaAddLocalComponent', function(answers) {
    return new Promise((resolve, reject) => {
      exec(
        `yarn lerna add @contentful/forma-36-react-${answers.name} packages/forma-36-react-components`,
        (err, stdout) => {
          if (err) {
            reject(`adding local component failed ${err}`);
            return;
          }
          resolve(stdout);
        },
      );
    });
  });

  plop.setGenerator('component', {
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Please provide a package name',
      },
    ],
    actions: [
      {
        type: 'tsdxInstallPackage',
        speed: 'slow',
      },
      {
        type: 'addDependencies',
        speed: 'slow',
      },
      {
        type: 'add',
        path: path.resolve(
          './packages/components/forma-36-react-{{name}}/src/{{pascalCase name}}.tsx',
        ),
        templateFile: './plop-templates/component.tsx.hbs',
      },
      {
        type: 'modify',
        path: path.resolve(
          './packages/components/forma-36-react-{{name}}/src/index.tsx',
        ),
        pattern: /[\s\S]*/i,
        template: "export { default } from './{{pascalCase name}}';",
      },
      {
        type: 'add',
        path: path.resolve(
          './packages/components/forma-36-react-{{name}}/test/{{pascalCase name}}.test.tsx',
        ),
        templateFile: './plop-templates/test.tsx.hbs',
      },
      {
        type: 'add',
        path: path.resolve(
          './packages/components/forma-36-react-{{name}}/{{pascalCase name}}.md',
        ),
        templateFile: './plop-templates/notes.md.hbs',
      },
      {
        type: 'add',
        path: path.resolve(
          './packages/forma-36-react-components/src/components/{{pascalCase name}}/index.ts',
        ),
        templateFile: './plop-templates/react-component-index.ts.hbs',
      },
      {
        type: 'add',
        path: path.resolve(
          './packages/forma-36-react-components/src/components/{{pascalCase name}}/{{pascalCase name}}.stories.ts',
        ),
        templateFile: './plop-templates/stories.tsx.hbs',
      },
      {
        type: 'modify',
        path: path.resolve('./packages/forma-36-react-components/src/index.ts'),
        pattern: /(\/\/ -- Add imports above this line \(required by plopfile\.js\) --)/gi,
        template: `export { default as {{pascalCase name}} } from './components/{{pascalCase name}}/index';\r\n$1`,
      },
      {
        type: 'modify',
        path: path.resolve(
          './packages/components/forma-36-react-{{name}}/package.json',
        ),
        pattern: /"(name)": "((\\"|[^"])*)"/i,
        template: '"name": "@contentful/forma-36-react-{{name}}"',
      },
      {
        type: 'modify',
        path: path.resolve(
          './packages/components/forma-36-react-{{name}}/package.json',
        ),
        pattern: /"(author)": "((\\"|[^"])*)"/i,
        template: '"author": "Contentful GmbH"',
      },
      {
        type: 'modify',
        path: path.resolve(
          './packages/components/forma-36-react-{{name}}/package.json',
        ),
        pattern: /"(module)": "((\\"|[^"])*)"/i,
        template: '"module": "dist/forma-36-react-{{name}}.esm.js"',
      },
      {
        type: 'lernaAddLocalComponent',
        speed: 'slow',
      },
    ],
  });
};
