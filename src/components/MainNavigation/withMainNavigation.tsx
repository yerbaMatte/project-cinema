import React from 'react';
import { useAppSelector } from '../../Hooks/hooks';

interface Props {
  Component: JSX.Element;
}

const PrivateRoute = (Component: JSX.Element) => {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);

  return isLoggedIn ? Component : 'b';
};
