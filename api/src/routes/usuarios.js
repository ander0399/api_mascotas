const express = require('express');
const router = express.Router();
const { Usuarios } = require('../db');



//usuarios que tengan 2 mascotas o si no todos los usuarios
router.get('/', async (req, res) => {
    const { cantidad } = req.query
    try {
        if (cantidad == 2) {
            const usuariosMascotas = await Usuarios.findAll({
                where: {
                    mascotasAdoptadas: 2,
                },
            });
            usuariosMascotas[0] ? res.json({usuariosMascotas}) : res.status(404).json({ Error: `No hay personas que tengan en adopción 2 mascotas` })

        } else {
            const usuarios = await Usuarios.findAll()
            res.json({ usuarios })
        }
    } catch (error) {
        res.json({ 'error': error.message })
    }
});


module.exports = router;