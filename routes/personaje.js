var express = require('express');
var router = express.Router();
const Personaje = require("../models/personaje");

/* GET users listing. */
router.get('/mosaico', async function(req, res, next) {
  try {
    const personajes = await Personaje.find({});
    personajes.forEach(personaje => {
      switch (personaje.gender) {
        case "Male":
          personaje.gender = "Hombre";
          break;
        case "Female":
          personaje.gender = "Mujer";
          break;
        case "unknown":
          personaje.gender = "Bicho Raro";
          break;
      }
    });
    res.render("index", {personajes});
  } catch (error) {
    res.status(500).send("Error al obtener la lista de personajes.");
  }
});

router.get('/listado', async function (req, res, next) {
  try {
      const personajes = await Personaje.find({});
      personajes.forEach(personaje => {
        switch (personaje.gender) {
          case "Male":
            personaje.gender = "Hombre";
            break;
          case "Female":
            personaje.gender = "Mujer";
            break;
          case "unknown":
            personaje.gender = "Bicho Raro";
            break;
        }
      });
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
