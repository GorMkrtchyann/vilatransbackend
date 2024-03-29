const { ServiceBannerModel } = require("../../models/ServiceModel")

class ServiceBanner {
    static GetAllImagesData = async (req, res, next) => {
        try {
            const data = await ServiceBannerModel.find()
            return res.json(data)
        } catch (err) {
            return res.json({error: err})
        }
    }
    static EditImages = async (req, res, next) => {
        try {
            const { images } = req.body
            const newData = await ServiceBannerModel.findOneAndUpdate({}, { images }, { new: true })
            return res.json(newData)
        } catch (err) {
            return res.json({error: err})
        }

    }
}

module.exports = ServiceBanner