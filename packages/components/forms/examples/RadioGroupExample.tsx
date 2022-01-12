import React, { useState } from 'react';
import { Radio, Paragraph, FormControl } from '@contentful/f36-components';

export default function RadioGroupExample() {
  const [role, setRole] = useState('admin');
  return (
    <FormControl as="fieldset">
      <FormControl.Label as="legend" marginBottom="none">
        Permissions
      </FormControl.Label>
      <Paragraph>User permissions within this space</Paragraph>
      <Radio.Group
        name="permission"
        value={role}
        onChange={(e) => {
          setRole(e.target.value);
        }}
      >
        <Radio value="admin" helpText="Can create, modify and delete content">
          Admin
        </Radio>
        <Radio value="author" helpText="Can create and modify content">
          Author
        </Radio>
        <Radio
          value="translator"
          isDisabled
          helpText="Can only modify specific locale"
        >
          Translator (disabled)
        </Radio>
      </Radio.Group>
    </FormControl>
  );
}
