const {Schema} = require('mongoose')
const {adminDB} = require('../conecters/AllConnects')


const LoginSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
})

const LoginModel = adminDB.model('admins', LoginSchema)

module.exports = {LoginModel}
