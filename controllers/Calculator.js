const { CalculatorModel } = require("../models/PagesModel");

class Calculator {
    static CreateImg = async (req, res, next) => {

        try {
            const updatedDocument = await CalculatorModel.findByIdAndUpdate(
                req.body.id,
                { images: req.body.images },
                { new: true }
            ).select('images');
            return res.json({ data: updatedDocument });
        } catch (err) {
            res.json({ err })
        }
    };

    static GetAllImg = async (req, res, next) => {
        try {
            const data = await CalculatorModel.find().select("images");
            res.json({ data });
        } catch (err) {
            res.json({ err })
        }
    };

    static CreateSelect = async (req, res, next) => {
        try {
            const { id, value, name } = req.body;
            const updatedDocument = await CalculatorModel.findByIdAndUpdate(
                id,
                { $push: { [`select.${name}`]: { value } } },
                { new: true }
            );

            return res.json({ data: updatedDocument });
        } catch (err) {
            res.json({ err })
        }
    };

    static GetAllSelect = async (req, res, next) => {
        try {
            const data = await CalculatorModel.find().select("select");
            res.json({ data });
        } catch (err) {
            res.json({ err })
        }
    };

    static DeleteSelect = async (req, res, next) => {
        const { id, name, deletes } = req.query;
        try {
            const updatedDocument = await CalculatorModel.findByIdAndUpdate(
                id,
                { $pull: { [`select.${name}`]: { _id: deletes } } },
                { new: true }
            ).select('select');
            return res.json({ data: updatedDocument });
        } catch (err) {
            res.json({ err })
        }
    };

    static EditSelect = async (req, res, next) => {
        const { name, value, elementId } = req.body;
        console.log(value, name, elementId)
        try {
            const updatedDocument = await CalculatorModel.findOneAndUpdate(
                { [`select.${name}._id`]: elementId },
                { $set: { [`select.${name}.$.value`]: value } },
                { new: true }
            ).select('select');
            return res.json({ data: updatedDocument });
        } catch (err) {
            res.json({ err })
        }
    }
}
module.exports = Calculator;
