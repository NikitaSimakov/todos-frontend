import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks';

type Props = {
  component: JSX.Element;
  redirectTo?: string;
};

export const RestrictedRoute = ({
  component,
  redirectTo = '/',
}: Props): JSX.Element => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : component;
};
