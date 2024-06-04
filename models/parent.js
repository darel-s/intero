const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

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
        },
        puskesmas_location: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: "Parent",
        timestamps: false,
    }
);

module.exports = Parent;
