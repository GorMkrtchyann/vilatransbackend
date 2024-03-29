const {pagesDB, adminDB} = require("../conecters/AllConnects");
const {Schema} = require('mongoose')

const FooterSchema = new Schema({
    logo: {
        type: String,
    },
    social: {
        type: Object,
    }
})

const FooterModel = pagesDB.model('footer', FooterSchema)

module.exports = {
    FooterModel
}