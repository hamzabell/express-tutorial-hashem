const mongoose = require('mongoose');


const orderSchema = mongoose.Schema({
    mode: {
        type: String,
        enum: ['transfer', 'cash-at-hand'],
        required: true,
    },
    foodItems: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Food'
    }],
    address: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "pass a valid email"]
    },
    phone: {
        type: String,
        required: true,
        match: /^\d{11}/
    },
    recipientName: {
        type: String,
        required: true,
    },
    orderDate: {
        type: Date,
        default: Date.now()
    }
})


module.exports = mongoose.model('Order', orderSchema)