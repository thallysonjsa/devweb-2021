const express = require('express');
const filme = require('./model/filme');
const router = express.Router();

router.get('/', async (req, res) => {
  const filmes = await filme.find({})
  return res.status(200).send({
    "filmes": filmes
  })
});

router.post('/filme', async (req, res) => {
  const { titulo, ano, duracao, diretor, sinopse, capa } = req.body;
  const f = await filme.create({ titulo, ano, duracao, diretor, sinopse, capa })
  return res.status(201).send({
    'filme': f
  })
});


module.exports = router