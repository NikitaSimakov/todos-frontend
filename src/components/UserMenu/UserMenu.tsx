import { useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { useAuth } from '../../hooks';
import { Spinner } from '../';
import { isLoading } from '../../redux/auth/slice';
import { useAppDispatch } from '../../redux/hooks';
import css from './UserMenu.module.scss';

export const UserMenu = () => {
  const loading = useSelector(isLoading);
  const dispatch = useAppDispatch();
  const {
    user: { name },
  } = useAuth();

  return (
    <>
      {<Spinner isLoading={loading} />}
      <div className={css.wrapper}>
        <p className={css.username}>Welcome, {name}</p>
        <button type="button" onClick={() => dispatch(logOut())}>
          Logout
        </button>
      </div>
    </>
  );
};
