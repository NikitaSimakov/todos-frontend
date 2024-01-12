import { Helmet, HelmetProvider } from 'react-helmet-async';
import { RegisterForm } from '../components/RegisterForm/RegisterForm';
import '../index.scss';

export default function Register() {
  return (
    <HelmetProvider>
      <div className="authPage">
        <Helmet>
          <title>Registration</title>
        </Helmet>
        <RegisterForm />
      </div>
    </HelmetProvider>
  );
}
