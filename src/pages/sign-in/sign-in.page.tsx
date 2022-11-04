import React from 'react';
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase.utils';

type Props = {};

const SignInPage = (props: Props) => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    if (response) {
      console.log(response);
      const userDocument = await createUserDocumentFromAuth(response.user);
    } else {
      console.log('No user');
    }
  };

  return (
    <div>
      <h1>Sign in Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google</button>
    </div>
  );
};

export default SignInPage;
