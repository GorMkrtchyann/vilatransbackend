const {pagesDB, adminDB} = require("../conecters/AllConnects");
const {Schema} = require('mongoose')


const SingleServiceSchema = new Schema({
    url: {
        type: String,
    },
    banner: {
        type: String,
    },
    title: {
        type: Object,
    },
    content: {
        type: Object,
    }
})


const SingleServiceModel = pagesDB.model('singleServices', SingleServiceSchema)

module.exports = {
    SingleServiceModel,
}