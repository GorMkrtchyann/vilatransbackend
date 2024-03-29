const {pagesDB, adminDB} = require("../conecters/AllConnects");
const {Schema} = require('mongoose')

const CalculatorRequestsSchema = new Schema({
    name: {
        type: String,
    },
    phone: {
        type: String,
    },
    email: {
        type: String,
    },
    requests: {
        type: Array,
    },
    date: {
        type: String,
    }
})

const CalculatorRequests = adminDB.model('calculatorRequests', CalculatorRequestsSchema)

module.exports = {
    CalculatorRequests
}