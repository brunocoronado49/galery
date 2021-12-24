import express from 'express';
import fileUpload from 'express-fileupload';

// import the routes and files
import indexRoutes from './routes/indexRoute';
import imagesRoutes from './routes/imagesRoute';
import './config/config'

// Instance of express
const app = express();

// For uploadImage
app.use(fileUpload({
    tempFileDir: '/temporal'
}))

// Routes
app.use(indexRoutes)
app.use(imagesRoutes)

export default app
