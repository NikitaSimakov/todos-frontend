import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks';

type Props = {
  component: JSX.Element;
  redirectTo?: string;
};

export const PrivateRoute = ({
  component,
  redirectTo = '/',
}: Props): JSX.Element => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : component;
};
