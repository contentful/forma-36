import { makeDecorator } from '@storybook/addons';

export const withPropTypes = makeDecorator({
  name: 'withPropTypes',
  parameterName: 'propTypes',
  skipIfNoParametersOrOptions: true,
  wrapper: (getStory, context) => {
    return getStory(context);
  },
});
