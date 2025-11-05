export const propsMetadata = {
  Autocomplete: {
    tags: {},
    description:
      'The Autocomplete is a component that will show a `TextInput` where a user can type any word which will be used\nto filter a list of items. That list of filtered items will be shown to the user as possible options for the input.\nOnce one of the options is selected, that option becomes the value of the `TextInput`.',
    displayName: 'Autocomplete',
    methods: [],
    props: {
      items: {
        defaultValue: null,
        description:
          'It’s an array of data to be used as "options" by the autocomplete component.\ndefined as any, because in this moment we do not know if items is a group',
        name: 'items',
        parent: {
          fileName: '../../components/autocomplete/src/Autocomplete.tsx',
          name: 'AutocompleteProps',
        },
        declarations: [
          {
            fileName: '../../components/autocomplete/src/Autocomplete.tsx',
            name: 'AutocompleteProps',
          },
        ],
        required: true,
        type: {
          name: 'enum',
          raw: 'T[] | GenericGroupType<T>[]',
          value: [
            {
              value: 'T[]',
            },
            {
              value: 'GenericGroupType<T>[]',
            },
          ],
        },
      },
      isGrouped: {
        defaultValue: null,
        description: 'Tells if the item is a object with groups',
        name: 'isGrouped',
        parent: {
          fileName: '../../components/autocomplete/src/Autocomplete.tsx',
          name: 'AutocompleteProps',
        },
        declarations: [
          {
            fileName: '../../components/autocomplete/src/Autocomplete.tsx',
            name: 'AutocompleteProps',
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
      onInputValueChange: {
        defaultValue: null,
        description: 'Function called whenever the input value changes',
        name: 'onInputValueChange',
        parent: {
          fileName: '../../components/autocomplete/src/Autocomplete.tsx',
          name: 'AutocompleteProps',
        },
        declarations: [
          {
            fileName: '../../components/autocomplete/src/Autocomplete.tsx',
            name: 'AutocompleteProps',
          },
        ],
        required: false,
        type: {
          name: '(value: string) => void',
        },
      },
      onSelectItem: {
        defaultValue: null,
        description:
          'This is the function that will be called when the user selects one of the "options" in the list.\nIt receives the selected item as an argument and it needs to return a string that will be set as the value of `TextInput`.',
        name: 'onSelectItem',
        parent: {
          fileName: '../../components/autocomplete/src/Autocomplete.tsx',
          name: 'AutocompleteProps',
        },
        declarations: [
          {
            fileName: '../../components/autocomplete/src/Autocomplete.tsx',
            name: 'AutocompleteProps',
          },
        ],
        required: true,
        type: {
          name: '(item: T) => void',
        },
      },
      renderItem: {
        defaultValue: null,
        description:
          'This is the function that will be called for each "item" passed in the `items` prop.\nIt receives the "item" and "inputValue" as arguments and returns a ReactNode.\nThe inputValue is passed in case you want to highlight the match on the render.',
        name: 'renderItem',
        parent: {
          fileName: '../../components/autocomplete/src/Autocomplete.tsx',
          name: 'AutocompleteProps',
        },
        declarations: [
          {
            fileName: '../../components/autocomplete/src/Autocomplete.tsx',
            name: 'AutocompleteProps',
          },
        ],
        required: false,
        type: {
          name: '(item: T, inputValue: string) => ReactNode',
        },
      },
      itemToString: {
        defaultValue: null,
        description:
          'When using objects as `items`, we recommend passing a function that tells Downshift how to extract a string\nfrom those objetcs to be used as inputValue',
        name: 'itemToString',
        parent: {
          fileName: '../../components/autocomplete/src/Autocomplete.tsx',
          name: 'AutocompleteProps',
        },
        declarations: [
          {
            fileName: '../../components/autocomplete/src/Autocomplete.tsx',
            name: 'AutocompleteProps',
          },
        ],
        required: false,
        type: {
          name: '(item: T) => string',
        },
      },
      placeholder: {
        defaultValue: {
          value: '"Search"',
        },
        description:
          'This is the value will be passed to the `placeholder` prop of the input.',
        name: 'placeholder',
        parent: {
          fileName: '../../components/autocomplete/src/Autocomplete.tsx',
          name: 'AutocompleteProps',
        },
        declarations: [
          {
            fileName: '../../components/autocomplete/src/Autocomplete.tsx',
            name: 'AutocompleteProps',
          },
        ],
        required: false,
        type: {
          name: 'string',
        },
      },
      noMatchesMessage: {
        defaultValue: {
          value: '"No matches"',
        },
        description:
          'A message that will be shown when it is not possible to find any option that matches the input value',
        name: 'noMatchesMessage',
        parent: {
          fileName: '../../components/autocomplete/src/Autocomplete.tsx',
          name: 'AutocompleteProps',
        },
        declarations: [
          {
            fileName: '../../components/autocomplete/src/Autocomplete.tsx',
            name: 'AutocompleteProps',
          },
        ],
        required: false,
        type: {
          name: 'string',
        },
      },
      inputRef: {
        defaultValue: null,
        description:
          'Use this prop to get a ref to the input element of the component',
        name: 'inputRef',
        parent: {
          fileName: '../../components/autocomplete/src/Autocomplete.tsx',
          name: 'AutocompleteProps',
        },
        declarations: [
          {
            fileName: '../../components/autocomplete/src/Autocomplete.tsx',
            name: 'AutocompleteProps',
          },
        ],
        required: false,
        type: {
          name: 'enum',
          raw: 'Ref<HTMLInputElement>',
          value: [
            {
              value: '(instance: HTMLInputElement) => void',
            },
            {
              value: 'RefObject<HTMLInputElement>',
            },
          ],
        },
      },
      toggleRef: {
        defaultValue: null,
        description:
          'Use this prop to get a ref to the toggle button of the component',
        name: 'toggleRef',
        parent: {
          fileName: '../../components/autocomplete/src/Autocomplete.tsx',
          name: 'AutocompleteProps',
        },
        declarations: [
          {
            fileName: '../../components/autocomplete/src/Autocomplete.tsx',
            name: 'AutocompleteProps',
          },
        ],
        required: false,
        type: {
          name: 'enum',
          raw: 'Ref<HTMLButtonElement>',
          value: [
            {
              value: '(instance: HTMLButtonElement) => void',
            },
            {
              value: 'RefObject<HTMLButtonElement>',
            },
          ],
        },
      },
      listRef: {
        defaultValue: null,
        description:
          'Use this prop to get a ref to the list of items of the component',
        name: 'listRef',
        parent: {
          fileName: '../../components/autocomplete/src/Autocomplete.tsx',
          name: 'AutocompleteProps',
        },
        declarations: [
          {
            fileName: '../../components/autocomplete/src/Autocomplete.tsx',
            name: 'AutocompleteProps',
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
      listWidth: {
        defaultValue: {
          value: '"auto"',
        },
        description: 'It sets the width of the list',
        name: 'listWidth',
        parent: {
          fileName: '../../components/autocomplete/src/Autocomplete.tsx',
          name: 'AutocompleteProps',
        },
        declarations: [
          {
            fileName: '../../components/autocomplete/src/Autocomplete.tsx',
            name: 'AutocompleteProps',
          },
        ],
        required: false,
        type: {
          name: 'enum',
          raw: '"auto" | "full"',
          value: [
            {
              value: '"auto"',
            },
            {
              value: '"full"',
            },
          ],
        },
      },
      listMaxHeight: {
        defaultValue: {
          value: '180',
        },
        description:
          'It sets the max-height, in pixels, of the list\nThe default value is the height of 5 single line items',
        name: 'listMaxHeight',
        parent: {
          fileName: '../../components/autocomplete/src/Autocomplete.tsx',
          name: 'AutocompleteProps',
        },
        declarations: [
          {
            fileName: '../../components/autocomplete/src/Autocomplete.tsx',
            name: 'AutocompleteProps',
          },
        ],
        required: false,
        type: {
          name: 'number',
        },
      },
      isLoading: {
        defaultValue: {
          value: 'false',
        },
        description: 'Sets the list to show its loading state',
        name: 'isLoading',
        parent: {
          fileName: '../../components/autocomplete/src/Autocomplete.tsx',
          name: 'AutocompleteProps',
        },
        declarations: [
          {
            fileName: '../../components/autocomplete/src/Autocomplete.tsx',
            name: 'AutocompleteProps',
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
      className: {
        defaultValue: null,
        description: 'CSS class to be appended to the root element',
        name: 'className',
        declarations: [
          {
            fileName: '../../core/dist/types.d.ts',
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
            fileName: '../../core/dist/types.d.ts',
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
            fileName: '../../core/dist/types.d.ts',
            name: 'TypeLiteral',
          },
        ],
        required: false,
        type: {
          name: 'CSSProperties',
        },
      },
      isDisabled: {
        defaultValue: {
          value: 'false',
        },
        description: 'Applies disabled styles',
        name: 'isDisabled',
        parent: {
          fileName: '../../components/forms/dist/types.d.ts',
          name: 'BaseInputInternalProps',
        },
        declarations: [
          {
            fileName: '../../components/forms/dist/types.d.ts',
            name: 'BaseInputInternalProps',
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
      isInvalid: {
        defaultValue: {
          value: 'false',
        },
        description: 'Applies invalid styles',
        name: 'isInvalid',
        parent: {
          fileName: '../../components/forms/dist/types.d.ts',
          name: 'BaseInputInternalProps',
        },
        declarations: [
          {
            fileName: '../../components/forms/dist/types.d.ts',
            name: 'BaseInputInternalProps',
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
      isReadOnly: {
        defaultValue: {
          value: 'false',
        },
        description: 'Applies read-only styles',
        name: 'isReadOnly',
        parent: {
          fileName: '../../components/forms/dist/types.d.ts',
          name: 'BaseInputInternalProps',
        },
        declarations: [
          {
            fileName: '../../components/forms/dist/types.d.ts',
            name: 'BaseInputInternalProps',
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
      isRequired: {
        defaultValue: {
          value: 'false',
        },
        description: 'Validate the input',
        name: 'isRequired',
        parent: {
          fileName: '../../components/forms/dist/types.d.ts',
          name: 'BaseInputInternalProps',
        },
        declarations: [
          {
            fileName: '../../components/forms/dist/types.d.ts',
            name: 'BaseInputInternalProps',
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
      id: {
        defaultValue: null,
        description: 'Sets the id of the input',
        name: 'id',
        parent: {
          fileName: '../../components/forms/dist/types.d.ts',
          name: 'BaseInputInternalProps',
        },
        declarations: [
          {
            fileName: '../../components/forms/dist/types.d.ts',
            name: 'BaseInputInternalProps',
          },
        ],
        required: false,
        type: {
          name: 'string',
        },
      },
      defaultValue: {
        defaultValue: null,
        description: "Set's default value for text input",
        name: 'defaultValue',
        parent: {
          fileName: '../../components/forms/dist/types.d.ts',
          name: 'TextInputProps',
        },
        declarations: [
          {
            fileName: '../../components/forms/dist/types.d.ts',
            name: 'TextInputProps',
          },
        ],
        required: false,
        type: {
          name: 'string',
        },
      },
      ref: {
        defaultValue: null,
        description: '',
        name: 'ref',
        declarations: [
          {
            fileName: '../../components/autocomplete/src/Autocomplete.tsx',
            name: 'TypeLiteral',
          },
        ],
        required: false,
        type: {
          name: 'enum',
          raw: 'Ref<HTMLDivElement>',
          value: [
            {
              value: '(instance: HTMLDivElement) => void',
            },
            {
              value: 'RefObject<HTMLDivElement>',
            },
          ],
        },
      },
    },
  },
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
          fileName: '../../components/accordion/src/Accordion.tsx',
          name: 'AccordionProps',
        },
        declarations: [
          {
            fileName: '../../components/accordion/src/Accordion.tsx',
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
          fileName: '../../components/accordion/src/Accordion.tsx',
          name: 'AccordionProps',
        },
        declarations: [
          {
            fileName: '../../components/accordion/src/Accordion.tsx',
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
            fileName: '../../core/dist/types.d.ts',
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
            fileName: '../../core/dist/types.d.ts',
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
            fileName: '../../core/dist/types.d.ts',
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
          fileName: '../../../node_modules/@types/react/index.d.ts',
          name: 'RefAttributes',
        },
        declarations: [
          {
            fileName: '../../../node_modules/@types/react/index.d.ts',
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
          fileName: '../../../node_modules/@types/react/index.d.ts',
          name: 'Attributes',
        },
        declarations: [
          {
            fileName: '../../../node_modules/@types/react/index.d.ts',
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
          fileName: '../../components/button/src/types.ts',
          name: 'ButtonInternalProps',
        },
        declarations: [
          {
            fileName: '../../components/button/src/types.ts',
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
          fileName: '../../components/button/src/types.ts',
          name: 'ButtonInternalProps',
        },
        declarations: [
          {
            fileName: '../../components/button/src/types.ts',
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
          fileName: '../../components/button/src/types.ts',
          name: 'ButtonInternalProps',
        },
        declarations: [
          {
            fileName: '../../components/button/src/types.ts',
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
          fileName: '../../components/button/src/types.ts',
          name: 'ButtonInternalProps',
        },
        declarations: [
          {
            fileName: '../../components/button/src/types.ts',
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
          fileName: '../../components/button/src/types.ts',
          name: 'ButtonInternalProps',
        },
        declarations: [
          {
            fileName: '../../components/button/src/types.ts',
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
          fileName: '../../components/button/src/types.ts',
          name: 'ButtonInternalProps',
        },
        declarations: [
          {
            fileName: '../../components/button/src/types.ts',
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
          fileName: '../../components/button/src/types.ts',
          name: 'ButtonInternalProps',
        },
        declarations: [
          {
            fileName: '../../components/button/src/types.ts',
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
          fileName: '../../components/button/src/types.ts',
          name: 'ButtonInternalProps',
        },
        declarations: [
          {
            fileName: '../../components/button/src/types.ts',
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
          fileName: '../../components/button/src/types.ts',
          name: 'ButtonInternalProps',
        },
        declarations: [
          {
            fileName: '../../components/button/src/types.ts',
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
          fileName: '../../components/button/src/types.ts',
          name: 'ButtonInternalProps',
        },
        declarations: [
          {
            fileName: '../../components/button/src/types.ts',
            name: 'ButtonInternalProps',
          },
          {
            fileName: '../../core/dist/types.d.ts',
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
            fileName: '../../core/dist/types.d.ts',
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
            fileName: '../../core/dist/types.d.ts',
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
            fileName: '../../core/dist/types.d.ts',
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
