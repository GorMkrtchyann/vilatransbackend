const { Schema, default: mongoose } = require('mongoose')
const { pagesDB } = require('../conecters/AllConnects')


const CalculatorSchema = new Schema({
    images: String,
    title: {
        hy: {
            type: String,
            default: 'Հաշվիչ'
        },
        en: {
            type: String,
            default: 'Calculator'

        },
        ru: {
            type: String,
            default: 'Калкудятор'

        },

    },
    select: {
        origin: [{
            _id: { type: mongoose.Types.ObjectId, auto: true },
            value: {
                hy: {
                    type: String,
                    required: true
                },
                en: {
                    type: String,
                    required: true
                },
                ru: String
            }
        }],
        delivery: [{
            _id: { type: mongoose.Types.ObjectId, auto: true },
            value: {
                hy: {
                    type: String,
                    required: true
                },
                en: {
                    type: String,
                    required: true
                },
                ru: {
                    type: String,
                    required: true
                }
            }
        }],
        service: [{
            _id: { type: mongoose.Types.ObjectId, auto: true },
            value: {
                hy: {
                    type: String,
                    required: true
                },
                en: {
                    type: String,
                    required: true
                },
                ru: {
                    type: String,
                    required: true
                }
            }
        }],
        weight: {
            hy: {
                type: String,
                default: 'քաշ'
            },
            en: {
                type: String,
                default: 'weight'
            },
            ru: {
                type: String,
                default: 'масса'
            },

        },

        height: {
            hy: {
                type: String,
                default: 'Բարձրություն'
            },
            en: {
                type: String,
                default: 'Height'
            },
            ru: {
                type: String,
                default: 'Высота'
            },

        },
        width: {
            hy: {
                type: String,
                default: 'Լայնություն',
            },
            en: {
                type: String,
                default: 'Width'
            },
            ru: {
                type: String,
                default: 'Ширина'
            },

        }
    },

    user: {
        email: {
            hy: {
                type: String,
                default: 'Էլ․ փոստ',

            },
            en: {
                type: String,
                default: 'Email',


            },
            ru: {
                type: String,
                default: 'Email',


            },

        },
        name: {
            hy: {
                type: String,
                default: 'Անուն',


            },
            en: {
                type: String,
                default: 'Name',
            },
            ru: {
                type: String,
                default: 'Имя',


            },

        },
        tel: {
            hy: {
                type: String,
                default: '+()XX-XX-XX',


            },
            en: {
                type: String,
                default: '+()XX-XX-XX',


            },
            ru: {
                type: String,
                default: '+()XX-XX-XX',


            },

        },
    }

})

const HomePageSlideSchema = new Schema ({
    img: {type: String, required: true},
    title: {type: Object, required: true},
    description: {type: Object, required: true},
    link: {type: String, required: true}
})

const CalculatorModel = pagesDB.model('calculators', CalculatorSchema)
const HomeSlideModel = pagesDB.model('homeslides', HomePageSlideSchema)

module.exports = {HomeSlideModel, CalculatorModel}
