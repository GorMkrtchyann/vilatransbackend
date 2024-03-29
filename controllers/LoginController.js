const bcrypt = require("bcrypt");
const {LoginModel} = require("../models/LoginModel");
const generator = require('generate-password');
require("dotenv").config();

const mg = require('mailgun-js')

const mailgun = () => mg({
    apiKey: process.env.MAILGUN_SECRET,
    domain: process.env.MAILGUN_DOMAIN,
})


class LoginController {
    async Login (req, res) {
        try{
            let {name, password} = req.body
            let getUser = await LoginModel.findOne({name: name});

            if(!getUser){
                return res.json({error: `Name or password is wrong`})
            }

            let correctPassword = bcrypt.compareSync(atob(password), getUser.password);

            if(!correctPassword){
                return res.json({error: `Name or password is wrong`})
            }

            res.json({name: getUser.name})
        }catch (e) {
            res.json({error: e.message})
        }
    }
    async ForgetPassword (req, res) {
        try{
            let {name} = req.body
            let getUser = await LoginModel.findOne({name: name});

            if(!getUser){
                return res.json({error: `Name is wrong`})
            }

            const generatePassword = generator.generate({
                length: 8,
                numbers: true
            });

            const passwordHash = bcrypt.hashSync(generatePassword, 5)

            await LoginModel.findByIdAndUpdate(getUser._id, {password: passwordHash})

            const mailOptions = {
                from: process.env.MAIL_FROM_ADDRESS,
                to: getUser.email,
                subject: 'Vila Trans Admin Panel / Forget Password',
                html: `
                <h3>Vila Trans Admin Panel</h3>
                <p>You forget password and we generated new password</p>
                <b>${generatePassword}</b>
            `,
            };

            await mailgun().messages().send(mailOptions, function (error, data) {
                    if (error) {
                        // console.log(error)
                        res.json({error: error})
                    }
                    res.json({message: 'Password is generated and send your admin email'})
            })

        }catch (e) {
            res.json({error: e.message})
        }
    }
}

module.exports = new LoginController