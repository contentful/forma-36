import React, { useState } from 'react';
import CheckboxField from '../../CheckboxField';

import FieldGroup from './FieldGroup';

export default {
  title: 'Components/Form/FieldGroup',
  component: FieldGroup,
  parameters: {
    propTypes: [FieldGroup['__docgenInfo']],
  },
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
};

export const Basic = () => {
  const [agreeTerms, setTerms] = useState('yes');

  return (
    <FieldGroup>
      <CheckboxField
        labelText="I agree"
        value="yes"
        helpText="Click if you agree"
        onChange={(e) => setTerms((e.target as HTMLInputElement).value)}
        checked={agreeTerms === 'yes'}
        id="termsCheckboxYes"
      />
      <CheckboxField
        labelText="I don't agree"
        value="no"
        onChange={(e) => setTerms((e.target as HTMLInputElement).value)}
        checked={agreeTerms === 'no'}
        helpText="Click if you don't agree"
        id="termsCheckboxNo"
      />
    </FieldGroup>
  );
};
