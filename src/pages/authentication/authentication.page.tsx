import SignUpForm from '../../components/sign-up/sign-up.form';
import SignInForm from '../../components/sign-in/sign-in.form';
import './authentication.page.styles.scss';

type Props = {};

const AuthenticationPage = (props: Props) => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default AuthenticationPage;
