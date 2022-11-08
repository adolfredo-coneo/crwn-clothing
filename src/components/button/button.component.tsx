import React from 'react';

import './button.styles.scss';

const BUTTON_TYPES_CLASSES: Record<string, string> = {
  google: 'google-sign-in',
  google_redirect: 'google-redirect',
  inverted: 'inverted',
};

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType?: keyof typeof BUTTON_TYPES_CLASSES;
  children: React.ReactNode;
}

const Button: React.FC<Props> = ({
  buttonType = '',
  children,
  ...otherProps
}) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPES_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
