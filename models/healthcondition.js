const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

class HealthCondition extends Model {}

HealthCondition.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        condition: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: "HealthCondition",
        tableName: "health_condition",
        timestamps: false,
    }
);

module.exports = HealthCondition;
