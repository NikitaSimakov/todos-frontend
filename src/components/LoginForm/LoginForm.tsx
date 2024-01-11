import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import css from './LoginForm.module.scss';
import { AppDispatch } from '../../redux/store';
import { useState } from 'react';

export const LoginForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    // const el = form.elements as HTMLFormControlsCollection;
    // const email = el[0].value;
    // console.log(el.email.value);
    dispatch(
      logIn({
        email,
        password,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Email
        <input
          type="email"
          name="email"
          onChange={e => setEmail(e.target.value)}
        />
      </label>
      <label className={css.label}>
        Password
        <input
          type="password"
          name="password"
          onChange={e => setPassword(e.target.value)}
        />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};
