import aws from 'aws-sdk';
import config from './config/config'
const imagesController = {}

// Configuration of the env endpoint
const spacesEndpoint = new aws.Endpoint(config.Endpoint)
const s3 = new aws.S3({
    endpoint: spacesEndpoint,
})

imagesController.getImages = async (req, res) => {
    res.send('All images')
}

imagesController.uploadImage = async (req, res) => {
    const {file} = req.files
    console.log(file)

    try {
        const objectUploaded = await s3.putObject({
            ACL: 'public-read',
            Bucket: config.BucketName,
            Body: file.data,
            Key: file.name
        }).promise()

        console.log(objectUploaded);
    } catch (error) {
        console.log(error);
        res.send('Error')
    }

    return res.json('Received')
}

imagesController.getOneImage = async (req, res) => {
    res.send('Get image')
}

imagesController.deleteImage = async (req, res) => {
    res.send('Delete image')
}

export default imagesController
