const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const cellSchema = new Schema({

    coordinate: Coordinate,
    alive: Boolean,
    adjacentCells: Array,
    color: any = '#000000'

})
module.exports = mongoose.model('cell', cellSchema, 'cell') // (nom du model, nom du schema, nom de la collection de la bdd)