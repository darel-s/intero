const { Model, DataTypes } = require("sequelize");

class UserType extends Model {}

UserType.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "UserType",
    tableName: "user_types",
  }
);

module.exports = UserType;
