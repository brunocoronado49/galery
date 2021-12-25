import {config} from 'dotenv';

config()

export default {
    Port: process.env.PORT || 4000,
    BucketName: process.env.BUCKET_NAME || '',
    Endpoint: process.env.ENDPOINT || '',
    MongoDb: process.env.MONGODB_DB || 'gallery-mern',
}