const { Model, DataTypes } = require("sequelize");

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
  }
);

module.exports = Puskesmas;
