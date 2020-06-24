const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({

    name: {
        type: String,
        trim: true,
        required: [true, 'Add what was the transaction'],
    },
    category: {
        type: String,
        trim: true,
        required: [true, 'Add the category of the transaction'],
    },

    amount: {
        type: Number,
        required: [true, 'Add the amount'],
    },

    date: {
        type: Date,
        default: Date.now,
    }

});

module.exports = mongoose.model('Transaction', TransactionSchema);