import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks';
import React from 'react';

/**
 * - If the route is restricted and the user is logged in, render a <Navigate> to redirectTo
 * - Otherwise render the component
 */

type Props = {
  component: JSX.Element;
  redirectTo: string;
};
export const RestrictedRoute = ({
  component: Component,
  redirectTo = '/',
}: Props) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
