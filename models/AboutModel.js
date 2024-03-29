const {pagesDB, adminDB} = require("../conecters/AllConnects");
const {Schema} = require('mongoose')


const AboutMoreSchema = new Schema({
    type: {
        type: String,
    },
    content: {
        type: Array || Object,
    }
})


const AboutMore = pagesDB.model('abouts', AboutMoreSchema)

module.exports = {
    AboutMore,
}