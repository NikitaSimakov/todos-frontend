import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { useAuth } from '../../hooks';
import css from './UserMenu.module.scss';
import { AppDispatch } from '../../redux/store';

export const UserMenu = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    user: { name },
  } = useAuth();

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {name}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};
