const { ServiceStepsModel } = require("../../models/ServiceModel")

class ServiceSteps {
    static EditStepsTitle = async (req, res, next) => {
        try {
            const { title, objName } = req.body
            const newData = await ServiceStepsModel.findOneAndUpdate({}, { $set: { [`steps.${objName}.title`]: title } }, { new: true })
            if (!newData) {
                return res.status(404).json({ error: "404 Not Found" })
            }
            return res.json(newData)
        }
        catch (err) {
            return res.status(500).json({ err })
        }
    }
    static EditStepsDescription = async (req, res, next) => {
        try {
            const { description, objName } = req.body
            const newData = await ServiceStepsModel.findOneAndUpdate({}, { $set: { [`steps.${objName}.description`]: description } }, { new: true })
            if (!newData) {
                return res.status(404).json({ error: "404 Not Found" })
            }
            return res.json(newData)
        }
        catch (err) {
            return res.status(500).json({ err })
        }
    }
    static GetAllStepsData = async (req, res, next) => {
        try {
            const data = await ServiceStepsModel.findOne()
            return res.json(data)
        } catch (err) {
            return res.status(500).json({ err })
        }
    }
}
module.exports = ServiceSteps