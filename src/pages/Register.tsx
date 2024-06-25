import { Helmet } from 'react-helmet-async';
import { RegisterForm } from '../components/RegisterForm/RegisterForm';
import '../index.scss';

export default function Register() {
  return (
    <section className="authPage">
      <Helmet title="Registration" />
      <RegisterForm />
    </section>
  );
}
