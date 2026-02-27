const CitaMedica = require('../models/citamedica.model');

const getCitas = async (req, res) => {
    try {
        const citas = await CitaMedica.find().sort({ fecha: 1 });
        res.json(citas);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getOneCita = async (req, res) => {
    try {
        const cita = await CitaMedica.findById(req.params.id);
        if (!cita) return res.status(404).json({ message: 'Cita no encontrada' });
        res.json(cita);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createCita = async (req, res) => {
    const cita = new CitaMedica({
        titulo: req.body.titulo,
        doctor: req.body.doctor,
        especialidad: req.body.especialidad,
        fecha: req.body.fecha,
        lugar: req.body.lugar,
        notas: req.body.notas
    });

    try {
        const nuevaCita = await cita.save();
        res.status(201).json(nuevaCita);

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updateCita = async (req, res) => {
    try {
        const result = await CitaMedica.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!result) return res.status(404).json({ message: 'Cita no encontrada' });
        res.json(result);

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteCita = async (req, res) => {
    try {
        const result = await CitaMedica.findByIdAndDelete(req.params.id);
        if (!result) return res.status(404).json({ message: 'Cita no encontrada' });
        res.json({ message: 'Cita eliminada' });
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getCitas, getOneCita, createCita, updateCita, deleteCita };