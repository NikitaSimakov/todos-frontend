import { Helmet, HelmetProvider } from 'react-helmet-async';
import { LoginForm } from '../components/LoginForm/LoginForm';
import '../index.scss';

export default function Login() {
  return (
    <HelmetProvider>
      <div className="authPage">
        <Helmet>
          <title>Login</title>
        </Helmet>
        <LoginForm />
      </div>
    </HelmetProvider>
  );
}
