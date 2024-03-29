const { Schema, default: mongoose } = require('mongoose')
const { pagesDB } = require("../conecters/AllConnects")

const ServiceInfoSchema = new Schema({
    images: { type: String, default: "" },
    title: {
        type: Object
    },
    description: {
        type: Object
    }
})

const ServiceTransportSchema = new Schema({
    preTitle: {
        hy: {
            type: String,
            required: true,
            default: 'SERVICES'
        },
        en: {
            type: String,
            required: true,
            default: 'SERVICES'

        },
        ru: {
            type: String,
            required: true,
            default: 'SERVICES'
        },
    },
    title: {
        hy: {
            type: String,
            required: true,
            default: ""
        },
        en: {
            type: String,
            required: true,
            default: ""

        },
        ru: {
            type: String,
            required: true,
            default: ""
        },

    },
    description: {
        hy: {
            type: Object,
            required: true,
        },
        en: {
            type: Object,
            required: true,

        },
        ru: {
            type: Object,
            required: true,
        },
    },
    transport: {
        car: {
            images: { type: String, default: "" },
            title: {
                hy: String,
                en: String,
                ru: String
            },
            description: {
                hy: String,
                en: String,
                ru: String
            }
        },
        shipping: {
            images: { type: String, default: "" },
            title: {
                hy: { type: String, default: "" },
                en: { type: String, default: "" },
                ru: { type: String, default: "" }
            },
            description: {
                hy: { type: String, default: "" },
                en: { type: String, default: "" },
                ru: { type: String, default: "" }
            }
        },
        air: {
            images: { type: String, default: "" },
            title: {
                hy: { type: String, default: "" },
                en: { type: String, default: "" },
                ru: { type: String, default: "" }
            },
            description: {
                hy: Object,
                en: Object,
                ru: Object
            }
        },
        train: {
            images: { type: String, default: "" },
            title: {
                hy: { type: String, default: "" },
                en: { type: String, default: "" },
                ru: { type: String, default: "" }
            },
            description: {
                hy: { type: String, default: "" },
                en: { type: String, default: "" },
                ru: { type: String, default: "" }
            }
        }
    }
})

const ServiceBannerSchema = new Schema({
    images: { type: String, require: true },
    title: {
        hy: String,
        en: String,
        ru: String
    }
})

const ServiceStepsSchema = new Schema({
    title: {
        hy: { type: String, default: "How we works" },
        en: { type: String, default: "How we works" },
        ru: { type: String, default: "How we works" }
    },
    preTitle: {
        hy: { type: String, default: "STEPS FOR WORK" },
        en: { type: String, default: "STEPS FOR WOR" },
        ru: { type: String, default: "STEPS FOR WOR" }
    },
    steps: {
        one: {
            title: {
                hy: { type: String, default: "" },
                en: { type: String, default: "" },
                ru: { type: String, default: "" }
            },
            description: {
                hy: { type: Object },
                en: { type: Object },
                ru: { type: Object },
            }
        },
        two: {
            title: {
                hy: { type: String, default: "" },
                en: { type: String, default: "" },
                ru: { type: String, default: "" }
            },
            description: {
                hy: { type: Object },
                en: { type: Object },
                ru: { type: Object },
            }
        },
        three: {
            title: {
                hy: { type: String, default: "" },
                en: { type: String, default: "" },
                ru: { type: String, default: "" }
            },
            description: {
                hy: { type: Object },
                en: { type: Object },
                ru: { type: Object },
            }
        },
        for: {
            title: {
                hy: { type: String, default: "" },
                en: { type: String, default: "" },
                ru: { type: String, default: "" }
            },
            description: {
                hy: { type: Object },
                en: { type: Object },
                ru: { type: Object },
            }
        }
    }
})

const serviceLeaveSchema = new Schema({
    page: {
        hy: { type: String, default: "SERVICES" },
        en: { type: String, default: "SERVICES" },
        ru: { type: String, default: "SERVICES" }
    },
    title: {
        hy: { type: String, default: "We manage lead logistics for leadership" },
        en: { type: String, default: "We manage lead logistics for leadership" },
        ru: { type: String, default: "We manage lead logistics for leadership" }
    },
    preTitle: {
        hy: { type: String, default: "TRANSPORTERIUM SERVICES" },
        en: { type: String, default: "TRANSPORTERIUM SERVICES" },
        ru: { type: String, default: "TRANSPORTERIUM SERVICES" }
    },
    images: {
        truck: {
            images: { type: String, default: "" },
            title: {
                hy: { type: String, default: "Trauck Freight" },
                en: { type: String, default: "Trauck Freight" },
                ru: { type: String, default: "Trauck Freight" }
            }
        },
        trin: {
            images: { type: String, default: "" },
            title: {
                hy: { type: String, default: "Trin Freight" },
                en: { type: String, default: "Trin Freight" },
                ru: { type: String, default: "Trin Freight" }
            }
        },
        plane: {
            images: { type: String, default: "" },
            title: {
                hy: { type: String, default: "Plane Freight" },
                en: { type: String, default: "Plane Freight" },
                ru: { type: String, default: "Plane Freight" }
            }
        },
        ship: {
            images: { type: String, default: "" },
            title: {
                hy: { type: String, default: "Ship Freight" },
                en: { type: String, default: "Ship Freight" },
                ru: { type: String, default: "Ship Freight" }
            }
        }
    }
})

const ServiceStepsModel = pagesDB.model('ServiceSteps', ServiceStepsSchema)
const ServiceLeaveModel = pagesDB.model('ServiceLeave', serviceLeaveSchema)
const ServiceBannerModel = pagesDB.model('ServiceBanner', ServiceBannerSchema)
const ServiceTransportModel = pagesDB.model('serviceTransport', ServiceTransportSchema)
const ServiceInfoModel = pagesDB.model('serviceInfo', ServiceInfoSchema)

module.exports = { ServiceInfoModel, ServiceLeaveModel, ServiceTransportModel, ServiceBannerModel, ServiceStepsModel }
