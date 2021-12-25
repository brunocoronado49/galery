import mongoose from 'mongoose';

const ImageSchema = new mongoose.Schema({
    title: String,
    key: String,
    url: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    versionKey: false,
})

export default mongoose.model('Image', ImageSchema)