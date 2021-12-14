const { Schema, model } = require('mongoose');

const FilmeSchema = new Schema({
  titulo: {
    type: String,
    required: true,
  },
  ano: {
    type: Number,
    required: true,
  },
  duracao: {
    type: String,
    required: true,
  },
  diretor: {
    type: String,
    required: true,
  },
  sinopse: {
    type: String,
    required: true,
  },
  capa: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: false
  },
});

module.exports = model('Filme', FilmeSchema);