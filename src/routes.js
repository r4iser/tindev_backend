const express  = require('express');
const DevController = require('./controllers/DevController');
const Dev = require('./models/Dev');

const routes = express.Router();

routes.get('/', (req, res) => {
    return res.json({message: 'Olá mundo'});
});

routes.post('/devs', DevController.store);

module.exports = routes;