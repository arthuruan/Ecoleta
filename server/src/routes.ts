import express from 'express';

import PointsController from './controllers/PointsController';
import ItemController from './controllers/ItemsController';

const routes = express.Router();
const pointsController = new PointsController();
const itemController = new ItemController();

routes.get('/items', itemController.index);

routes.post('/points', pointsController.create);
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);

export default routes;

// Service Pattern
// Repository Pattern (Data Mapper)