const { Model, DataTypes } = require("sequelize");

class Parent extends Model {}

Parent.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    parent_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    kk_number: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    nik: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    phone_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rt: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rw: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Parent",
    tableName: "parents",
  }
);

module.exports = Parent;
