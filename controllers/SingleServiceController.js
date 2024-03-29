const {SingleServiceModel} = require("../models/SingleServiceModel");


class SingleServiceController {
    async AddPage (req, res) {
        try{
            const data = req.body

            const save = await new SingleServiceModel({
                url: data.title.en.split(' ').toString().replace(/,/g, '').toLowerCase(),
                banner: data.banner,
                title: data.title,
                content: data.content
            }).save()

            res.send(save)
        }catch (e) {
            res.send({error: e})
        }
    }

    async GetAllPage (req, res) {
        try{
            const get = await SingleServiceModel.find({})

            res.send(get)
        }catch (e) {
            res.send({error: e})
        }
    }

    async UpdatePage (req, res) {
        try{
            const data = req.body
            const get = await SingleServiceModel.findByIdAndUpdate(data._id, {
                url: data.title.en.split(' ').toString().replace(/,/g, '').toLowerCase(),
                banner: data.banner,
                title: data.title,
                content: data.content
            }, {new: true})

            res.send(get)
        }catch (e) {
            res.send({error: e})
        }
    }

    async DeletePage (req, res) {
        try{
            const data = req.body
            await SingleServiceModel.findByIdAndDelete(data._id)

            const get = await SingleServiceModel.find({})
            res.send(get)
        }catch (e) {
            res.send({error: e})
        }
    }
}

module.exports = new SingleServiceController()