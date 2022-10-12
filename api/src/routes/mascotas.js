const express = require('express');
const router = express.Router();
const { Mascotas } = require('../db');


//todas las mascotas o las mascotas que aún no están adoptadas
router.get('/', async (req, res) => {
    const { adoptada } = req.query
    try {

        if (adoptada == 'false') {
            const mascotasPorAdoptar = await Mascotas.findAll({
                where: {
                    adoptada: false,
                },
            });
            mascotasPorAdoptar[0] ? res.json({mascotasPorAdoptar}) : res.status(404).json({ Error: `Todas las mascotas estan en adopción` })

        } else {
            const mascotas = await Mascotas.findAll()
            res.json({ mascotas })
        }
    } catch (error) {
        res.json({ 'error': error.message })
    }

});

module.exports = router;