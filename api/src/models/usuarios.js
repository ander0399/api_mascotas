const { DataTypes } = require('sequelize')
//exportamos una funcion que define el modelo
//luego le injectamos la conexion a sequelize
module.exports = (sequilize) => {
    //defino el modelo
    sequilize.define('usuarios', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        apellido: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cedula: {
            type: DataTypes.STRING,
            allowNull: false
        },
        telefono: {
            type: DataTypes.STRING,
            allowNull: false
        },
        edad: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        direccion: {
            type: DataTypes.STRING,
            allowNull: false
        },
        trabajoActual: {
            type: DataTypes.STRING,
            allowNull: false
        },
        numeroSeguridadSocial: {
            type: DataTypes.STRING,
            allowNull: false
        },
        mascotasAdoptadas: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    },
        {
            timestamps: false,
            initialAutoIncrement: 1000
        });
}