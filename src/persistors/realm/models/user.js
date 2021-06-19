export const USER_SCHEMA = 'User';

export const UserSchema = {
  name: USER_SCHEMA,
  primaryKey: 'id',
  properties: {
    id: 'string',
    fullName: 'string?',
    email: 'string?',
  },
};

let UserModel = class {
  constructor(id, fullName = '', email = '') {
    this.id = id;
    this.fullName = fullName;
    this.email = email;
  }
};

export default UserModel;
