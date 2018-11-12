const path = require('path');

module.exports = plop => {
  plop.setGenerator('component', {
    description: 'Add a new component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of your component?',
        validate(value) {
          if (typeof value === 'string' && value.length > 0) return true;
          return 'name is required';
        },
      },
    ],
    actions: [
      {
        type: 'add',
        path: path.resolve('./src/components/{{pascalCase name}}/index.js'),
        templateFile: 'plop-templates/components/index.js.hbs',
      },
      {
        type: 'add',
        path: path.resolve(
          './src/components/{{pascalCase name}}/{{pascalCase name}}.js',
        ),
        templateFile: 'plop-templates/components/component.js.hbs',
      },
      {
        type: 'add',
        path: path.resolve(
          './src/components/{{pascalCase name}}/{{pascalCase name}}.css',
        ),
        templateFile: 'plop-templates/components/styles.css.hbs',
      },
      {
        type: 'add',
        path: path.resolve(
          './src/components/{{pascalCase name}}/{{pascalCase name}}.test.js',
        ),
        templateFile: 'plop-templates/components/test.js.hbs',
      },
      {
        type: 'add',
        path: path.resolve(
          './src/components/{{pascalCase name}}/{{pascalCase name}}.stories.js',
        ),
        templateFile: 'plop-templates/components/stories.js.hbs',
      },
      {
        type: 'modify',
        path: path.resolve('./src/index.js'),
        pattern: /(\/\/ -- Add imports above this line \(required by plopfile\.js\) --)/gi,
        template: `import {{pascalCase name}} from './components/{{pascalCase name}}';\r\n$1`,
      },
      {
        type: 'modify',
        path: path.resolve('./src/index.js'),
        pattern: /(\/\/ -- Add exports above this line \(required by plopfile\.js\) --)/gi,
        template: '{{pascalCase name}},\r\n  $1',
      },
    ],
  });

  plop.setGenerator('documentation', {
    description: 'Add new documentation',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the title of your documentation?',
        validate(value) {
          if (typeof value === 'string' && value.length > 0) return true;
          return 'name is required';
        },
      },
    ],
    actions: [
      {
        type: 'add',
        path: path.resolve(
          './tools/.storybook/docs/{{pascalCase name}}/{{pascalCase name}}.md',
        ),
        templateFile: 'plop-templates/documentation/documentation.md.hbs',
      },
      {
        type: 'add',
        path: path.resolve(
          './tools/.storybook/docs/{{pascalCase name}}/{{pascalCase name}}.stories.js',
        ),
        templateFile: 'plop-templates/documentation/stories.js.hbs',
      },
    ],
  });
};
