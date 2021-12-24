import {config} from 'dotenv';

config()

export default {
    Port: process.env.PORT || 3002,
    BucketName: process.env.BUCKET_NAME || '',
    Endpoint: process.env.ENDPOINT || '',
}