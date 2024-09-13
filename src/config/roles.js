// Roles based on user category

const ROLES = {
  USER: 'user',
  MANAGER: 'manager',
  ADMIN: 'admin',
};

const roleRights = new Map();
roleRights.set(ROLES.USER, ['user']);
roleRights.set(ROLES.MANAGER, ['user', 'manager']);
roleRights.set(ROLES.ADMIN, ['user', 'manager', 'admin']);

module.exports = {
  ROLES,
  roleRights,
};

// const allRoles = {
//   user: [],
//   admin: ['getUsers', 'manageUsers'],
// };

// const roles = Object.keys(allRoles);
// const roleRights = new Map(Object.entries(allRoles));

// module.exports = {
//   roles,
//   roleRights,
// };
