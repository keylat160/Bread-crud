const mongoose = require('mongoose');
const { Schema } = mongoose;

const breadSchema = new Schema({
    name: { type: string, required: true },
    hasGluten: { type: Boolean },
    image: { type: String, default: 'https://placehold.it/500x500.png' }
})

const Bread = mongoose.model('Bread', breadSchema);

module.exports = Bread;