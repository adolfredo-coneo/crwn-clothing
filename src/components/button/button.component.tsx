import React from 'react';

import {
  BaseButton,
  GoogleSignInButton,
  GoogleRedirectButton,
  InvertedButton,
} from './button.styles';

export const BUTTON_TYPES_CLASSES: Record<string, string> = {
  base: 'base',
  google: 'google-sign-in',
  google_redirect: 'google-redirect',
  inverted: 'inverted',
};

const getButton = (buttonType = BUTTON_TYPES_CLASSES.base) =>
  ({
    [BUTTON_TYPES_CLASSES.base]: BaseButton,
    [BUTTON_TYPES_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPES_CLASSES.google_redirect]: GoogleRedirectButton,
    [BUTTON_TYPES_CLASSES.inverted]: InvertedButton,
  }[buttonType]);

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType?: keyof typeof BUTTON_TYPES_CLASSES;
  children: React.ReactNode;
}

const Button: React.FC<Props> = ({ buttonType, children, ...otherProps }) => {
  const CustomButton = getButton(buttonType);

  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
