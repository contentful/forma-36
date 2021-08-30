import React, { useState } from 'react';
import { Checkbox } from '@contentful/f36-forms';

import { FieldGroup } from './FieldGroup';

export default {
  title: 'Form Elements/FieldGroup',
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
      <Checkbox
        label="I agree"
        value="yes"
        helpText="Click if you agree"
        onChange={(e) => setTerms((e.target as HTMLInputElement).value)}
        isChecked={agreeTerms === 'yes'}
        id="termsCheckboxYes"
      />
      <Checkbox
        label="I don't agree"
        value="no"
        onChange={(e) => setTerms((e.target as HTMLInputElement).value)}
        isChecked={agreeTerms === 'no'}
        helpText="Click if you don't agree"
        id="termsCheckboxNo"
      />
    </FieldGroup>
  );
};
