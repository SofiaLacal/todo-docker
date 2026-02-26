const Router = require('express');
const citaRouter = Router();
const { getCitas, getOneCita, createCita, updateCita, deleteCita } = require('../controllers/citamedica.controllers');

citaRouter
    .get('/', getCitas)
    .get('/:id', getOneCita)
    .post('/', createCita)
    .patch('/:id', updateCita)
    .delete('/:id', deleteCita)

module.exports = citaRouter;