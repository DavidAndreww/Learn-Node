const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const slug = require('slugs');

const storeSchema = new Mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: 'Please enter a store name.'
    },
    slug: String,
    description: {
        type: String,
        trim: true
    },
    tags: [String]
})

module.exports = mongoose.model('Store', storeSchema);