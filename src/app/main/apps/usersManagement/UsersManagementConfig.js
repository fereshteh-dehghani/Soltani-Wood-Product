import { lazy } from 'react';

const UsersListPage = lazy(() => import('./users-list/UsersListPage'));
const UpdateUserProfile = lazy(() => import('./users-list/updateUserProfile'));
const RolesManagement = lazy(() => import('./roles-management/rolesManagement'));
const UsersInRole = lazy(() => import('./roles-management/usersInRole'));
const ResetPassword = lazy(() => import('./roles-management/resetPassword'));
const RegisterUser = lazy(() => import('./register/registerUser'));

const UsersManagementConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'apps/usersManagement/users-list',
      element: <UsersListPage />,
    },
    {
      path: '/apps/usersManagement/users-list/updateUserProfile/:userId',
      element: <UpdateUserProfile />,
    },
    {
      path: 'apps/usersManagement/roles-management',
      element: <RolesManagement />,
    },
    {
      path: 'apps/usersManagement/roles-management/usersInRole/:rolesId',
      element: <UsersInRole />,
    },
    {
      path: 'apps/usersManagement/roles-management/resetPassword/:userId',
      element: <ResetPassword />,
    },
    {
      path: 'apps/usersManagement/register/registerUser',
      element: <RegisterUser />,
    },
  ],
};

export default UsersManagementConfig;
