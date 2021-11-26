const path = require('path');

export const propsMetadata = {
  Accordion: {
    tags: {},
    description: '',
    displayName: 'Accordion',
    methods: [],
    props: {
      align: {
        defaultValue: {
          value: 'end',
        },
        description:
          'Specify the alignment of the chevron inside the accordion header',
        name: 'align',
        parent: {
          fileName: path.resolve(
            __dirname,
            '../../components/accordion/src/Accordion.tsx',
          ),
          name: 'AccordionProps',
        },
        declarations: [
          {
            fileName: path.resolve(
              __dirname,
              '../../components/accordion/src/Accordion.tsx',
            ),
            name: 'AccordionProps',
          },
        ],
        required: false,
        type: {
          name: 'enum',
          raw: '"start" | "end"',
          value: [
            {
              value: '"start"',
            },
            {
              value: '"end"',
            },
          ],
        },
      },
      children: {
        defaultValue: null,
        description: 'Child nodes to be rendered in the component',
        name: 'children',
        parent: {
          fileName: path.resolve(
            __dirname,
            '../../components/accordion/src/Accordion.tsx',
          ),
          name: 'AccordionProps',
        },
        declarations: [
          {
            fileName: path.resolve(
              __dirname,
              '../../components/accordion/src/Accordion.tsx',
            ),
            name: 'AccordionProps',
          },
        ],
        required: false,
        type: {
          name: 'enum',
          raw: 'ReactNode',
          value: [
            {
              value: 'string',
            },
            {
              value: 'number',
            },
            {
              value: 'false',
            },
            {
              value: 'true',
            },
            {
              value: '{}',
            },
            {
              value: 'ReactElement<any, string | JSXElementConstructor<any>>',
            },
            {
              value: 'ReactNodeArray',
            },
            {
              value: 'ReactPortal',
            },
          ],
        },
      },
      className: {
        defaultValue: null,
        description: 'CSS class to be appended to the root element',
        name: 'className',
        declarations: [
          {
            fileName:
              '/Users/gui.santos/Contentful/forma-36/packages/core/dist/types.d.ts',
            name: 'TypeLiteral',
          },
        ],
        required: false,
        type: {
          name: 'string',
        },
      },
      testId: {
        defaultValue: {
          value: 'cf-ui-accordion',
        },
        description: 'A [data-test-id] attribute used for testing purposes',
        name: 'testId',
        declarations: [
          {
            fileName:
              '/Users/gui.santos/Contentful/forma-36/packages/core/dist/types.d.ts',
            name: 'TypeLiteral',
          },
        ],
        required: false,
        type: {
          name: 'string',
        },
      },
      style: {
        defaultValue: null,
        description:
          'Accepts a JavaScript object with camelCased properties rather than a CSS string',
        name: 'style',
        declarations: [
          {
            fileName:
              '/Users/gui.santos/Contentful/forma-36/packages/core/dist/types.d.ts',
            name: 'TypeLiteral',
          },
        ],
        required: false,
        type: {
          name: 'CSSProperties',
        },
      },
      ref: {
        defaultValue: null,
        description: '',
        name: 'ref',
        parent: {
          fileName:
            '/Users/gui.santos/Contentful/forma-36/node_modules/@types/react/index.d.ts',
          name: 'RefAttributes',
        },
        declarations: [
          {
            fileName:
              '/Users/gui.santos/Contentful/forma-36/node_modules/@types/react/index.d.ts',
            name: 'RefAttributes',
          },
        ],
        required: false,
        type: {
          name: 'enum',
          raw: 'Ref<HTMLUListElement>',
          value: [
            {
              value: '(instance: HTMLUListElement) => void',
            },
            {
              value: 'RefObject<HTMLUListElement>',
            },
          ],
        },
      },
      key: {
        defaultValue: null,
        description: '',
        name: 'key',
        parent: {
          fileName:
            '/Users/gui.santos/Contentful/forma-36/node_modules/@types/react/index.d.ts',
          name: 'Attributes',
        },
        declarations: [
          {
            fileName:
              '/Users/gui.santos/Contentful/forma-36/node_modules/@types/react/index.d.ts',
            name: 'Attributes',
          },
        ],
        required: false,
        type: {
          name: 'enum',
          raw: 'Key',
          value: [
            {
              value: 'string',
            },
            {
              value: 'number',
            },
          ],
        },
      },
    },
  },
  Button: {
    tags: {
      description:
        ': Buttons communicate the action that will occur when the user clicks it',
    },
    description: '',
    displayName: 'Button',
    methods: [],
    props: {
      children: {
        defaultValue: null,
        description: '',
        name: 'children',
        parent: {
          fileName: path.resolve(
            __dirname,
            '../../components/button/src/types.ts',
          ),
          name: 'ButtonInternalProps',
        },
        declarations: [
          {
            fileName: path.resolve(
              __dirname,
              '../../components/button/src/types.ts',
            ),
            name: 'ButtonInternalProps',
          },
        ],
        required: false,
        type: {
          name: 'enum',
          raw: 'ReactNode',
          value: [
            {
              value: 'string',
            },
            {
              value: 'number',
            },
            {
              value: 'false',
            },
            {
              value: 'true',
            },
            {
              value: '{}',
            },
            {
              value: 'ReactElement<any, string | JSXElementConstructor<any>>',
            },
            {
              value: 'ReactNodeArray',
            },
            {
              value: 'ReactPortal',
            },
          ],
        },
      },
      variant: {
        defaultValue: {
          value: 'secondary',
        },
        description: 'Determines style variation of Button component',
        name: 'variant',
        parent: {
          fileName: path.resolve(
            __dirname,
            '../../components/button/src/types.ts',
          ),
          name: 'ButtonInternalProps',
        },
        declarations: [
          {
            fileName: path.resolve(
              __dirname,
              '../../components/button/src/types.ts',
            ),
            name: 'ButtonInternalProps',
          },
        ],
        required: false,
        type: {
          name: 'enum',
          raw: 'ButtonVariant',
          value: [
            {
              value: '"negative"',
            },
            {
              value: '"positive"',
            },
            {
              value: '"primary"',
            },
            {
              value: '"secondary"',
            },
            {
              value: '"transparent"',
            },
          ],
        },
      },
      size: {
        defaultValue: {
          value: 'medium',
        },
        description: 'Determines size variation of Button component',
        name: 'size',
        parent: {
          fileName: path.resolve(
            __dirname,
            '../../components/button/src/types.ts',
          ),
          name: 'ButtonInternalProps',
        },
        declarations: [
          {
            fileName: path.resolve(
              __dirname,
              '../../components/button/src/types.ts',
            ),
            name: 'ButtonInternalProps',
          },
        ],
        required: false,
        type: {
          name: 'enum',
          raw: 'ButtonSize',
          value: [
            {
              value: '"small"',
            },
            {
              value: '"medium"',
            },
            {
              value: '"large"',
            },
          ],
        },
      },
      isActive: {
        defaultValue: {
          value: 'false',
        },
        description: 'Applies active styles',
        name: 'isActive',
        parent: {
          fileName: path.resolve(
            __dirname,
            '../../components/button/src/types.ts',
          ),
          name: 'ButtonInternalProps',
        },
        declarations: [
          {
            fileName: path.resolve(
              __dirname,
              '../../components/button/src/types.ts',
            ),
            name: 'ButtonInternalProps',
          },
        ],
        required: false,
        type: {
          name: 'enum',
          raw: 'boolean',
          value: [
            {
              value: 'false',
            },
            {
              value: 'true',
            },
          ],
        },
      },
      isDisabled: {
        defaultValue: {
          value: 'false',
        },
        description: 'Disabled interaction and applies disabled styles',
        name: 'isDisabled',
        parent: {
          fileName: path.resolve(
            __dirname,
            '../../components/button/src/types.ts',
          ),
          name: 'ButtonInternalProps',
        },
        declarations: [
          {
            fileName: path.resolve(
              __dirname,
              '../../components/button/src/types.ts',
            ),
            name: 'ButtonInternalProps',
          },
        ],
        required: false,
        type: {
          name: 'enum',
          raw: 'boolean',
          value: [
            {
              value: 'false',
            },
            {
              value: 'true',
            },
          ],
        },
      },
      startIcon: {
        defaultValue: null,
        description:
          'Expects any of the icon components. Renders the icon aligned to the start',
        name: 'startIcon',
        parent: {
          fileName: path.resolve(
            __dirname,
            '../../components/button/src/types.ts',
          ),
          name: 'ButtonInternalProps',
        },
        declarations: [
          {
            fileName: path.resolve(
              __dirname,
              '../../components/button/src/types.ts',
            ),
            name: 'ButtonInternalProps',
          },
        ],
        required: false,
        type: {
          name: 'ReactElement<any, string | JSXElementConstructor<any>>',
        },
      },
      endIcon: {
        defaultValue: null,
        description:
          'Expects any of the icon components. Renders the icon aligned to the end',
        name: 'endIcon',
        parent: {
          fileName: path.resolve(
            __dirname,
            '../../components/button/src/types.ts',
          ),
          name: 'ButtonInternalProps',
        },
        declarations: [
          {
            fileName: path.resolve(
              __dirname,
              '../../components/button/src/types.ts',
            ),
            name: 'ButtonInternalProps',
          },
        ],
        required: false,
        type: {
          name: 'ReactElement<any, string | JSXElementConstructor<any>>',
        },
      },
      isLoading: {
        defaultValue: null,
        description: 'Adds loading indicator icon and disables interactions',
        name: 'isLoading',
        parent: {
          fileName: path.resolve(
            __dirname,
            '../../components/button/src/types.ts',
          ),
          name: 'ButtonInternalProps',
        },
        declarations: [
          {
            fileName: path.resolve(
              __dirname,
              '../../components/button/src/types.ts',
            ),
            name: 'ButtonInternalProps',
          },
        ],
        required: false,
        type: {
          name: 'enum',
          raw: 'boolean',
          value: [
            {
              value: 'false',
            },
            {
              value: 'true',
            },
          ],
        },
      },
      isFullWidth: {
        defaultValue: null,
        description: 'Forces button to take 100% of the container',
        name: 'isFullWidth',
        parent: {
          fileName: path.resolve(
            __dirname,
            '../../components/button/src/types.ts',
          ),
          name: 'ButtonInternalProps',
        },
        declarations: [
          {
            fileName: path.resolve(
              __dirname,
              '../../components/button/src/types.ts',
            ),
            name: 'ButtonInternalProps',
          },
        ],
        required: false,
        type: {
          name: 'enum',
          raw: 'boolean',
          value: [
            {
              value: 'false',
            },
            {
              value: 'true',
            },
          ],
        },
      },
      as: {
        defaultValue: {
          value: 'button',
        },
        description: 'The element used for the root node.',
        name: 'as',
        parent: {
          fileName: path.resolve(
            __dirname,
            '../../components/button/src/types.ts',
          ),
          name: 'ButtonInternalProps',
        },
        declarations: [
          {
            fileName: path.resolve(
              __dirname,
              '../../components/button/src/types.ts',
            ),
            name: 'ButtonInternalProps',
          },
          {
            fileName:
              '/Users/gui.santos/Contentful/forma-36/packages/core/dist/types.d.ts',
            name: 'TypeLiteral',
          },
        ],
        required: false,
        type: {
          name: 'enum',
          raw: '("button" & ElementType<any>) | ("a" & ElementType<any>)',
          value: [
            {
              value: '"button"',
            },
            {
              value: '"a"',
            },
            {
              value: '"button" & ComponentClass<any, any>',
            },
            {
              value: '"button" & FunctionComponent<any>',
            },
            {
              value: '"a" & ComponentClass<any, any>',
            },
            {
              value: '"a" & FunctionComponent<any>',
            },
          ],
        },
      },
      className: {
        defaultValue: null,
        description: 'CSS class to be appended to the root element',
        name: 'className',
        declarations: [
          {
            fileName:
              '/Users/gui.santos/Contentful/forma-36/packages/core/dist/types.d.ts',
            name: 'TypeLiteral',
          },
        ],
        required: false,
        type: {
          name: 'string',
        },
      },
      testId: {
        defaultValue: null,
        description: 'A [data-test-id] attribute used for testing purposes',
        name: 'testId',
        declarations: [
          {
            fileName:
              '/Users/gui.santos/Contentful/forma-36/packages/core/dist/types.d.ts',
            name: 'TypeLiteral',
          },
        ],
        required: false,
        type: {
          name: 'string',
        },
      },
      style: {
        defaultValue: null,
        description:
          'Accepts a JavaScript object with camelCased properties rather than a CSS string',
        name: 'style',
        declarations: [
          {
            fileName:
              '/Users/gui.santos/Contentful/forma-36/packages/core/dist/types.d.ts',
            name: 'TypeLiteral',
          },
        ],
        required: false,
        type: {
          name: 'CSSProperties',
        },
      },
    },
  },
};
