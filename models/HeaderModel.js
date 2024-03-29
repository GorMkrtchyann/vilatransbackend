const {pagesDB, adminDB} = require("../conecters/AllConnects");
const {Schema} = require('mongoose')

const HeaderSchema = new Schema({
    logo: {
        type: String,
    },
    phone: {
        type: String,
    },
    email: {
        type: String,
    }
})

const HeaderModel = pagesDB.model('header', HeaderSchema)

module.exports = {
    HeaderModel
}