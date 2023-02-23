/**
 * Authorization Roles
 */
const authRoles = {
  admin: ['Admin'],
  staff: ['Admin', 'staff'],
  user: ['Admin', 'staff', 'user'],
  onlyGuest: [],
};

export default authRoles;
