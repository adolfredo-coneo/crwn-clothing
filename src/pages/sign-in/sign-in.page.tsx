import React from 'react';
import { signInWithGooglePopup } from '../../utils/firebase.utils';

type Props = {};

const SignInPage = (props: Props) => {
  const logGoogleUser = async () => {
    const user = await signInWithGooglePopup();
    if (user) {
      console.log(user);
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
