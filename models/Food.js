const mongoose = require('mongoose');


const foodSchema = mongoose.Schema({
    price: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
}, {
    timestamps: true
}
)


module.exports = mongoose.model('Food', foodSchema);