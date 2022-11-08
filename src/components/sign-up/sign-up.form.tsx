import { FirebaseError } from 'firebase/app';
import React, { useState } from 'react';
import Button from '../button/button.component';

import FormInput from '../form-input/form-input.component';
import {
  createUserDocumentFromAuth,
  createUserWithEmailAndPasswordAsync,
} from '../../utils/firebase.utils';
import './sign-up.form.styles.scss';

const defaultFormValues = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const [formValues, setFormValues] = useState(defaultFormValues);
  const { displayName, email, password, confirmPassword } = formValues;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    try {
      const response = await createUserWithEmailAndPasswordAsync(
        email,
        password
      );
      if (response) {
        console.log(response);
        await createUserDocumentFromAuth(response.user, { displayName });
        setFormValues(defaultFormValues);
      } else {
        console.log('No user');
      }
    } catch (error) {
      if (
        error instanceof FirebaseError &&
        error.code === 'auth/email-already-in-use'
      ) {
        alert('Email already in use');
      }
      console.log('User creation error: ', error);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          inputOptions={{
            type: 'text',
            name: 'displayName',
            value: displayName,
            onChange: handleChange,
            required: true,
          }}
        />

        <FormInput
          label="Email"
          inputOptions={{
            type: 'email',
            name: 'email',
            value: email,
            onChange: handleChange,
            required: true,
          }}
        />

        <FormInput
          label="Password"
          inputOptions={{
            type: 'password',
            name: 'password',
            value: password,
            onChange: handleChange,
            required: true,
          }}
        />

        <FormInput
          label="Confirm Password"
          inputOptions={{
            type: 'password',
            name: 'confirmPassword',
            value: confirmPassword,
            onChange: handleChange,
            required: true,
          }}
        />

        <Button type="submit">Sign up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
