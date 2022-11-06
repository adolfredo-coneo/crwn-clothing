import React, { useEffect } from 'react';
import { getRedirectResult, UserCredential } from 'firebase/auth';

import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from '../../utils/firebase.utils';

type Props = {};

const createUser = async (response: UserCredential | null) => {
  if (response) {
    console.log(response);
    await createUserDocumentFromAuth(response.user);
  } else {
    console.log('No user');
  }
};

const SignInPage = (props: Props) => {
  useEffect(() => {
    const getRedirect = async () => {
      const result = await getRedirectResult(auth);
      await createUser(result);
    };
    getRedirect();
  }, []);

  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    await createUser(response);
  };

  return (
    <div>
      <h1>Sign in Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google PopUp</button>
      <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button>
    </div>
  );
};

export default SignInPage;
