import { lazy } from 'react';

const ChangeUserPassword = lazy(() => import('./changeUserPassword'));
const UpdateUserProfile = lazy(() => import('./updateUserProfile'));

const UserProfileConfig = {
  setting: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'pages/user-profile/change-user-password',
      element: <ChangeUserPassword />,
    },
    {
      path: 'pages/user-profile/update-user-profile/:userId',
      element: <UpdateUserProfile />,
    },
  ],
};

export default UserProfileConfig;
