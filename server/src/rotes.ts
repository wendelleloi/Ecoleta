import express from 'express'

// Validation
import { celebrate, Joi } from 'celebrate'

// Multer
import multer from 'multer';
import multerConfig from './config/multer'

// Controllers
import PointsControllers from './controllers/pointsControllers';
const pointsControllers = new PointsControllers()

import ItemsController from './controllers/itemsControllers'
const itemsControllers = new ItemsController()

// index, show, create, update, delete

const upload = multer(multerConfig);
const routes = express.Router();

routes.get('/items', itemsControllers.index);
routes.get('/points', pointsControllers.index);
routes.get('/points/:id', pointsControllers.show);

routes.post('/points',
  upload.single('image'),
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required().email(),
      whatsapp: Joi.number().required(),
      latitude: Joi.number().required(),
      longitude: Joi.number().required(),
      city: Joi.string().required(),
      uf: Joi.string().required().max(2),
      items: Joi.string().required()
    })
  }, {
    abortEarly: false
  }),
  pointsControllers.create
);

export default routes;