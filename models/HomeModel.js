const {Schema} = require('mongoose')
const {adminDB, pagesDB} = require('../conecters/AllConnects')
const {home} = require("nodemon/lib/utils");

const HomePageSlideSchema = new Schema ({
    medias: {
        type: Object
    },
    title: {type: Object, required: true},
    description: {type: Object, required: true},
    link: {type: String, required: true}
})

const HomeServicesSchema = new Schema ({
    title: {
        en: {type: String, required: true},
        ru: {type: String, required: true},
        hy: {type: String, required: true}
    },
    text1: {
        en: {
            blocks: {type: Array, required: true},
            entityMap: {type: Object, required: true, default: {}}
        },
        ru: {
            blocks: {type: Array, required: true},
            entityMap: {type: Object, required: true, default: {}}
        },
        hy: {
            blocks: {type: Array, required: true},
            entityMap: {type: Object, required: true, default: {}}
        }
    },
    text2: {
        en: {
            blocks: {type: Array, required: true},
            entityMap: {type: Object, required: true, default: {}}
        },
        ru: {
            blocks: {type: Array, required: true},
            entityMap: {type: Object, required: true, default: {}}
        },
        hy: {
            blocks: {type: Array, required: true},
            entityMap: {type: Object, required: true, default: {}}
        }
    },
})

const HomeFeaturesSchema = new Schema ({
    image: {type: String, required: true},
    title: {type: Object, required: true},
    section1: {
        icon: {type: String, required: true},
        title: {type: Object, required: true},
        description: {type: Object, required: true}
    },
    section2: {
        icon: {type: String, required: true},
        title: {type: Object, required: true},
        description: {type: Object, required: true}
    },
    section3: {
        icon: {type: String, required: true},
        title: {type: Object, required: true},
        description: {type: Object, required: true}
    }
})

const HomeSlideModel = pagesDB.model('HomeSlide', HomePageSlideSchema);
const HomeServicesModel = pagesDB.model('HomeServices', HomeServicesSchema);
const HomeFeaturesModel = pagesDB.model('HomeFeatures', HomeFeaturesSchema);

module.exports = {HomeSlideModel, HomeFeaturesModel, HomeServicesModel}