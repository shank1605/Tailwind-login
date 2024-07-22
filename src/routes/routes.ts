import React from 'react';
import { RouteProps } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/Registerpage';
import PostPage from '../pages/PostPage';

interface CustomRouteProps extends RouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const routes: CustomRouteProps[] = [
  {
    path: '/login',
    component: LoginPage
  },
  {
    path: '/register',
    component: RegisterPage,
  },
  {
    path: '/posts',
    component: PostPage,
  },
  {
    path: '/',
    component: LoginPage,
    exact: true,
  },
];

export default routes