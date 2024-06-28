import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { AppDispatch } from '../../redux/store';
import css from './LoginForm.module.scss';
import { isLoading } from '../../redux/auth/slice';
import Spinner from '../Spinner/Spinner';

export const LoginForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const loading = useSelector(isLoading);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email,
        password,
      })
    );
    form.reset();
  };

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={css.label}>
          Email
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={e => setEmail(e.target.value)}
          />
        </label>
        <label className={css.label}>
          Password
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Log In</button>
      </form>
      {<Spinner isLoading={loading} />}
    </>
  );
};
