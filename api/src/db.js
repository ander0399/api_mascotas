require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
    DB_USER, DB_PASSWORD, DB_HOST, DB_NAME,
  } = process.env;


const db = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: 'mysql' 
  });

  const basename = path.basename(__filename);
  const modelDefiners = [];
  
  
  // Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
  fs.readdirSync(path.join(__dirname, '/models'))
      .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
      .forEach((file) => {
          modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });
  
  // Injectamos la conexion (sequelize) a todos los modelos
  modelDefiners.forEach(model => model(db));
  // Capitalizamos los nombres de los modelos ie: product => Product
  let entries = Object.entries(db.models);
  let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
  db.models = Object.fromEntries(capsEntries);
  
  // En sequelize.models están todos los modelos importados como propiedades
  // Para relacionarlos hacemos un destructuring
  const { Usuarios, Mascotas } = db.models;
  
  // Aca vendrian las relaciones
  Usuarios.hasMany(Mascotas);
  Mascotas.belongsTo(Usuarios);

  
  module.exports = {
      ...db.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
      conn: db,     // para importart la conexión { conn } = require('./db.js');
  };
  