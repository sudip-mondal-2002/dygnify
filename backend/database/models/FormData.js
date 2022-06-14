const mongoose = require('mongoose');

const FormDataSchema = new mongoose.Schema({
    personal: {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        phone: {
            type: String,
            required: true
        }
    },
    business: {
        name: {
            type: String,
            required: true
        },
        GSTNo: {
            type: String,
            required: true
        },
        address: {
            street: {
                type: String,
                required: true
            },
            city: {
                type: String,
                required: true
            },
            state: {
                type: String,
                required: true
            },
            zip: {
                type: Number,
                required: true
            }
        }
    },
    loan:{
        amountINR: {
            type: Number,
            required: true
        },
        tenureYrs: {
            type: Number,
            required: true
        },
        interestRate: {
            type: Number,
            required: true
        }
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('FormData', FormDataSchema);