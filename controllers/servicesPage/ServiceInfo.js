const { ServiceInfoModel } = require("../../models/ServiceModel")

class ServiceInfo {
    static EditInfoImages = async (req, res, next) => {
        try {
            const {images} = req.body
            const data = await ServiceInfoModel.findOneAndUpdate({}, { images }, { new: true })
            if (!data) {
                return res.status(404).json({ error: "404 Not Found" })
            }
            return res.json(data)
        }
        catch (err) {
            return res.status(500).json({ err })
        }
    }

    static EditInfoTitle = async (req, res, next) => {
        try {
            const title = req.body
            const data = await ServiceInfoModel.findOneAndUpdate({}, { title }, { new: true })
            if (!data) {
                return res.status(404).json({ error: "404 Not Found" })
            }
            return res.json(data)
        }
        catch (err) {
            return res.status(500).json({ err })
        }
    }
    static EditInfoDescription = async (req, res, next) => {
        try {
            const description = req.body
            const data = await ServiceInfoModel.findOneAndUpdate({}, { description }, { new: true })
            if (!data) {
                return res.status(404).json({ error: "404 Not Found" })
            }
            return res.json(data)
        }
        catch (err) {
            return res.status(500).json({ err })
        }
    }
    static GetAllInfoData = async (req, res, next) => {
        try {
            const data = await ServiceInfoModel.findOne()
            return res.json(data)
        } catch (err) {
            return res.status(500).json({ err })
        }
    }
}
module.exports = ServiceInfo
