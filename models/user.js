const { Model, DataTypes } = require("sequelize");
const UserType = require("./usertype");
const Puskesmas = require("./puskesmas");

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    full_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_type_id: {
      type: DataTypes.INTEGER,
      references: {
        model: UserType,
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    },
    puskesmas_location: {
      type: DataTypes.INTEGER,
      references: {
        model: Puskesmas,
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
      unique: true,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "User",
    tableName: "users",
  }
);

module.exports = User;
