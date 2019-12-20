const npm = require('npm');
const { exec } = require('child_process');
const path = require('path');

module.exports = function(plop) {
  plop.setActionType('tsdxInstallPackage', function(answers, config, plop) {
    return new Promise((resolve, reject) => {
      exec(
        `npx tsdx create packages/components/forma-36-react-${answers.name} --template react`,
        (err, stdout) => {
          if (err) {
            reject(`tsdx failed ${err}`);
            return;
          }
          console.log(`stdout: ${stdout}`);
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
        type: 'add',
        path: path.resolve(
          './packages/components/forma-36-react-{{name}}/src/{{pascalCase name}}.tsx',
        ),
        templateFile: 'plop-templates/components/component.tsx.hbs',
      },
      {
        type: 'add',
        path: path.resolve(
          './packages/components/forma-36-react-{{name}}/test/{{pascalCase name}}.test.tsx',
        ),
        templateFile: 'plop-templates/components/test.tsx.hbs',
      },
      {
        type: 'add',
        path: path.resolve(
          './packages/components/forma-36-react-{{name}}/{{pascalCase name}}.md',
        ),
        templateFile: 'plop-templates/components/notes.md.hbs',
      },
    ],
  });
};
