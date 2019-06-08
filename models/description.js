const mongoose = require('mongoose');
const PlantSchema = new mongoose.Schema({
    telegram_id: { type: Number, unique: true },
    first_name: String,
    last_name: String,
    language_code: String
});

module.exports = Desc = mongoose.model(description, PlantSchema)
