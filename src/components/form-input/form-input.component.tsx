import React from 'react';

import './form-input.styles.scss';

interface Props {
  label?: string;
  inputOptions: React.InputHTMLAttributes<HTMLInputElement>;
}

const FormInput: React.FC<Props> = ({ label, inputOptions }) => {
  return (
    <div className="group">
      <input className="form-input" {...inputOptions} />
      {label && (
        <label
          className={`${
            inputOptions.value && inputOptions.value.toString().length
              ? 'shrink'
              : ''
          } form-input-label`}
          htmlFor="displayName"
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
