const { Model, DataTypes } = require("sequelize");
const Parent = require("./parent");
const HealthCondition = require("./healthcondition");
const sequelize = require("../config/database");

class Baby extends Model {}

Baby.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        baby_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        birth_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        gender: {
            type: DataTypes.ENUM("Male", "Female"),
            allowNull: false,
        },
        nik: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        parent_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Parent,
                key: "id",
            },
            onUpdate: "CASCADE",
            onDelete: "SET NULL",
        },
        birth_weight: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        birth_height: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        condition_id: {
            type: DataTypes.INTEGER,
            references: {
                model: HealthCondition,
                key: "id",
            },
            onUpdate: "CASCADE",
            onDelete: "SET NULL",
        },
        puskesmas_location: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: "Baby",
        tableName: "babies",
        timestamps: false,
    }
);

Baby.belongsTo(Parent, { foreignKey: "parent_id" });
Baby.belongsTo(HealthCondition, {
    foreignKey: "condition_id",
    as: "HealthCondition",
});

module.exports = Baby;
