import { Helmet } from 'react-helmet-async';
import { LoginForm } from '../components';
import '../index.scss';

export default function Login() {
  return (
    <div className="authPage">
      <Helmet title="Login" />
      <LoginForm />
    </div>
  );
}
