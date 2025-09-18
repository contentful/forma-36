import { Text } from '../src/Text/Text';

export default {
  title: 'Typography/Text',
  component: Text,
  parameters: {
    propTypes: [(Text as any)?.__docgenInfo],
  },
  argTypes: {
    className: { control: { disable: true } },
  },
};

export const Basic = {
  args: {
    children: 'Text',
  },
};
