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
        path: path.resolve('./src/components/{{pascalCase name}}/index.ts'),
        templateFile: 'plop-templates/components/index.ts.hbs',
      },
      {
        type: 'add',
        path: path.resolve(
          './src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
        ),
        templateFile: 'plop-templates/components/component.tsx.hbs',
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
          './src/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
        ),
        templateFile: 'plop-templates/components/test.tsx.hbs',
      },
      {
        type: 'add',
        path: path.resolve(
          './src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        ),
        templateFile: 'plop-templates/components/stories.tsx.hbs',
      },
      {
        type: 'add',
        path: path.resolve(
          './src/components/{{pascalCase name}}/README.mdx',
        ),
        templateFile: 'plop-templates/components/readme.mdx.hbs',
      },
      {
        type: 'modify',
        path: path.resolve('./src/index.ts'),
        pattern: /(\/\/ -- Add imports above this line \(required by plopfile\.js\) --)/gi,
        template: `export { {{pascalCase name}} } from './components/{{pascalCase name}}/{{pascalCase name}}';\r\n$1`,
      },
    ],
  });

  plop.setGenerator('README', {
    description: 'Add a new README file',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of your component that you like to add README to?',
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
          './src/components/{{pascalCase name}}/README.mdx',
        ),
        templateFile: 'plop-templates/components/readme.mdx.hbs',
      }
    ]
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
          './tools/.storybook/docs/{{pascalCase name}}/{{pascalCase name}}.mdx',
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
