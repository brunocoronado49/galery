import {Router} from 'express';
import imagesController from '../controllers/imagesController';

const router = Router();

router.get('/API/all-images', imagesController.getImages)
router.post('/API/upload-image', imagesController.uploadImage)
router.get('/API/get-image/:id', imagesController.getOneImage)
router.delete('/API/delete-image/:id', imagesController.deleteImage)

export default router
