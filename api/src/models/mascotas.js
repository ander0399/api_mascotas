const { DataTypes } = require('sequelize')
//exportamos una funcion que define el modelo
//luego le injectamos la conexion a sequelize
module.exports = (sequilize) => {
    //defino el modelo
    sequilize.define('mascotas', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        foto: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'No Disponible',
        },
        edad: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        talla: {
            type: DataTypes.ENUM('pequeño', 'mediano','grande'),
            allowNull: false,
            defaultValue: 'mediano'
        },
        adoptada: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        detalles: {
            type: DataTypes.TEXT,
            allowNull: false,
            defaultValue: 'No hay detalles.'
        }
    },
        {
            timestamps: false,
            initialAutoIncrement: 1000
        });
}