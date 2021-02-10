import React from 'react';
import ValidationMessage, { ValidationMessageProps } from './ValidationMessage';

export default {
  title: 'Components/ValidationMessage',
  component: ValidationMessage,
  parameters: {
    propTypes: [ValidationMessage['__docgenInfo']],
  },
  argTypes: {
    className: { control: { disable: true } },
  },
};

interface Args extends ValidationMessageProps {
  validationMessageText: string;
}

export const Basic = ({ validationMessageText, ...args }: Args) => (
  <ValidationMessage {...args}>{validationMessageText}</ValidationMessage>
);

Basic.args = {
  validationMessageText: 'Validation message',
};
