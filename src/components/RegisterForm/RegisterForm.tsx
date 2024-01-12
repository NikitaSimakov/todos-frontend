import { useSelector } from 'react-redux';
import { register } from '../../redux/auth/operations';
import css from './RegisterForm.module.scss';
import { useState } from 'react';
import { isLoading } from '../../redux/auth/slice';
import Spinner from '../Spinner/Spinner';
import { useAppDispatch } from '../../redux/hooks';

export const RegisterForm = () => {
  const dispatch = useAppDispatch();

  const loading = useSelector(isLoading);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(register({ name, email, password }));
    form.reset();
  };

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={css.label}>
          Username
          <input
            type="text"
            name="name"
            onChange={e => setName(e.target.value)}
          />
        </label>
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
        <button type="submit">Register</button>
      </form>
      {<Spinner isLoading={loading} />}
    </>
  );
};
