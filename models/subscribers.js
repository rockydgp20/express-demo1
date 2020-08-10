const mongoose = require('mongoose');

const subscribersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    subscribeToChannel:{
        type: String,
        required: true
    },
    subscribedToDate:{
        type: Date,
        required: true,
        default: Date.now()
    }
})
mongoose.export = mongoose.model('Subscribers', subscribersSchema)