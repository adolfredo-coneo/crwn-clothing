import React from 'react';

import { FormInputLabel, Input, Group } from './form-input.styles';

interface Props {
  label?: string;
  inputOptions: React.InputHTMLAttributes<HTMLInputElement>;
}

const FormInput: React.FC<Props> = ({ label, inputOptions }) => {
  return (
    <Group>
      <Input {...inputOptions} />
      {label && (
        <FormInputLabel
          shrink={
            inputOptions.value && inputOptions.value.toString().length
              ? true
              : false
          }
          htmlFor="displayName"
        >
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
