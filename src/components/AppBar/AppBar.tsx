import { Navigation, AuthNav, UserMenu } from '../';
import { useAuth } from '../../hooks';
import css from './AppBar.module.scss';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
