import { fontStackPrimary } from '@contentful/forma-36-tokens';

// Setup Decorators
export const decorators = [
  (Story) => (
    <div
      style={{
        fontFamily: fontStackPrimary,
        minWidth: '340px',
      }}
    >
      <Story />
    </div>
  ),
];

// Setup Parameters
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'centered',
  options: {
    storySort: {
      method: 'alphabetical',
      order: [
        'Documentation',
        'Typography',
        'Form Elements',
        'Components',
        'Utilities',
      ],
    },
  },
  // Creating DocPage from our old notes
  docs: {
    extractComponentDescription: (component, { notes }) => {
      if (notes) {
        return typeof notes === 'string' ? notes : notes.markdown || notes.text;
      }
      return null;
    },
  },
  controls: {
    expanded: true,
    hideNoControlsWarning: true,
  },
};
