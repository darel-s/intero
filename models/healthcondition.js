const { Model, DataTypes } = require("sequelize");

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
    }
);

module.exports = HealthCondition;
