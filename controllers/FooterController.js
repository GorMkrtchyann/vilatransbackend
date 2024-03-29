const {FooterModel} = require("../models/FooterModel");


let date = new Date()
date = `${date.getDate() < 10 ? "0"+date.getDate() : date.getDate()}.${date.getMonth() < 10 ? "0"+(date.getMonth()+1) : date.getMonth()+1}.${date.getFullYear()}`

class CalculatorController {
    async UpdateSocialMedia (req, res) {
        try{
            const data = req.body

            await FooterModel.findByIdAndUpdate(data.id, data.obj)

            const getAll = await FooterModel.findOne({})

            res.send(getAll)
        }catch (e) {
            res.send({error: e})
        }
    }

    async UpdateLogo (req, res) {
        try{
            const data = req.body

            await FooterModel.findByIdAndUpdate(data.id, data.obj)

            const getAll = await FooterModel.findOne({})

            res.send(getAll)
        }catch (e) {
            res.send({error: e})
        }
    }

    async GetFooter (req, res) {
        try{
            const getAll = await FooterModel.findOne({})

            res.send(getAll)
        }catch (e) {
            res.send({error: e})
        }
    }

}

module.exports = new CalculatorController