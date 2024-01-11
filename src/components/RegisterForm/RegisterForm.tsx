import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import css from './RegisterForm.module.scss';
import { AppDispatch } from '../../redux/store';
import { useState } from 'react';

export const RegisterForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name,
        email,
        password,
      })
    );
    form.reset();
  };

  return (
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
  );
};
