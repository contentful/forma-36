import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import CheckboxField from '../../CheckboxField';

import FieldGroup from './FieldGroup';

function DefaultStory() {
  const [agreeTerms, setTerms] = useState('yes');

  return (
    <FieldGroup row={boolean('row', false)}>
      <CheckboxField
        labelText="I agree"
        value="yes"
        helpText="Click if you agree"
        onChange={e => setTerms((e.target as HTMLInputElement).value)}
        checked={agreeTerms === 'yes'}
        id="termsCheckboxYes"
      />
      <CheckboxField
        labelText="I don't agree"
        value="no"
        onChange={e => setTerms((e.target as HTMLInputElement).value)}
        checked={agreeTerms === 'no'}
        helpText="Click if you don't agree"
        id="termsCheckboxNo"
      />
    </FieldGroup>
  );
}

storiesOf('Components/Form/FieldGroup', module)
  .addParameters({
    propTypes: CheckboxField['__docgenInfo'],
  })
  .add('default', () => <DefaultStory />);
