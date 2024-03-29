const {HeaderModel} = require("../models/HeaderModel");


let date = new Date()
date = `${date.getDate() < 10 ? "0"+date.getDate() : date.getDate()}.${date.getMonth() < 10 ? "0"+(date.getMonth()+1) : date.getMonth()+1}.${date.getFullYear()}`

class CalculatorController {
    async UpdateEmail (req, res) {
        try{
            const data = req.body

            await HeaderModel.findByIdAndUpdate(data.id, data.obj)

            const getAll = await HeaderModel.findOne({})

            res.send(getAll)
        }catch (e) {
            res.send({error: e})
        }
    }
    async UpdatePhone (req, res) {
        try{
            const data = req.body

            await HeaderModel.findByIdAndUpdate(data.id, data.obj)

            const getAll = await HeaderModel.findOne({})

            res.send(getAll)
        }catch (e) {
            res.send({error: e})
        }
    }
    async UpdateLogo (req, res) {
        try{
            const data = req.body

            await HeaderModel.findByIdAndUpdate(data.id, data.obj)

            const getAll = await HeaderModel.findOne({})

            res.send(getAll)
        }catch (e) {
            res.send({error: e})
        }
    }

    async GetHeader (req, res) {
        try{
            const getAll = await HeaderModel.findOne({})

            res.send(getAll)
        }catch (e) {
            res.send({error: e})
        }
    }

}

module.exports = new CalculatorController