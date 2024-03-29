const { ServiceTransportModel } = require("../../models/ServiceModel")

class ServiceTransport {
    static EditTransportTitle = async (req, res, next) => {
        try {
            const title = req.body
            const newData = await ServiceTransportModel.findOneAndUpdate({}, { title }, { new: true })
            if (!newData) {
                return res.status(404).json({ error: "404 Not Found" })
            }
            return res.json(newData)
        }
        catch (err) {
            return res.status(500).json({ err })
        }
    }
    static EditTransportDescription = async (req, res, next) => {
        try {
            const description = req.body
            const newData = await ServiceTransportModel.findOneAndUpdate({}, { description }, { new: true })
            if (!newData) {
                return res.status(404).json({ error: "404 Not Found" })
            }
            return res.json(newData)
        }
        catch (err) {
            return res.status(500).json({ err })
        }
    }
    static GetAllTransportData = async (req, res, next) => {
        try {
            const data = await ServiceTransportModel.findOne()
            return res.json(data)
        } catch (err) {
            return res.status(500).json({ err })
        }
    }
}
module.exports = ServiceTransport