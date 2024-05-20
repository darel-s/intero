const { Model, DataTypes } = require("sequelize");
const Baby = require("./baby");

class BabyHistory extends Model {}

BabyHistory.init(
    {
        id_check: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        baby_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Baby,
                key: "id",
            },
            onUpdate: "CASCADE",
            onDelete: "SET NULL",
        },
        check_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        weight: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
        height: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
        head_circumference: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
        exclusive_breastfeeding: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        vit_a: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        pmba: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        sequelize,
        modelName: "BabyHistory",
        tableName: "baby_history",
    }
);

module.exports = BabyHistory;
