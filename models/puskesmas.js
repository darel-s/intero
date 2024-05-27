const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

class Puskesmas extends Model {}

Puskesmas.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Puskesmas",
    tableName: "puskesmas",
    timestamps: false,
  }
);

module.exports = Puskesmas;
