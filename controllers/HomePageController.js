const fs = require("fs");
const path = require("path");
const {HomeSlideModel, HomeServicesModel, HomeFeaturesModel} = require("../models/HomeModel");
const generator = require('generate-password');

class HomePageController {
    async slide (req, res) {
        try {
            const slideData = req.body;

            const filetype = slideData.medias.src.split(";base64,").shift().split("/")[1]
            let base64Image = slideData.medias.src.split(';base64,').pop();
            let base64Type = slideData.medias.src.split(',')[0]+',';

            const generateName = generator.generate({
                length: 20,
                numbers: true
            });

            let folderType = 'images'
            if (slideData.medias.duration){
                folderType = 'videos'
            }

            fs.writeFile(path.join(__dirname, `../medias/${folderType}/${generateName}.${filetype}`), base64Image, {encoding: 'base64'}, function(err) {
                if (err) {
                    console.error('Error writing file:', err);
                }
            });

            slideData.medias.src = `${generateName}.${filetype}`
            slideData.medias.type = base64Type

            await new HomeSlideModel(slideData).save();

            const allData = await HomeSlideModel.find();

            allData?.map(el => {
                let type = 'images'
                if (el.medias.duration){
                    type = 'videos'
                }

                const data = fs.readFileSync(path.join(__dirname, `../medias/${type}/${el.medias.src}`), 'base64')

                el.medias.src = el.medias.type+data
            })

            return res.json(allData);
        } catch (err) {
            res.json({error: err});
        }
    }

    async sendAllSlides (req, res)  {
        try {
            const allData = await HomeSlideModel.find();

            allData?.map(el => {
                let type = 'images'
                if (el.medias.duration){
                    type = 'videos'
                }

                const data = fs.readFileSync(path.join(__dirname, `../medias/${type}/${el.medias.src}`), 'base64')

                el.medias.src = el.medias.type+data
            })

            res.json(allData);
        } catch (err) {
            res.json({error: err});
        }
    }

    async deleteSlide (req, res)  {
        try {
            const {id} = req.params;

            const filename = await HomeSlideModel.findById(id);
            const deletedSlide = await HomeSlideModel.findByIdAndDelete(id);
            let type = 'images'

            if (filename.medias.duration){
                type = 'videos'
            }

            await fs.unlink(path.join(__dirname, `../medias/${type}/${deletedSlide.medias.src}`), (err) =>{
                if (err) {
                    console.error('Error delete file:', err);
                }
            })

            if (!deletedSlide) {
                return res.status(404).json({ message: 'Slide not found' });
            }

            const allData = await HomeSlideModel.find();

            allData?.map(el => {
                let type = 'images'
                if (el.medias.duration){
                    type = 'videos'
                }

                const data = fs.readFileSync(path.join(__dirname, `../medias/${type}/${el.medias.src}`), 'base64')

                el.medias.src = el.medias.type+data
            })

            return res.json(allData);
        } catch (err) {
            res.json({error: err});
        }
    }

    async editSlide (req, res)  {
        try {
            const {_id} = req.body;
            const slideData = req.body;

            const filename = await HomeSlideModel.findById(_id);

            if (!slideData) {
                return res.status(404).json({ message: 'Slide not found' });
            }

            const filetype = slideData.medias.src.split(";base64,").shift().split("/")[1]
            let base64Image = slideData.medias.src.split(';base64,').pop();
            let base64Type = slideData.medias.src.split(',')[0]+',';

            slideData.medias.src = `${filename.medias.src.split('.')[0]}.${filetype}`
            slideData.medias.type = base64Type

            if (slideData.medias.duration){
                if (filename.medias.type === base64Type){
                    await fs.writeFile(path.join(__dirname, `../medias/videos/${filename.medias.src}`), base64Image, {encoding: 'base64'}, function(err) {
                        if (err) {
                            console.error('Error writing file:', err);
                        }
                    });
                }else{
                    await fs.writeFile(path.join(__dirname, `../medias/videos/${filename.medias.src.split('.')[0]}.${filetype}`), base64Image, {encoding: 'base64'}, function(err) {
                        if (err) {
                            console.error('Error writing file:', err);
                        }
                    });
                    await fs.unlink(path.join(__dirname, `../medias/images/${filename.medias.src}`), (err) =>{
                        if (err) {
                            console.error('Error delete file:', err);
                        }
                    })
                }
            }else{
                if (filename.medias.type === base64Type){
                    await fs.writeFile(path.join(__dirname, `../medias/images/${filename.medias.src}`), base64Image, {encoding: 'base64'}, function(err) {
                        if (err) {
                            console.error('Error writing file:', err);
                        }
                    });
                }else{
                    delete slideData.medias.duration

                    await fs.writeFile(path.join(__dirname, `../medias/images/${filename.medias.src.split('.')[0]}.${filetype}`), base64Image, {encoding: 'base64'}, function(err) {
                        if (err) {
                            console.error('Error writing file:', err);
                        }
                    });
                    await fs.unlink(path.join(__dirname, `../medias/videos/${filename.medias.src}`), (err) =>{
                        if (err) {
                            console.error('Error delete file:', err);
                        }
                    })
                }
            }

            await HomeSlideModel.findByIdAndUpdate(_id, slideData);

            const allData = await HomeSlideModel.find();

            allData?.map(el => {
                let type = 'images'
                if (el.medias.duration){
                    type = 'videos'
                }

                const data = fs.readFileSync(path.join(__dirname, `../medias/${type}/${el.medias.src}`), 'base64')

                el.medias.src = el.medias.type+data
            })

            return res.json(allData);
        } catch (err) {
            res.json({error: err});
        }
    }

    async updateServicesData (req, res) {
        try {
            const data = await HomeServicesModel.findOne({});
            const id = data._id;
            const updatedData = await  HomeServicesModel.findByIdAndUpdate(id, req.body, {new: true});

            if (!updatedData) {
                return res.status(404).json({ message: 'Model not found' });
            }

            res.json(updatedData);
        } catch (err) {
            res.json({error: err});
        }
    }

    async getServicesData (req, res) {
        try {
            const data = await HomeServicesModel.findOne({});

            if(!data) {
                return res.status(404).json({message: 'Data not found'});
            }

            res.json(data);
        } catch (err) {
            res.json({error: err})
        }
    }

    async updateFeaturesData (req, res) {
        try {
            const id = req.body.id;
            const updating = await HomeFeaturesModel.findByIdAndUpdate(id, req.body, { new: true });

            if (!updating) {
                return res.status(404).json({ message: 'Model not found' });
            }

            res.json(updating)
        } catch (err) {
            res.json({error: err});
        }
    }

    async getFeaturesData (req, res) {
        try {
            const data = await HomeFeaturesModel.findOne({});
            res.json(data);
        } catch (err) {
            res.json({error: err});
        }
    }
}

module.exports = new HomePageController();