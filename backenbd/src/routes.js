const express = require('express');
const OngController = require('./controller/OngController');
const IncidenteController = require('./controller/IncidenteController');
const ProfileController = require('./controller/ProfileController');
const SessionController = require('./controller/SessionController');

const routes = express.Router();

// ======== Incident ======== //
// Listar
routes.get('/incidents', IncidenteController.index);
// Cadastrar
routes.post('/incidents', IncidenteController.create);
// Deletar
routes.delete('/incidents/:id', IncidenteController.delete);

// ======== Profile Controller ======== //
routes.get('/profile', ProfileController.index);


// ======== ONGs ======== //
// Listar
routes.get('/ongs', OngController.index);
// Cadastrar
routes.post('/ongs', OngController.create);

// ======== Sessions ======== //
routes.post('/sessions', SessionController.index);


module.exports = routes;