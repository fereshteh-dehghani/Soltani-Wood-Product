import { lazy } from 'react';

const JwtAuthDoc = lazy(() => import('./jwt/jwtAuthDoc'));
const FirebaseAuthDoc = lazy(() => import('./firebase/FirebaseAuthDoc'));
const Auth0AuthDoc = lazy(() => import('./auth0/Auth0AuthDoc'));

const AuthenticationDocRoutes = [
  {
    path: 'authentication/jwt',
    element: <JwtAuthDoc />,
  },
  {
    path: 'authentication/firebase',
    element: <FirebaseAuthDoc />,
  },
  {
    path: 'authentication/auth0',
    element: <Auth0AuthDoc />,
  },
];

export default AuthenticationDocRoutes;
