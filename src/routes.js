const express  = require('express');
const DevController = require('./controllers/DevController');
const LikeController = require('./controllers/LikeController');
const DislikeController = require('./controllers/DislikeController');
const Dev = require('./models/Dev');

const routes = express.Router();

routes.get('/devs', DevController.index);
routes.get('/', (req, res) => {
    return res.json({message: 'Olá mundo'});
});

routes.post('/devs', DevController.store);
routes.post('/devs/:devId/likes', LikeController.store);
routes.post('/devs/:devId/dislikes', DislikeController.store);

module.exports = routes;