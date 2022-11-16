const mongoose = require('mongoose')

const Contract = mongoose.model("Person", {
    country: String,
    state: String,
    city: String,
    documentNumber: Number,
    socialReason: String,
    address: String,
    district: String,
    number: Number,
    zipCode: Number,
    email: String,
    phone: String,
    contractStarts: Date,
    contractEnds: Date,
    dueDay: Number,
    company: String,
})

module.exports = Contract