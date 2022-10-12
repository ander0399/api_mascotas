const app = require('./src/app');
const port = process.env.PORT;
const { conn, Mascotas, Usuarios } = require('./src/db.js');
const consumir = require('./consumir.json');

async function loadDB() {
    const verifyBd = await Mascotas.findAll();
    if (verifyBd.length == 0) {
        await Mascotas.bulkCreate(consumir.mascotas);
        await Usuarios.bulkCreate(consumir.usuarios);
        console.log('Datos cargados');
    }
};

conn.sync({ force: false }).then(async () => {
    loadDB();
    console.log('conectado a la base de datos')
    app.listen(port, () => {
        console.log(`app run at port ${port}`);
    });
});

