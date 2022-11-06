import { FirebaseError } from 'firebase/app';
import React, { useState } from 'react';
import {
  createUserDocumentFromAuth,
  createUserWithEmailAndPasswordAsync,
} from '../../utils/firebase.utils';

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
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="displayName">Display Name</label>
        <input
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Passowrd</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />

        <label htmlFor="confirmPassword">Confirm password</label>
        <input
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          required
        />

        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
