import aws from 'aws-sdk';

// Import files
import config from '../config/config'
import Image from '../models/Image';

const imagesController = {}

// Configuration of the env endpoint
const spacesEndpoint = new aws.Endpoint(config.Endpoint)
const s3 = new aws.S3({
    endpoint: spacesEndpoint,
})

// Show all images
imagesController.getImages = async (req, res) => {
    const images = await Image.find()
    return res.json(images)
}

// Controller for upliad an image in Digital Ocean
imagesController.uploadImage = async (req, res) => {
    const {file} = req.files
    try {
        await s3.putObject({
            // ACL: permissions public o private
            ACL: 'public-read',

            // Where will be saved
            Bucket: config.BucketName,
            Body: file.data,
            Key: file.name
        }).promise()

        const urlImage = `https://${config.BucketName}.${config.Endpoint}/${file.name}`

        const image = new Image({
            url: urlImage,
            key: file.name,
            title: req.body.title
        })
 
        await image.save()
        return res.json(image)
    } catch (error) {
        console.log(error);
        res.send('Error')
    }
}

// Get one image for edit
imagesController.getOneImage = async (req, res) => {
    const image = await Image.findById(req.params.id)
    return res.json(image)
}

// Delete an image
imagesController.deleteImage = async (req, res) => {
    const imageDeleted = await Image.findByIdAndDelete(req.params.id)
    
    await s3.deleteObject({
        Bucket: config.BucketName,
        Key: imageDeleted.key
    }).promise()

    res.json(imageDeleted)
}

export default imagesController
