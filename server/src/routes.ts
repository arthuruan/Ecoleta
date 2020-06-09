import express from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import PointsController from './controllers/PointsController';
import ItemController from './controllers/ItemsController';

const routes = express.Router();
const upload = multer(multerConfig);

const pointsController = new PointsController();
const itemController = new ItemController();

routes.get('/items', itemController.index);

routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);

routes.post('/points', upload.single('image'), pointsController.create);

export default routes;

// Service Pattern
// Repository Pattern (Data Mapper)