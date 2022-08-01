import { DataTypes } from 'sequelize';

const User = sequelize.define('User', {
  id: DataTypes.STRING,
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
});

module.exports = User;
