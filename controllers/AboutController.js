const {AboutMore} = require("../models/AboutModel");


let date = new Date()
date = `${date.getDate() < 10 ? "0"+date.getDate() : date.getDate()}.${date.getMonth() < 10 ? "0"+(date.getMonth()+1) : date.getMonth()+1}.${date.getFullYear()}`

class ContactController {
    async UpdateBanner (req, res) {
        try{
            await AboutMore.findOneAndUpdate({type: "banner"}, {
                content: req.body
            })

            const getMap = await AboutMore.findOne({type: "banner"})

            res.send(getMap)
        }catch (e) {
            res.send({error: e})
        }
    }
    async GetBanner (req, res) {
        try{
            const get = await AboutMore.findOne({type: "banner"})

            res.send(get)
        }catch (e) {
            res.send({error: e})
        }
    }
    async GetInfoBlockOne (req, res) {
        try{
            const get = await AboutMore.findOne({type: "infoBlockOne"})

            res.send(get)
        }catch (e) {
            res.send({error: e})
        }
    }
    async UpdateInfoBlockOne (req, res) {
        try{
            const data = req.body
            const {type} = req.query

            const get = await AboutMore.findOne({type: "infoBlockOne"}).select('content')
            const updatingData = get.content[0]

            if (type === 'slogan'){
                updatingData.slogan = data
            }else if (type === 'dis'){
                updatingData.dis = data
            }else if (type === 'title'){
                updatingData.title = data
            }else if (type === 'image'){
                updatingData.image = data.image
            }

            const update = await AboutMore.findByIdAndUpdate(get._id, {
                content: updatingData
            }, {new: true}).select('content')

            if (type === 'slogan'){
                return res.send(update.content[0].slogan)
            }else if (type === 'dis'){
                return res.send(update.content[0].dis)
            }else if (type === 'title'){
                return res.send(update.content[0].title)
            }else if (type === 'image'){
                return res.send(update.content[0].image)
            }

        }catch (e) {
            res.send({error: e})
        }
    }

    async GetInfoMap (req, res) {
        try{
            const get = await AboutMore.findOne({type: "infoMap"})

            res.send(get)
        }catch (e) {
            res.send({error: e})
        }
    }

    async UpdateInfoMap (req, res) {
        try{
            const data = req.body
            const {type} = req.query

            const get = await AboutMore.findOne({type: "infoMap"}).select('content')
            const updatingData = get.content[0]

            if (type === 'numbers'){
                updatingData.numbers = data
            }else if (type === 'title'){
                updatingData.title = data
            }else if (type === 'image'){
                updatingData.image = data.image
            }

            const update = await AboutMore.findByIdAndUpdate(get._id, {
                content: updatingData
            }, {new: true}).select('content')

            if (type === 'numbers'){
                return res.send(update.content[0].numbers)
            }else if (type === 'title'){
                return res.send(update.content[0].title)
            }else if (type === 'image'){
                return res.send(update.content[0].image)
            }

        }catch (e) {
            res.send({error: e})
        }
    }

}

module.exports = new ContactController()