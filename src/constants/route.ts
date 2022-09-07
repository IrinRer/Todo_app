type TRouteNames = 'signUp' | 'login' | 'home' | 'notFound';

interface IRoute {
  path: string;
  route: string;
  name: string;
}

export const ROUTES: Record<TRouteNames, IRoute> = {
  home: {
    path: '/',
    route: '/',
    name: 'Home',
  },
  signUp: {
    path: '/sign-up',
    route: '/sign-up',
    name: 'SignUp',
  },
  login: {
    path: '/login',
    route: '/login',
    name: 'Login',
  },
  notFound: {
    path: '*',
    route: '*',
    name: '404',
  },
};
