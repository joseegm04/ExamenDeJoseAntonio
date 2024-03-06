var express = require('express');
var router = express.Router();
const Personaje = require("../models/personaje");

router.get('/listado', async function (req, res, next) {
    try {
        const personajes = await Personaje.find({});
        res.render("index", { personajes });
    } catch (error) {
        res.status(500).send("Error al obtener la lista de personajes.");
    }
});

router.get("/:id", async function (req, res, next) {
    const { id } = req.params;
    if (isNaN(id)) {
        res.redirect("/listado");
    }
    try {
        let personaje = await Personaje.find({ id: id });
        personaje.length === 0 ? res.redirect("/listado") : false;
        personaje = personaje[0];
        res.render("personaje", { personaje });
    } catch (error) {
        res.end();
    }
})

module.exports = router;