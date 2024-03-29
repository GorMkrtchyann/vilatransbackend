const {CalculatorModel} = require("../models/PagesModel");
const {CalculatorRequests} = require("../models/CalculatorModel");
require("dotenv").config();

const mg = require('mailgun-js')

const mailgun = () => mg({
    apiKey: process.env.MAILGUN_SECRET,
    domain: process.env.MAILGUN_DOMAIN,
})


let date = new Date()
date = `${date.getDate() < 10 ? "0"+date.getDate() : date.getDate()}.${date.getMonth() < 10 ? "0"+(date.getMonth()+1) : date.getMonth()+1}.${date.getFullYear()}`

class CalculatorController {
    async CreateRequest (req, res) {
        try{
            const data = req.body

            await new CalculatorRequests(
                {
                    name: data.name,
                    phone: data.phone,
                    email: data.email,
                    requests: data.requests,
                    date: date,
                }
            ).save()

            const mailOptions = {
                from: process.env.MAIL_FROM_ADDRESS,
                to: process.env.MAIL_FROM_ADDRESS,
                subject: 'Vila Trans / New Delivery Request',
                html: `
                <h3>Vila Trans / Delivery Request</h3>
                <p>You have new delivery request please check admin panel Calculation > Request section.</p>
                
                <h3>Short Info</h3>
                <b>Name: </b> <span>${data.name}</span><br>
                <b>Phone: </b> <span>${data.phone}</span><br>
                <b>Email: </b> <span>${data.email}</span><br>
                <br><br>
                <span>Date - ${date}</span>
            `,
            };

            await mailgun().messages().send(mailOptions, function (error, data) {
                if (error) {
                    // console.log(error)
                    res.json({error: error})
                }
            })

            const getAll = await CalculatorRequests.find({})

            res.send(getAll)
        }catch (e) {
            res.send({error: e})
        }
    }

    async DeleteRequest (req, res) {
        try{
            const data = req.body

            await CalculatorRequests.findByIdAndDelete(data.id)

            const getAll = await CalculatorRequests.find({})

            res.send(getAll.reverse())
        }catch (e) {
            res.send({error: e})
        }
    }

    async GetAllRequests (req, res) {
        try{
            const getAll = await CalculatorRequests.find({})

            res.send(getAll.reverse())
        }catch (e) {
            res.send({error: e})
        }
    }
}

module.exports = new CalculatorController