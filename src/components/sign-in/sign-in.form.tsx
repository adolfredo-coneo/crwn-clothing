import { FirebaseError } from 'firebase/app';
import { getRedirectResult } from 'firebase/auth';
import React, { useEffect, useState } from 'react';

import {
  auth,
  createUser,
  signInWithEmailAndPasswordAsync,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
} from '../../utils/firebase.utils';
import Button from '../button/button.component';
import FormInput from '../form-input/form-input.component';
import './sign-in.form.styles.scss';

const defaultFormValues = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formValues, setFormValues] = useState(defaultFormValues);
  const { email, password } = formValues;

  useEffect(() => {
    const getRedirect = async () => {
      const result = await getRedirectResult(auth);
      await createUser(result);
    };
    getRedirect();
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (email && password) {
      try {
        const response = await signInWithEmailAndPasswordAsync(email, password);
        setFormValues(defaultFormValues);
        console.log(response);
      } catch (error) {
        switch (error instanceof FirebaseError && error.code) {
          case 'auth/user-not-found':
            alert('User not found');
            break;
          case 'auth/wrong-password':
            alert('Wrong password');
            break;
          default:
            alert('Error signing in');
            break;
        }
        console.log(error);
      }
    }
  };

  const signInWithGoogle = async () => {
    const response = await signInWithGooglePopup();
    await createUser(response);
  };

  return (
    <div className="sign-in-container">
      <h2>Sign in Page</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
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
        <div className="buttons-container">
          <Button type="submit">Sign in</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google Sign in
          </Button>
          <Button
            type="button"
            buttonType="google_redirect"
            onClick={signInWithGoogleRedirect}
          >
            Google Redirect
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
