const {pagesDB, adminDB} = require("../conecters/AllConnects");
const {Schema} = require('mongoose')

const ContactOfficeInfoSchema = new Schema({
    name: {
        type: Object,
    },
    openClock: {
        type: String,
    },
    closeClock: {
        type: String,
    },
    phones: {
        type: Array,
    },
    email: {
        type: String,
    },
    address: {
        type: Object,
    },
    social: {
        type: Object,
    },
})

const ContactReviewsSchema = new Schema({
    name: {
        type: String,
    },
    phone: {
        type: String,
    },
    email: {
        type: String,
    },
    subject: {
        type: String,
    },
    text: {
        type: String,
    },
    date: {
        type: String,
    }
})

const ContactMoreSchema = new Schema({
    type: {
        type: String,
    },
    content: {
        type: Array,
    }
})


const ContactOfficeInfo = pagesDB.model('contactOfficeInfo', ContactOfficeInfoSchema)
const ContactReviews = adminDB.model('contactReviews', ContactReviewsSchema)
const ContactMore = pagesDB.model('contacts', ContactMoreSchema)

module.exports = {
    ContactOfficeInfo,
    ContactReviews,
    ContactMore
}